/* ===== <script> #1 ===== */
/* ============ CANVAS BACKGROUND ============ */
(function(){
var c=document.getElementById('web-canvas');if(!c)return;
var ctx=c.getContext('2d',{alpha:true});
var isMobile=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
var CFG={N:isMobile?500:1400,LINK:isMobile?120:140,MR:170,SPEED:1};
var W,H,px,py,vx,vy,mouse={x:-9999,y:-9999,tx:-9999,ty:-9999,on:false},LINK2;
function resize(){W=c.width=innerWidth;H=c.height=innerHeight;LINK2=CFG.LINK*CFG.LINK;
  if(!px||px.length!==CFG.N){px=new Float32Array(CFG.N);py=new Float32Array(CFG.N);vx=new Float32Array(CFG.N);vy=new Float32Array(CFG.N);for(var i=0;i<CFG.N;i++){px[i]=Math.random()*W;py[i]=Math.random()*H;vx[i]=(Math.random()-.5)*CFG.SPEED;vy[i]=(Math.random()-.5)*CFG.SPEED;}}}
function step(){var N=CFG.N,SP=mouse.on?1:0,mrx=mouse.tx,mry=mouse.ty,mr=CFG.MR,mr2=mr*mr;
  ctx.clearRect(0,0,W,H);ctx.lineWidth=0.5;
  for(var i=0;i<N;i++){var xi=px[i],yi=py[i];for(var j=i+1;j<N;j++){var dx=xi-px[j],dy=yi-py[j],d2=dx*dx+dy*dy;if(d2<LINK2){var d=Math.sqrt(d2),a=(1-d/CFG.LINK)*0.55;ctx.strokeStyle='rgba(180,200,255,'+a+')';ctx.beginPath();ctx.moveTo(xi,yi);ctx.lineTo(px[j],py[j]);ctx.stroke();}}}
  ctx.fillStyle='rgba(220,230,255,0.6)';
  for(var i2=0;i2<N;i2++){var x=px[i2]+vx[i2],y=py[i2]+vy[i2];if(x<0){x=0;vx[i2]=Math.abs(vx[i2])}else if(x>W){x=W;vx[i2]=-Math.abs(vx[i2])}if(y<0){y=0;vy[i2]=Math.abs(vy[i2])}else if(y>H){y=H;vy[i2]=-Math.abs(vy[i2])}
    if(SP){var ddx=x-mrx,ddy=y-mry,dd2=ddx*ddx+ddy*ddy;if(dd2<mr2&&dd2>0.01){var dd=Math.sqrt(dd2),f=(1-dd/mr)*0.8;vx[i2]+=(ddx/dd)*f;vy[i2]+=(ddy/dd)*f;var sp2=vx[i2]*vx[i2]+vy[i2]*vy[i2];if(sp2>4){var sp=Math.sqrt(sp2);vx[i2]=vx[i2]/sp*2;vy[i2]=vy[i2]/sp*2;}}}
    px[i2]=x;py[i2]=y;ctx.beginPath();ctx.arc(x,y,1.5,0,6.28318);ctx.fill();}
  mouse.tx+=(mouse.x-mouse.tx)*0.2;mouse.ty+=(mouse.y-mouse.ty)*0.2;requestAnimationFrame(step);}
window.addEventListener('resize',resize);
document.addEventListener('mousemove',function(e){mouse.x=e.clientX;mouse.y=e.clientY;mouse.tx=mouse.x;mouse.ty=mouse.y;mouse.on=true;});
document.addEventListener('touchmove',function(e){if(e.touches[0]){mouse.x=e.touches[0].clientX;mouse.y=e.touches[0].clientY;mouse.on=true;}},{passive:true});
document.addEventListener('mouseleave',function(){mouse.on=false;mouse.x=-9999;mouse.y=-9999;});
document.addEventListener('touchend',function(){mouse.on=false;});
resize();requestAnimationFrame(step);
})();

