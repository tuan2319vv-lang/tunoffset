const express = require('express');
const DeviceDetector = require('device-detector-js');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'devices.json');
const detector = new DeviceDetector({ versionTruncation: null });

// ============ NẠP / LƯU DỮ LIỆU ============
let devices = {};
try {
    if (fs.existsSync(DB_FILE)) {
        devices = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
        console.log(`📂 Đã nạp ${Object.keys(devices).length} thiết bị từ DB`);
    }
} catch (e) { console.error('Lỗi đọc DB:', e.message); }

const save = () => fs.writeFileSync(DB_FILE, JSON.stringify(devices, null, 2));
const cleanHint = (v) => v ? v.replace(/^"|"$/g, '').trim() || null : null;

// ============ TRÍCH XUẤT THÔNG TIN THIẾT BỊ ============
function extract(req) {
    const ua = req.headers['user-agent'] || '';
    const p = detector.parse(ua);
    const d = p.device || {}, o = p.os || {}, c = p.client || {};

    // Client Hints (Chrome/Edge → thông tin chính xác hơn UA)
    const chModel = cleanHint(req.headers['sec-ch-ua-model']);
    const chPlatform = cleanHint(req.headers['sec-ch-ua-platform']);
    const chPlatformVer = cleanHint(req.headers['sec-ch-ua-platform-version']);
    const chMobile = req.headers['sec-ch-ua-mobile'];
    const chBrands = req.headers['sec-ch-ua'];

    let brand = d.brand || null;
    let model = chModel || d.model || null;
    if (!model) {
        if (/iPhone/.test(ua)) model = 'iPhone';
        else if (/iPad/.test(ua)) model = 'iPad';
    }

    const osName = chPlatform || o.name || null;
    const osVersion = chPlatformVer || o.version || null;

    let browserName = c.name || null;
    let browserVersion = c.version || null;
    if (chBrands) {
        const m = [...chBrands.matchAll(/"([^"]+)"\s*;\s*v="([^"]+)"/g)];
        const real = m.find(x => !/Not.?A.?Brand/i.test(x[1]));
        if (real) { browserName = real[1]; browserVersion = real[2]; }
    }

    let type = 'desktop';
    if (chMobile === '?1') type = 'smartphone';
    else if (d.type) type = d.type;
    else if (/iPad|Tablet/i.test(ua)) type = 'tablet';
    else if (/Mobi|iPhone/.test(ua)) type = 'smartphone';

    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
        || req.socket.remoteAddress || 'unknown';

    return { ip, userAgent: ua, type, brand, model, osName, osVersion, browserName, browserVersion };
}

// ============ MIDDLEWARE GHI LOG MỌI REQUEST ============
app.use((req, res, next) => {
    // Yêu cầu trình duyệt gửi Client Hints ở request tiếp theo
    res.setHeader('Accept-CH',
        'Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, ' +
        'Sec-CH-UA-Platform-Version, Sec-CH-UA-Model, Sec-CH-UA-Full-Version-List');

    // Bỏ qua endpoint quản lý
    if (req.path === '/api/devices' || req.path === '/api/devices/clear') return next();

    try {
        const info = extract(req);
        const fp = info.ip + '|' + info.userAgent;
        const now = new Date().toISOString();

        if (devices[fp]) {
            devices[fp].lastSeen = now;
            devices[fp].visits++;
            if (info.model) devices[fp].model = info.model;
            if (info.brand) devices[fp].brand = info.brand;
            if (info.osName) devices[fp].osName = info.osName;
            if (info.osVersion) devices[fp].osVersion = info.osVersion;
            if (info.browserName) devices[fp].browserName = info.browserName;
            if (info.browserVersion) devices[fp].browserVersion = info.browserVersion;
        } else {
            devices[fp] = { ...info, firstSeen: now, lastSeen: now, visits: 1 };
        }
        save();
        console.log(`📥 ${info.type} | ${info.brand || '?'} ${info.model || '?'} | ${info.ip}`);
    } catch (e) { console.error('Lỗi log:', e.message); }

    next();
});

// ============ API ============
// 1. Danh sách tất cả thiết bị đã vào
app.get('/api/devices', (req, res) => {
    const list = Object.entries(devices)
        .map(([fp, v]) => ({ fingerprint: fp, ...v }))
        .sort((a, b) => new Date(b.lastSeen) - new Date(a.lastSeen));
    res.json({ total: list.length, devices: list });
});

// 2. Thông tin thiết bị hiện tại
app.get('/api/device', (req, res) => res.json(extract(req)));

// 3. Xoá toàn bộ log
app.post('/api/devices/clear', (req, res) => {
    devices = {};
    save();
    res.json({ ok: true });
});

// 4. Trang chủ → dashboard HTML
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(DASHBOARD);
});

