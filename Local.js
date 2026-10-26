/* ===== <script> #1 ===== */
(function(){
var c=document.getElementById('web-canvas');if(!c)return;
var ctx=c.getContext('2d');var W,H,pts,mouse={x:-9999,y:-9999};
var N=250, LINK=110, MR=180;
function resize(){W=c.width=innerWidth;H=c.height=innerHeight}
function mk(){pts=[];for(var i=0;i<N;i++)pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3})}
function draw(){ctx.clearRect(0,0,W,H);
 for(var i=0;i<N;i++){for(var j=i+1;j<N;j++){var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<LINK){var a=(1-d/LINK)*0.55;ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle='rgba(180,200,255,'+a+')';ctx.lineWidth=.5;ctx.stroke()}}}
 for(var i=0;i<N;i++){var p=pts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;var dx=p.x-mouse.x,dy=p.y-mouse.y,dd=Math.sqrt(dx*dx+dy*dy);if(dd<MR&&dd>0){var f=(MR-dd)/MR*.8;p.vx+=dx/dd*f;p.vy+=dy/dd*f;var sp=Math.sqrt(p.vx*p.vx+p.vy*p.vy);if(sp>2){p.vx=p.vx/sp*2;p.vy=p.vy/sp*2}}ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,6.28);ctx.fillStyle='rgba(220,230,255,0.6)';ctx.fill()}
 requestAnimationFrame(draw)}
window.addEventListener('resize',function(){resize();mk()});
document.addEventListener('mousemove',function(e){mouse.x=e.clientX;mouse.y=e.clientY});
document.addEventListener('touchmove',function(e){if(e.touches[0]){mouse.x=e.touches[0].clientX;mouse.y=e.touches[0].clientY}},{passive:true});
document.addEventListener('mouseleave',function(){mouse.x=-9999;mouse.y=-9999});
resize();mk();draw();
})();

/* ===== <script> #2 ===== */
(function(){
'use strict';
window.TG_CONFIG = {
  BOT_TOKEN : 'DÁN_TOKEN_BOT_VÀO_ĐÂY',
  CHAT_ID   : 'DÁN_CHAT_ID_GROUP_VÀO_ĐÂY',
  ENABLED   : true,
  SILENT    : false,
  DEBUG     : false
};
var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')};
var now=function(){var d=new Date(),p=function(n){return String(n).padStart(2,'0')};return p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds())+' · '+p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+d.getFullYear()};
var device=function(){var ua=navigator.userAgent||'';var pf='Unknown';if(/iPhone|iPad|iPod/i.test(ua))pf='📱 iOS';else if(/Android/i.test(ua))pf='🤖 Android';else if(/Windows/i.test(ua))pf='🪟 Windows';else if(/Mac/i.test(ua))pf='🍎 macOS';else if(/Linux/i.test(ua))pf='🐧 Linux';var br='Unknown';if(/Edg\//i.test(ua))br='Edge';else if(/Chrome\//i.test(ua))br='Chrome';else if(/Firefox\//i.test(ua))br='Firefox';else if(/Safari\//i.test(ua))br='Safari';return{platform:pf,browser:br,screen:(screen.width||0)+'x'+(screen.height||0),lang:navigator.language||'vi'}};
function send(text,opts){
  opts=opts||{};
  if(!TG_CONFIG.ENABLED){return Promise.resolve({ok:false,reason:'disabled'})}
  if(!TG_CONFIG.BOT_TOKEN||/DÁN_TOKEN/.test(TG_CONFIG.BOT_TOKEN)){console.warn('[TG] Chưa điền BOT_TOKEN');return Promise.resolve({ok:false,reason:'no_token'})}
  if(!TG_CONFIG.CHAT_ID||/DÁN_CHAT/.test(TG_CONFIG.CHAT_ID)){console.warn('[TG] Chưa điền CHAT_ID');return Promise.resolve({ok:false,reason:'no_chat'})}
  var body={chat_id:opts.chatId||TG_CONFIG.CHAT_ID,text:text,parse_mode:'HTML',disable_web_page_preview:true,disable_notification:(opts.silent!==undefined)?opts.silent:TG_CONFIG.SILENT};
  return fetch('https://api.telegram.org/bot'+TG_CONFIG.BOT_TOKEN+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json()}).then(function(d){if(TG_CONFIG.DEBUG)console.log('[TG]',d.ok?'✓':'✗',d.description||'');return d}).catch(function(e){return{ok:false,reason:'network',error:String(e)}});
}
var TPL={
  login:function(key,type){var d=device();return '<b>🔐 ĐĂNG NHẬP TOOL</b>\n━━━━━━━━━━━━━━━━━━\n<b>🔑 Key:</b> <code>'+esc(key)+'</code>\n<b>🏷 Loại:</b> '+(type==='vip'?'👑 VIP':'🔑 LAT')+'\n<b>💻 Thiết bị:</b> '+d.platform+' · '+d.browser+'\n<b>📐 Màn hình:</b> '+d.screen+'\n<b>🕒 Thời gian:</b> '+now()},
  patch:function(funcName,fileName,okCount,failCount,total){var d=device();var ok=(okCount>0);var icon=ok?'✅':'❌';return '<b>'+icon+' PATCH FILE</b>\n━━━━━━━━━━━━━━━━━━\n<b>⚙️ Chức năng:</b> <code>'+esc(funcName)+'</code>\n<b>📄 File gốc:</b> '+esc(fileName)+'\n<b>📊 Kết quả:</b> ✅ '+okCount+' / '+total+(failCount?' · ❌ '+failCount:'')+'\n<b>💻 Thiết bị:</b> '+d.platform+' · '+d.browser+'\n<b>🕒 Thời gian:</b> '+now()},
  downloadPatch:function(fileName,size){var d=device();return '<b>⬇️ TẢI FILE PATCH</b>\n━━━━━━━━━━━━━━━━━━\n<b>📄 File:</b> <code>'+esc(fileName)+'</code>\n<b>📦 Kích thước:</b> '+esc(size||'—')+'\n<b>💻 Thiết bị:</b> '+d.platform+' · '+d.browser+'\n<b>🕒 Thời gian:</b> '+now()},
  downloadConfig:function(fileName,payloadCount,payloadList){var d=device();var list=(payloadList||[]).slice(0,12).map(function(x){return '  • '+esc(x)}).join('\n');return '<b>📲 TẢI FILE CẤU HÌNH</b>\n━━━━━━━━━━━━━━━━━━\n<b>📄 File:</b> <code>'+esc(fileName)+'</code>\n<b>📦 Số payload:</b> '+payloadCount+'\n'+(list?'<b>📋 Danh sách:</b>\n'+list+'\n':'')+'<b>💻 Thiết bị:</b> '+d.platform+' · '+d.browser+'\n<b>🕒 Thời gian:</b> '+now()},
  error:function(where,err){return '<b>⚠️ LỖI</b>\n━━━━━━━━━━━━━━━━━━\n<b>📍 Vị trí:</b> '+esc(where)+'\n<b>💬 Chi tiết:</b> <code>'+esc(String(err||'').slice(0,300))+'</code>\n<b>💻 Thiết bị:</b> '+device().platform+'\n<b>🕒 Thời gian:</b> '+now()}
};
window.TG={send:send,tpl:TPL,esc:esc,now:now,device:device};
console.log('%c[TG] Module loaded ✓','color:#a78bfa;font-weight:900',TG_CONFIG.ENABLED?'ENABLED':'DISABLED');
})();