/* ===== <script> #2 ===== */
/* ============ TELEGRAM ============ */
(function(){
'use strict';
window.TG_CONFIG={BOT_TOKEN:'8932128073:AAF0m6g46yuwVgKOHUu1xcKCogBt1F5xl88',CHAT_ID:'-1004346328616',ENABLED:true,SILENT:false,DEBUG:false};
var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')};
var now=function(){var d=new Date(),p=function(n){return String(n).padStart(2,'0')};return p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds())+' · '+p(d.getDate())+'/'+(d.getMonth()+1)+'/'+d.getFullYear()};
var device=function(){var ua=navigator.userAgent||'';var pf='Unknown';if(/iPhone|iPad|iPod/i.test(ua))pf='📱 iOS';else if(/Android/i.test(ua))pf='🤖 Android';else if(/Windows/i.test(ua))pf='🪟 Windows';else if(/Mac/i.test(ua))pf='🍎 macOS';else if(/Linux/i.test(ua))pf='🐧 Linux';var br='Unknown';if(/Edg\//i.test(ua))br='Edge';else if(/Chrome\//i.test(ua))br='Chrome';else if(/Firefox\//i.test(ua))br='Firefox';else if(/Safari\//i.test(ua))br='Safari';return{platform:pf,browser:br,screen:(screen.width||0)+'x'+(screen.height||0),lang:navigator.language||'vi'}};
function send(text,opts){opts=opts||{};if(!TG_CONFIG.ENABLED)return Promise.resolve({ok:false,reason:'disabled'});
  var body={chat_id:opts.chatId||TG_CONFIG.CHAT_ID,text:text,parse_mode:'HTML',disable_web_page_preview:true,disable_notification:TG_CONFIG.SILENT};
  return fetch('https://api.telegram.org/bot'+TG_CONFIG.BOT_TOKEN+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(function(r){return r.json()}).catch(function(e){return{ok:false,error:String(e)}});}
var TPL={
  login:function(key,type){var d=device();var tMap={'vip':'👑 VIP','lat':'🔑 LAT','t1':'🎲 T1','t2':'🎲 T2','t3':'🎲 T3'};return '<b>🔐 ĐĂNG NHẬP</b>\n━━━━━━━━━━━━━━━━━━\n<b>🔑 Key:</b> <code>'+esc(key)+'</code>\n<b>🏷 Loại:</b> '+(tMap[type]||type)+'\n<b>💻 Thiết bị:</b> '+d.platform+' · '+d.browser+'\n<b>📐 Màn hình:</b> '+d.screen+'\n<b>🕒 Thời gian:</b> '+now()},
  patch:function(funcName,fileName,okCount,failCount,total){var d=device();var icon=okCount>0?'✅':'❌';return '<b>'+icon+' PATCH FILE</b>\n━━━━━━━━━━━━━━━━━━\n<b>⚙️ Chức năng:</b> <code>'+esc(funcName)+'</code>\n<b>📄 File:</b> '+esc(fileName)+'\n<b>📊 Kết quả:</b> ✅ '+okCount+' / '+total+(failCount?' · ❌ '+failCount:'')+'\n<b>💻 Thiết bị:</b> '+d.platform+' · '+d.browser+'\n<b>🕒 Thời gian:</b> '+now()},
  downloadPatch:function(fileName,size){var d=device();return '<b>⬇️ TẢI FILE PATCH</b>\n━━━━━━━━━━━━━━━━━━\n<b>📄 File:</b> <code>'+esc(fileName)+'</code>\n<b>📦 Kích thước:</b> '+esc(size||'—')+'\n<b>💻 Thiết bị:</b> '+d.platform+'\n<b>🕒 Thời gian:</b> '+now()},
  downloadConfig:function(fileName,payloadCount,payloadList){var d=device();var list=(payloadList||[]).slice(0,40).map(function(x,i){return '  '+(i+1)+'. '+esc(x)}).join('\n');return '<b>📲 TẢI CẤU HÌNH</b>\n━━━━━━━━━━━━━━━━━━\n<b>📄 File:</b> <code>'+esc(fileName)+'</code>\n<b>📦 Payload:</b> '+payloadCount+'\n'+(list?'<b>🛠 Chức năng:</b>\n'+list+'\n':'')+'<b>💻 Thiết bị:</b> '+d.platform+'\n<b>🕒 Thời gian:</b> '+now()},
  weather63:function(rows){var d=device();var wIcon=function(c){c=Number(c);if(c===0)return'☀️';if(c<=2)return'🌤';if(c===3)return'☁️';if(c>=45&&c<=48)return'🌫';if(c>=51&&c<=57)return'🌦';if(c>=61&&c<=67)return'🌧';if(c>=71&&c<=77)return'❄️';if(c>=80&&c<=82)return'🌧';if(c>=85&&c<=86)return'🌨';if(c>=95)return'⛈';return'🌡'};
    var head='<b>🌤 THỜI TIẾT 63 TỈNH</b>\n━━━━━━━━━━━━━━━━━━\n';var lines=(rows||[]).map(function(r){return '• <b>'+esc(r.name)+'</b>: '+wIcon(r.code)+' <code>'+r.temp+'°C</code> · 💧'+r.hum+'% · ☔'+r.rain+'mm';}).join('\n');var tail='\n<b>💻 '+d.platform+' · '+now();return head+lines+tail;},
  error:function(where,err){return '<b>⚠️ LỖI</b>\n<b>📍 '+esc(where)+'</b>\n<b>💬</b> <code>'+esc(String(err||'').slice(0,300))+'</code>\n<b>🕒</b> '+now()}
};
window.TG={send:send,tpl:TPL,esc:esc,now:now,device:device};
})();

/* ===== <script> #3 ===== */
/* ============ MAIN APP ============ */
"use strict";
const TOOL_VERSION = '3.0';
const TOOL_VERSION_LATEST = '3.0';
const TOOL_VERSION_NEXT = '4.0';
const TOOL_VERSION_DEV = '</tun>';
const IC={menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',user:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M6.5 19c1.2-2.7 3.2-3.8 5.5-3.8s4.3 1.1 5.5 3.8"/>',box:'<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',grid:'<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',hist:'<path d="M3.5 12a8.5 8.5 0 1 0 2.5-6L3.5 8.5"/><path d="M3.5 4v4.5H8M12 8v4.5l3 1.5"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11.5 12.5 20 4M17 7l3-3M14.5 9.5 18 6"/>',x:'<path d="M6 6l12 12M18 6 6 18"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 1-1 1.7M12 17h.01"/>',chat:'<path d="M4 5h16v11H9l-5 4z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',config:'<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'};
const ic=(n,s=18)=>'<svg class="i" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(IC[n]||'')+'</svg>';
const $=s=>document.querySelector(s),esc=s=>String(s==null?"":s);
const S={view:"home",term:""};
function toast(t){const e=$("#toast");e.textContent=t;e.style.display="block";clearTimeout(e._t);e._t=setTimeout(()=>e.style.display="none",2800)}
const logoH=()=>'<div style="display:flex;align-items:center;gap:8px"><div style="font-size:20px;font-weight:900;background:linear-gradient(90deg,#a855f7,#ec4899,#f59e0b);-webkit-background-clip:text;background-clip:text;color:transparent;letter-spacing:-.5px">Hỗ trợ tạo file</div><span style="font-size:9.5px;font-weight:900;padding:2px 7px;border-radius:6px;background:rgba(61,186,110,.18);color:#3dba6e;border:1px solid rgba(61,186,110,.35)">v'+TOOL_VERSION+'</span></div>';
function dr(o){$("#dOv").classList.toggle("on",!!o);if(o){um(0);drawer()}}
function modal(h){$("#mOv").classList.toggle("on",!!h);if(h)$("#md").innerHTML=h}
function drawer(){
  $("#drw").innerHTML=`
    <button class="x" onclick="dr(0)">${ic("x",20)}</button>
    <div class="drawer-logo">Tool Tạo File</div>
    <div class="drawer-sec">${ic("box",18)} SẢN PHẨM</div>
    <button class="mi" onclick="go('home');dr(0)">${ic("grid",18)}<span>Tất cả sản phẩm</span></button>
    <button class="mi" onclick="openPromo();dr(0)">${ic("box",18)}<span>Khuyến mãi</span><span class="tag hot">HOT</span></button>
    <div class="drawer-sec">${ic("clock",18)} TIỆN ÍCH</div>
    <button class="mi" onclick="showOffsetGate();dr(0)">${ic("clock",18)}<span>Offset Tool</span><span class="tag new">NEW</span></button>
    <button class="mi" onclick="showWeather();dr(0)">${ic("sun",18)}<span>Thời tiết</span></button>
    <button class="mi" onclick="go('makeconfig');dr(0)">${ic("config",18)}<span>Make Cấu Hình</span><span class="tag new">NEW</span></button>
    <div class="drawer-sec">${ic("chat",18)} HỖ TRỢ</div>
    <button class="mi" onclick="showAimWarning();dr(0)">${ic("shield",18)}<span>Hướng dẫn & Lưu ý</span></button>
    <button class="mi" onclick="window.open('https://t.me/tuan2318v','_blank')">${ic("help",18)}<span>Telegram @tuan2318v</span></button>
    <div class="drawer-sec">${ic("user",18)} TÀI KHOẢN</div>
    <button class="mi" onclick="go('profile');dr(0)">${ic("user",18)}<span>Hồ sơ cá nhân</span></button>
    <button class="mi" onclick="go('history');dr(0)">${ic("hist",18)}<span>Lịch sử File</span></button>
    <button class="mi" onclick="showVersionInfo();dr(0)" style="border:1px solid var(--line);margin-top:14px;background:rgba(168,85,247,.05)">${ic("shield",18)}<span>Phiên bản tool</span><span class="tag new">v${TOOL_VERSION}</span></button>
    <div style="margin-top:auto;padding-top:16px;font-size:10px;color:var(--mute);text-align:center;line-height:1.6">
      <div style="display:inline-block;padding:3px 9px;border-radius:6px;background:rgba(61,186,110,.15);color:#3dba6e;font-weight:900;font-size:9px;margin-bottom:4px">● PHIÊN BẢN MỚI NHẤT</div>
      <div>Tool hỗ trợ tạo file game</div>
      <div>phát triển từ <span style="color:#c4b5fd;font-weight:900">${TOOL_VERSION_DEV}</span></div>
      <div style="margin-top:6px;color:#8a8da0;font-size:9px">v${TOOL_VERSION} · ${new Date().getFullYear()}</div>
    </div>
  `;
}
function showAimWarning(){modal(`<div style="text-align:center"><div style="font-size:44px;margin-bottom:8px">🛡️</div><b style="font-size:17px;color:#f87171;display:block;margin-bottom:6px">Giải Thích & Lưu Ý</b><div style="color:var(--mute);font-size:13px;line-height:1.6;margin:0 0 16px;text-align:left"><b style="color:var(--ink)">1. Cơ chế:</b><br>Các file Aim (Cache/Asset) can thiệp vào bộ nhớ game để hỗ trợ kéo tâm mượt hơn.<br><br><b style="color:var(--ink)">2. Rủi ro:</b><br><span style="color:#fca5a5">Có thể bị ban tài khoản. Khuyến khích chơi acc phụ!</span><br><br><b style="color:var(--ink)">3. Thời hạn:</b><br>Key VIP dùng vô hạn. Key T1/T2/T3 tải 1/2/3 file. LAT tải 1 file.</div><button style="width:100%;padding:12px;border-radius:12px;background:rgba(239,68,68,.2);color:#fca5a5;font-weight:800;cursor:pointer;border:0" onclick="modal(0)">Tôi Đã Hiểu</button></div>`)}
function um(o){const m=$("#um");const on=o===undefined?!m.classList.contains("on"):!!o;m.classList.toggle("on",on);if(!on)return;
 m.innerHTML='<div style="display:flex;align-items:center;gap:12px;padding:14px 14px 8px"><div class="upill" style="width:48px;height:48px;font-size:18px;flex:none">🎯</div><div style="min-width:0;flex:1"><b style="font-size:16px;display:block;color:var(--ink)">TOOL ACTIVE</b><div style="font-size:12px;color:var(--mute);font-family:ui-monospace,monospace">Key: ••••••••</div></div></div>'
 +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;padding:4px 12px 10px"><button class="r" style="flex-direction:column;gap:4px;padding:12px 6px;text-align:center;font-size:12px;color:var(--ink)" onclick="go(\'profile\')">'+ic("user",22)+'Tài khoản</button><button class="r" style="flex-direction:column;gap:4px;padding:12px 6px;text-align:center;font-size:12px;color:var(--ink)" onclick="go(\'history\')">'+ic("hist",22)+'Tải file</button><button class="r" style="flex-direction:column;gap:4px;padding:12px 6px;text-align:center;font-size:12px;color:var(--ink)" onclick="go(\'tool\')">'+ic("key",22)+'Tool</button></div>';}
function go(v){S.view=v;dr(0);um(0);modal(0);render();scrollTo(0,0)}
function goSearch(){go("home");setTimeout(()=>{$("#q")&&$("#q").focus()},30)}
function homeH(){
  return '<div style="margin:10px 0 12px"><div style="display:flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 12px;color:var(--mute)">'+ic("search",17)+'<input id="q" placeholder="Tìm kiếm…" value="'+esc(S.term)+'" oninput="S.term=this.value" style="flex:1;background:none;border:0;outline:none;color:var(--ink);font-size:14px;margin:0"></div></div>'
   +'<div class="quick-tabs">'
   +'<button class="qt qt-ff" onclick="ffOpenGate()"><span class="ico">🎯</span><span class="txt">Tạo File</span><span class="qt-dot"></span></button>'
   +'<button class="qt qt-dns" onclick="toast(\'DNS Fix đang chờ\')"><span class="ico">🛡️</span><span class="txt">DNS+File</span></button>'
   +'<button class="qt qt-offset" onclick="showOffsetGate()"><span class="ico">🛠</span><span class="txt">Offset</span></button>'
   +'<button class="qt qt-weather" onclick="showWeather()"><span class="ico">🌤</span><span class="txt">Thời tiết</span></button>'
   +'</div>'
   +'<div class="promo-list">'
   +'<div class="promo-item" onclick="openPromo()"><div class="info"><div class="p-ico">🔥</div><div class="p-txt"><b>Khuyến Mãi HOT</b><span>Vòng quay nhận key T1/T2/T3</span></div></div><span class="promo-tag">HOT</span></div>'
   +'<div class="promo-item" onclick="showVersionInfo()" style="background:linear-gradient(135deg,rgba(61,186,110,.1),rgba(59,130,246,.05));border-color:rgba(61,186,110,.3)"><div class="info"><div class="p-ico" style="background:rgba(61,186,110,.2);color:#3dba6e">●</div><div class="p-txt"><b>Phiên bản v'+TOOL_VERSION+' · Mới nhất</b><span>Bản cập nhật hiện tại</span></div></div><span class="promo-tag" style="background:rgba(61,186,110,.18);color:#3dba6e;border-color:rgba(61,186,110,.35)">LATEST</span></div>'
   +'<div class="promo-item" onclick="showVersionInfo()" style="background:linear-gradient(135deg,rgba(251,191,36,.08),rgba(239,68,68,.05));border-color:rgba(251,191,36,.25)"><div class="info"><div class="p-ico" style="background:rgba(251,191,36,.18);color:#fbbf24">⏳</div><div class="p-txt"><b>Phiên bản v'+TOOL_VERSION_NEXT+' · Sắp ra mắt</b><span>Yêu cầu server backend</span></div></div><span class="promo-tag" style="background:rgba(251,191,36,.18);color:#fbbf24;border-color:rgba(251,191,36,.35)">SOON</span></div>'
   +'<div class="promo-item" style="cursor:default;background:linear-gradient(135deg,rgba(168,85,247,.08),rgba(236,72,153,.05));border-color:rgba(168,85,247,.25)"><div class="info"><div class="p-ico" style="background:rgba(236,72,153,.18);color:#f472b6">💠</div><div class="p-txt"><b>Tool hỗ trợ tạo file game</b><span>Phát triển từ &lt;/tun&gt;</span></div></div></div>'
   +'</div>';
}
function profileH(){
  const dls=window.__ffDownloads?window.__ffDownloads():[];
  const ffs=window.__ffState?window.__ffState():{keyType:'',key:''};
  const dev=window.TG?window.TG.device():{platform:'?',browser:'?',screen:'?',lang:'?'};
  const isVipUser=ffs.keyType==='vip';
  const isSpinUser=['t1','t2','t3'].includes(ffs.keyType);
  const limit=window.ffKeyLimit?window.ffKeyLimit(ffs.key):0;
  const used=window.ffKeyUsed?window.ffKeyUsed(ffs.key):0;
  const quota=(limit===Infinity)?'<b style="color:#3dba6e">♾️ Vô hạn</b>':(used>=limit?'<b style="color:#f87171">'+used+' / '+limit+' (hết lượt)</b>':'<b style="color:#fbbf24">'+(limit-used)+' / '+limit+' (còn lại)</b>');
  const now=new Date(),pad=n=>String(n).padStart(2,'0');
  const datetime=pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds())+' · '+pad(now.getDate())+'/'+pad(now.getMonth()+1)+'/'+now.getFullYear();
  const devId=(function(){try{return localStorage.getItem('ffdev')||'—';}catch(e){return '—';}})();
  const keyDisplay=(function(){if(!ffs.key)return '—';var k=ffs.key;if(k.length<12)return k;return k.substring(0,6)+'-••••-••••-'+k.slice(-4);})();
  const typeLabel=isVipUser?'👑 VIP ∞':ffs.keyType==='t3'?'🎲 T3 (3 file)':ffs.keyType==='t2'?'🎲 T2 (2 file)':ffs.keyType==='t1'?'🎲 T1 (1 file)':'🔑 LAT (1 file)';
  const cardIcon=isVipUser?'👑':(isSpinUser?'🎲':'🎯');
  return '<h1 class="pg">Hồ sơ cá nhân</h1>'
    +'<div class="card" style="background:linear-gradient(135deg,'+(isVipUser?'rgba(251,191,36,.08),rgba(168,85,247,.05)':'rgba(168,85,247,.05),rgba(59,130,246,.04)')+');border-color:'+(isVipUser?'rgba(251,191,36,.25)':'rgba(168,85,247,.2)')+'">'
    +'<div style="display:flex;align-items:center;gap:12px">'
    +'<div style="width:52px;height:52px;border-radius:14px;display:grid;place-items:center;font-size:26px;background:'+(isVipUser?'linear-gradient(135deg,#fbbf24,#f59e0b)':'linear-gradient(135deg,#a855f7,#5c70ff)')+';box-shadow:0 4px 14px '+(isVipUser?'rgba(251,191,36,.35)':'rgba(168,85,247,.35)')+'">'+cardIcon+'</div>'
    +'<div style="flex:1;min-width:0"><b style="display:block;font-size:16px;color:var(--ink)">'+(isVipUser?'TOOL VIP':(isSpinUser?'TOOL QUAY':'TOOL ACTIVE'))+'</b><span style="display:block;font-size:11px;color:#c4b5fd;font-family:ui-monospace,monospace;margin-top:2px;word-break:break-all">'+keyDisplay+'</span></div>'
    +'<span class="ff-offset-badge" style="background:'+(isVipUser?'rgba(251,191,36,.18);color:#fbbf24':'rgba(61,186,110,.18);color:#3dba6e')+'">'+(isVipUser?'VIP':(isSpinUser?ffs.keyType.toUpperCase():'LAT'))+'</span>'
    +'</div></div>'
    +'<div class="card"><h3 style="margin:0 0 10px;font-size:13px;color:#c4b5fd;text-transform:uppercase;letter-spacing:.5px">🔑 Thông tin Key</h3>'
    +'<div class="row"><span>Loại key</span><b>'+typeLabel+'</b></div>'
    +'<div class="row"><span>Trạng thái</span><b style="color:#3dba6e">● ACTIVE</b></div>'
    +'<div class="row"><span>Lượt tải còn lại</span><span>'+quota+'</span></div>'
    +'<div class="row"><span>Đã tải</span><b>'+dls.length+' file</b></div>'
    +'<div class="row"><span>Phiên bản</span><b style="color:#3dba6e">v'+TOOL_VERSION+' · Mới nhất</b></div>'
    +(isVipUser?'<div class="row"><span>Hết hạn sau</span><b style="color:#fbbf24" id="ffProfileTimer">--:--</b></div>':'')
    +'</div>'
    +'<div class="card"><h3 style="margin:0 0 10px;font-size:13px;color:#c4b5fd;text-transform:uppercase;letter-spacing:.5px">💻 Thiết bị</h3>'
    +'<div class="row"><span>Hệ điều hành</span><b>'+esc(dev.platform)+'</b></div>'
    +'<div class="row"><span>Trình duyệt</span><b>'+esc(dev.browser)+'</b></div>'
    +'<div class="row"><span>Màn hình</span><b>'+esc(dev.screen)+'</b></div>'
    +'<div class="row"><span>Ngôn ngữ</span><b>'+esc(dev.lang)+'</b></div>'
    +'<div class="row"><span>Device ID</span><b style="font-family:ui-monospace,monospace;font-size:11px;color:#c4b5fd">'+esc(devId)+'</b></div>'
    +'<div class="row"><span>Thời gian hiện tại</span><b style="font-family:ui-monospace,monospace;font-size:11px">'+datetime+'</b></div>'
    +'</div>'
    +'<div class="card" style="background:linear-gradient(135deg,rgba(251,191,36,.08),rgba(239,68,68,.04));border-color:rgba(251,191,36,.28)"><div style="display:flex;align-items:center;gap:12px"><div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:grid;place-items:center;font-size:20px;flex:none">⏳</div><div style="flex:1;min-width:0"><b style="display:block;font-size:13px;color:#fbbf24">v'+TOOL_VERSION_NEXT+' · Sắp ra mắt</b><span style="font-size:11px;color:#fde68a;display:block;margin-top:2px">Yêu cầu server backend — chưa khả dụng</span></div></div></div>'
    +'<button style="width:100%;padding:13px;border-radius:12px;background:linear-gradient(100deg,#a855f7,#5c70ff);color:#fff;font-weight:800;cursor:pointer;border:0;margin-bottom:8px" onclick="go(\'tool\')">'+ic("key",16)+' Mở Tool</button>'
    +'<button style="width:100%;padding:13px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--ink);font-weight:800;cursor:pointer;border:1px solid var(--line)" onclick="go(\'history\')">'+ic("hist",16)+' Lịch sử File</button>';
}
setInterval(function(){var el=document.getElementById('ffProfileTimer');if(!el)return;var st=window.__ffState?window.__ffState():null;if(!st||!st.keyType)return;if(st.keyType!=='vip'){el.textContent='∞';return;}var s=Math.max(0,Math.floor((st.expireAt-Date.now())/1000));el.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');},1000);
function historyH(){const dls=window.__ffDownloads?window.__ffDownloads():[];return '<h1 class="pg">Lịch sử File</h1><div class="card">'+(dls.length?dls.map(d=>'<div class="row"><span style="word-break:break-all;font-size:12px">'+esc(d.fileName||'—')+'<br><span class="mut" style="font-size:11px">'+esc(d.size||'')+'</span></span><b style="font-size:11px;color:#a78bfa">'+esc(d.func||'—')+'</b></div>').join(""):'<div class="mut" style="padding:24px;text-align:center;font-size:13px">Chưa có file nào</div>')+'</div>'}
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
    +'<div class="card"><h3 style="margin:0 0 12px">🔍 Preview</h3><div class="mkc-toolbar"><button class="mkc-btn" id="mkcDownloadBtn">⬇ Tải .mobileconfig</button><button class="mkc-btn ghost" id="mkcCopyBtn">📋 Copy</button><button class="mkc-btn ghost" id="mkcImportBtn">📁 Import</button><button class="mkc-btn ghost" id="mkcFixBtn">🔧 Fix</button><input type="file" id="mkcFileInput" accept=".mobileconfig,.plist,.xml" style="display:none"><span class="mkc-status idle" id="mkcStatus">Sẵn sàng</span></div>'
    +'<textarea id="mkcOutput" class="mkc-output" readonly spellcheck="false"></textarea></div>'
    +'<button style="width:100%;padding:13px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--mute);font-weight:800;cursor:pointer;border:1px solid var(--line);margin-top:10px" onclick="go(\'home\')">← Về trang chủ</button>'
}
const VIEWS={home:homeH,profile:profileH,history:historyH,tool:toolPageH,makeconfig:makeconfigH};
function render(){const btn=$("#uBtn");if(btn)btn.textContent='👤';$("#app").innerHTML=(VIEWS[S.view]||homeH)();}
window.go=go;window.dr=dr;window.modal=modal;window.um=um;window.render=render;window.toast=toast;
document.addEventListener("click",e=>{if(!e.target.closest("#um,#uBtn"))um(0)});
try{$("#mb").innerHTML=ic("menu",22);$("#sb").innerHTML=ic("search",20);$("#lg").innerHTML=logoH()}catch(e){}
render();

/* ===== PROMO WHEEL ===== */
window.openPromo=function(){
  modal('<div style="text-align:center"><b style="font-size:18px;color:#fbbf24;margin-bottom:12px;display:block">🎰 VÒNG QUAY MAY MẮN</b><div class="spin-wrap"><div class="spin-ptr"></div><div class="spin-wheel" id="promoWheel"><svg viewBox="0 0 200 200"><g id="promoSepts"></g></svg></div><button type="button" class="spin-btn" id="promoBtn" onclick="runPromo()">QUAY</button></div><div class="spin-res" id="promoRes"></div><button style="margin-top:14px;width:100%;padding:12px;border-radius:12px;background:rgba(255,255,255,.06);color:var(--ink);font-weight:800;cursor:pointer;border:0" onclick="modal(0)">Đóng</button></div>');
  renderPromoWheel();_prUpBtn();
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
    if(type!=='miss'){
      var tierMap={file1:1,file2:2,file3:3};
      var tier=tierMap[type]||1;
      var newKey=(typeof window.ffGenSpinKey==='function')?window.ffGenSpinKey(tier):('FFT'+tier+'-'+_prHex(4)+'-'+_prHex(4)+'-'+_prHex(4));
      key=newKey;
      var tierLabel='T'+tier+' · Tải được '+tier+' file';
      res.className='spin-res show win';
      res.innerHTML='<b>🎲 '+tierLabel+'</b><div class="spin-key">'+key+'</div><button class="spin-copy" onclick="navigator.clipboard.writeText(\''+key+'\');toast(\'Đã copy\')">📋 Copy</button><div style="font-size:11px;color:#86efac;margin-top:8px;line-height:1.4">✓ Đăng nhập tool với key này<br><span style="color:#6ee7b7;font-size:10px">(Dùng được '+tier+' lần)</span></div>';
    } else { res.className='spin-res show lose';res.innerHTML='<b>😢 MISS</b>'; }
    _prTick();setTimeout(function(){res.className='spin-res';res.innerHTML='';},12000);
  },6200);
};
setInterval(function(){if(document.getElementById('promoBtn'))_prUpBtn();},1000);

/* ===== VERSION MODAL ===== */
window.showVersionInfo=function(){
  var v=TOOL_VERSION,latest=TOOL_VERSION_LATEST,next=TOOL_VERSION_NEXT,isLatest=(v===latest);
  modal('<div style="text-align:center;margin-bottom:16px"><div style="width:64px;height:64px;margin:0 auto 10px;border-radius:18px;background:linear-gradient(135deg,#a855f7,#5c70ff);display:grid;place-items:center;font-size:30px;box-shadow:0 8px 22px rgba(168,85,247,.4)">🎯</div><div style="font-size:20px;font-weight:900;color:var(--ink)">TOOL v'+v+'</div><div style="font-size:11px;color:var(--mute);margin-top:2px">Phát triển từ <b style="color:#c4b5fd">'+TOOL_VERSION_DEV+'</b></div>'+(isLatest?'<div style="display:inline-block;margin-top:10px;padding:5px 12px;border-radius:8px;background:rgba(61,186,110,.18);color:#3dba6e;font-size:11px;font-weight:900;border:1px solid rgba(61,186,110,.4)">● PHIÊN BẢN MỚI NHẤT</div>':'')+'</div>'
    +'<div style="background:var(--card);border:1px solid var(--line);border-radius:14px;padding:14px;margin-bottom:12px"><div style="font-size:11px;font-weight:900;color:#c4b5fd;text-transform:uppercase;letter-spacing:.6px;margin-bottom:10px">📊 Lịch sử phiên bản</div>'
    +'<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)"><div style="width:32px;height:32px;border-radius:9px;background:linear-gradient(135deg,#3dba6e,#10b981);display:grid;place-items:center;font-size:16px;flex:none">✅</div><div style="flex:1"><div style="font-size:13px;font-weight:900;color:var(--ink)">Phiên bản 3.0</div><div style="font-size:10.5px;color:var(--mute);margin-top:1px">Hiện tại · Ổn định · Không cần server</div></div><span style="padding:3px 8px;border-radius:6px;background:rgba(61,186,110,.18);color:#3dba6e;font-size:9px;font-weight:900">LATEST</span></div>'
    +'<div style="display:flex;align-items:center;gap:10px;padding:10px 0"><div style="width:32px;height:32px;border-radius:9px;background:linear-gradient(135deg,#fbbf24,#f59e0b);display:grid;place-items:center;font-size:16px;flex:none">⏳</div><div style="flex:1"><div style="font-size:13px;font-weight:900;color:var(--ink)">Phiên bản 4.0</div><div style="font-size:10.5px;color:var(--mute);margin-top:1px">Sắp ra mắt · Cần server backend</div></div><span style="padding:3px 8px;border-radius:6px;background:rgba(251,191,36,.18);color:#fbbf24;font-size:9px;font-weight:900">SOON</span></div>'
    +'</div>'
    +'<div style="background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.3);border-left:3px solid #fbbf24;border-radius:0 10px 10px 0;padding:12px;margin-bottom:14px"><div style="font-size:12px;font-weight:900;color:#fbbf24;margin-bottom:4px">⚠ v'+next+' cần server</div><div style="font-size:11px;color:#fde68a;line-height:1.55">Bản 4.0 yêu cầu <b>server backend</b> để: xác thực key online, đồng bộ quota, chống chia sẻ key, log realtime, cập nhật offset tự động. <b>Hiện chưa khả dụng</b> — vui lòng dùng bản '+v+'.</div></div>'
    +'<button type="button" style="width:100%;padding:12px;border-radius:12px;background:linear-gradient(100deg,#a855f7,#5c70ff);color:#fff;font-weight:900;font-size:13px;border:0;cursor:pointer" onclick="modal(0)">Đã hiểu</button>'
  );
};

/* ===== <script> #4 ===== */
(function(){
/* ===== KEY SYSTEMS ===== */
var VIP_KEYS=[
  "FFVIP-A7K2-M9Q4-X3V8","FFVIP-B5N8-R2T6-P9W1","FFVIP-C9H3-V4L7-K2M5",
  "FFVIP-D6P1-J8F5-Q3N9","FFVIP-E2W7-C9B4-T8K1","FFVIP-F8R4-N3M9-X7P2",
  "FFVIP-G3T9-X6V2-B5L8","FFVIP-H7M2-Q1K8-R4N6","FFVIP-J4N6-P8W3-C2T9",
  "FFVIP-K9Q1-T5R7-V8M3","FFVIP-L2V8-B4P6-N9K5","FFVIP-M5B3-K7N1-W4R8",
  "FFVIP-N8X6-M2V9-Q1J4","FFVIP-P1C4-W8T5-B7N2","FFVIP-Q6J5-R9X3-K2V7"
];
var LAT_KEYS=["FFLAT-9K2-Q7M-X4B","FFLAT-3F8-Z1P-R6T","FFLAT-7H4-W9C-N2V","FFLAT-5J6-L3D-Y8K","FFLAT-2M9-T5R-B7Q","FFLAT-8P1-G4X-H6W","FFLAT-4R7-K2N-J9F","FFLAT-6T3-V8L-C5Z","FFLAT-1W5-M7B-D3S","FFLAT-9Y2-X6H-P4G","FFLAT-3A8-Q9K-R7T","FFLAT-7C4-W2N-V5M","FFLAT-5E6-L8D-Y3B","FFLAT-2G9-T4R-H7Q","FFLAT-8J1-P5X-K6W","FFLAT-4L7-N2F-J9C"];

/* ===== QUOTA SYSTEM ===== */
function ffKeyLimit(k){k=String(k||'').toUpperCase().replace(/\s+/g,'');if(/^FFVIP-/.test(k))return Infinity;if(/^FFLAT-/.test(k))return 1;if(/^FFT1-/.test(k))return 1;if(/^FFT2-/.test(k))return 2;if(/^FFT3-/.test(k))return 3;return 0;}
function ffKeyUsed(k){k=String(k||'').toUpperCase().replace(/\s+/g,'');try{if(/^FFLAT-/.test(k))return localStorage.getItem('fflat_used_'+k)==='1'?1:0;return parseInt(localStorage.getItem('ff_used_'+k)||'0',10);}catch(e){return 0;}}
function ffKeyInc(k){k=String(k||'').toUpperCase().replace(/\s+/g,'');try{if(/^FFLAT-/.test(k)){localStorage.setItem('fflat_used_'+k,'1');return 1;}var cur=ffKeyUsed(k);localStorage.setItem('ff_used_'+k,String(cur+1));return cur+1;}catch(e){return 0;}}
function ffKeyExhausted(k){var limit=ffKeyLimit(k);if(limit===Infinity)return false;return ffKeyUsed(k)>=limit;}
function ffKeyType(k){k=String(k||'').toUpperCase().replace(/\s+/g,'');if(/^FFVIP-/.test(k))return 'vip';if(/^FFLAT-/.test(k))return 'lat';if(/^FFT1-/.test(k))return 't1';if(/^FFT2-/.test(k))return 't2';if(/^FFT3-/.test(k))return 't3';return '';}
function ffGetVipPool(){try{return JSON.parse(localStorage.getItem('ff_vip_pool')||'[]');}catch(e){return [];}}
function ffGenSpinKey(tier){tier=Number(tier)||1;if(tier<1||tier>3)tier=1;var c='0123456789ABCDEF';var hx=function(n){var s='';for(var i=0;i<n;i++)s+=c[Math.floor(Math.random()*16)];return s;};var poolKey='ff_spin_pool_'+tier;var pool=[];try{pool=JSON.parse(localStorage.getItem(poolKey)||'[]');}catch(e){}var k,tries=0;do{k='FFT'+tier+'-'+hx(4)+'-'+hx(4)+'-'+hx(4);tries++;}while(pool.indexOf(k)!==-1&&tries<20);pool.push(k);try{localStorage.setItem(poolKey,JSON.stringify(pool));}catch(e){}return k;}

function isVip(k){k=String(k||'').toUpperCase().replace(/\s+/g,'');if(/^FFVIP-/.test(k)){if(VIP_KEYS.indexOf(k)!==-1)return true;return ffGetVipPool().indexOf(k)!==-1;}var m=k.match(/^FFT([123])-/);if(m){try{var pool=JSON.parse(localStorage.getItem('ff_spin_pool_'+m[1])||'[]');return pool.indexOf(k)!==-1;}catch(e){}}return false;}
function isLat(k){return LAT_KEYS.indexOf(k)!==-1;}
function latUsed(k){return ffKeyExhausted(k);}
function markLat(k){return ffKeyInc(k);}
function getDev(){try{var c=localStorage.getItem("ffdev");if(c&&/^FFDEV-[A-F0-9]{6,}$/.test(c))return c}catch(e){}var id="FFDEV-"+Math.random().toString(16).substring(2,10).toUpperCase();try{localStorage.setItem("ffdev",id)}catch(e){}return id}

var FF_S={key:'',keyType:'',keyLimit:0,keyUsed:0,expireAt:0,vipTimer:null};

async function measurePing(){var pingEl=document.getElementById('ffPing');if(!pingEl)return;var t0=performance.now();try{await fetch('https://www.google.com/generate_204',{mode:'no-cors',cache:'no-store'});var ms=Math.round(performance.now()-t0);pingEl.textContent=ms+'ms';pingEl.style.color=ms<100?'#3dba6e':(ms<300?'#fbbf24':'#f87171');document.getElementById('ffWifi').innerHTML='<b style="color:#3dba6e">Online</b>'}catch(e){pingEl.textContent='--';document.getElementById('ffWifi').innerHTML='<b style="color:#f87171">Offline</b>'}}
setInterval(measurePing,5000);
function P(s){return s.split('|').map(function(x){var p=x.split(':');return{off:parseInt(p[0],16),hex:p[1].trim()}})}

/* ===== HEX DATA ===== */
var HEX_DATA={
necksafe:P("D300:01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:40 DE AB 3B 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00|D600:36 3C BD 3B 00 84 A7 37 00 00 80 B1 00 00 00 00"),
bodysafe:P("5090:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|50A0:00 00 00 00 00 00 00 00 7B F9 6C BD 58 34 09 BB|5420:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|5430:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|55F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|5600:00 00 00 00 00 00 00 00 BC 19 FD BD B0 E3 A9 3A|6290:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|62A0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|6DE0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|6DF0:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|76B0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|76C0:00 00 00 00 00 00 00 00 43 84 DD BC 85 7A B7 BB|7970:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7980:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7D80:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7D90:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|83F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8400:00 00 00 00 02 00 00 00 63 71 B0 BD 90 98 74 BB|8480:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8490:00 00 00 00 01 00 00 00 88 EE 3A BD F0 C5 92 3A"),
zoro:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00|D600:7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
neckdrag:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00|D600:7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
chest:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:51 C6 79 BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 3E 11 CB 3D 72 83 05 3E 00 00 00 00|D600:43 8B 30 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
drag:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 83 C0 CA 3D E4 8C 02 3E 00 00 00 00|D5F0:01 00 00 00 83 C0 CA 3D 72 83 05 3E 00 00 00 00"),
magic:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|CC00:00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F|CC10:30 01 89 3F 02 00 00 00 7D 1A 89 BD 50 26 9F 3B|DE90:00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F|DEA0:30 01 89 3F 00 00 00 00 0A D7 A3 BD 0A D7 23 BC"),
bung:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 57 EF CA 3D E4 8C 02 3E 00 00 00 00|D310:6E 7A FF 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 54 01 CB 3D 72 83 05 3E 00 00 00 00|D600:00 00 00 3E 4E F2 93 3C 00 00 80 B1 00 00 00 00")
};
var AIMVIP_HEX_DATA={
aimneckvip:P("7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD|7150:5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4|7160:23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"),
aimngucvip:P("7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD|7150:5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4|7160:23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"),
ditatvip:P("7660:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 48 69 70|7670:73 00 00 00 A1 58 C3 05 B2 F7 1F A4 E1 2C 3B BD|7970:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|7980:6B 00 00 00 DD 27 31 5B 24 1A 56 78 47 7B 5A BD|A880:62 6F 6E 65 5F 48 69 70 73 00 00 00 A1 58 C3 05|AB40:FF FF 7F 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|AB50:6B 00 00 00 DD 27 31 5B 24 1A 56 78 8F 6E 38 BD"),
dragatenavip:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|64B0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 89 29 C5 BE|7150:16 DC 98 BD BB 82 97 B4 00 00 00 00 BF B2 2F 3F|7160:43 32 73 36 66 03 7B 35 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|9920:00 00 00 00 00 00 00 00 00 00 FA 43 13 13 17 3E|A3D0:10 00 00 00 62 6F 6E 65 5F 71 70 68 75 6E 67 69|A3E0:6F 73 00 00 23 AA A6 B8 46 0A CD 70 85 98 03 BE"),
normalvip:P("64B0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 7A 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB AA 7D 7A BE|7150:24 97 7F BB 00 00 00 00 2A C2 CF 3B AF EC 2B 40|7160:E8 B1 17 BD E3 99 7F 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|9920:00 00 00 00 00 00 00 00 00 00 7A 43 13 13 17 3E"),
bodyvip:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|64F0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB FB F3 BF BE|7150:85 C7 98 BD BD 37 06 B6 00 00 00 00 92 7A 2B 40|7160:BD 37 06 B7 93 1A 5A B7 EF 1B C7 3F EF 1B C7 3F|7170:EF 1B C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"),
headvip:P("7660:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 48 69 70|7670:73 00 00 00 A1 58 C3 05 B2 F7 1F A4 E1 2C 3B BD|7970:00 00 80 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|7980:6B 00 00 00 DD 27 31 5B 24 1A 56 78 47 7B 5A BD|A880:62 6F 6E 65 5F 48 69 70 73 00 00 00 A1 58 C3 05|AB40:FF FF 7F 3F 09 00 00 00 62 6F 6E 65 5F 4E 65 63|AB50:6B 00 00 00 DD 27 31 5B 24 1A 56 78 8F 6E 38 BD"),
aimlockatena:P("64F0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB D7 33 9C BE|7150:BA D7 C9 3C BD 37 06 B6 00 00 00 00 AF EC 2B 40|7160:BD 37 06 B7 93 1A 5A B7 76 1C C7 3F 76 1C C7 3F|7170:76 1C C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4|7400:E8 ED FE E9 1F 3C 84 AE 22 6E A0 BE 17 DC 98 BD|7420:67 03 7B 35 72 1C C7 BF 72 1C C7 3F 00 00 80 3F|7430:18 00 00 00 62 6F 6E 65 5F 48 65 61 64 00 00 00|7440:00 00 00 00 00 00 00 00 00 00 00 00 35 F8 F3 EA|98E0:00 00 00 00 00 00 00 00 00 00 FA 43 43 D7 11 3F|AA40:6A 8F C8 DB 02 E9 B4 BE AE 57 66 BB E8 1E 48 BA|AA50:1B C0 CF 3B 9C FB 28 3D A2 B1 17 BD E4 99 7F 3F|AA60:01 00 C0 BF 01 00 C0 3F FE FF 7F 3F 18 00 00 00|AA70:62 6F 6E 65 5F 48 65 61 64 00 00 00 00 00 00 00|AA80:00 00 00 00 00 00 00 00 C1 83 DB 42 B2 F7 1F A4"),
bungatena:P("64F0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 FA 43|7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 7D AE 36 BD|7150:24 97 7F BB B7 C8 CC B1 2A C2 CF 3B EE A3 42 40|7160:E8 B1 17 BD E3 99 7F 3F 72 1C C7 3F 72 1C C7 3F|7170:72 1C C7 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"),
chestv2vip:P("D300:01 00 00 00 64 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:9F 48 62 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 31 11 CB 3D 72 83 05 3E 00 00 00 00|D600:BD F9 4F 3D 00 84 A7 37 00 00 80 B1 00 00 00 00"),
neckvip:P("D300:01 00 00 00 3B 1C CC 3D 8C E0 0C 3E 00 00 00 00|D310:6C 11 0F 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 B6 AC CB 3D D4 BF 0F 3E 00 00 00 00|D600:7E B8 22 3D 00 84 A7 37 00 00 80 B1 00 00 00 00")
};

var FUNC_THUONG=[{v:'chestv2',n:'Chest V2',ic:'🫀'},{v:'neck',n:'Neck',ic:'🦴'},{v:'necksafe',n:'Neck Safe',ic:'🦴'},{v:'bodysafe',n:'Body Safe',ic:'🧍'},{v:'zoro',n:'Zoro',ic:'⚔️'},{v:'neckdrag',n:'Neck+Drag',ic:'🎣'},{v:'chest',n:'Chest',ic:'🫀'},{v:'drag',n:'Drag',ic:'🎣'},{v:'magic',n:'Magic',ic:'🪄'},{v:'bung',n:'Bụng',ic:'🫃'}];
var FUNC_VIP=[{v:'aimneckvip',n:'Aim Neck',ic:'🦴'},{v:'aimngucvip',n:'Aim Ngực',ic:'🫀'},{v:'ditatvip',n:'Dị Tật',ic:'👹'},{v:'dragatenavip',n:'Drag+Atena',ic:'🌀'},{v:'normalvip',n:'Normal',ic:'⚙️'},{v:'bodyvip',n:'Body',ic:'🧍'},{v:'headvip',n:'Head',ic:'💀'},{v:'aimlockatena',n:'AimLock',ic:'🔒'},{v:'bungatena',n:'Bụng Atena',ic:'🫃'},{v:'chestv2vip',n:'Chest V2',ic:'🫀'},{v:'neckvip',n:'Neck VIP',ic:'🦴'},{v:'cancheckavatar',n:'Cân Check',ic:'🎯',b64:true},{v:'headatena',n:'Head Atena',ic:'💀',b64:true},{v:'neckatena',n:'Neck Atena',ic:'🦴',b64:true},{v:'magicatena',n:'Magic Atena',ic:'🪄',b64:true}];
var DINHVI_FUNCS=[{v:'dinhvinhanvat',n:'Định vị nhân vật',ic:'🎯'},{v:'dinhvisung',n:'Định vị súng',ic:'🔫'}];

/* ===== HOLO BLOBS (user paste from old file) ===== */
var HOLO_BLOB_CHUNG="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";
var XRAY_BLOB = {
  backweapon: "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",
  brmobilebumpspecdecal: "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",
  brmobilebumpspec: "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"
};
/* ⚠️ PASTE FROM OLD FILE */
var HOLO_BLOBS={dinhvinhanvat:[HOLO_BLOB_CHUNG],dinhvisung:[XRAY_BLOB.backweapon,XRAY_BLOB.brmobilebumpspecdecal,XRAY_BLOB.brmobilebumpspec]};

async function ffDecodeHolo(b64){if(!b64)throw new Error('Blob empty');var raw;try{raw=atob(b64);}catch(e){throw new Error('Base64 lỗi');}var bytes=new Uint8Array(raw.length);for(var i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);var modes=['deflate','deflate-raw','gzip'],lastErr='';for(var m=0;m<modes.length;m++){try{var ds=new DecompressionStream(modes[m]);var w=ds.writable.getWriter();w.write(bytes);w.close();var r=ds.readable.getReader(),chunks=[],total=0;while(true){var x=await r.read();if(x.done)break;chunks.push(x.value);total+=x.value.length;}var out=new Uint8Array(total),off=0;for(var c=0;c<chunks.length;c++){out.set(chunks[c],off);off+=chunks[c].length;}return out;}catch(e){lastErr=e.message||'';}}throw new Error('Không giải nén ('+lastErr+')');}
function ffParseHoloBytes(bytes){
  var dataSet=[];
  // 1. Thử đọc dạng Text (Regex linh hoạt hơn)
  var txt=new TextDecoder('utf-8',{fatal:false}).decode(bytes);
  var re=/([0-9A-Fa-f]{3,8})\s*[:\-=|]\s*((?:[0-9A-Fa-f]{2}[\s,]+){1,}[0-9A-Fa-f]{2})/g,m;
  while((m=re.exec(txt))){
    var off=parseInt(m[1],16);
    var hex=m[2].replace(/[^0-9A-Fa-f]/g,' ').replace(/\s+/g,' ').trim();
    if(off>=0&&hex)dataSet.push({off:off,hex:hex});
  }
  if(dataSet.length > 0) return dataSet;

  // 2. Thử đọc dạng Nhị phân (Quét cả Big-Endian và Little-Endian)
  try{
    var dv=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength),i=0;
    while(i+8<=bytes.length){
      var oBE=dv.getUint32(i,false), LBE=dv.getUint32(i+4,false); // Big-Endian
      var oLE=dv.getUint32(i,true), LLE=dv.getUint32(i+4,true);   // Little-Endian
      
      var o=0, L=0;
      // Kiểm tra xem offset/length nào hợp lệ
      if(oBE>0 && oBE<0x2000000 && LBE>0 && LBE<0x800 && (i+8+LBE)<=bytes.length){ o=oBE; L=LBE; }
      else if(oLE>0 && oLE<0x2000000 && LLE>0 && LLE<0x800 && (i+8+LLE)<=bytes.length){ o=oLE; L=LLE; }
      
      if(o>0){
        var hx=[];
        for(var k=0;k<L;k++)hx.push(('0'+bytes[i+8+k].toString(16).toUpperCase()).slice(-2));
        dataSet.push({off:o,hex:hx.join(' ')});
        i+=8+L; // Nhảy qua block dữ liệu này
      } else {
        i+=1; // Quét từng byte một nếu không khớp
      }
    }
  }catch(e){}
  return dataSet;
}
async function ffGetHoloData(func){var blobs=HOLO_BLOBS[func];if(!blobs||!blobs.length)throw new Error('Không có blob '+func);var all=[];for(var i=0;i<blobs.length;i++){if(!blobs[i])continue;try{var bytes=await ffDecodeHolo(blobs[i]);var ds=ffParseHoloBytes(bytes);if(ds&&ds.length)all=all.concat(ds);}catch(e){}}if(!all.length)throw new Error('Không parse được blob '+func);return all;}
async function ffGetB64BlobData(funcName){var el=document.getElementById('b64_'+funcName);if(!el)throw new Error('Không tìm thấy #b64_'+funcName);var b64=(el.textContent||'').trim();if(!b64||/^DÁN_BASE64/.test(b64))throw new Error('Thẻ #b64_'+funcName+' chưa có dữ liệu');var bytes=await ffDecodeHolo(b64);var ds=ffParseHoloBytes(bytes);if(!ds||!ds.length)throw new Error('Không parse được #b64_'+funcName);return ds;}

var activeFunc='',activeType='';

window.renderFuncSelect=function(){var sel=document.getElementById('ffFuncSelect');if(!sel)return;var html='<option value="">-- Chọn chức năng --</option>';html+='<optgroup label="Aim Thường">';FUNC_THUONG.forEach(function(f){html+='<option value="thuong:'+f.v+'">'+f.ic+' '+f.n+'</option>';});html+='</optgroup>';var isVipUser=FF_S.keyType!=='lat';html+='<optgroup label="Aim VIP '+(isVipUser?'':' (Cần Key VIP)')+'">';FUNC_VIP.forEach(function(f){html+='<option value="vip:'+f.v+'"'+(isVipUser?'':' disabled')+'>'+f.ic+' '+f.n+'</option>';});html+='</optgroup>';html+='<optgroup label="Định vị">';DINHVI_FUNCS.forEach(function(f){html+='<option value="dinhvi:'+f.v+'">'+f.ic+' '+f.n+'</option>';});html+='</optgroup>';sel.innerHTML=html;};

window.ffOnFuncChange=function(){var sel=document.getElementById('ffFuncSelect');var val=sel.value;var colorSec=document.getElementById('ffColorSection');if(!val){activeFunc='';activeType='';colorSec.style.display='none';ffUpdateDropzoneMain();return;}var parts=val.split(':');var type=parts[0],func=parts[1];if(type==='vip'&&FF_S.keyType==='lat'){ffToast('⚠ Cần Key VIP');sel.value='';activeFunc='';activeType='';colorSec.style.display='none';ffUpdateDropzoneMain();return;}activeType=type;activeFunc=func;colorSec.style.display=(type==='dinhvi')?'block':'none';ffUpdateDropzoneMain();};

window.ffUpdateDropzoneMain=function(){var drop=document.getElementById('ffFileDropMain');var sub=document.getElementById('ffFileDropMainSub');var info=document.getElementById('ffFileInfoMain');if(!drop)return;var type=activeType||'thuong';var slot=FF_FILE_SLOTS[type];var has=!!(slot&&slot.data&&slot.size);drop.classList.toggle('has-file',has);if(has){sub.textContent=slot.name+' · '+fmtSize(slot.size);var head=slot.data.slice(0,8),hs=[];for(var i=0;i<head.length;i++)hs.push(('0'+head[i].toString(16).toUpperCase()).slice(-2));info.className='file-info show';info.innerHTML='<div class="fi-row"><span class="fi-k">Tên</span><span class="fi-v">'+slot.name+'</span></div><div class="fi-row"><span class="fi-k">Size</span><span class="fi-v">'+fmtSize(slot.size)+' ('+slot.size+' B)</span></div><div class="fi-row"><span class="fi-k">Header</span><span class="fi-v">'+hs.join(' ')+'</span></div>';}else{sub.textContent='Chưa có file';info.className='file-info';info.innerHTML='';}};

window.ffShaderTab=function(tab){document.querySelectorAll('#ffToolOverlay .ff-shader-tab').forEach(function(t){t.classList.toggle('active',t.getAttribute('data-ftab')===tab);});var panels={sung:'ffPanelSung',nv:'ffPanelNv'};Object.keys(panels).forEach(function(k){var el=document.getElementById(panels[k]);if(el)el.classList.toggle('active',k===tab);});};

window.ffShaderSync=function(){var el;if((el=document.getElementById('val_outw')))el.textContent=document.getElementById('sh_outw').value;if((el=document.getElementById('val_xraya')))el.textContent=document.getElementById('sh_xraya').value;if((el=document.getElementById('val_tinta')))el.textContent=document.getElementById('sh_tinta').value;if((el=document.getElementById('val_rima')))el.textContent=document.getElementById('sh_rima').value;if((el=document.getElementById('val_scana')))el.textContent=document.getElementById('sh_scana').value;};

function hexToRGBAfloat(hex,alpha){var r=parseInt(hex.slice(1,3),16)/255.0;var g=parseInt(hex.slice(3,5),16)/255.0;var b=parseInt(hex.slice(5,7),16)/255.0;return[r,g,b,parseFloat(alpha)];}
function floatToHex(val){var buffer=new ArrayBuffer(4);new DataView(buffer).setFloat32(0,val,true);var bytes=new Uint8Array(buffer);return Array.from(bytes).map(function(b){return('0'+b.toString(16).toUpperCase()).slice(-2);}).join(' ');}
function getShaderBytes(){function packRGBA(hex,a){var rgba=hexToRGBAfloat(hex,a);return floatToHex(rgba[0])+' '+floatToHex(rgba[1])+' '+floatToHex(rgba[2])+' '+floatToHex(rgba[3]);}
  var xray=packRGBA(document.getElementById('sh_xray').value,document.getElementById('sh_xraya').value);
  var outline=packRGBA(document.getElementById('sh_outline').value,1.0);
  var dim=packRGBA(document.getElementById('sh_dim').value,1.0);
  var tint=packRGBA(document.getElementById('sh_tint').value,document.getElementById('sh_tinta').value);
  var rim=packRGBA(document.getElementById('sh_rim').value,document.getElementById('sh_rima').value);
  var scan=packRGBA(document.getElementById('sh_scan').value,document.getElementById('sh_scana').value);
  var flags=0;if(document.getElementById('sh_ztest').checked)flags+=1;if(document.getElementById('sh_line').checked)flags+=2;if(document.getElementById('sh_glitch').checked)flags+=4;
  var flagHex=('0'+flags.toString(16).toUpperCase()).slice(-2)+' 00 00 00';
  return{xray:xray,outline:outline,dim:dim,tint:tint,rim:rim,scan:scan,flags:flagHex};}

window.ffConfirmAction=function(){
  if(!activeFunc||!activeType){ffToast('⚠ Vui lòng chọn danh mục');return;}
  var slot=FF_FILE_SLOTS[activeType];
  if(!slot||!slot.data){ffToast('⚠ Vui lòng nạp file gốc');return;}
  if(activeType==='vip'&&FF_S.keyType==='lat'){ffToast('⚠ Cần Key VIP');return;}
  if(ffKeyExhausted(FF_S.key)){var lim=ffKeyLimit(FF_S.key);ffToast('⚠ Hết lượt ('+ffKeyUsed(FF_S.key)+'/'+lim+') — dùng key VIP');return;}
  ffDoPatchSlot(activeType,activeFunc);
};

(function(){var drop=document.getElementById('ffFileDropMain');if(!drop)return;
  function loadFileToSlot(f){if(!f)return;var type=activeType||'thuong';var r=new FileReader();r.onload=function(){var slot=FF_FILE_SLOTS[type];if(slot.url)try{URL.revokeObjectURL(slot.url)}catch(e){}slot.name=f.name;slot.size=r.result.byteLength;slot.type=f.type||'application/octet-stream';slot.data=new Uint8Array(r.result);slot.url=null;ffUpdateDropzoneMain();ffToast('📥 Đã nạp '+f.name);};r.readAsArrayBuffer(f);}
  drop.addEventListener('click',function(){var tmp=document.getElementById('ffFilePickTmp');if(!tmp){tmp=document.createElement('input');tmp.type='file';tmp.id='ffFilePickTmp';tmp.style.display='none';document.getElementById('ffToolOverlay').appendChild(tmp);}tmp.value='';tmp.onchange=function(){loadFileToSlot(tmp.files&&tmp.files[0]);};tmp.click();});
  drop.addEventListener('dragover',function(e){e.preventDefault();drop.classList.add('drag');});
  drop.addEventListener('dragleave',function(){drop.classList.remove('drag');});
  drop.addEventListener('drop',function(e){e.preventDefault();drop.classList.remove('drag');loadFileToSlot(e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0]);});
  drop.addEventListener('paste',function(e){var items=e.clipboardData&&e.clipboardData.items;if(!items)return;for(var i=0;i<items.length;i++){if(items[i].kind==='file'){loadFileToSlot(items[i].getAsFile());e.preventDefault();return;}}});
})();

window.ffOpenGate=function(){
  try{if(FF_S.key&&!ffKeyExhausted(FF_S.key)){if(isVip(FF_S.key)||isLat(FF_S.key)){ffOpenTool();return;}}}catch(e){}
  var gi=document.getElementById('ffGateInput');var gm=document.getElementById('ffGateMsg');
  if(gm){gm.className='gate-msg';gm.textContent='';}
  if(gi){gi.value='';}
  document.getElementById('ffGateModal').classList.add('on');
  setTimeout(function(){try{gi&&gi.focus();}catch(e){}},120);
};
document.getElementById('ffGateModal').addEventListener('click',function(e){if(e.target===this)window.ffCloseGate();});
document.getElementById('ffGateInput').addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();window.ffSubmitGate();}});