// ============ DASHBOARD HTML ============
const DASHBOARD = `<!DOCTYPE html>
<html lang="vi"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Thiết bị đã truy cập</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',sans-serif;background:#0f0c29;color:#e0e0e0;min-height:100vh;padding:20px}
.wrap{max-width:900px;margin:0 auto}
header{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:20px}
h1{font-size:1.3rem;color:#00d2ff}
.btn{background:rgba(0,210,255,.15);border:1px solid rgba(0,210,255,.4);color:#00d2ff;padding:8px 16px;border-radius:8px;cursor:pointer;font-weight:600}
.btn.danger{background:rgba(255,107,107,.15);border-color:rgba(255,107,107,.4);color:#ff6b6b}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:20px}
.stat{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:14px;text-align:center}
.stat-val{font-size:1.5rem;font-weight:700;color:#00d2ff}
.stat-lbl{font-size:.7rem;color:rgba(255,255,255,.5);text-transform:uppercase;margin-top:2px}
.list{display:flex;flex-direction:column;gap:10px}
.device{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:14px;display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center}
.icon{font-size:2rem}
.info .title{font-weight:700;color:#fff;margin-bottom:3px}
.info .sub{font-size:.78rem;color:rgba(255,255,255,.55);line-height:1.5}
.meta{text-align:right;font-size:.72rem;color:rgba(255,255,255,.4)}
.meta .visits{color:#00ffa3;font-weight:700}
.empty{text-align:center;padding:40px;color:rgba(255,255,255,.3)}
.mono{font-family:Consolas,monospace}
</style></head><body>
<div class="wrap">
<header>
<h1>📡 Thiết bị đã truy cập</h1>
<div style="display:flex;gap:8px">
<button class="btn" onclick="load()">🔄 Làm mới</button>
<button class="btn danger" onclick="clearAll()">🗑️ Xoá</button>
</div>
</header>
<div class="stats">
<div class="stat"><div class="stat-val" id="totalDevices">0</div><div class="stat-lbl">Thiết bị</div></div>
<div class="stat"><div class="stat-val" id="totalVisits">0</div><div class="stat-lbl">Lượt truy cập</div></div>
<div class="stat"><div class="stat-val" id="lastUpdate">--</div><div class="stat-lbl">Cập nhật</div></div>
</div>
<div class="list" id="list"><div class="empty">Đang tải...</div></div>
</div>
<script>
function fmt(d){var diff=(Date.now()-new Date(d).getTime())/1000;
if(diff<60)return Math.floor(diff)+'s trước';
if(diff<3600)return Math.floor(diff/60)+'p trước';
if(diff<86400)return Math.floor(diff/3600)+'h trước';
return new Date(d).toLocaleString('vi-VN')}
function typeIcon(t){return t==='smartphone'?'📱':t==='tablet'?'📟':t==='desktop'?'💻':'🖥️'}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
async function load(){
try{
var r=await fetch('/api/devices');
var data=await r.json();
document.getElementById('totalDevices').textContent=data.total;
document.getElementById('totalVisits').textContent=data.devices.reduce((s,d)=>s+d.visits,0);
document.getElementById('lastUpdate').textContent=new Date().toLocaleTimeString('vi-VN');
var list=document.getElementById('list');
if(!data.devices.length){list.innerHTML='<div class="empty">Chưa có thiết bị nào</div>';return}
list.innerHTML=data.devices.map(d=>{
var dl=[d.brand,d.model].filter(Boolean).join(' ')||'Không rõ thiết bị';
var ol=[d.osName,d.osVersion].filter(Boolean).join(' ')||'Không rõ HĐH';
var bl=[d.browserName,d.browserVersion].filter(Boolean).join(' ')||'Không rõ trình duyệt';
return '<div class="device"><div class="icon">'+typeIcon(d.type)+'</div>'
+'<div class="info"><div class="title">'+esc(dl)+'</div>'
+'<div class="sub">🖥️ '+esc(ol)+'<br>🌐 '+esc(bl)+'</div></div>'
+'<div class="meta">IP: <span class="mono">'+esc(d.ip)+'</span><br>'
+'<span class="visits">'+d.visits+' lượt</span><br>'+fmt(d.lastSeen)+'</div></div>'
}).join('')
}catch(e){document.getElementById('list').innerHTML='<div class="empty">Lỗi: '+e.message+'</div>'}}
async function clearAll(){if(confirm('Xoá tất cả?')){await fetch('/api/devices/clear',{method:'POST'});load()}}
load();setInterval(load,3000);
</script></body></html>`;

// ============ KHỞI ĐỘNG ============
app.listen(PORT, () => {
    console.log('═══════════════════════════════════');
    console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
    console.log(`📡 Dashboard:  http://localhost:${PORT}/`);
    console.log(`🔌 API:        http://localhost:${PORT}/api/devices`);
    console.log('═══════════════════════════════════');
});