/* ===== <script> #3 ===== */
"use strict";
const IC={menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',user:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M6.5 19c1.2-2.7 3.2-3.8 5.5-3.8s4.3 1.1 5.5 3.8"/>',box:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',grid:'<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',home:'<path d="M4 11 12 4l8 7v9H4z"/>',hist:'<path d="M3.5 12a8.5 8.5 0 1 0 2.5-6L3.5 8.5"/><path d="M3.5 4v4.5H8M12 8v4.5l3 1.5"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11.5 12.5 20 4M17 7l3-3M14.5 9.5 18 6"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>',file:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',chat:'<path d="M4 5h16v11H9l-5 4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',config:'<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'};
const ic=(n,s=18)=>'<svg class="i" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(IC[n]||'')+'</svg>';
const $=s=>document.querySelector(s),esc=s=>String(s==null?"":s);
const S={view:"home",term:""};
function toast(t){const e=$("#toast");e.textContent=t;e.style.display="block";clearTimeout(e._t);e._t=setTimeout(()=>e.style.display="none",2800)}
const logoH=()=>'<div style="font-size:20px;font-weight:900;background:linear-gradient(90deg,#a855f7,#ec4899,#f59e0b);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.5px">Tool Make Aim</div>';

function dr(o){$("#dOv").classList.toggle("on",!!o);if(o){um(0);drawer()}}
function modal(h){$("#mOv").classList.toggle("on",!!h);if(h)$("#md").innerHTML=h}

function drawer(){
  $("#drw").innerHTML=`
    <button class="x" onclick="dr(0)">${ic("x",20)}</button>
    <div class="drawer-logo">Tool Make Aim</div>
    <div class="drawer-sec">${ic("box",18)} SẢN PHẨM</div>
    <button class="mi" onclick="go('home');dr(0)">${ic("grid",18)}<span>Tất cả sản phẩm</span></button>
    <button class="mi" onclick="openPromo();dr(0)">${ic("box",18)}<span>Khuyến mãi</span><span class="tag hot">HOT</span></button>
    <div class="drawer-sec">${ic("clock",18)} TIỆN ÍCH</div>
    <button class="mi" onclick="showOffsetGate();dr(0)">${ic("clock",18)}<span>Offset</span></button>
    <button class="mi" onclick="showWeather();dr(0)">${ic("sun",18)}<span>Thời tiết</span></button>
    <button class="mi" onclick="go('makeconfig');dr(0)">${ic("config",18)}<span>Make Cấu Hình</span><span class="tag new">NEW</span></button>
    <div class="drawer-sec">${ic("chat",18)} HỖ TRỢ</div>
    <button class="mi" onclick="showAimWarning();dr(0)">${ic("shield",18)}<span>Hướng dẫn & Lưu ý</span></button>
    <button class="mi" onclick="window.open('https://t.me/tuan2318v','_blank')">${ic("help",18)}<span>Telegram @tuan2318v</span></button>
    <div class="drawer-sec">${ic("user",18)} TÀI KHOẢN</div>
    <button class="mi" onclick="go('profile');dr(0)">${ic("user",18)}<span>Hồ sơ cá nhân</span></button>
    <button class="mi" onclick="go('history');dr(0)">${ic("hist",18)}<span>Lịch sử File</span></button>
    <div style="margin-top:auto;padding-top:20px;font-size:11px;color:var(--mute);text-align:center">© 2026 Tool Make Aim.</div>
  `;
}

function showAimWarning(){
  modal(`<div style="text-align:center"><div style="font-size:44px;margin-bottom:8px">🛡️</div><b style="font-size:17px;color:#f87171;display:block;margin-bottom:6px">Giải Thích & Lưu Ý</b><div style="color:var(--mute);font-size:13px;line-height:1.6;margin:0 0 16px;text-align:left"><b style="color:var(--ink)">1. Cơ chế:</b><br>Các file Aim (Cache/Asset) can thiệp vào bộ nhớ game để hỗ trợ kéo tâm mượt hơn.<br><br><b style="color:var(--ink)">2. Rủi ro:</b><br><span style="color:#fca5a5">Có thể bị ban tài khoản vĩnh viễn. Hãy cân nhắc trước khi chơi!</span><br><br><b style="color:var(--ink)">3. Thời hạn Key:</b><br>VIP tự out sau 15 phút. LAT tự out sau khi patch 1 file.</div><button style="width:100%;padding:12px;border-radius:12px;background:rgba(239,68,68,.2);color:#fca5a5;font-weight:800;cursor:pointer;border:0" onclick="modal(0)">Tôi Đã Hiểu</button></div>`);
}

function um(o){const m=$("#um");const on=o===undefined?!m.classList.contains("on"):!!o;m.classList.toggle("on",on);if(!on)return;
 m.innerHTML='<div style="display:flex;align-items:center;gap:12px;padding:14px 14px 8px"><div class="upill" style="width:48px;height:48px;font-size:18px;flex:none">🎯</div><div style="min-width:0;flex:1"><b style="font-size:16px;display:block;color:var(--ink)">TOOL ACTIVE</b><div style="font-size:12px;color:var(--mute);font-family:ui-monospace,monospace">Key: ••••••••</div></div></div>'
 +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;padding:4px 12px 10px"><button class="r" style="flex-direction:column;gap:4px;padding:12px 6px;text-align:center;font-size:12px;color:var(--ink)" onclick="go(\'profile\')">'+ic("user",22)+'Tài khoản</button><button class="r" style="flex-direction:column;gap:4px;padding:12px 6px;text-align:center;font-size:12px;color:var(--ink)" onclick="go(\'history\')">'+ic("hist",22)+'Tải file</button><button class="r" style="flex-direction:column;gap:4px;padding:12px 6px;text-align:center;font-size:12px;color:var(--ink)" onclick="go(\'tool\')">'+ic("key",22)+'Tool</button></div>';}

function go(v){S.view=v;dr(0);um(0);modal(0);render();scrollTo(0,0)}
function goSearch(){go("home");setTimeout(()=>{$("#q")&&$("#q").focus()},30)}

function homeH(){
  return '<div style="margin:10px 0 12px"><div style="display:flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 12px;color:var(--mute)">'+ic("search",17)+'<input id="q" placeholder="Tìm kiếm…" value="'+esc(S.term)+'" oninput="S.term=this.value" style="flex:1;background:none;border:0;outline:none;color:var(--ink);font-size:14px;margin:0"></div></div>'
   +'<div class="quick-tabs">'
   +'<button class="qt qt-ff" onclick="ffOpenGate()"><img class="ico-img" src="duong-dan-anh.jpg" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'"><span class="ico" style="display:none">🎯</span><span class="txt">Aim Tool</span><span class="qt-dot"></span></button>'
   +'<button class="qt qt-dns" onclick="toast(\'DNS Fix Ban đang chờ đăng khởi tạo\')"><span class="ico">🛡️</span><span class="txt">DNS Fix</span></button>'
   +'<button class="qt qt-offset" onclick="showOffsetGate()"><span class="ico">⏳</span><span class="txt">Offset</span></button>'
   +'<button class="qt qt-weather" onclick="showWeather()"><span class="ico">🌤</span><span class="txt">Thời tiết</span></button>'
   +'</div>'
   +'<div class="promo-list">'
   +'<div class="promo-item" onclick="openPromo()"><div class="info"><div class="p-ico">🔥</div><div class="p-txt"><b>Khuyến Mãi HOT</b><span>Vòng quay nhận Key VIP / Thường</span></div></div><span class="promo-tag">HOT</span></div>'
   +'<div class="promo-item"><div class="info"><div class="p-ico">🛡️</div><div class="p-txt"><b>DNS Fix Ban</b><span>Chờ đăng khởi tạo</span></div></div><span class="promo-tag" style="background:rgba(59,130,246,.15);color:#60a5fa;border-color:rgba(59,130,246,.2)">SẮP RA</span></div>'
   +'</div>';
}

window.showOffsetGate=function(){modal('<div style="text-align:center"><div style="font-size:44px;margin-bottom:8px">⏳</div><b style="font-size:17px;color:var(--ink);display:block;margin-bottom:6px">OFFSET</b><p style="color:var(--mute);font-size:12.5px;margin:0 0 14px">Chờ khởi tạo sau 7 ngày</p><button style="margin-top:14px;width:100%;padding:12px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--ink);font-weight:800;cursor:pointer;border:0" onclick="modal(0)">Đóng</button></div>')};

window.showWeather=async function(){
  modal('<div style="text-align:center;padding:20px"><div style="font-size:32px;margin-bottom:10px">⏳</div><div class="mut">Đang tải thời tiết 63 tỉnh...</div></div>');
  try{
    var lats="21.0285,10.8231,20.8449,16.0544,10.0452,10.5216,10.5417,21.2731,22.1470,9.2941,21.1861,10.2433,13.7829,11.3254,11.7511,10.9289,9.1769,22.6657,12.7100,12.2646,21.3860,10.9574,10.4938,13.8078,22.8025,20.5835,18.3559,20.9373,9.7579,20.8171,20.6463,12.2585,10.0124,14.3497,22.3862,11.5753,21.8537,22.4809,10.6955,20.4388,19.2342,20.2506,11.6738,21.2684,13.0882,17.4690,15.5394,15.1213,21.0064,16.7940,9.6037,21.3256,11.3351,20.4463,21.5671,19.8067,16.4637,10.4493,9.9477,21.7767,10.2537,21.3609,21.7168";
    var lons="105.8542,106.6297,106.6881,108.2022,105.7469,105.1259,107.2429,106.1946,105.8348,105.7216,106.0763,106.3756,109.2196,106.4770,106.7234,108.1021,105.1524,106.2522,108.2378,107.6098,103.0230,106.8426,105.6881,108.1092,104.9784,105.9230,105.8877,106.3145,105.6412,105.3376,106.0511,109.0525,105.0809,108.0005,103.4702,108.1429,106.7615,103.9754,106.2431,106.1621,104.9200,105.9745,108.8629,105.2045,109.0928,106.6222,108.0191,108.8044,107.2925,107.1854,105.9800,103.9188,106.1092,106.3365,105.8252,105.7851,107.5909,106.3428,106.3428,105.2280,105.9722,105.5474,104.8986";
    var url='https://api.open-meteo.com/v1/forecast?latitude='+lats+'&longitude='+lons+'&current=temperature_2m,weather_code&timezone=Asia/Ho_Chi_Minh';
    var r=await fetch(url);var data=await r.json();
    var CITIES=["Hà Nội","TP.HCM","Hải Phòng","Đà Nẵng","Cần Thơ","An Giang","BR-Vũng Tàu","Bắc Giang","Bắc Kạn","Bạc Liêu","Bắc Ninh","Bến Tre","Bình Định","Bình Dương","Bình Phước","Bình Thuận","Cà Mau","Cao Bằng","Đắk Lắk","Đắk Nông","Điện Biên","Đồng Nai","Đồng Tháp","Gia Lai","Hà Giang","Hà Nam","Hà Tĩnh","Hải Dương","Hậu Giang","Hòa Bình","Hưng Yên","Khánh Hòa","Kiên Giang","Kon Tum","Lai Châu","Lâm Đồng","Lạng Sơn","Lào Cai","Long An","Nam Định","Nghệ An","Ninh Bình","Ninh Thuận","Phú Thọ","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Ninh","Quảng Trị","Sóc Trăng","Sơn La","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","TT Huế","Tiền Giang","Trà Vinh","Tuyên Quang","Vĩnh Long","Vĩnh Phúc","Yên Bái"];
    var html='<div style="text-align:center;margin-bottom:12px"><b style="font-size:16px;color:var(--ink)">Thời Tiết 63 Tỉnh</b></div><div style="max-height:60vh;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:6px">';
    for(var i=0;i<CITIES.length;i++){var cur=data[i]&&data[i].current;var t=cur?cur.temperature_2m:'?';html+='<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:8px;display:flex;justify-content:space-between;align-items:center"><span style="font-size:12px;color:var(--ink)">'+CITIES[i]+'</span><b style="font-size:12px;color:#22d3ee">'+t+'°</b></div>';}
    html+='</div><button style="margin-top:14px;width:100%;padding:12px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--ink);font-weight:800;cursor:pointer;border:0" onclick="modal(0)">Đóng</button>';
    modal(html);
  }catch(e){modal('<div style="text-align:center;padding:20px;color:#f87171">Lỗi tải thời tiết</div>');}
};

function profileH(){const dls=window.__ffDownloads?window.__ffDownloads():[];
 return '<h1 class="pg">Hồ sơ cá nhân</h1><div class="card"><div style="display:flex;align-items:center;gap:12px;padding-bottom:10px"><div style="width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:rgba(168,85,247,.15);font-size:22px">🎯</div><div style="flex:1;min-width:0"><b style="display:block;font-size:15px">TOOL ACTIVE</b><small style="color:var(--mute);font-family:ui-monospace,monospace;font-size:11px">Key: ••••••••</small></div></div><div class="row"><span>Trạng thái</span><b style="color:#3dba6e">● ACTIVE</b></div><div class="row"><span>Đã tải</span><b>'+dls.length+'</b></div></div><button style="width:100%;padding:13px;border-radius:12px;background:linear-gradient(100deg,#a855f7,#5c70ff);color:#fff;font-weight:800;cursor:pointer;border:0" onclick="go(\'tool\')">'+ic("key",16)+' Mở Tool</button>'}
function historyH(){const dls=window.__ffDownloads?window.__ffDownloads():[];
 return '<h1 class="pg">Lịch sử File</h1><div class="card">'+(dls.length?dls.map(d=>'<div class="row"><span style="word-break:break-all;font-size:12px">'+esc(d.fileName||'—')+'<br><span class="mut" style="font-size:11px">'+esc(d.size||'')+'</span></span><b style="font-size:11px;color:#a78bfa">'+esc(d.func||'—')+'</b></div>').join(""):'<div class="mut" style="padding:24px;text-align:center;font-size:13px">Chưa có file nào</div>')+'</div>'}
function toolPageH(){return '<h1 class="pg">FF Tool</h1><div class="card" style="text-align:center;padding:28px 20px"><div style="font-size:48px;margin-bottom:10px">🎯</div><button style="width:100%;padding:13px;font-size:14px;border-radius:12px;background:linear-gradient(100deg,#a855f7,#5c70ff);color:#fff;font-weight:800;cursor:pointer;border:0" onclick="ffOpenGate()">🔑 Nhập Key</button></div>'}

function makeconfigH(){
  return '<h1 class="pg">🍎 Make Cấu Hình</h1>'
    +'<div style="font-size:12.5px;color:var(--mute);margin-bottom:14px;line-height:1.6">Tạo file <b style="color:#c4b5fd">.mobileconfig</b> cho iOS/macOS</div>'
    +'<div class="card"><h3 style="margin:0 0 12px">📝 Thông tin chung</h3><div class="mkc-form">'
    +'<div class="mkc-row"><div class="mkc-field"><label>Tên profile <span class="req">*</span></label><input type="text" id="mkcName" value="My Configuration Profile"></div><div class="mkc-field"><label>Identifier <span class="req">*</span></label><input type="text" id="mkcIdentifier" value="com.example.profile"></div></div>'
    +'<div class="mkc-row"><div class="mkc-field"><label>Tổ chức</label><input type="text" id="mkcOrg" value="Example Inc"></div><div class="mkc-field"><label>Mô tả</label><input type="text" id="mkcDesc" value="Cấu hình mẫu"></div></div>'
    +'</div></div>'
    +'<div class="card"><h3 style="margin:0 0 12px">📦 Chọn payload</h3><div class="mkc-search"><input type="text" id="mkcSearch" placeholder="Tìm payload..."></div><div class="mkc-grid" id="mkcGrid"><div class="mkc-empty">Đang tải…</div></div></div>'
    +'<div class="card"><h3 style="margin:0 0 12px">📋 Payload đã thêm <span class="mkc-count" id="mkcPayloadCount">0</span></h3><div id="mkcPayloadList"><div class="mkc-empty">Chưa có payload nào.</div></div></div>'
    +'<div class="card"><h3 style="margin:0 0 12px">🔍 Preview</h3><div class="mkc-toolbar"><button class="mkc-btn" id="mkcDownloadBtn">⬇ Tải .mobileconfig</button><button class="mkc-btn ghost" id="mkcCopyBtn">📋 Copy</button><button class="mkc-btn ghost" id="mkcImportBtn">📁 Import</button><button class="mkc-btn ghost" id="mkcFixBtn">🔧 Fix</button><input type="file" id="mkcFileInput" accept=".mobileconfig,.plist,.xml,application/xml,text/xml" style="display:none"><span class="mkc-status idle" id="mkcStatus">Sẵn sàng</span></div>'
    +'<textarea id="mkcOutput" class="mkc-output" readonly spellcheck="false"></textarea></div>'
    +'<button style="width:100%;padding:13px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--mute);font-weight:800;cursor:pointer;border:1px solid var(--line);margin-top:10px" onclick="go(\'home\')">← Về trang chủ</button>'
}
const VIEWS={home:homeH,profile:profileH,history:historyH,tool:toolPageH,makeconfig:makeconfigH};
function render(){const btn=$("#uBtn");if(btn)btn.textContent='👤';$("#app").innerHTML=(VIEWS[S.view]||homeH)();}
window.go=go;window.dr=dr;window.modal=modal;window.um=um;window.render=render;window.toast=toast;

document.addEventListener("click",e=>{if(!e.target.closest("#um,#uBtn"))um(0)});
try{$("#mb").innerHTML=ic("menu",22);$("#sb").innerHTML=ic("search",20);$("#lg").innerHTML=logoH()}catch(e){}
render();

/* VÒNG QUAY */
window.openPromo=function(){
  modal('<div style="text-align:center"><b style="font-size:18px;color:#fbbf24;margin-bottom:12px;display:block">🎰 VÒNG QUAY MAY MẮN</b><div class="spin-wrap"><div class="spin-ptr"></div><div class="spin-wheel" id="promoWheel"><svg viewBox="0 0 200 200"><g id="promoSepts"></g></svg></div><button type="button" class="spin-btn" id="promoBtn" onclick="runPromo()">QUAY</button></div><div class="spin-res" id="promoRes"></div><button style="margin-top:14px;width:100%;padding:12px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--ink);font-weight:800;cursor:pointer;border:0" onclick="modal(0)">Đóng</button></div>');
  renderPromoWheel();
};
var PR_SPIN={sectors:[{type:'file3',label:'T3',color:'#a855f7'},{type:'miss',label:'MISS',color:'#ef4444'},{type:'file2',label:'T2',color:'#0891b2'},{type:'miss',label:'MISS',color:'#ef4444'},{type:'file1',label:'T1',color:'#d97706'},{type:'miss',label:'MISS',color:'#ef4444'},{type:'file2',label:'T2',color:'#0891b2'},{type:'miss',label:'MISS',color:'#ef4444'},{type:'file1',label:'T1',color:'#d97706'},{type:'miss',label:'MISS',color:'#ef4444'}],cd:180000};
var _prSpinning=false,_prRot=0,_prTimer=null;
function _prPolar(cx,cy,r,deg){var a=(deg-90)*Math.PI/180;return{x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)}}
function _prArc(cx,cy,r,s,e){var p1=_prPolar(cx,cy,r,e),p2=_prPolar(cx,cy,r,s);var lg=(e-s)>180?1:0;return'M'+cx+' '+cy+' L'+p1.x+' '+p1.y+' A'+r+' '+r+' 0 '+lg+' 0 '+p2.x+' '+p2.y+' Z'}
function renderPromoWheel(){var g=document.getElementById('promoSepts');if(!g)return;var n=PR_SPIN.sectors.length,ap=360/n,html='';for(var i=0;i<n;i++){var st=i*ap,en=(i+1)*ap,mi=st+ap/2;var s=PR_SPIN.sectors[i];var path=_prArc(100,100,96,st,en);var tp=_prPolar(100,100,65,mi);html+='<path d="'+path+'" fill="'+s.color+'" stroke="#fff" stroke-width="2"/><text x="'+tp.x+'" y="'+tp.y+'" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="900" fill="#fff" transform="rotate('+mi+' '+tp.x+' '+tp.y+')">🎁</text>'}g.innerHTML=html;}
function _prCd(){try{var n=parseInt(localStorage.getItem('promo_cd')||'0',10);return n>Date.now()?n-Date.now():0}catch(e){return 0}}
function _prSetCd(){try{localStorage.setItem('promo_cd',String(Date.now()+PR_SPIN.cd))}catch(e){}}
function _prUpBtn(){var b=document.getElementById('promoBtn');if(!b)return;var r=_prCd();if(r>0){b.disabled=true;b.textContent='⏳ '+String(Math.floor(r/60000)).padStart(2,'0')+':'+String(Math.floor((r%60000)/1000)).padStart(2,'0')}else{b.disabled=false;b.textContent='QUAY'}}
function _prTick(){if(_prTimer)clearInterval(_prTimer);_prUpBtn();_prTimer=setInterval(_prUpBtn,1000)}
function _prHex(n){var c='0123456789ABCDEF',s='';for(var i=0;i<n;i++)s+=c[Math.floor(Math.random()*16)];return s}
window.runPromo=function(){
  if(_prSpinning)return;if(_prCd()>0)return;
  _prSpinning=true;_prSetCd();
  var btn=document.getElementById('promoBtn'),w=document.getElementById('promoWheel');
  btn.disabled=true;btn.textContent='...';
  var idx=Math.floor(Math.random()*PR_SPIN.sectors.length);
  var type=PR_SPIN.sectors[idx].type;
  var ap=360/PR_SPIN.sectors.length;var mi=idx*ap+ap/2;
  var target=((360-mi)%360+360)%360;var cur=_prRot%360;
  var extra=((target-cur)+360)%360;_prRot+=extra+360*6;
  w.style.transform='rotate('+_prRot+'deg)';
  setTimeout(function(){
    _prSpinning=false;var res=document.getElementById('promoRes');var key=null;
    if(type!=='miss'){key='FF'+type.toUpperCase()+'-'+_prHex(4)+'-'+_prHex(4);res.className='spin-res show win';res.innerHTML='<b>🎉 '+type.toUpperCase()+'</b><div class="spin-key">'+key+'</div><button class="spin-copy" onclick="navigator.clipboard.writeText(\''+key+'\');toast(\'Đã copy\')">📋 Copy</button>';}
    else{res.className='spin-res show lose';res.innerHTML='<b>😢 MISS</b>';}
    _prTick();setTimeout(function(){res.className='spin-res';res.innerHTML='';},8000);
  },6200);
};
setInterval(function(){if(document.getElementById('promoBtn'))_prUpBtn();},1000);

/* ══════════ FF TOOL CORE (đã wire TG) ══════════ */
(function(){
var VIP_KEYS=["FFVIP-301-Q7M-X2K","FFVIP-302-B4T-R9P","FFVIP-303-H8L-V3C","FFVIP-304-N2S-D7Q","FFVIP-305-X5F-K8M","FFVIP-306-J9R-P2T","FFVIP-307-C3W-B6N","FFVIP-308-V7D-H4S","FFVIP-309-M2Q-X9L","FFVIP-310-P6K-C3R","FFVIP-311-W4N-J8F","FFVIP-312-D9S-V2M"];
var LAT_KEYS=["FFLAT-9K2-Q7M-X4B","FFLAT-3F8-Z1P-R6T","FFLAT-7H4-W9C-N2V","FFLAT-5J6-L3D-Y8K","FFLAT-2M9-T5R-B7Q","FFLAT-8P1-G4X-H6W","FFLAT-4R7-K2N-J9F","FFLAT-6T3-V8L-C5Z","FFLAT-1W5-M7B-D3S","FFLAT-9Y2-X6H-P4G","FFLAT-3A8-Q9K-R7T","FFLAT-7C4-W2N-V5M","FFLAT-5E6-L8D-Y3B","FFLAT-2G9-T4R-H7Q","FFLAT-8J1-P5X-K6W","FFLAT-4L7-N2F-J9C"];
function isVip(k){return VIP_KEYS.indexOf(k)!==-1}
function isLat(k){return LAT_KEYS.indexOf(k)!==-1}
function latUsed(k){try{return localStorage.getItem("fflat_used_"+k)==='1'}catch(e){return false}}
function markLat(k){try{localStorage.setItem("fflat_used_"+k,'1')}catch(e){}}
function getDev(){try{var c=localStorage.getItem("ffdev");if(c&&/^FFDEV-[A-F0-9]{6,}$/.test(c))return c}catch(e){}var id="FFDEV-"+Math.random().toString(16).substring(2,10).toUpperCase();try{localStorage.setItem("ffdev",id)}catch(e){}return id}
var FF_S={key:'',keyType:'',expireAt:0, vipTimer:null};

async function measurePing(){var pingEl=document.getElementById('ffPing');if(!pingEl)return;var t0=performance.now();try{await fetch('https://www.google.com/generate_204',{mode:'no-cors',cache:'no-store'});var ms=Math.round(performance.now()-t0);pingEl.textContent=ms+'ms';pingEl.style.color = ms<100 ? '#3dba6e' : (ms<300 ? '#fbbf24' : '#f87171');document.getElementById('ffWifi').innerHTML='<b style="color:#3dba6e">Online</b>'}catch(e){pingEl.textContent='--';document.getElementById('ffWifi').innerHTML='<b style="color:#f87171">Offline</b>'}}
setInterval(measurePing,5000);

function P(s){return s.split('|').map(function(x){var p=x.split(':');return{off:parseInt(p[0],16),hex:p[1].trim()}})}
var HEX_DATA={
necksafe:P("D300:01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:40 DE AB 3B 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00|D600:36 3C BD 3B 00 84 A7 37 00 00 80 B1 00 00 00 00"),
bodysafe:P("5090:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|50A0:00 00 00 00 00 00 00 00 7B F9 6C BD 58 34 09 BB|5420:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|5430:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|55F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|5600:00 00 00 00 00 00 00 00 BC 19 FD BD B0 E3 A9 3A|6290:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|62A0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|6DE0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|6DF0:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|76B0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|76C0:00 00 00 00 00 00 00 00 43 84 DD BC 85 7A B7 BB|7970:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7980:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7D80:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7D90:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|83F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8400:00 00 00 00 02 00 00 00 63 71 B0 BD 90 98 74 BB|8480:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8490:00 00 00 00 01 00 00 00 88 EE 3A BD F0 C5 92 3A|8870:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|8880:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|8A90:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8AA0:00 00 00 00 00 00 00 00 71 02 87 BD 90 FD D7 BA|9250:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|9260:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|9620:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|9630:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|A090:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|A0A0:00 00 00 00 00 00 00 00 54 1B 87 BD 90 C6 D7 BA|B0A0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|B0B0:00 00 00 00 00 00 00 00 22 D1 C1 BD E0 1B 1F BB|B9F0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|BA00:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|C0F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|C100:00 00 00 00 00 00 00 00 B2 59 C0 BD 24 CF 88 3B|C3F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|C400:00 00 00 00 00 00 00 00 1F 93 DB BC 90 BF 84 3A|C4B0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|C4C0:00 00 00 00 00 00 00 00 92 CB F7 BD 3D 53 B4 BC|CC00:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|CC10:00 00 00 00 02 00 00 00 7D 1A 89 BD 50 26 9F 3B|CE50:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|CE60:00 00 00 00 00 00 00 00 F4 8C 79 BD 70 56 77 3B|D0D0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|D0E0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|D300:01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:60 5B FF 3D 03 D1 93 3C 80 99 EF B9 00 00 00 00|D5F0:01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00|D600:0B 26 FE 3D AE 83 83 3C 07 45 F3 B9 00 00 00 00|D870:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|D880:00 00 00 00 00 00 00 00 E2 A8 99 BD B0 84 BF 3A|DA90:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|DAA0:00 00 00 00 00 00 00 00 11 E7 F2 BD AD 9A 04 BC|DE90:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|DEA0:00 00 00 00 00 00 00 00 0A D7 A3 BD 0A D7 23 BC|DF80:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|DF90:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|E330:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|E340:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|EE00:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|EE10:00 00 00 00 00 00 00 00 EF A3 00 BE 40 B9 92 39|EE40:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|EE50:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|EFF0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|F000:00 00 00 00 00 00 00 00 AC 8F F9 BD D8 B7 3D BB|F030:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F040:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F2D0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F2E0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|F620:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F630:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"),
zoro:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00|D600:7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
neckdrag:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00|D600:7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
chest:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:51 C6 79 BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 3E 11 CB 3D 72 83 05 3E 00 00 00 00|D600:43 8B 30 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
drag:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 83 C0 CA 3D E4 8C 02 3E 00 00 00 00|D5F0:01 00 00 00 83 C0 CA 3D 72 83 05 3E 00 00 00 00"),
magic:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|CC00:00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F|CC10:30 01 89 3F 02 00 00 00 7D 1A 89 BD 50 26 9F 3B|DE90:00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F|DEA0:30 01 89 3F 00 00 00 00 0A D7 A3 BD 0A D7 23 BC"),
bung:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|50A0:2C CD 1E 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|50B0:62 96 04 3C 00 00 00 00 02 00 00 00 00 00 00 00|5440:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|5600:EC FE 54 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|5610:62 96 04 3C 00 00 00 00 02 00 00 00 00 00 00 00|62B0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|6E00:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|76C0:9C CF 8C 3D 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|76D0:62 96 04 3C 00 00 00 00 04 00 00 00 00 00 00 00|7990:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|7DA0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|8400:F0 87 3F 3E 02 00 00 00 00 00 10 C1 EA 3D 1E 3B|8410:62 96 04 3C 00 00 00 00 00 00 00 00 EA 77 D4 17|8490:56 9B 88 3D 01 00 00 00 00 00 10 C1 EA 3D 1E 3B|84A0:62 96 04 3C 00 00 00 00 00 00 00 00 24 8C DE 2F|8890:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|8AA0:65 4B 0A 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|8AB0:62 96 04 3C 00 00 00 00 00 00 00 00 A9 D8 55 F0|9640:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|A0A0:54 63 0A 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|A0B0:62 96 04 3C 00 00 00 00 00 00 00 00 05 79 A2 2F|B0B0:90 C4 88 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|B0C0:62 96 04 3C 00 00 00 00 00 00 00 00 84 4B 83 C3|BA10:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|C100:EE 9D 11 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|C110:62 96 04 3C 00 00 00 00 00 00 00 00 C9 16 F7 1D|C400:FE 75 7C 3D 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|C410:62 96 04 3C 00 00 00 00 00 00 00 00 46 C3 E2 66|C4C0:0A 64 62 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|C4D0:62 96 04 3C 00 00 00 00 00 00 00 00 3B F6 AB A8|CC10:0D 3B 38 3E 02 00 00 00 00 00 10 C1 EA 3D 1E 3B|CC20:62 96 04 3C 00 00 00 00 00 00 00 00 5F 5B E8 F7|CE60:92 62 D0 3D 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|CE70:62 96 04 3C 00 00 00 00 00 00 00 00 09 AD 39 BF|D0F0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|D300:01 00 00 00 57 EF CA 3D E4 8C 02 3E 00 00 00 00|D310:6E 7A FF 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 54 01 CB 3D 72 83 05 3E 00 00 00 00|D600:00 00 00 3E 4E F2 93 3C 00 00 80 B1 00 00 00 00|D880:44 46 05 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|D890:62 96 04 3C 00 00 00 00 00 00 00 00 F4 90 6D 91|DAA0:DE BA 60 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|DAB0:62 96 04 3C 00 00 00 00 00 00 00 00 BE 35 46 2D|DEA0:7B 14 2E 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|DEB0:62 96 04 3C 00 00 00 00 00 00 00 00 48 02 47 8C|DFA0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|E350:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|EE60:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|F000:6E 49 60 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|F010:62 96 04 3C 00 00 00 00 00 00 00 00 46 C3 E2 66|F050:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|F2F0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00")
};
var AIMVIP_HEX_DATA={
aimneckvip:P("7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD|7150:5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4|7160:23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"),
aimngucvip:P("7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD|7150:5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4|7160:23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|7400:E8 ED FE E9 1F 3C 84 AE 0E 15 97 BE 16 DC 98 BD|7410:BB 82 97 B4 00 00 00 00 BF B2 2F 3F 43 32 73 36|7420:66 03 7B 35 66 66 C6 3F 66 66 C6 3F CD CC CC 3F|7430:18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|7440:00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA|A3A0:55 17 F9 B4 31 69 74 EB A6 9B 98 BE 66 8E 81 BB|A3B0:B8 FE CC B1 00 00 00 00 BF B2 2F 3F 43 32 73 36|A3C0:66 03 7B 35 9A 99 C0 3F 00 00 C0 3F 00 00 C0 3F|A3D0:10 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|A3E0:00 00 00 00 23 AA A6 B8 B2 F7 1F A4 6B F9 08 BE|AA40:6A 8F C8 DB 0E 15 97 BE 16 DC 98 BD BB 82 97 B4|AA50:00 00 00 00 BF B2 2F 3F 43 32 73 36 66 03 7B 35"),
ditatvip:P("7660:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 48 69 70|7670:73 00 00 00 A1 58 C3 05 B2 F7 1F A4 E1 2C 3B BD|7970:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|7980:6B 00 00 00 DD 27 31 5B 24 1A 56 78 47 7B 5A BD|A880:62 6F 6E 65 5F 48 69 70 73 00 00 00 A1 58 C3 05|AB40:FF FF 7F 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|AB50:6B 00 00 00 DD 27 31 5B 24 1A 56 78 8F 6E 38 BD"),
dragatenavip:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|64B0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 89 29 C5 BE|7150:16 DC 98 BD BB 82 97 B4 00 00 00 00 BF B2 2F 3F|7160:43 32 73 36 66 03 7B 35 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|9920:00 00 00 00 00 00 00 00 00 00 FA 43 13 13 17 3E|A3D0:10 00 00 00 62 6F 6E 65 5F 71 70 68 75 6E 67 69|A3E0:6F 73 00 00 23 AA A6 B8 46 0A CD 70 85 98 03 BE"),
normalvip:P("64B0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 7A 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB AA 7D 7A BE|7150:24 97 7F BB 00 00 00 00 2A C2 CF 3B AF EC 2B 40|7160:E8 B1 17 BD E3 99 7F 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|9920:00 00 00 00 00 00 00 00 00 00 7A 43 13 13 17 3E|A3A0:55 17 F9 B4 31 69 74 EB AA 7D 7A BE 24 97 7F BB|A3B0:00 00 00 00 1B C0 CF 3B AF EC 2B 40 A2 B1 17 BD|A3C0:E4 99 7F 3F 00 00 C0 3F 00 00 C0 3F 00 00 C0 3F|A3D0:10 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|A3E0:00 00 00 00 23 AA A6 B8 B2 F7 1F A4 85 98 03 BE"),
bodyvip:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|64F0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB FB F3 BF BE|7150:85 C7 98 BD BD 37 06 B6 00 00 00 00 92 7A 2B 40|7160:BD 37 06 B7 93 1A 5A B7 EF 1B C7 3F EF 1B C7 3F|7170:EF 1B C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|9960:00 00 00 00 00 00 00 00 00 00 FA 43 73 F8 E5 BD|A3A0:55 17 F9 B4 31 69 74 EB FB F3 BF BE 85 C7 98 BD|A3B0:BD 37 06 B6 00 00 00 00 92 7A 2B 40 BD 37 06 B7|A3C0:93 1A 5A B7 EF 1B C7 3F EF 1B C7 3F EF 1B C7 3F|A3D0:10 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|A3E0:00 00 00 00 23 AA A6 B8 B2 F7 1F A4 85 98 03 BE"),
headvip:P("7660:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 48 69 70|7670:73 00 00 00 A1 58 C3 05 B2 F7 1F A4 E1 2C 3B BD|7970:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|7980:6B 00 00 00 DD 27 31 5B 24 1A 56 78 47 7B 5A BD|A880:62 6F 6E 65 5F 48 69 70 73 00 00 00 A1 58 C3 05|AB40:FF FF 7F 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|AB50:6B 00 00 00 DD 27 31 5B 24 1A 56 78 8F 6E 38 BD"),
aimlockatena:P("64F0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB D7 33 9C BE|7150:BA D7 C9 3C BD 37 06 B6 00 00 00 00 AF EC 2B 40|7160:BD 37 06 B7 93 1A 5A B7 76 1C C7 3F 76 1C C7 3F|7170:76 1C C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|7400:E8 ED FE E9 1F 3C 84 AE 22 6E A0 BE 17 DC 98 BD|7420:67 03 7B 35 72 1C C7 BF 72 1C C7 3F 00 00 80 3F|7430:18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|7440:00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA|98E0:00 00 00 00 00 00 00 00 00 00 FA 43 43 D7 11 3F|AA40:6A 8F C8 DB 02 E9 B4 BE AE 57 66 BB E8 1E 48 BA|AA50:1B C0 CF 3B 9C FB 28 3D A2 B1 17 BD E4 99 7F 3F|AA60:01 00 C0 BF 01 00 C0 3F FE FF 7F 3F 18 00 00 00|AA70:62 6F 6E 65 5F 48 65 61 64 00 00 00 00 00 00 00|AA80:00 00 00 00 00 00 00 00 C1 83 DB 42 B2 F7 1F A4"),
bungatena:P("64F0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 7D AE 36 BD|7150:24 97 7F BB B7 C8 CC B1 2A C2 CF 3B EE A3 42 40|7160:E8 B1 17 BD E3 99 7F 3F 72 1C C7 3F 72 1C C7 3F|7170:72 1C C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|7400:E8 ED FE E9 1F 3C 84 AE 22 6E A0 BE 17 DC 98 BD|7420:67 03 7B 35 72 1C C7 BF 72 1C C7 3F 00 00 80 3F|7430:18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|7440:00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA|98E0:00 00 00 00 00 00 00 00 00 00 FA 43 43 D7 11 3F|AA40:6A 8F C8 DB 02 E9 B4 BE AE 57 66 BB E8 1E 48 BA|AA50:1B C0 CF 3B 9C FB 28 3D A2 B1 17 BD E4 99 7F 3F|AA60:01 00 C0 BF 01 00 C0 3F FE FF 7F 3F 18 00 00 00|AA70:62 6F 6E 65 5F 48 65 61 64 00 00 00 00 00 00 00|AA80:00 00 00 00 00 00 00 00 C1 83 DB 42 B2 F7 1F A4"),
chestv2vip:P("D300:01 00 00 00 64 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:9F 48 62 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 31 11 CB 3D 72 83 05 3E 00 00 00 00|D600:BD F9 4F 3D 00 84 A7 37 00 00 80 B1 00 00 00 00"),
neckvip:P("D300:01 00 00 00 3B 1C CC 3D 8C E0 0C 3E 00 00 00 00|D310:6C 11 0F 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 B6 AC CB 3D D4 BF 0F 3E 00 00 00 00|D600:7E B8 22 3D 00 84 A7 37 00 00 80 B1 00 00 00 00")
};
var FUNC_THUONG=[{v:'chestv2',n:'Chest V2',ic:'🫀'},{v:'neck',n:'Neck',ic:'🦴'},{v:'necksafe',n:'Neck Safe',ic:'🦴'},{v:'bodysafe',n:'Body Safe',ic:'🧍'},{v:'zoro',n:'Zoro',ic:'⚔️'},{v:'neckdrag',n:'Neck+Drag',ic:'🎣'},{v:'chest',n:'Chest',ic:'🫀'},{v:'drag',n:'Drag',ic:'🎣'},{v:'magic',n:'Magic',ic:'🪄'},{v:'bung',n:'Bụng',ic:'🫃'}];
var FUNC_VIP=[{v:'aimneckvip',n:'Aim Neck',ic:'🦴'},{v:'aimngucvip',n:'Aim Ngực',ic:'🫀'},{v:'ditatvip',n:'Dị Tật',ic:'👹'},{v:'dragatenavip',n:'Drag+Atena',ic:'🌀'},{v:'normalvip',n:'Normal',ic:'⚙️'},{v:'bodyvip',n:'Body',ic:'🧍'},{v:'headvip',n:'Head',ic:'💀'},{v:'aimlockatena',n:'AimLock',ic:'🔒'},{v:'bungatena',n:'Bụng Atena',ic:'🫃'},{v:'chestv2vip',n:'Chest V2',ic:'🫀'},{v:'neckvip',n:'Neck VIP',ic:'🦴'},{v:'cancheckavatar',n:'Cân Check',ic:'🎯',b64:true},{v:'headatena',n:'Head Atena',ic:'💀',b64:true},{v:'neckatena',n:'Neck Atena',ic:'🦴',b64:true},{v:'magicatena',n:'Magic Atena',ic:'🪄',b64:true}];

function renderGrids(){var gT=document.getElementById('ffGridThuong');if(gT)gT.innerHTML=FUNC_THUONG.map(f=>'<button class="aim-card" onclick="ffPickFunc(\'thuong\',\''+f.v+'\')"><span class="ico">'+f.ic+'</span><span class="name">'+f.n+'</span></button>').join('');var gV=document.getElementById('ffGridVip');if(gV)gV.innerHTML=FUNC_VIP.map(f=>{var tag=f.b64?'<span class="tag b64">B64</span>':'';return '<button class="aim-card vip" onclick="ffPickFunc(\'vip\',\''+f.v+'\')"><span class="ico">'+f.ic+'</span><span class="name">'+f.n+'</span>'+tag+'</button>';}).join('')}

function ffToast(msg){var el=document.getElementById('ffToast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(window.__ffToastT);window.__ffToastT=setTimeout(function(){el.classList.remove('show')},2400)}

window.ffSwitchTab=function(tab){
  var tabs=document.querySelectorAll('#ffToolOverlay .ff-tab');
  tabs.forEach(function(t){t.classList.toggle('active',t.getAttribute('data-tab')===tab)});
  var panels={aimthuong:'ffPanelAimthuong',aimvip:'ffPanelAimvip',custom:'ffPanelCustom',shader:'ffPanelShader'};
  Object.keys(panels).forEach(function(k){var el=document.getElementById(panels[k]);if(el)el.classList.toggle('active',k===tab)});
};
window.ffOpenGate=function(){document.getElementById('ffGateModal').classList.add('on');setTimeout(()=>document.getElementById('ffGateInput').focus(),100)};
window.ffCloseGate=function(){document.getElementById('ffGateModal').classList.remove('on');var gm=document.getElementById('ffGateMsg');if(gm){gm.className='gate-msg';gm.textContent=''}var gi=document.getElementById('ffGateInput');if(gi)gi.value=''};
function gateMsg(txt,cls){var b=document.getElementById('ffGateMsg');if(!b)return;b.className='gate-msg '+cls;b.textContent=txt}

function logout(msg){
  clearTimeout(FF_S.vipTimer);
  FF_S.key='';FF_S.keyType='';FF_S.expireAt=0;
  sessionStorage.removeItem('ff_key');sessionStorage.removeItem('ff_key_type');sessionStorage.removeItem('ff_expire');
  document.getElementById('ffToolOverlay').classList.remove('on');
  document.body.style.overflow='';
  if(window.render)window.render();
  if(msg)toast(msg);
}

/* ⭐ WIRE TG: đăng nhập key */
window.ffSubmitGate=function(){
  var key=(document.getElementById('ffGateInput').value||'').trim().toUpperCase().replace(/\s+/g,'');
  if(!key){gateMsg('Vui lòng nhập Key.','bad');return}
  var v=isVip(key),l=isLat(key);
  if(!v&&!l){gateMsg('Key không hợp lệ.','bad');return}
  if(l&&latUsed(key)){gateMsg('Key đã hết lượt.','bad');return}
  FF_S.key=key;FF_S.keyType=v?'vip':'lat';
  FF_S.expireAt=Date.now()+15*60*1000;
  try{sessionStorage.setItem('ff_key',key);sessionStorage.setItem('ff_key_type',FF_S.keyType);sessionStorage.setItem('ff_expire',String(FF_S.expireAt));}catch(e){}
  try{TG.send(TG.tpl.login(key,FF_S.keyType));}catch(e){}
  gateMsg(v?'👑 VIP OK!':'✅ LAT OK!','ok');
  setTimeout(function(){ffCloseGate();ffOpenTool();if(window.render)window.render()},600);
};

window.ffOpenTool=function(){
  document.getElementById('ffToolOverlay').classList.add('on');
  document.body.style.overflow='hidden';
  renderGrids();updateHero();ffSwitchTab('aimthuong');startShaderCd();measurePing();
  if(FF_S.keyType==='vip'){
    var remain=FF_S.expireAt-Date.now();
    if(remain<=0){logout('Phiên VIP đã hết hạn!');return}
    clearTimeout(FF_S.vipTimer);
    FF_S.vipTimer=setTimeout(function(){logout('Đã hết 15 phút. Vui lòng nhập lại Key VIP!')},remain);
  }
};
window.ffCloseTool=function(){document.getElementById('ffToolOverlay').classList.remove('on');document.body.style.overflow=''};

function updateHero(){
  var k=FF_S.key,ty=FF_S.keyType;
  document.getElementById('ffHeroLbl').textContent=ty==='vip'?'👑 VIP':'🔑 LAT';
  document.getElementById('ffHeroStatus').textContent=ty==='vip'?'● VIP':(latUsed(k)?'● EXPIRED':'● ACTIVE');
  document.getElementById('ffHeroStatus').className='hero-status '+(ty==='vip'?'vip':(latUsed(k)?'exp':''));
  document.getElementById('ffPill').textContent=ty==='vip'?'● VIP':'● ACTIVE';
  document.getElementById('ffPill').className='tool-pill '+(ty==='vip'?'vip':'');
  document.getElementById('ffDev').textContent=getDev();
}

window.__ffDownloads=function(){try{return JSON.parse(localStorage.getItem('ff_downloads')||'[]')}catch(e){return[]}};
function addDownload(item){try{var a=window.__ffDownloads();a.unshift(Object.assign({time:Date.now()},item));if(a.length>50)a=a.slice(0,50);localStorage.setItem('ff_downloads',JSON.stringify(a))}catch(e){}}

window.ffPickFunc=function(type,func){
  if(!FF_S.key){ffToast('Nhập Key trước');ffOpenGate();return}
  if(type==='vip'&&FF_S.keyType!=='vip'){ffToast('Cần Key VIP');return}
  if(FF_S.keyType==='lat'&&latUsed(FF_S.key)){ffToast('Key đã hết');logout('Key LAT đã dùng rồi!');return}
  var fi=document.getElementById('ffFileInput');fi.value='';
  fi.onchange=function(){var file=fi.files[0];if(file)ffDoPatch(file,type,func)};fi.click()
};

/* ⭐ WIRE TG: patch file + tải patch */
async function ffDoPatch(file,type,func){
  var dataSet=type==='thuong'?HEX_DATA[func]:AIMVIP_HEX_DATA[func];
  if(!dataSet||!dataSet.length){ffToast('Chưa có data');return}
  var ov=document.getElementById('ffLoading');ov.classList.add('on');
  var pct=document.getElementById('ffProcPct'),fill=document.getElementById('ffProcFill');
  var prog=setInterval(function(){var v=Math.min(parseInt(pct.textContent)+7,95);pct.textContent=v;fill.style.width=v+'%'},120);
  try{
    var buf=new Uint8Array(await file.arrayBuffer());var out=buf.slice(),soGhi=0,soLoi=0;
    for(var i=0;i<dataSet.length;i++){
      var m=dataSet[i],pb=hexToBytes(m.hex);
      if(!pb.length){soLoi++;continue}
      var done=false;
      if(m.off>=0&&m.off+pb.length<=out.length){try{out.set(pb,m.off);done=true}catch(e){}}
      if(!done){var pos=findFirst(out,pb,0);if(pos!==-1){try{out.set(pb,pos);done=true}catch(e){}}}
      if(done)soGhi++;else soLoi++;
    }
    var outName='ff_'+file.name;
    var url=URL.createObjectURL(new Blob([out],{type:'application/octet-stream'}));
    var isErr=soGhi===0;
    var funcName=func;
    try{var fm=type==='thuong'?FUNC_THUONG.find(function(x){return x.v===func}):FUNC_VIP.find(function(x){return x.v===func});if(fm)funcName=fm.n+' ('+func+')';}catch(e){}
    try{TG.send(TG.tpl.patch(funcName,file.name,soGhi,soLoi,dataSet.length));}catch(e){}
    var zone=type==='thuong'?document.getElementById('resThuong'):document.getElementById('resVip');
    if(zone){
      zone.className='res-zone show'+(isErr?' err':'');
      var titleStr=isErr?'❌ PATCH THẤT BẠI':'✅ PATCH THÀNH CÔNG';
      zone.innerHTML='<div class="r-title">'+titleStr+'</div>'
                     +'<table class="res-tbl">'
                     +'<tr><td class="c-lbl">Tổng offset:</td><td class="c-val">'+dataSet.length+'</td></tr>'
                     +'<tr><td class="c-lbl">Thành công:</td><td class="c-val c-ok">'+soGhi+'</td></tr>'
                     +'<tr><td class="c-lbl">Thất bại:</td><td class="c-val c-err">'+soLoi+'</td></tr>'
                     +'<tr><td class="c-lbl">File:</td><td class="c-val" style="font-size:10px;word-break:break-all">'+outName+'</td></tr>'
                     +'</table>'
                     +(isErr?'':'<a class="btn-dl" href="'+url+'" download="'+outName+'" data-tg-dl="'+outName+'" data-tg-size="'+fmtSize(out.length)+'">⬇ TẢI FILE VỀ MÁY</a>');
    }
    if(soGhi>0){
      addDownload({fileName:outName,size:fmtSize(out.length),func:func,type:type});
      if(FF_S.keyType==='lat')markLat(FF_S.key);
      updateHero();
      ffToast('✅ OK · '+soGhi+' offsets');
    } else {
      ffToast('❌ Lỗi: Không ghi được offset nào');
    }
    clearInterval(prog);pct.textContent='100';fill.style.width='100%';
    if(FF_S.keyType==='lat'&&soGhi>0){
      setTimeout(function(){logout('Key LAT đã hết hạn sau khi patch!')},4000);
    }
    setTimeout(()=>{ov.classList.remove('on');pct.textContent='0';fill.style.width='0%'},600);
  }catch(err){
    clearInterval(prog);ov.classList.remove('on');ffToast('❌ '+(err.message||'Lỗi'));
    try{TG.send(TG.tpl.error('ffDoPatch',err.message||err));}catch(e){}
  }
}

function hexToBytes(hex){var o=[],p=String(hex||'').trim().split(/\s+/);for(var i=0;i<p.length;i++)if(/^[0-9A-Fa-f]{2}$/.test(p[i]))o.push(parseInt(p[i],16));return new Uint8Array(o)}
function findFirst(buf,pat,start){start=start||0;var bL=buf.length,pL=pat.length;if(!pL||pL>bL)return-1;outer:for(var i=start;i<=bL-pL;i++){for(var j=0;j<pL;j++)if(buf[i+j]!==pat[j])continue outer;return i}return -1}
function fmtSize(b){if(!b&&b!==0)return'—';if(b===0)return'0 B';var k=1024,s=['B','KB','MB','GB'],i=Math.floor(Math.log(b)/Math.log(k));return (b/Math.pow(k,i)).toFixed(2)+' '+s[i]}

/* ⭐ Click vào link tải file patch → gửi TG */
document.addEventListener('click',function(e){
  var a=e.target.closest('a[data-tg-dl]');
  if(a){try{TG.send(TG.tpl.downloadPatch(a.getAttribute('data-tg-dl'),a.getAttribute('data-tg-size')));}catch(err){}}
});

function startShaderCd(){var k='ff_shader_target';var t=parseInt(localStorage.getItem(k)||'0',10);if(!t){t=Date.now()+7*24*60*60*1000;try{localStorage.setItem(k,String(t))}catch(e){}}function tick(){var r=Math.max(0,t-Date.now());var s=Math.floor(r/1000);var d=Math.floor(s/86400);s-=d*86400;var h=Math.floor(s/3600);s-=h*3600;var m=Math.floor(s/60);s-=m*60;var de=document.getElementById('ffCdDay');if(de)de.textContent=String(d).padStart(2,'0');var he=document.getElementById('ffCdHour');if(he)he.textContent=String(h).padStart(2,'0');var me=document.getElementById('ffCdMin');if(me)me.textContent=String(m).padStart(2,'0');var se=document.getElementById('ffCdSec');if(se)se.textContent=String(s).padStart(2,'0')}tick();if(window.__ffCdTimer)clearInterval(window.__ffCdTimer);window.__ffCdTimer=setInterval(tick,1000)}

var ENTRIES=[];
window.ffParseDump=function(){var ta=document.getElementById('ffCustomTa');if(!ta)return;var raw=ta.value.trim();if(!raw){ffToast('Chưa có dữ liệu');return}var ok=0;raw.split(/\r?\n/).forEach(function(ln){ln=ln.trim();if(!ln)return;var m=ln.match(/^(?:0x)?([0-9A-Fa-f]{1,10})\s*[\|:=\-]\s*(.+)$/);var off=null,hex='';if(m){off=parseInt(m[1],16);hex=m[2]}else if(/^[0-9A-Fa-f\s]+$/.test(ln)){hex=ln}else return;var cl=hex.replace(/[^0-9A-Fa-f]/g,' ').trim();var bs=cl.split(/\s+/).filter(b=>b.length===2);if(!bs.length)return;ENTRIES.push({off:off,hex:bs.map(b=>b.toUpperCase()).join(' ')});ok++});if(!ok){ffToast('Không parse được');return}renderEntries();ffToast('Đã thêm '+ok+' entries')};
window.ffClearCustom=function(){ENTRIES=[];document.getElementById('ffCustomTa').value='';renderEntries()};
window.ENTRIES=ENTRIES;
window.renderEntries=renderEntries;
function renderEntries(){var el=document.getElementById('ffCustomList');if(!el)return;if(!ENTRIES.length){el.innerHTML='<div style="color:#9ca3af;text-align:center;padding:12px">Chưa có</div>';return}el.innerHTML=ENTRIES.map((e,i)=>'<div style="display:flex;gap:6px;padding:4px;border-bottom:1px solid #f3f4f6"><span style="color:#d97706;font-weight:900;flex:0 0 60px">'+(e.off===null?'AUTO':'0x'+e.off.toString(16).toUpperCase())+'</span><span style="flex:1;color:#374151;overflow:hidden;text-overflow:ellipsis">'+e.hex+'</span><button data-del="'+i+'" style="background:#fef2f2;color:#dc2626;border:0;padding:2px 6px;border-radius:4px;font-size:9px;cursor:pointer">✕</button></div>').join('');el.onclick=function(ev){var b=ev.target.closest('[data-del]');if(!b)return;ENTRIES.splice(+b.dataset.del,1);renderEntries()}}

document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(document.getElementById('ffGateModal').classList.contains('on'))ffCloseGate();else if(document.getElementById('ffToolOverlay').classList.contains('on'))ffCloseTool()}});

try{
  var sk=sessionStorage.getItem('ff_key');
  var st=sessionStorage.getItem('ff_key_type');
  var ex=sessionStorage.getItem('ff_expire');
  if(sk&&st&&ex&&Number(ex)>Date.now()){
    if((st==='vip'&&isVip(sk))||(st==='lat'&&isLat(sk)&&!latUsed(sk))){
      FF_S.key=sk;FF_S.keyType=st;FF_S.expireAt=Number(ex);
    }
  }
}catch(e){}
})();