window.ffCloseGate=function(){document.getElementById('ffGateModal').classList.remove('on');var gm=document.getElementById('ffGateMsg');if(gm){gm.className='gate-msg';gm.textContent='';}var gi=document.getElementById('ffGateInput');if(gi)gi.value='';};
function gateMsg(txt,cls){var b=document.getElementById('ffGateMsg');if(!b)return;b.className='gate-msg '+cls;b.textContent=txt;}
function logout(msg){clearTimeout(FF_S.vipTimer);FF_S.key='';FF_S.keyType='';FF_S.keyLimit=0;FF_S.keyUsed=0;FF_S.expireAt=0;sessionStorage.removeItem('ff_key');sessionStorage.removeItem('ff_key_type');sessionStorage.removeItem('ff_expire');document.getElementById('ffToolOverlay').classList.remove('on');document.body.style.overflow='';if(window.render)window.render();if(msg)toast(msg);}

window.ffSubmitGate=function(){
  var key=(document.getElementById('ffGateInput').value||'').trim().toUpperCase().replace(/\s+/g,'');
  if(!key){gateMsg('Vui lòng nhập Key.','bad');return;}
  var v=isVip(key),l=isLat(key);
  if(!v&&!l){gateMsg('Key không hợp lệ.','bad');return;}
  if(ffKeyExhausted(key)){var lim=ffKeyLimit(key);var usd=ffKeyUsed(key);var emoji=/^FFVIP-/.test(key)?'👑':(/^FFLAT-/.test(key)?'🔑':'🎲');gateMsg('🔒 Key '+emoji+' đã dùng hết '+usd+'/'+lim+' lượt. Không thể sử dụng lại!','bad');return;}
  var ty=ffKeyType(key);
  FF_S.key=key;FF_S.keyType=ty;FF_S.keyLimit=ffKeyLimit(key);FF_S.keyUsed=ffKeyUsed(key);FF_S.expireAt=Date.now()+15*60*1000;
  try{sessionStorage.setItem('ff_key',key);sessionStorage.setItem('ff_key_type',ty);sessionStorage.setItem('ff_expire',String(FF_S.expireAt));}catch(e){}
  try{var vInfo=(typeof TOOL_VERSION!=='undefined'?' · v'+TOOL_VERSION:'');TG.send(TG.tpl.login(key,ty)+vInfo);}catch(e){}
  var okMsg=ty==='vip'?'👑 VIP OK · ∞':ty==='lat'?'✅ LAT OK · 1 file':ty==='t3'?'🎲 T3 OK · 3 file':ty==='t2'?'🎲 T2 OK · 2 file':'🎲 T1 OK · 1 file';
  gateMsg(okMsg,'ok');
  setTimeout(function(){ffCloseGate();ffOpenTool();if(window.render)window.render();},700);
};

window.ffOpenTool=function(){
  if(FF_S.key&&ffKeyExhausted(FF_S.key)){var lim=ffKeyLimit(FF_S.key);var usd=ffKeyUsed(FF_S.key);toast('🔒 Key đã hết '+usd+'/'+lim+' lượt. Dùng key mới!');logout('Key đã hết hạn!');return;}
  document.getElementById('ffToolOverlay').classList.add('on');
  document.body.style.overflow='hidden';
  renderFuncSelect();activeFunc='';activeType='';
  var sel=document.getElementById('ffFuncSelect');if(sel)sel.value='';
  var colorSec=document.getElementById('ffColorSection');if(colorSec)colorSec.style.display='none';
  ffUpdateDropzoneMain();updateHero();measurePing();
  if(FF_S.keyType==='vip'){var remain=FF_S.expireAt-Date.now();if(remain<=0){logout('Phiên VIP hết hạn!');return;}clearTimeout(FF_S.vipTimer);FF_S.vipTimer=setTimeout(function(){logout('Đã hết 15 phút. Nhập lại Key VIP!');},remain);}
};

window.ffCloseTool=function(){document.getElementById('ffToolOverlay').classList.remove('on');document.body.style.overflow='';};

function updateHero(){
  var k=FF_S.key,ty=FF_S.keyType;
  var labelMap={'vip':'👑 VIP','lat':'🔑 LAT','t1':'🎲 T1','t2':'🎲 T2','t3':'🎲 T3'};
  document.getElementById('ffHeroLbl').textContent=labelMap[ty]||'🔑';
  var exhausted=ffKeyExhausted(k);
  var statusMap={'vip':'● VIP','lat':'🔑 LAT','t1':'● T1','t2':'● T2','t3':'● T3'};
  document.getElementById('ffHeroStatus').textContent=exhausted?'● EXPIRED':(statusMap[ty]||'● ACTIVE');
  document.getElementById('ffHeroStatus').className='hero-status '+(ty==='vip'?'vip':(exhausted?'exp':''));
  document.getElementById('ffPill').textContent=ty==='vip'?'● VIP':(exhausted?'● HẾT LƯỢT':'● '+ty.toUpperCase());
  document.getElementById('ffPill').className='tool-pill '+(ty==='vip'?'vip':'');
  document.getElementById('ffDev').textContent=getDev();
  var q=document.getElementById('ffQuota'),qh=document.getElementById('ffQuotaHint');
  if(q&&qh){var limit=ffKeyLimit(k),used=ffKeyUsed(k);
    if(limit===Infinity){q.innerHTML='<span style="color:#3dba6e;font-weight:900">∞ Vô hạn</span>';qh.textContent='(VIP · không giới hạn)';qh.style.color='#6ee7b7';}
    else{var remain=Math.max(0,limit-used);var color=remain<=0?'#f87171':(remain===limit?'#fbbf24':'#3dba6e');q.innerHTML='<span style="color:'+color+';font-weight:900">'+remain+' / '+limit+'</span>';qh.textContent=remain>0?'(còn '+remain+' file)':'(đã hết lượt)';qh.style.color=remain>0?'#fde68a':'#fca5a5';}
  }
  var banner=document.getElementById('ffExhaustedBanner'),bmsg=document.getElementById('ffExhaustedMsg'),confirmBtn=document.querySelector('.ff-confirm-btn');
  var isExh=exhausted&&ty!=='vip';
  if(banner&&bmsg){if(isExh){var lim=ffKeyLimit(k),usd=ffKeyUsed(k);banner.style.display='block';bmsg.textContent='Key này đã dùng hết '+usd+'/'+lim+' lượt. Không thể tải thêm file.';}else{banner.style.display='none';}}
  if(confirmBtn){confirmBtn.disabled=isExh;confirmBtn.style.opacity=isExh?'0.4':'1';confirmBtn.style.cursor=isExh?'not-allowed':'pointer';}
}