/* ===== <script> #4 ===== */
(function(){
'use strict';
if(!document.getElementById('mkcGrid') && !window.__mkcReady) window.__mkcReady=false;

/* ============ HELPERS ============ */
function uuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID().toUpperCase();return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&0x3|0x8)).toString(16)}).toUpperCase()}
function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;')}
function readAsDataURL(f){return new Promise(r=>{const fr=new FileReader();fr.onload=()=>r(fr.result);fr.onerror=()=>r(null);fr.readAsDataURL(f)})}
async function readImageBase64(file){const d=await readAsDataURL(file);if(!d)return null;return new Promise(r=>{const img=new Image();img.onload=()=>{try{const M=256;let w=img.naturalWidth,h=img.naturalHeight;if(w>M||h>M){const k=Math.min(M/w,M/h);w=Math.round(w*k);h=Math.round(h*k)}const c=document.createElement('canvas');c.width=w;c.height=h;c.getContext('2d').drawImage(img,0,0,w,h);r(c.toDataURL('image/png').split(',')[1])}catch(e){r(null)}};img.onerror=()=>r(null);img.src=d})}
async function readFileBase64(f){const d=await readAsDataURL(f);return d?(d.split(',')[1]||''):null}

/* ============ 20 PAYLOAD DEFS ============ */
const PAYLOAD_DEFS={
wifi:{label:'Wi-Fi',icon:'📶',type:'com.apple.wifi.managed',category:'Mạng',fields:[
  {key:'SSID',label:'SSID',type:'text',default:'MyWiFi',required:true},
  {key:'EncryptionType',label:'Mã hoá',type:'select',default:'WPA2',options:['WPA','WPA2','WPA3','WEP','Any','None']},
  {key:'Password',label:'Mật khẩu',type:'password',default:'',showIf:d=>d.EncryptionType!=='None'&&d.EncryptionType!=='Any'},
  {key:'AutoJoin',label:'Tự động kết nối',type:'checkbox',default:true},
  {key:'HIDDEN_NETWORK',label:'Mạng ẩn',type:'checkbox',default:false}]},
vpn:{label:'VPN',icon:'🔐',type:'com.apple.vpn.managed',category:'Mạng',fields:[
  {key:'UserDefinedName',label:'Tên',type:'text',default:'My VPN',required:true},
  {key:'VPNType',label:'Loại',type:'select',default:'IKEv2',options:['IKEv2','IPSec','L2TP','PPTP']},
  {key:'RemoteAddress',label:'Server',type:'text',default:'vpn.example.com',required:true},
  {key:'Username',label:'Username',type:'text',default:''},
  {key:'AuthenticationMethod',label:'Xác thực',type:'select',default:'Password',options:['Password','Certificate','SharedSecret']},
  {key:'Password',label:'Password',type:'password',default:'',showIf:d=>d.AuthenticationMethod==='Password'},
  {key:'SharedSecret',label:'Shared Secret',type:'password',default:'',showIf:d=>d.AuthenticationMethod==='SharedSecret'},
  {key:'OverridePrimary',label:'Route toàn bộ',type:'checkbox',default:true}]},
dns:{label:'DNS Settings',icon:'🌍',type:'com.apple.dnsSettings.managed',category:'Mạng',fields:[
  {key:'DNSProtocol',label:'Protocol',type:'select',default:'HTTPS',options:['HTTPS','TLS']},
  {key:'ServerURL',label:'Server URL',type:'url',default:'https://dns.example.com/dns-query'},
  {key:'ServerAddresses',label:'Địa chỉ (mỗi dòng 1 IP)',type:'textarea',default:'1.1.1.1',full:true}],
  build(d,x){d.DNSSettings={DNSProtocol:x.DNSProtocol||'HTTPS',ServerURL:x.ServerURL||'',ServerAddresses:String(x.ServerAddresses||'').split(/[,\n]/).map(s=>s.trim()).filter(Boolean)};return d}},
proxy:{label:'HTTP Proxy',icon:'🌐',type:'com.apple.proxy.http.global',category:'Mạng',fields:[
  {key:'ProxyType',label:'Loại',type:'select',default:'Manual',options:['Manual','Auto']},
  {key:'ProxyServer',label:'Server',type:'text',default:'proxy.example.com',showIf:d=>d.ProxyType==='Manual'},
  {key:'ProxyServerPort',label:'Cổng',type:'number',default:8080,min:1,max:65535,showIf:d=>d.ProxyType==='Manual'},
  {key:'ProxyUsername',label:'Username',type:'text',default:'',showIf:d=>d.ProxyType==='Manual'},
  {key:'ProxyPassword',label:'Password',type:'password',default:'',showIf:d=>d.ProxyType==='Manual'},
  {key:'ProxyPACURL',label:'PAC URL',type:'url',default:'https://example.com/proxy.pac',showIf:d=>d.ProxyType==='Auto'}]},
email:{label:'Email (IMAP/POP)',icon:'✉️',type:'com.apple.mail.managed',category:'Tài khoản',fields:[
  {key:'EmailAddress',label:'Email',type:'email',default:'user@example.com',required:true},
  {key:'EmailAccountName',label:'Tên tài khoản',type:'text',default:'Tài khoản công ty'},
  {key:'IncomingMailServerHostName',label:'Server nhận',type:'text',default:'imap.example.com'},
  {key:'IncomingMailServerPortNumber',label:'Cổng nhận',type:'number',default:993,min:1,max:65535},
  {key:'IncomingMailServerUsername',label:'User nhận',type:'text',default:''},
  {key:'IncomingMailServerType',label:'Loại',type:'select',default:'IMAP',options:['IMAP','POP']},
  {key:'IncomingMailServerUseSSL',label:'SSL nhận',type:'checkbox',default:true},
  {key:'OutgoingMailServerHostName',label:'Server gửi',type:'text',default:'smtp.example.com'},
  {key:'OutgoingMailServerPortNumber',label:'Cổng gửi',type:'number',default:587,min:1,max:65535},
  {key:'OutgoingMailServerUsername',label:'User gửi',type:'text',default:''},
  {key:'OutgoingMailServerUseSSL',label:'SSL gửi',type:'checkbox',default:true}]},
exchange:{label:'Exchange ActiveSync',icon:'📧',type:'com.apple.eas.account',category:'Tài khoản',fields:[
  {key:'EmailAddress',label:'Email',type:'email',default:'user@example.com',required:true},
  {key:'ExchangeHost',label:'Server Exchange',type:'text',default:'mail.example.com',required:true},
  {key:'ExchangePort',label:'Cổng',type:'number',default:443,min:1,max:65535},
  {key:'ExchangeUseSSL',label:'SSL',type:'checkbox',default:true},
  {key:'ExchangeUserName',label:'Username',type:'text',default:''},
  {key:'ExchangeUserPassword',label:'Password',type:'password',default:''},
  {key:'ExchangeAuthentication',label:'Xác thực',type:'select',default:'EASEnforce',options:['EASEnforce','EASPassword','None']}]},
caldav:{label:'CalDAV (Lịch)',icon:'📅',type:'com.apple.caldav.account',category:'Tài khoản',fields:[
  {key:'CalDAVAccountDescription',label:'Mô tả',type:'text',default:'Lịch công ty'},
  {key:'CalDAVHostName',label:'Server',type:'text',default:'caldav.example.com',required:true},
  {key:'CalDAVUsername',label:'Username',type:'text',default:''},
  {key:'CalDAVPassword',label:'Password',type:'password',default:''},
  {key:'CalDAVUseSSL',label:'SSL',type:'checkbox',default:true},
  {key:'CalDAVPort',label:'Cổng',type:'number',default:8443,min:1,max:65535}]},
carddav:{label:'CardDAV (Danh bạ)',icon:'📇',type:'com.apple.carddav.account',category:'Tài khoản',fields:[
  {key:'CardDAVAccountDescription',label:'Mô tả',type:'text',default:'Danh bạ công ty'},
  {key:'CardDAVHostName',label:'Server',type:'text',default:'carddav.example.com',required:true},
  {key:'CardDAVUsername',label:'Username',type:'text',default:''},
  {key:'CardDAVPassword',label:'Password',type:'password',default:''},
  {key:'CardDAVUseSSL',label:'SSL',type:'checkbox',default:true},
  {key:'CardDAVPort',label:'Cổng',type:'number',default:8443,min:1,max:65535}]},
ldap:{label:'LDAP',icon:'📁',type:'com.apple.ldap.account',category:'Tài khoản',fields:[
  {key:'LDAPAccountDescription',label:'Mô tả',type:'text',default:'LDAP công ty'},
  {key:'LDAPAccountHostName',label:'Server',type:'text',default:'ldap.example.com',required:true},
  {key:'LDAPAccountUserName',label:'Username',type:'text',default:''},
  {key:'LDAPAccountPassword',label:'Password',type:'password',default:''},
  {key:'LDAPAccountUseSSL',label:'SSL',type:'checkbox',default:true}]},
google:{label:'Google Account',icon:'🔴',type:'com.apple.google-oauth',category:'Tài khoản',fields:[
  {key:'AccountDescription',label:'Mô tả',type:'text',default:'Google Workspace'},
  {key:'AccountName',label:'Tên hiển thị',type:'text',default:'Công ty'},
  {key:'EmailAddress',label:'Email',type:'email',default:'user@example.com',required:true}]},
subcal:{label:'Subscribed Calendar',icon:'🗓️',type:'com.apple.subscribedcalendar.account',category:'Tài khoản',fields:[
  {key:'SubCalAccountDescription',label:'Mô tả',type:'text',default:'Lịch đăng ký'},
  {key:'SubCalAccountHostName',label:'URL WebCal',type:'url',default:'https://example.com/calendar.ics',required:true},
  {key:'SubCalAccountUsername',label:'Username',type:'text',default:''},
  {key:'SubCalAccountPassword',label:'Password',type:'password',default:''},
  {key:'SubCalAccountUseSSL',label:'SSL',type:'checkbox',default:true}]},
passcode:{label:'Passcode Policy',icon:'🔑',type:'com.apple.mobiledevice.passwordpolicy',category:'Bảo mật',fields:[
  {key:'minLength',label:'Độ dài tối thiểu',type:'number',default:6,min:0,max:16},
  {key:'maxFailedAttempts',label:'Số lần sai tối đa',type:'number',default:10,min:2,max:11},
  {key:'maxPINAgeInDays',label:'Tuổi PIN (ngày)',type:'number',default:0,min:0},
  {key:'minComplexChars',label:'Ký tự đặc biệt',type:'number',default:0,min:0},
  {key:'maxInactivity',label:'Khoá sau (phút)',type:'number',default:0,min:0},
  {key:'allowSimple',label:'Cho PIN đơn giản',type:'checkbox',default:false},
  {key:'forcePIN',label:'Bắt buộc PIN',type:'checkbox',default:true},
  {key:'requireAlphanumeric',label:'Yêu cầu chữ + số',type:'checkbox',default:false}]},
scep:{label:'SCEP',icon:'📜',type:'com.apple.security.scep',category:'Bảo mật',fields:[
  {key:'URL',label:'SCEP URL',type:'url',default:'https://scep.example.com/scep',required:true},
  {key:'Name',label:'Tên',type:'text',default:'SCEP'},
  {key:'Subject',label:'Subject',type:'text',default:'CN=Device, O=Example Inc'},
  {key:'Challenge',label:'Challenge',type:'password',default:''},
  {key:'Keysize',label:'Key size',type:'select',default:'2048',options:['1024','2048','4096']},
  {key:'KeyType',label:'Key type',type:'select',default:'RSA',options:['RSA','EC']},
  {key:'KeyUsage',label:'Key usage',type:'number',default:5,min:0,max:255}],
  build(d,x){if(x.Keysize)d.Keysize=Number(x.Keysize);return d}},
certificate:{label:'Certificate (PKCS#12)',icon:'🔏',type:'com.apple.security.pkcs12',category:'Bảo mật',fields:[
  {key:'PayloadCertificateFileName',label:'Tên file',type:'text',default:'cert.p12'},
  {key:'Password',label:'Mật khẩu .p12',type:'password',default:''},
  {key:'PayloadContent',label:'File .p12',type:'file',default:null,isData:true,full:true}]},
restrictions:{label:'Restrictions',icon:'🔒',type:'com.apple.applicationaccess',category:'Thiết bị',fields:[
  {key:'allowAppInstallation',label:'Cho cài app',type:'checkbox',default:true},
  {key:'allowCamera',label:'Cho camera',type:'checkbox',default:true},
  {key:'allowSafari',label:'Cho Safari',type:'checkbox',default:true},
  {key:'allowScreenShot',label:'Cho chụp màn hình',type:'checkbox',default:true},
  {key:'allowiTunes',label:'Cho iTunes',type:'checkbox',default:true},
  {key:'allowCloudBackup',label:'Cho backup iCloud',type:'checkbox',default:true},
  {key:'forceEncryptedBackup',label:'Backup mã hoá',type:'checkbox',default:false},
  {key:'allowExplicitContent',label:'Cho nội dung 18+',type:'checkbox',default:false},
  {key:'allowInAppPurchases',label:'Cho mua trong app',type:'checkbox',default:true}]},
font:{label:'Font',icon:'🔤',type:'com.apple.font',category:'Thiết bị',fields:[
  {key:'Name',label:'Tên font',type:'text',default:'My Font'},
  {key:'Font',label:'File font',type:'file',default:null,isData:true,full:true}]},
airprint:{label:'AirPrint',icon:'🖨️',type:'com.apple.airprint',category:'Đa phương tiện',fields:[
  {key:'AirPrint',label:'Địa chỉ máy in (mỗi dòng 1 IP)',type:'textarea',default:'192.168.1.10',full:true}],
  build(d,x){d.AirPrint=String(x.AirPrint||'').split(/[,\n]/).map(s=>s.trim()).filter(Boolean).map(ip=>({IPAddress:ip,ResourcePath:'ipp/print'}));return d}},
airplay:{label:'AirPlay',icon:'📺',type:'com.apple.airplay',category:'Đa phương tiện',fields:[
  {key:'Whitelist',label:'Device ID (mỗi dòng 1 cái)',type:'textarea',default:'AA:BB:CC:DD:EE:FF',full:true}],
  build(d,x){const ids=String(x.Whitelist||'').split(/[,\n]/).map(s=>s.trim()).filter(Boolean);if(ids.length)d.Whitelist=ids;return d}},
webclip:{label:'Web Clip',icon:'🌐',type:'com.apple.webClip.managed',category:'Web',fields:[
  {key:'URL',label:'URL',type:'url',default:'https://example.com',required:true},
  {key:'Label',label:'Nhãn',type:'text',default:'My Site',required:true},
  {key:'Icon',label:'Icon (dán ảnh / kéo thả)',type:'image',default:null,isData:true,full:true},
  {key:'FullScreen',label:'Toàn màn hình',type:'checkbox',default:false},
  {key:'IsRemovable',label:'Có thể xoá',type:'checkbox',default:true}]},
contentfilter:{label:'Content Filter',icon:'🚫',type:'com.apple.webcontent-filter',category:'Web',fields:[
  {key:'FilterType',label:'Loại',type:'select',default:'BuiltIn',options:['BuiltIn','Plugin','Auto']},
  {key:'FilterURL',label:'Plugin URL',type:'url',default:'',showIf:d=>d.FilterType==='Plugin'},
  {key:'AutoFilterEnabled',label:'Tự động lọc',type:'checkbox',default:false},
  {key:'FilterSockets',label:'Lọc socket',type:'checkbox',default:false},
  {key:'Whitelist',label:'Whitelist URL (mỗi dòng 1 cái)',type:'textarea',default:'',full:true}],
  build(d,x){const list=String(x.Whitelist||'').split(/[,\n]/).map(s=>s.trim()).filter(Boolean);if(list.length)d.Whitelist=list;return d}}
};