window.__ffDownloads=function(){try{return JSON.parse(localStorage.getItem('ff_downloads')||'[]')}catch(e){return[]}};
function addDownload(item){try{var a=window.__ffDownloads();a.unshift(Object.assign({time:Date.now()},item));if(a.length>50)a=a.slice(0,50);localStorage.setItem('ff_downloads',JSON.stringify(a))}catch(e){}}

var FF_FILE_SLOTS={thuong:{name:'',size:0,type:'',data:null,url:null},vip:{name:'',size:0,type:'',data:null,url:null},dinhvi:{name:'',size:0,type:'',data:null,url:null}};
function fmtSize(b){if(!b&&b!==0)return'—';if(b===0)return'0 B';var k=1024,s=['B','KB','MB','GB'],i=Math.floor(Math.log(b)/Math.log(k));return (b/Math.pow(k,i)).toFixed(2)+' '+s[i];}
async function ffDoPatchSlot(type,func){var slot=FF_FILE_SLOTS[type];var fake={name:slot.name,arrayBuffer:function(){var copy=slot.data.slice();return Promise.resolve(copy.buffer);}};return ffDoPatch(fake,type,func,true);}
function hexToBytes(hex){var o=[],p=String(hex||'').trim().split(/\s+/);for(var i=0;i<p.length;i++)if(/^[0-9A-Fa-f]{2}$/.test(p[i]))o.push(parseInt(p[i],16));return new Uint8Array(o);}
function findFirst(buf,pat,start){start=start||0;var bL=buf.length,pL=pat.length;if(!pL||pL>bL)return-1;outer:for(var i=start;i<=bL-pL;i++){for(var j=0;j<pL;j++)if(buf[i+j]!==pat[j])continue outer;return i;}return -1;}

async function ffDoPatch(file,type,func,saveBack){
  if(FF_S.key&&ffKeyExhausted(FF_S.key)&&FF_S.keyType!=='vip'){ffToast('🔒 Key hết hạn');return;}
  var dataSet=null;
  if(type==='thuong'){dataSet=HEX_DATA[func];}
  else if(type==='vip'){
    var funcDef=FUNC_VIP.find(function(f){return f.v===func;});
    if(funcDef&&funcDef.b64){try{dataSet=await ffGetB64BlobData(func);}catch(err){ffToast('❌ '+err.message);return;}}
    else{dataSet=AIMVIP_HEX_DATA[func];}
  }
  else if(type==='dinhvi'){
    try{
      dataSet=await ffGetHoloData(func);
      var shBytes=getShaderBytes();
      dataSet.push({off:0x200,hex:shBytes.xray});
      dataSet.push({off:0x210,hex:shBytes.outline});
      dataSet.push({off:0x220,hex:shBytes.dim});
      dataSet.push({off:0x300,hex:shBytes.tint});
      dataSet.push({off:0x310,hex:shBytes.rim});
      dataSet.push({off:0x320,hex:shBytes.scan});
      dataSet.push({off:0x400,hex:shBytes.flags});
    }catch(err){ffToast('❌ '+err.message);return;}
  }
  if(!dataSet||!dataSet.length){ffToast('❌ Không có dữ liệu');return;}
  var ov=document.getElementById('ffLoading');ov.classList.add('on');
  var pct=document.getElementById('ffProcPct'),fill=document.getElementById('ffProcFill');
  var prog=setInterval(function(){var v=Math.min(parseInt(pct.textContent)+7,95);pct.textContent=v;fill.style.width=v+'%';},120);
  try{
    var buf=new Uint8Array(await file.arrayBuffer());var out=buf.slice(),soGhi=0,soLoi=0;
    for(var i=0;i<dataSet.length;i++){
      var m=dataSet[i],pb=hexToBytes(m.hex);
      if(!pb.length){soLoi++;continue;}
      var done=false;
      if(m.off>=0&&m.off+pb.length<=out.length){try{out.set(pb,m.off);done=true;}catch(e){}}
      if(!done){var pos=findFirst(out,pb,0);if(pos!==-1){try{out.set(pb,pos);done=true;}catch(e){}}}
      if(done)soGhi++;else soLoi++;
    }
    var outName='ff_'+file.name;
    var url=URL.createObjectURL(new Blob([out],{type:'application/octet-stream'}));
    window.__lastPatchResult={url:url,name:outName,size:fmtSize(out.length)};
    var isErr=soGhi===0,funcName=func;
    try{var src=type==='thuong'?FUNC_THUONG:type==='vip'?FUNC_VIP:DINHVI_FUNCS;var fm=src.find(function(x){return x.v===func;});if(fm)funcName=fm.n+' ('+func+')';}catch(e){}
    try{TG.send(TG.tpl.patch(funcName,file.name,soGhi,soLoi,dataSet.length));}catch(e){}
    var zone=document.getElementById('resMain');
    if(zone){
      zone.className='res-zone show'+(isErr?' err':'');
      var titleStr=isErr?'❌ PATCH THẤT BẠI':'✅ PATCH THÀNH CÔNG';
      zone.innerHTML='<div class="r-title">'+titleStr+'</div><table class="res-tbl"><tr><td class="c-lbl">Tổng offset:</td><td class="c-val">'+dataSet.length+'</td></tr><tr><td class="c-lbl">Thành công:</td><td class="c-val c-ok">'+soGhi+'</td></tr><tr><td class="c-lbl">Thất bại:</td><td class="c-val c-err">'+soLoi+'</td></tr><tr><td class="c-lbl">File:</td><td class="c-val" style="font-size:10px;word-break:break-all">'+outName+'</td></tr></table>'+(isErr?'':'<a class="btn-dl" href="'+url+'" download="'+outName+'" data-tg-dl="'+outName+'" data-tg-size="'+fmtSize(out.length)+'">⬇ TẢI FILE VỀ MÁY</a>');
    }
    if(soGhi>0){
      addDownload({fileName:outName,size:fmtSize(out.length),func:func,type:type});
      if(FF_S.keyType!=='vip'){
        var newUsed=ffKeyInc(FF_S.key);FF_S.keyUsed=newUsed;
        var limit=ffKeyLimit(FF_S.key);
        if(newUsed>=limit){
          ffToast('🔒 Đã dùng hết '+newUsed+'/'+limit+' · Key hết hạn!');
          updateHero();
          setTimeout(function(){logout('🔒 Key đã hết hạn sau khi tải. Nhập key mới!');},3000);
        }else{ffToast('✅ Còn '+(limit-newUsed)+'/'+limit+' lượt');updateHero();}
      }else{ffToast('✅ OK · '+soGhi+' offsets · 👑 VIP ∞');updateHero();}
      if(type==='dinhvi'){var dlBtn=document.getElementById('ffDownloadDinhViBtn');if(dlBtn)dlBtn.style.display='block';}
    }else{ffToast('❌ Lỗi: Không ghi được offset');}
    clearInterval(prog);pct.textContent='100';fill.style.width='100%';
    setTimeout(function(){ov.classList.remove('on');pct.textContent='0';fill.style.width='0%';},600);
    if(saveBack&&soGhi>0){try{var s=FF_FILE_SLOTS[type];if(s.url){try{URL.revokeObjectURL(s.url)}catch(e){}}s.name=outName;s.size=out.length;s.type='application/octet-stream';s.data=new Uint8Array(out);s.url=null;ffUpdateDropzoneMain();}catch(e){}}
  }catch(err){clearInterval(prog);ov.classList.remove('on');ffToast('❌ '+(err.message||'Lỗi'));try{TG.send(TG.tpl.error('ffDoPatch',err.message||err));}catch(e){}}
}