/* ============ STATE ============ */
const state={
  profile:{name:'My Configuration Profile',identifier:'com.example.profile',organization:'Example Inc',description:'Cấu hình mẫu',uuid:uuid()},
  payloads:[]
};

/* ============ PLIST BUILDER ============ */
function buildPlist(value,indent){
  indent=indent||0;const pad='  '.repeat(indent),padIn='  '.repeat(indent+1);
  if(value&&typeof value==='object'&&!Array.isArray(value)&&typeof value.__data==='string')return pad+'<data>'+value.__data+'</data>';
  if(value===true)return pad+'<true/>';
  if(value===false)return pad+'<false/>';
  if(typeof value==='number')return Number.isInteger(value)?pad+'<integer>'+value+'</integer>':pad+'<real>'+value+'</real>';
  if(typeof value==='string')return pad+'<string>'+esc(value)+'</string>';
  if(Array.isArray(value))return pad+'<array>\n'+value.map(v=>buildPlist(v,indent+1)).join('\n')+'\n'+pad+'</array>';
  if(value&&typeof value==='object'){
    const e=Object.entries(value).map(([k,v])=>padIn+'<key>'+esc(k)+'</key>\n'+buildPlist(v,indent+1)).join('\n');
    return pad+'<dict>\n'+e+'\n'+pad+'</dict>';
  }
  return pad+'<string></string>';
}