window.ffDownloadLastPatch=function(){var r=window.__lastPatchResult;if(!r||!r.url){ffToast('⚠ Chưa có file patch');return;}var a=document.createElement('a');a.href=r.url;a.download=r.name;document.body.appendChild(a);a.click();a.remove();try{TG.send(TG.tpl.downloadPatch(r.name,r.size));}catch(e){}};

document.addEventListener('click',function(e){var a=e.target.closest('a[data-tg-dl]');if(a){try{TG.send(TG.tpl.downloadPatch(a.getAttribute('data-tg-dl'),a.getAttribute('data-tg-size')));}catch(err){}}});

document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(document.getElementById('ffGateModal').classList.contains('on'))ffCloseGate();else if(document.getElementById('ffToolOverlay').classList.contains('on'))ffCloseTool();}});

window.ffToast=function(msg){var el=document.getElementById('ffToast');if(!el){toast(msg);return;}el.textContent=msg;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(function(){el.classList.remove('show');},3000);};

/* ===== RESTORE SESSION ===== */
try{
  var sk=sessionStorage.getItem('ff_key'),st=sessionStorage.getItem('ff_key_type'),ex=sessionStorage.getItem('ff_expire');
  if(sk&&ex&&Number(ex)>Date.now()&&(isVip(sk)||isLat(sk))){
    if(!ffKeyExhausted(sk)){
      FF_S.key=sk;FF_S.keyType=st||ffKeyType(sk);FF_S.keyLimit=ffKeyLimit(sk);FF_S.keyUsed=ffKeyUsed(sk);FF_S.expireAt=Number(ex);
    }else{
      sessionStorage.removeItem('ff_key');sessionStorage.removeItem('ff_key_type');sessionStorage.removeItem('ff_expire');
    }
  }
}catch(e){}