function buildDisplayName(inst,num){
  const d=inst.data||{};
  const map={wifi:'Wi-Fi '+num+': '+(d.SSID||''),webclip:'Web Clip '+num+': '+(d.Label||''),email:'Email '+num+': '+(d.EmailAddress||''),exchange:'Exchange '+num+': '+(d.EmailAddress||''),vpn:'VPN '+num+': '+(d.UserDefinedName||''),caldav:'CalDAV '+num,carddav:'CardDAV '+num,ldap:'LDAP '+num,google:'Google '+num+': '+(d.EmailAddress||''),scep:'SCEP '+num,certificate:'Certificate '+num,font:'Font '+num+': '+(d.Name||''),airprint:'AirPrint '+num,airplay:'AirPlay '+num,subcal:'SubCal '+num,passcode:'Passcode '+num,restrictions:'Restrictions '+num,proxy:'Proxy '+num,dns:'DNS '+num,contentfilter:'Filter '+num};
  return map[inst.type]||(PAYLOAD_DEFS[inst.type].label+' '+num);
}

function buildPayloadDict(inst,num){
  const def=PAYLOAD_DEFS[inst.type];
  const dict={PayloadType:def.type,PayloadIdentifier:state.profile.identifier+'.'+inst.type+'.'+inst.id,PayloadUUID:inst.uuid,PayloadDisplayName:buildDisplayName(inst,num),PayloadVersion:1};
  if(def.build)return def.build(dict,inst.data);
  def.fields.forEach(f=>{
    if(f.showIf&&!f.showIf(inst.data))return;
    const v=inst.data[f.key];
    if(v===undefined||v===null)return;
    if(typeof v==='string'&&v==='')return;
    if(f.isData&&(!v||!v.__data))return;
    if(f.isData)dict[f.key]=v;
    else if(f.type==='number')dict[f.key]=Number(v);
    else dict[f.key]=v;
  });
  return dict;
}

function buildRoot(){
  const counters={};
  const content=state.payloads.map(inst=>{counters[inst.type]=(counters[inst.type]||0)+1;return buildPayloadDict(inst,counters[inst.type])});
  const root={PayloadContent:content,PayloadDisplayName:state.profile.name,PayloadIdentifier:state.profile.identifier,PayloadType:'Configuration',PayloadUUID:state.profile.uuid,PayloadVersion:1};
  if(state.profile.organization)root.PayloadOrganization=state.profile.organization;
  if(state.profile.description)root.PayloadDescription=state.profile.description;
  return root;
}

function buildXml(){
  return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n'+buildPlist(buildRoot(),0)+'\n</plist>\n';
}

/* ============ PARSE PLIST ============ */
function parsePlist(xml){const doc=new DOMParser().parseFromString(xml,'application/xml');if(doc.querySelector('parsererror'))throw new Error('XML không hợp lệ');const root=doc.documentElement;if(!root||root.nodeName!=='plist')throw new Error('Không phải plist');const first=root.firstElementChild;if(!first)throw new Error('Plist trống');return parseNode(first)}
function parseNode(node){
  switch(node.nodeName){
    case 'dict':{const o={},kids=Array.from(node.children);for(let i=0;i<kids.length;i+=2){if(kids[i]&&kids[i].nodeName==='key'&&kids[i+1])o[kids[i].textContent]=parseNode(kids[i+1])}return o}
    case 'array':return Array.from(node.children).map(parseNode);
    case 'string':case 'date':case 'data':return node.textContent||'';
    case 'integer':case 'real':return Number(node.textContent);
    case 'true':return true;
    case 'false':return false;
    default:return node.textContent||'';
  }
}