/* ===== BACKGROUND CHECK ===== */
setInterval(function(){
  if(!FF_S.key)return;
  if(FF_S.keyType==='vip')return;
  if(!ffKeyExhausted(FF_S.key))return;
  var ov=document.getElementById('ffToolOverlay');
  if(ov&&ov.classList.contains('on')){logout('🔒 Key đã hết hạn (đã dùng hết lượt)!');}
  else{clearTimeout(FF_S.vipTimer);FF_S.key='';FF_S.keyType='';FF_S.expireAt=0;FF_S.keyLimit=0;FF_S.keyUsed=0;try{sessionStorage.removeItem('ff_key');sessionStorage.removeItem('ff_key_type');sessionStorage.removeItem('ff_expire');}catch(e){}if(window.render)window.render();}
},2000);

/* ===== EXPOSE ===== */
window.ffGenSpinKey=ffGenSpinKey;
window.ffKeyLimit=ffKeyLimit;
window.ffKeyUsed=ffKeyUsed;
window.ffKeyExhausted=ffKeyExhausted;
window.__ffState=function(){return{keyType:FF_S.keyType,key:FF_S.key,expireAt:FF_S.expireAt};};
window.__ffLatUsed=function(k){return latUsed(k);};

/* ===== WEATHER ===== */
window.showWeather=async function(){
  modal('<div style="text-align:center;padding:20px"><div style="font-size:32px;margin-bottom:10px">⏳</div><div class="mut">Đang tải thời tiết 63 tỉnh...</div></div>');
  try{
    var lats="21.0285,10.8231,20.8449,16.0544,10.0452,10.5216,10.5417,21.2731,22.1470,9.2941,21.1861,10.2433,13.7829,11.3254,11.7511,10.9289,9.1769,22.6657,12.7100,12.2646,21.3860,10.9574,10.4938,13.8078,22.8025,20.5835,18.3559,20.9373,9.7579,20.8171,20.6463,12.2585,10.0124,14.3497,22.3862,11.5753,21.8537,22.4809,10.6955,20.4388,19.2342,20.2506,11.6738,21.2684,13.0882,17.4690,15.5394,15.1213,21.0064,16.7940,9.6037,21.3256,11.3351,20.4463,21.5671,19.8067,16.4637,10.4493,9.9477,21.7767,10.2537,21.3609,21.7168";
    var lons="105.8542,106.6297,106.6881,108.2022,105.7469,105.1259,107.2429,106.1946,105.8348,105.7216,106.0763,106.3756,109.2196,106.4770,106.7234,108.1021,105.1524,106.2522,108.2378,107.6098,103.0230,106.8426,105.6881,108.1092,104.9784,105.9230,105.8877,106.3145,105.6412,105.3376,106.0511,109.0525,105.0809,108.0005,103.4702,108.1429,106.7615,103.9754,106.2431,106.1621,104.9200,105.9745,108.8629,105.2045,109.0928,106.6222,108.0191,108.8044,107.2925,107.1854,105.9800,103.9188,106.1092,106.3365,105.8252,105.7851,107.5909,106.3428,106.3428,105.2280,105.9722,105.5474,104.8986";
    var r=await fetch('https://api.open-meteo.com/v1/forecast?latitude='+lats+'&longitude='+lons+'&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,apparent_temperature&timezone=Asia/Ho_Chi_Minh');
    var data=await r.json();
    var CITIES=["Hà Nội","TP.HCM","Hải Phòng","Đà Nẵng","Cần Thơ","An Giang","BR-Vũng Tàu","Bắc Giang","Bắc Kạn","Bạc Liêu","Bắc Ninh","Bến Tre","Bình Định","Bình Dương","Bình Phước","Bình Thuận","Cà Mau","Cao Bằng","Đắk Lắk","Đắk Nông","Điện Biên","Đồng Nai","Đồng Tháp","Gia Lai","Hà Giang","Hà Nam","Hà Tĩnh","Hải Dương","Hậu Giang","Hòa Bình","Hưng Yên","Khánh Hòa","Kiên Giang","Kon Tum","Lai Châu","Lâm Đồng","Lạng Sơn","Lào Cai","Long An","Nam Định","Nghệ An","Ninh Bình","Ninh Thuận","Phú Thọ","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Ninh","Quảng Trị","Sóc Trăng","Sơn La","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","TT Huế","Tiền Giang","Trà Vinh","Tuyên Quang","Vĩnh Long","Vĩnh Phúc","Yên Bái"];
    var rows=[],html='<div style="text-align:center;margin-bottom:12px"><b style="font-size:16px;color:var(--ink)">🌤 Thời Tiết 63 Tỉnh</b></div><div style="max-height:62vh;overflow-y:auto;display:grid;grid-template-columns:1fr 1fr;gap:6px">';
    for(var i=0;i<CITIES.length;i++){var cur=data[i]&&data[i].current||{};var temp=cur.temperature_2m!=null?cur.temperature_2m:'?';var hum=cur.relative_humidity_2m!=null?cur.relative_humidity_2m:'?';var rain=cur.precipitation!=null?cur.precipitation:0;var code=cur.weather_code!=null?cur.weather_code:-1;
      rows.push({name:CITIES[i],temp:temp,hum:hum,rain:rain,code:code,apparent:temp});
      html+='<div style="background:var(--card);border:1px solid var(--line);border-radius:8px;padding:8px;display:flex;flex-direction:column;gap:2px"><div style="font-size:11.5px;font-weight:700">'+CITIES[i]+'</div><div style="font-size:10px;color:var(--mute);font-family:ui-monospace,monospace">🌡 <b style="color:#22d3ee">'+temp+'°</b> · 💧'+hum+'% · ☔'+rain+'mm</div></div>';}
    html+='</div><button style="width:100%;padding:12px;margin-top:10px;border-radius:12px;background:rgba(255,255,255,.06);font-weight:800;border:0;cursor:pointer" onclick="modal(0)">Đóng</button>';
    modal(html);
    try{TG.send(TG.tpl.weather63(rows));}catch(e){}
  }catch(e){modal('<div style="text-align:center;padding:20px;color:#f87171">Lỗi: '+esc(e.message||e)+'</div>');}
};
})();