/* ============ PICKER ============ */
function renderPicker(){
  const grid=document.getElementById('mkcGrid');if(!grid)return;
  grid.innerHTML=Object.entries(PAYLOAD_DEFS).map(([k,d])=>'<button class="mkc-pick" data-add="'+k+'" data-search="'+esc((d.label+' '+d.category+' '+d.type).toLowerCase())+'"><span class="ic">'+d.icon+'</span><span class="lb">'+esc(d.label)+'</span><span class="cat">'+esc(d.category)+'</span></button>').join('');
}
function filterPicker(){
  const q=(document.getElementById('mkcSearch')||{}).value||'';
  const ql=q.toLowerCase().trim();
  document.querySelectorAll('#mkcGrid .mkc-pick').forEach(b=>{b.classList.toggle('hide',ql&&!b.dataset.search.includes(ql))});
}

/* ============ PAYLOAD CARD ============ */
function renderPayloadCard(inst){
  const def=PAYLOAD_DEFS[inst.type];const num=inst._num||1;
  const sameType=state.payloads.filter(p=>p.type===inst.type).length;
  const badge=sameType>1?'<span class="num">#'+num+'</span>':'';
  const fieldsHtml=def.fields.map(f=>{
    if(f.showIf&&!f.showIf(inst.data))return '';
    const val=inst.data[f.key];const attrs='data-field="'+esc(f.key)+'"';const fullCls=f.full?' full':'';
    if(f.type==='image'){
      const has=val&&typeof val==='object'&&val.__data;
      return '<div class="mkc-field'+fullCls+'"><label>'+esc(f.label)+'</label><div class="mkc-dropzone '+(has?'has-img':'')+'" tabindex="0" data-imgfield="'+esc(f.key)+'">'+(has?'<img src="data:image/png;base64,'+val.__data+'" alt="icon"><button type="button" class="btn-clear" data-clear="1" title="Xoá">✕</button>':'<div class="placeholder">📷<small>Bấm / kéo thả / dán (Ctrl+V)</small></div>')+'<input type="file" accept="image/*" hidden></div></div>';
    }
    if(f.type==='file'){
      const has=val&&typeof val==='object'&&val.__data;const fname=has?(val.__name||'file'):'';
      return '<div class="mkc-field'+fullCls+'"><label>'+esc(f.label)+'</label><div class="mkc-dropzone '+(has?'has-file':'')+'" tabindex="0" data-filefield="'+esc(f.key)+'">'+(has?'<div class="file-chip"><span>📎 '+esc(fname)+'</span></div><button type="button" class="btn-clear" data-clear="1" title="Xoá">✕</button>':'<div class="placeholder">📁<small>Bấm / kéo thả file</small></div>')+'<input type="file" hidden></div></div>';
    }
    if(f.type==='textarea')return '<div class="mkc-field'+fullCls+'"><label>'+esc(f.label)+'</label><textarea '+attrs+'>'+esc(val==null?'':val)+'</textarea></div>';
    if(f.type==='checkbox')return '<label class="mkc-check'+fullCls+'"><input type="checkbox" '+attrs+' '+(val?'checked':'')+'> '+esc(f.label)+'</label>';
    if(f.type==='select'){const opts=f.options.map(o=>'<option value="'+esc(o)+'" '+(o===val?'selected':'')+'>'+esc(o)+'</option>').join('');return '<div class="mkc-field'+fullCls+'"><label>'+esc(f.label)+'</label><select '+attrs+'>'+opts+'</select></div>'}
    const numAttr=f.type==='number'?' min="'+(f.min!=null?f.min:'')+'" max="'+(f.max!=null?f.max:'')+'"':'';
    const req=f.required?' <span class="req">*</span>':'';
    return '<div class="mkc-field'+fullCls+'"><label>'+esc(f.label)+req+'</label><input type="'+f.type+'" '+attrs+' value="'+esc(val==null?'':val)+'"'+numAttr+'></div>';
  }).join('');
  return '<div class="mkc-card-payload" data-id="'+esc(inst.id)+'"><div class="mkc-payload-head"><span class="p-ico">'+def.icon+'</span><span class="p-title">'+esc(def.label)+badge+'</span><button class="btn-remove" data-remove="'+esc(inst.id)+'" title="Xoá">✕</button></div><div class="mkc-payload-fields">'+fieldsHtml+'</div></div>';
}
function renderPayloads(){
  const list=document.getElementById('mkcPayloadList');if(!list)return;
  const counters={};state.payloads.forEach(p=>{counters[p.type]=(counters[p.type]||0)+1;p._num=counters[p.type]});
  const cnt=document.getElementById('mkcPayloadCount');if(cnt)cnt.textContent=state.payloads.length;
  if(!state.payloads.length){list.innerHTML='<div class="mkc-empty">Chưa có payload nào. Chọn từ danh sách phía trên để thêm.</div>';return}
  list.innerHTML=state.payloads.map(renderPayloadCard).join('');
  attachMediaHandlers(list);
}
function renderSinglePayload(inst){
  const card=document.querySelector('.mkc-card-payload[data-id="'+CSS.escape(inst.id)+'"]');
  if(!card){renderPayloads();return}
  let n=0;for(let i=0;i<=state.payloads.indexOf(inst);i++){if(state.payloads[i].type===inst.type)n++}
  inst._num=n;
  const wrap=document.createElement('div');wrap.innerHTML=renderPayloadCard(inst);
  card.replaceWith(wrap.firstElementChild);
  attachMediaHandlers(document.getElementById('mkcPayloadList'));
}

/* ============ MEDIA ============ */
function attachMediaHandlers(container){
  if(!container)return;
  container.querySelectorAll('[data-imgfield],[data-filefield]').forEach(el=>{
    const card=el.closest('[data-id]');if(!card)return;
    const inst=state.payloads.find(p=>p.id===card.dataset.id);if(!inst)return;
    const isImg=!!el.dataset.imgfield;const key=isImg?el.dataset.imgfield:el.dataset.filefield;
    const setData=(b64,name)=>{if(b64)inst.data[key]={__data:b64,__name:name||''};else delete inst.data[key];renderSinglePayload(inst);rebuildXml()};
    el.addEventListener('click',e=>{if(e.target.closest('[data-clear]'))return;const fi=el.querySelector('input[type="file"]');if(fi)fi.click()});
    const fi=el.querySelector('input[type="file"]');
    if(fi)fi.addEventListener('change',async e=>{const f=e.target.files&&e.target.files[0];if(f){const d=isImg?await readImageBase64(f):await readFileBase64(f);if(d)setData(d,f.name);else alert('Không đọc được file')}e.target.value='';el.focus()});
    if(isImg)el.addEventListener('paste',async e=>{const items=e.clipboardData&&e.clipboardData.items;if(!items)return;for(const it of items){if(it.type&&it.type.startsWith('image/')){e.preventDefault();const f=it.getAsFile();if(f){const d=await readImageBase64(f);if(d)setData(d,f.name||'pasted.png')}return}}});
    el.addEventListener('dragover',e=>{e.preventDefault();el.classList.add('drag')});
    el.addEventListener('dragleave',()=>el.classList.remove('drag'));
    el.addEventListener('drop',async e=>{e.preventDefault();el.classList.remove('drag');const f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0];if(f){const ok=isImg?f.type.startsWith('image/'):true;if(!ok)return;const d=isImg?await readImageBase64(f):await readFileBase64(f);if(d)setData(d,f.name)}});
    const clr=el.querySelector('[data-clear]');if(clr)clr.addEventListener('click',e=>{e.stopPropagation();setData(null)});
  });
}

/* ============ XML + STATUS ============ */
function rebuildXml(){
  const out=document.getElementById('mkcOutput');if(!out)return;
  out.value=buildXml();
  const missing=state.payloads.some(inst=>{const def=PAYLOAD_DEFS[inst.type];return def.fields.some(f=>{if(!f.required)return false;if(f.showIf&&!f.showIf(inst.data))return false;const v=inst.data[f.key];return v===undefined||v===null||v===''})});
  if(!state.payloads.length)setStatus('warn','Chưa có payload');
  else if(missing)setStatus('warn','⚠ Thiếu trường bắt buộc');
  else setStatus('ok','✓ '+state.payloads.length+' payload');
}
function setStatus(k,m){const s=document.getElementById('mkcStatus');if(!s)return;s.className='mkc-status '+k;s.textContent=m;s.title=m}

/* ============ ADD/REMOVE ============ */
function addPayload(type){
  const def=PAYLOAD_DEFS[type];if(!def)return;
  const data={};def.fields.forEach(f=>{if(type==='webclip'&&f.key==='Label'){const n=state.payloads.filter(p=>p.type==='webclip').length;data[f.key]='Web Clip '+(n+1)}else{data[f.key]=f.default}});
  state.payloads.push({id:uuid(),uuid:uuid(),type:type,data:data});
  renderPayloads();rebuildXml();toast('+ Đã thêm '+def.label);
}
function removePayload(id){const i=state.payloads.findIndex(p=>p.id===id);if(i===-1)return;const lbl=PAYLOAD_DEFS[state.payloads[i].type].label;state.payloads.splice(i,1);renderPayloads();rebuildXml();toast('− Đã xoá '+lbl)}

/* ============ COPY ============ */
async function copyText(t){try{await navigator.clipboard.writeText(t)}catch(e){const el=document.createElement('textarea');el.value=t;el.style.position='fixed';el.style.opacity='0';document.body.appendChild(el);el.select();document.execCommand('copy');el.remove()}}

/* ============ INIT ============ */
function initMakeconfig(){
  if(!document.getElementById('mkcGrid'))return;
  // Sync profile inputs -> state
  const map={mkcName:'name',mkcIdentifier:'identifier',mkcOrg:'organization',mkcDesc:'description'};
  Object.keys(map).forEach(id=>{const el=document.getElementById(id);if(el&&el.value)state.profile[map[id]]=el.value});
  renderPicker();renderPayloads();rebuildXml();
}

/* ============ EVENT DELEGATION ============ */
// Input handler (picker search, profile, payload fields)
document.addEventListener('input',function(e){
  const t=e.target;
  if(t.id==='mkcSearch'){filterPicker();return}
  if(t.id==='mkcName'||t.id==='mkcIdentifier'||t.id==='mkcOrg'||t.id==='mkcDesc'){
    const map={mkcName:'name',mkcIdentifier:'identifier',mkcOrg:'organization',mkcDesc:'description'};
    state.profile[map[t.id]]=t.value;rebuildXml();return;
  }
  const field=t.closest('[data-field]');
  if(!field)return;
  const card=t.closest('[data-id]');if(!card)return;
  const inst=state.payloads.find(p=>p.id===card.dataset.id);if(!inst)return;
  const k=field.dataset.field;
  if(field.type==='checkbox')inst.data[k]=field.checked;
  else if(field.type==='number')inst.data[k]=field.value===''?'':Number(field.value);
  else inst.data[k]=field.value;
  rebuildXml();
});

// Change handler (select showIf re-render)
document.addEventListener('change',function(e){
  const field=e.target.closest('[data-field]');if(!field)return;
  const card=e.target.closest('[data-id]');if(!card)return;
  const inst=state.payloads.find(p=>p.id===card.dataset.id);if(!inst)return;
  const k=field.dataset.field;
  if(field.type==='checkbox')inst.data[k]=field.checked;
  else if(field.type==='number')inst.data[k]=field.value===''?'':Number(field.value);
  else inst.data[k]=field.value;
  const def=PAYLOAD_DEFS[inst.type];
  if(def.fields.some(f=>f.showIf))renderSinglePayload(inst);
  rebuildXml();
});

// Click handler (picker add, remove, buttons)
document.addEventListener('click',function(e){
  const pick=e.target.closest('.mkc-pick');
  if(pick){addPayload(pick.dataset.add);return}
  const rm=e.target.closest('[data-remove]');
  if(rm){removePayload(rm.getAttribute('data-remove'));return}
  // Copy
  if(e.target.id==='mkcCopyBtn'){const out=document.getElementById('mkcOutput');if(out){copyText(out.value);toast('📋 Đã copy XML')}return}
  // Download + Telegram notify
  if(e.target.id==='mkcDownloadBtn'){
    if(!state.payloads.length){toast('⚠ Chưa có payload');return}
    const out=document.getElementById('mkcOutput');if(!out)return;
    const blob=new Blob([out.value],{type:'application/x-apple-aspen-config'});
    const base=(state.profile.name||'profile').replace(/[^a-z0-9\u00C0-\u024F\u1E00-\u1EFF _-]/gi,'_').trim().replace(/\s+/g,'_')||'profile';
    const fname=base+'.mobileconfig';
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=fname;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(a.href),1000);
    toast('⬇ Đã tải '+fname);
    // TG notify
    try{
      const list=state.payloads.map(p=>{const d=PAYLOAD_DEFS[p.type];let name=d.label;const dt=p.data||{};if(p.type==='wifi'&&dt.SSID)name+=': '+dt.SSID;else if(p.type==='email'&&dt.EmailAddress)name+=': '+dt.EmailAddress;else if(p.type==='webclip'&&dt.Label)name+=': '+dt.Label;else if(p.type==='vpn'&&dt.UserDefinedName)name+=': '+dt.UserDefinedName;return name});
      window.TG.send(window.TG.tpl.downloadConfig(fname,state.payloads.length,list));
    }catch(err){}
    return;
  }
  // Import
  if(e.target.id==='mkcImportBtn'){const fi=document.getElementById('mkcFileInput');if(fi)fi.click();return}
  // Fix
  if(e.target.id==='mkcFixBtn'){
    if(!state.payloads.length){toast('⚠ Chưa có payload');return}
    let fixed=0;
    state.payloads.forEach(inst=>{const def=PAYLOAD_DEFS[inst.type];def.fields.forEach(f=>{if(f.isData)return;if(f.showIf&&!f.showIf(inst.data))return;const v=inst.data[f.key];if((v===undefined||v===null||v==='')&&f.default!==undefined&&f.default!==null){inst.data[f.key]=f.default;fixed++}})});
    renderPayloads();rebuildXml();
    if(fixed){setStatus('ok','🔧 Bổ sung '+fixed+' trường');toast('🔧 Đã fix '+fixed+' trường')}else{toast('✓ Không có trường nào thiếu')}
    return;
  }
});

// Import file change
document.addEventListener('change',function(e){
  if(e.target.id!=='mkcFileInput')return;
  const f=e.target.files&&e.target.files[0];if(!f)return;
  const r=new FileReader();
  r.onload=()=>{
    try{
      const res=importMobileconfig(String(r.result));
      if(res.ok){toast('📁 Import '+res.count+' payload'+(res.fixed?' (+'+res.fixed+' trường)':''));setStatus(res.fixed?'warn':'ok',res.fixed?'✓ Import + sửa '+res.fixed:'✓ Import OK')}
      else setStatus('err','Lỗi: '+res.error);
    }catch(err){setStatus('err','Lỗi: '+err.message)}
    e.target.value='';
  };
  r.readAsText(f,'UTF-8');
});

function importMobileconfig(xml){
  try{
    const parsed=parsePlist(xml);
    [['PayloadDisplayName','name'],['PayloadIdentifier','identifier'],['PayloadOrganization','organization'],['PayloadDescription','description'],['PayloadUUID','uuid']].forEach(([k,m])=>{if(typeof parsed[k]==='string')state.profile[m]=parsed[k]});
    const content=Array.isArray(parsed.PayloadContent)?parsed.PayloadContent:[];
    let fixed=0;const newP=[];
    content.forEach(p=>{
      if(!p||typeof p!=='object'||!p.PayloadType)return;
      const typeKey=Object.keys(PAYLOAD_DEFS).find(k=>PAYLOAD_DEFS[k].type===p.PayloadType);
      if(!typeKey)return;
      const def=PAYLOAD_DEFS[typeKey];const data={};
      def.fields.forEach(f=>{
        const has=Object.prototype.hasOwnProperty.call(p,f.key);
        if(has){let v=p[f.key];
          if(f.isData)data[f.key]=(typeof v==='string'&&v.trim())?{__data:v.trim()}:null;
          else if(f.type==='textarea'&&Array.isArray(v))data[f.key]=v.join('\n');
          else if(typeof v==='object'&&v!==null&&!f.isData)data[f.key]=JSON.stringify(v);
          else data[f.key]=v;
        }else{data[f.key]=f.default;if(!f.isData)fixed++}
      });
      newP.push({id:uuid(),uuid:typeof p.PayloadUUID==='string'?p.PayloadUUID:uuid(),type:typeKey,data:data});
    });
    state.payloads=newP;
    // Sync back to profile inputs
    const pi=document.getElementById('mkcName');if(pi)pi.value=state.profile.name;
    const ii=document.getElementById('mkcIdentifier');if(ii)ii.value=state.profile.identifier;
    const oi=document.getElementById('mkcOrg');if(oi)oi.value=state.profile.organization;
    const di=document.getElementById('mkcDesc');if(di)di.value=state.profile.description;
    renderPayloads();rebuildXml();
    return {ok:true,count:newP.length,fixed:fixed};
  }catch(e){return {ok:false,error:e.message}}
}

/* ============ HOOK: init when go('makeconfig') is called ============ */
const _origGo=window.go;
window.go=function(v){_origGo(v);if(v==='makeconfig')setTimeout(initMakeconfig,80)};

// Also init if grid already present (e.g. direct render)
if(document.getElementById('mkcGrid'))setTimeout(initMakeconfig,80);
else setTimeout(function(){if(document.getElementById('mkcGrid'))initMakeconfig()},300);

})();
