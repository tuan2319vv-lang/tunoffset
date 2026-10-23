/* ===== <script> #1 ===== */
(function(){"use strict";try{
function P(s){return s.split('|').map(function(x){var p=x.split(':');return {off:parseInt(p[0],16),hex:p[1].trim()}})}
window.__HEX_DATA = {
  chestv2:P("D300:01 00 00 00 64 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:9F 48 62 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 31 11 CB 3D 72 83 05 3E 00 00 00 00|D600:BD F9 4F 3D 00 84 A7 37 00 00 80 B1 00 00 00 00"),
  neck:P("D300:01 00 00 00 3B 1C CC 3D 8C E0 0C 3E 00 00 00 00|D310:6C 11 0F 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 B6 AC CB 3D D4 BF 0F 3E 00 00 00 00|D600:7E B8 22 3D 00 84 A7 37 00 00 80 B1 00 00 00 00"),
  necksafe:P("D300:01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:40 DE AB 3B 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00|D600:36 3C BD 3B 00 84 A7 37 00 00 80 B1 00 00 00 00"),
  bodysafe:P("5090:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|50A0:00 00 00 00 00 00 00 00 7B F9 6C BD 58 34 09 BB|5420:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|5430:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|55F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|5600:00 00 00 00 00 00 00 00 BC 19 FD BD B0 E3 A9 3A|6290:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|62A0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|6DE0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|6DF0:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|76B0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|76C0:00 00 00 00 00 00 00 00 43 84 DD BC 85 7A B7 BB|7970:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7980:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7D80:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|7D90:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|83F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8400:00 00 00 00 02 00 00 00 63 71 B0 BD 90 98 74 BB|8480:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8490:00 00 00 00 01 00 00 00 88 EE 3A BD F0 C5 92 3A|8870:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|8880:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|8A90:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|8AA0:00 00 00 00 00 00 00 00 71 02 87 BD 90 FD D7 BA|9250:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|9260:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|9620:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|9630:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|A090:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|A0A0:00 00 00 00 00 00 00 00 54 1B 87 BD 90 C6 D7 BA|B0A0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|B0B0:00 00 00 00 00 00 00 00 22 D1 C1 BD E0 1B 1F BB|B9F0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|BA00:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|C0F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|C100:00 00 00 00 00 00 00 00 B2 59 C0 BD 24 CF 88 3B|C3F0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|C400:00 00 00 00 00 00 00 00 1F 93 DB BC 90 BF 84 3A|C4B0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|C4C0:00 00 00 00 00 00 00 00 92 CB F7 BD 3D 53 B4 BC|CC00:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|CC10:00 00 00 00 02 00 00 00 7D 1A 89 BD 50 26 9F 3B|CE50:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|CE60:00 00 00 00 00 00 00 00 F4 8C 79 BD 70 56 77 3B|D0D0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|D0E0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|D300:01 00 00 00 72 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:60 5B FF 3D 03 D1 93 3C 80 99 EF B9 00 00 00 00|D5F0:01 00 00 00 41 11 CB 3D 72 83 05 3E 00 00 00 00|D600:0B 26 FE 3D AE 83 83 3C 07 45 F3 B9 00 00 00 00|D870:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|D880:00 00 00 00 00 00 00 00 E2 A8 99 BD B0 84 BF 3A|DA90:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|DAA0:00 00 00 00 00 00 00 00 11 E7 F2 BD AD 9A 04 BC|DE90:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|DEA0:00 00 00 00 00 00 00 00 0A D7 A3 BD 0A D7 23 BC|DF80:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|DF90:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|E330:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|E340:00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00|EE00:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|EE10:00 00 00 00 00 00 00 00 EF A3 00 BE 40 B9 92 39|EE40:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|EE50:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|EFF0:00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00|F000:00 00 00 00 00 00 00 00 AC 8F F9 BD D8 B7 3D BB|F030:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F040:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F2D0:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F2E0:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00|F620:00 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00|F630:00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00"),
  zoro:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00|D600:7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
  neckdrag:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:B5 8F 8F BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 FD C3 CA 3D 72 83 05 3E 00 00 00 00|D600:7D B6 A7 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
  chest:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 59 DF CA 3D E4 8C 02 3E 00 00 00 00|D310:51 C6 79 BC 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 3E 11 CB 3D 72 83 05 3E 00 00 00 00|D600:43 8B 30 BC 00 84 A7 37 00 00 80 B1 00 00 00 00"),
  drag:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|D300:01 00 00 00 83 C0 CA 3D E4 8C 02 3E 00 00 00 00|D5F0:01 00 00 00 83 C0 CA 3D 72 83 05 3E 00 00 00 00"),
  magic:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|CC00:00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F|CC10:30 01 89 3F 02 00 00 00 7D 1A 89 BD 50 26 9F 3B|DE90:00 00 00 00 00 00 00 00 01 00 00 00 30 01 89 3F|DEA0:30 01 89 3F 00 00 00 00 0A D7 A3 BD 0A D7 23 BC"),
  bung:P("10:78 00 32 30 32 32 2E 33 2E 34 37 66 31 00 00 00|B0:32 30 32 32 2E 33 2E 34 37 66 31 00 09 00 00 00|50A0:2C CD 1E 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|50B0:62 96 04 3C 00 00 00 00 02 00 00 00 00 00 00 00|5440:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|5600:EC FE 54 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|5610:62 96 04 3C 00 00 00 00 02 00 00 00 00 00 00 00|62B0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|6E00:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|76C0:9C CF 8C 3D 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|76D0:62 96 04 3C 00 00 00 00 04 00 00 00 00 00 00 00|7990:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|7DA0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|8400:F0 87 3F 3E 02 00 00 00 00 00 10 C1 EA 3D 1E 3B|8410:62 96 04 3C 00 00 00 00 00 00 00 00 EA 77 D4 17|8490:56 9B 88 3D 01 00 00 00 00 00 10 C1 EA 3D 1E 3B|84A0:62 96 04 3C 00 00 00 00 00 00 00 00 24 8C DE 2F|8890:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|8AA0:65 4B 0A 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|8AB0:62 96 04 3C 00 00 00 00 00 00 00 00 A9 D8 55 F0|9640:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|A0A0:54 63 0A 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|A0B0:62 96 04 3C 00 00 00 00 00 00 00 00 05 79 A2 2F|B0B0:90 C4 88 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|B0C0:62 96 04 3C 00 00 00 00 00 00 00 00 84 4B 83 C3|BA10:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|C100:EE 9D 11 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|C110:62 96 04 3C 00 00 00 00 00 00 00 00 C9 16 F7 1D|C400:FE 75 7C 3D 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|C410:62 96 04 3C 00 00 00 00 00 00 00 00 46 C3 E2 66|C4C0:0A 64 62 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|C4D0:62 96 04 3C 00 00 00 00 00 00 00 00 3B F6 AB A8|CC10:0D 3B 38 3E 02 00 00 00 00 00 10 C1 EA 3D 1E 3B|CC20:62 96 04 3C 00 00 00 00 00 00 00 00 5F 5B E8 F7|CE60:92 62 D0 3D 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|CE70:62 96 04 3C 00 00 00 00 00 00 00 00 09 AD 39 BF|D0F0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|D300:01 00 00 00 57 EF CA 3D E4 8C 02 3E 00 00 00 00|D310:6E 7A FF 3D 27 C1 8B 3C C0 D0 F8 B9 00 00 00 00|D5F0:01 00 00 00 54 01 CB 3D 72 83 05 3E 00 00 00 00|D600:00 00 00 3E 4E F2 93 3C 00 00 80 B1 00 00 00 00|D880:44 46 05 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|D890:62 96 04 3C 00 00 00 00 00 00 00 00 F4 90 6D 91|DAA0:DE BA 60 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|DAB0:62 96 04 3C 00 00 00 00 00 00 00 00 BE 35 46 2D|DEA0:7B 14 2E 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|DEB0:62 96 04 3C 00 00 00 00 00 00 00 00 48 02 47 8C|DFA0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|E350:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|EE60:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|F000:6E 49 60 3E 00 00 00 00 00 00 10 C1 EA 3D 1E 3B|F010:62 96 04 3C 00 00 00 00 00 00 00 00 46 C3 E2 66|F050:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00|F2F0:00 00 10 C1 EA 3D 1E 3B 62 96 04 3C 00 00 00 00")
};
console.log("%c[P11] 10 func thường","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P11 fatal]",e)}})();

/* ===== <script> #2 ===== */
(function(){"use strict";try{
function P(s){return s.split('|').map(function(x){var p=x.split(':');return {off:parseInt(p[0],16),hex:p[1].trim()}})}
window.__AIMVIP_HEX_DATA = {
  aimneckvip:P("7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD|7150:5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4|7160:23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F|7170:00 00 C0 3F 10 00 00 00 62 6F 6E 65 5F 48 65 61|7180:64 00 00 00 00 00 00 00 23 AA A6 B8 B2 F7 1F A4"),
  aimngucvip:P("7140:74 54 6F 65 55 17 F9 B4 31 69 74 EB 9B 92 2E BD|7150:5B 01 76 BB 14 FE CC B1 CF 28 B8 AA 15 EB A8 B4|7160:23 53 E8 3D F5 58 7E 3F 00 00 C0 3F 00 00 C0 3F|7400:E8 ED FE E9 1F 3C 84 AE 0E 15 97 BE 16 DC 98 BD|7410:BB 82 97 B4 00 00 00 00 BF B2 2F 3F 43 32 73 36|7420:66 03 7B 35 66 66 C6 3F 66 66 C6 3F CD CC CC 3F|A3A0:55 17 F9 B4 31 69 74 EB A6 9B 98 BE 66 8E 81 BB|A3B0:B8 FE CC B1 00 00 00 00 BF B2 2F 3F 43 32 73 36|A3C0:66 03 7B 35 9A 99 C0 3F 00 00 C0 3F 00 00 C0 3F|AA40:6A 8F C8 DB 0E 15 97 BE 16 DC 98 BD BB 82 97 B4"),
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
window.__getB64Func = function(funcName){
  var el=document.getElementById('b64_'+funcName);
  if(!el) return null;
  var raw=(el.textContent||'').trim();
  if(!raw || raw.length<20 || raw==='__EMPTY__' || raw.indexOf('DÁN_')!==-1) return null;
  return raw;
};
console.log("%c[P12] 12 func VIP + 4 b64 slot","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P12 fatal]",e)}})();

/* ===== <script> #3 ===== */
(function(){"use strict";try{
window.__CFG = {
  tgBot:"8508776837",
  tgGroup:"-1004346328616",
  zaloPhone:"0332288491",
  zaloLink:"https://zalo.me/0332288491",
  botToken:"8932128073:AAFI9KrBmCAJ14djh0ZyGO25H4KLzNskAoI",
  get tgChats(){
    var a=[];
    if(this.tgBot) a.push(this.tgBot);
    if(this.tgGroup && this.tgGroup!==this.tgBot) a.push(this.tgGroup);
    return a;
  }
};

window.__LAT_KEYS = ["LAT-9K2-Q7M-X4B","LAT-3F8-Z1P-R6T","LAT-7H4-W9C-N2V","LAT-5J6-L3D-Y8K","LAT-2M9-T5R-B7Q","LAT-8P1-G4X-H6W","LAT-4R7-K2N-J9F","LAT-6T3-V8L-C5Z","LAT-1W5-M7B-D3S","LAT-9Y2-X6H-P4G","LAT-3A8-Q9K-R7T","LAT-7C4-W2N-V5M","LAT-5E6-L8D-Y3B","LAT-2G9-T4R-H7Q","LAT-8J1-P5X-K6W","LAT-4L7-N2F-J9C"];
window.__VIP_KEYS = ["VIP-301-Q7M-X2K","VIP-302-B4T-R9P","VIP-303-H8L-V3C","VIP-304-N2S-D7Q","VIP-305-X5F-K8M","VIP-306-J9R-P2T","VIP-307-C3W-B6N","VIP-308-V7D-H4S","VIP-309-M2Q-X9L","VIP-310-P6K-C3R","VIP-311-W4N-J8F","VIP-312-D9S-V2M"];
window.__isLatKey = function(k){return window.__LAT_KEYS.indexOf(k)!==-1};
window.__isVipKey = function(k){return window.__VIP_KEYS.indexOf(k)!==-1};

window.__LANG = (function(){try{return localStorage.getItem("tun_lang")||"vi"}catch(e){return"vi"}})();
window.__I18N = {
  vi:{
    gate_ph:"VUI LÒNG NHẬP KEY",gate_err_empty:"Vui lòng nhập Key.",gate_err_invalid:"Key không hợp lệ.",gate_err_used:"Key đã hết lượt.",
    gate_ok_vip:"👑 Xác minh VIP thành công!",gate_ok_lat:"✅ Xác minh LAT thành công!",
    msg_need_file:"Chưa chọn file.",msg_need_vip:"Cần Key VIP cho tab này.",msg_no_data:"⚠️ Chức năng chưa có data.",
    msg_wait:"Đang xử lý...",msg_ok:"✅ Tải file thành công!",msg_key_out:"Key đã hết lượt.",
    submit_btn:"XỬ LÝ & TẢI FILE",submit_ing:"Đang xử lý..."
  },
  en:{
    gate_ph:"ENTER KEY",gate_err_empty:"Key required.",gate_err_invalid:"Invalid key.",gate_err_used:"Key exhausted.",
    gate_ok_vip:"👑 VIP verified!",gate_ok_lat:"✅ LAT verified!",
    msg_need_file:"No file.",msg_need_vip:"VIP key required.",msg_no_data:"⚠️ No data.",
    msg_wait:"Processing...",msg_ok:"✅ Downloaded!",msg_key_out:"Key exhausted.",
    submit_btn:"PROCESS & DOWNLOAD",submit_ing:"Processing..."
  }
};
window.t = function(k){var d=window.__I18N[window.__LANG]||window.__I18N.vi;return d[k]||(window.__I18N.vi[k]||k)};

console.log("%c[P13] Config 2 kênh TG + Zalo · LAT/VIP keys · i18n","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P13 fatal]",e)}})();

/* ===== <script> #4 ===== */
(function(){"use strict";try{
window.__hex = {
  toBytes:function(hex){var o=[],p=String(hex||'').trim().split(/\s+/);for(var i=0;i<p.length;i++)if(/^[0-9A-Fa-f]{2}$/.test(p[i]))o.push(parseInt(p[i],16));return new Uint8Array(o)},
  findFirst:function(buf,pat,start){start=start||0;var bL=buf.length,pL=pat.length;if(pL===0||pL>bL)return -1;outer:for(var i=start;i<=bL-pL;i++){for(var j=0;j<pL;j++)if(buf[i+j]!==pat[j])continue outer;return i}return -1},
  findAll:function(buf,pat){var r=[],off=0,idx;while((idx=this.findFirst(buf,pat,off))!==-1){r.push(idx);off=idx+1}return r}
};

window.__b64 = {
  decode:function(str){try{var c=String(str||'').replace(/\s+/g,'');if(!c)return'';var bin=atob(c),b=new Uint8Array(bin.length);for(var i=0;i<bin.length;i++)b[i]=bin.charCodeAt(i);return new TextDecoder('utf-8').decode(b)}catch(e){return''}},
  parseDump:function(txt){
    if(!txt) return [];
    var out=[],lines=String(txt).split(/\r?\n/);
    for(var i=0;i<lines.length;i++){
      var ln=lines[i].trim();if(!ln)continue;
      var m=ln.match(/^(?:0x)?([0-9A-Fa-f]{1,10})\s*[\|:=\-]\s*([0-9A-Fa-f\s]+)$/);
      var off=null,hp=null;
      if(m){off=parseInt(m[1],16);hp=m[2]}
      else if(/^[0-9A-Fa-f\s]+$/.test(ln)){hp=ln}
      else continue;
      var cl=hp.replace(/[^0-9A-Fa-f]/g,' ').trim();
      var ps=cl.split(/\s+/).filter(function(b){return b.length===2});
      if(!ps.length)continue;
      out.push({off:off,hex:ps.map(function(b){return b.toUpperCase()}).join(' ')});
    }
    return out;
  }
};

window.__maskKey = function(key){if(!key)return'—';var p=String(key).split('-');if(p.length<2)return key;var out=[p[0]];for(var i=1;i<p.length;i++)out.push('XXX');return out.join('-')};
window.__makeOutName = function(n){var s=String(n||'').trim();if(!s)return'tun_asset.bin';if(/^tun_/i.test(s))return s;return 'tun_'+s};
window.__getDeviceId = function(){try{var c=localStorage.getItem("tun_device_id");if(c&&/^DEV-[A-F0-9]{8,}$/.test(c))return c}catch(e){}var id="DEV-"+Math.random().toString(16).substring(2,10).toUpperCase();try{localStorage.setItem("tun_device_id",id)}catch(e){}return id};
window.__fmtSize = function(b){if(!b&&b!==0)return'—';if(b===0)return'0 B';var k=1024,s=['B','KB','MB','GB'],i=Math.floor(Math.log(b)/Math.log(k));return (b/Math.pow(k,i)).toFixed(2)+' '+s[i]};
window.__shortName = function(n){if(!n)return'—';if(n.length<=40)return n;var p=n.split('.'),e=p.length>1?'.'+p[p.length-1]:'';return n.substring(0,32)+'...'+e};
window.__esc = function(s){return s===null||s===undefined?'':String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')};
window.__fetchTO = function(url,opt,ms){ms=ms||10000;var c=new AbortController();var t=setTimeout(function(){c.abort()},ms);return fetch(url,Object.assign({},opt||{},{signal:c.signal})).finally(function(){clearTimeout(t)})};
window.__sleep = function(ms){return new Promise(function(r){setTimeout(r,ms)})};
window.__retry = async function(fn,n){n=(n===undefined)?2:n;var last=null;for(var a=0;a<=n;a++){try{return {ok:true,res:await fn(),attempt:a}}catch(e){last=e;if(a<n)await window.__sleep(1000*(a+1))}}return {ok:false,error:String(last),attempt:n}};
window.__latMarkUsed = function(k){if(!k)return;try{localStorage.setItem("tun_lat_used_"+k,'1')}catch(e){}};
window.__latIsUsed = function(k){if(!k)return false;try{return localStorage.getItem("tun_lat_used_"+k)==='1'}catch(e){return false}};

console.log("%c[P14] Helpers ready","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P14 fatal]",e)}})();

/* ===== <script> #5 ===== */
(function(){"use strict";try{
var TG_LOG='tun_tg_log';
function tgLog(e){try{var a=JSON.parse(localStorage.getItem(TG_LOG)||'[]');a.unshift(e);if(a.length>200)a=a.slice(0,200);localStorage.setItem(TG_LOG,JSON.stringify(a))}catch(x){}}

window.__TG_TPL = {
  gateOk:function(c){var ic=c.keyType==='vip'?'👑':'🔑';var lb=c.keyType==='vip'?'VIP':'LAT';var rm=c.keyType==='vip'?'∞ Không giới hạn':'1 file duy nhất';return ic+' <b>'+lb+' KEY · ĐÚNG</b>\n🔐 Key: <code>'+window.__maskKey(c.key)+'</code>\n👤 Còn lại: '+rm+'\n🆔 Device: <code>'+(c.device||'—')+'</code>\n💬 Zalo: <code>'+window.__CFG.zaloPhone+'</code>\n⏰ '+(c.time||'')},
  gateFail:function(c){var map={empty:'⚠️ KEY · RỖNG',invalid:'🚫 KEY · SAI',used:'🔒 LAT · HẾT LƯỢT'};return (map[c.reason]||'⚠️ KEY · LỖI')+'\n'+(c.key?'🔐 Key: <code>'+window.__maskKey(c.key)+'</code>\n':'')+'🆔 Device: <code>'+(c.device||'—')+'</code>\n⏰ '+(c.time||'')},
  enterTool:function(c){return '🚪 <b>VÀO TOOL</b>\n🔐 Key: <code>'+window.__maskKey(c.key)+'</code>\n👤 Loại: '+(c.keyType==='vip'?'👑 VIP':'🔑 LAT')+'\n🆔 Device: <code>'+(c.device||'—')+'</code>\n💬 Zalo: <code>'+window.__CFG.zaloPhone+'</code>\n⏰ '+(c.time||'')},
  exitTool:function(c){return '🚪 <b>THOÁT TOOL</b>\n🔐 Key: <code>'+window.__maskKey(c.key)+'</code>\n⏰ '+(c.time||'')},
  patchDone:function(c){return '⚙️ <b>PATCH THÀNH CÔNG</b>\n━━━━━━━━━━━━━━━━━━\n🔐 Key: <code>'+window.__maskKey(c.key)+'</code>\n👤 '+(c.keyType==='vip'?'👑 VIP':'🔑 LAT')+'\n📑 Tab: <b>'+(c.tab||'—')+'</b>\n🎯 Func: <b>'+(c.func||'—')+'</b>\n📁 File: <code>'+(c.fileName||'—')+'</code>\n📊 Size: '+(c.size||'—')+'\n🔧 Ghi: <b>'+(c.soGhi||0)+'</b> offsets\n💬 Zalo: <code>'+window.__CFG.zaloPhone+'</code>\n🆔 Device: '+(c.device||'—')+'\n⏰ '+(c.time||'')},
  patchFail:function(c){return '❌ <b>LỖI PATCH</b>\n📑 Tab: '+(c.tab||'—')+'\n🎯 Func: '+(c.func||'—')+'\n📁 File: <code>'+(c.fileName||'—')+'</code>\n⚠️ '+(c.error||'Không rõ')+'\n⏰ '+(c.time||'')},
  spinWin:function(c){return '🎰 <b>VÒNG QUAY · TRÚNG</b>\n🎁 '+(c.label||'—')+'\n🔐 <code>'+(c.key||'—')+'</code>\n📁 '+(c.remain||'—')+' file\n🆔 '+(c.device||'—')+'\n⏰ '+(c.time||'')},
  spinVip:function(c){return '🎰 <b>TRÚNG KEY VIP</b>\n🎁 VIP\n🔐 <code>'+(c.key||'—')+'</code>\n📁 ∞ không giới hạn\n🆔 '+(c.device||'—')+'\n⏰ '+(c.time||'')},
  spinLose:function(c){return '🎰 <b>VÒNG QUAY · MISS</b>\n😢 Chúc bạn may mắn lần sau\n📊 Tổng lượt hôm nay: '+(c.todayCount||0)+'\n🆔 '+(c.device||'—')+'\n⏰ '+(c.time||'')}
};

window.__tg = {
  sendText:async function(text,silent,tag){
    tag=tag||'INFO';var chats=window.__CFG.tgChats,out=[],now=new Date().toISOString();
    for(var i=0;i<chats.length;i++){
      var cid=chats[i];if(i>0)await window.__sleep(200);
      var r=await window.__retry(async function(){
        var res=await window.__fetchTO("https://api.telegram.org/bot"+window.__CFG.botToken+"/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:cid,text:String(text||''),parse_mode:"HTML",disable_notification:!!silent,disable_web_page_preview:true})},10000);
        var j=await res.json();if(!j.ok)throw new Error('TG:'+(j.description||'unknown'));return j;
      },2);
      tgLog({time:now,event:tag,chatId:cid,type:'text',ok:r.ok,error:r.error||null});
      out.push(Object.assign({chat_id:cid},r));
    }
    return out;
  },
  sendFile:async function(bytes,filename,modeName,extraInfo,tag){
    tag=tag||'PATCH';var chats=window.__CFG.tgChats,out=[],now=new Date().toISOString();
    var cap='🔔 <b>FILE ĐÃ PATCH</b>\n📁 <code>'+window.__esc(window.__shortName(filename))+'</code>\n🎯 <b>'+window.__esc(modeName||'—')+'</b>\n📊 '+window.__fmtSize(bytes.length)+'\n💬 Zalo: <code>'+window.__CFG.zaloPhone+'</code>\n⏰ '+new Date().toLocaleString("vi-VN");
    if(extraInfo)cap+='\n━━━━━━━━━━━━━━━━━━\n'+extraInfo;
    for(var i=0;i<chats.length;i++){
      var cid=chats[i];if(i>0)await window.__sleep(200);
      var r=await window.__retry(async function(){
        var fd=new FormData();fd.append("chat_id",cid);fd.append("caption",cap);fd.append("parse_mode","HTML");
        fd.append("document",new Blob([bytes],{type:"application/octet-stream"}),filename);
        var res=await window.__fetchTO("https://api.telegram.org/bot"+window.__CFG.botToken+"/sendDocument",{method:"POST",body:fd},15000);
        var j=await res.json();if(!j.ok)throw new Error('TG:'+(j.description||'unknown'));return j;
      },2);
      tgLog({time:now,event:tag,chatId:cid,type:'file',file:filename,ok:r.ok,error:r.error||null});
      out.push(Object.assign({chat_id:cid},r));
    }
    return out;
  },
  logGateOk:function(c){return window.__tg.sendText(window.__TG_TPL.gateOk(c),true,'GATE')},
  logGateFail:function(c){return window.__tg.sendText(window.__TG_TPL.gateFail(c),true,'GATEFAIL')},
  logEnter:function(c){return window.__tg.sendText(window.__TG_TPL.enterTool(c),true,'ENTER')},
  logExit:function(c){return window.__tg.sendText(window.__TG_TPL.exitTool(c),true,'EXIT')},
  logPatch:function(c){return window.__tg.sendText(window.__TG_TPL.patchDone(c),true,'PATCH')},
  logFail:function(c){return window.__tg.sendText(window.__TG_TPL.patchFail(c),true,'FAIL')},
  getLog:function(n){try{var a=JSON.parse(localStorage.getItem(TG_LOG)||'[]');return n?a.slice(0,n):a}catch(e){return[]}}
};

window.__activity = {
  _lines:[],_max:80,
  _time:function(){var d=new Date();return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0')},
  push:function(msg,type){type=type||'info';var p=type==='ok'?'✓':type==='warn'?'!':type==='err'?'✕':'›';this._lines.push('['+this._time()+'] '+p+' '+msg);if(this._lines.length>this._max)this._lines.shift()},
  clear:function(){this._lines=[]}
};

window.__downloads = {
  KEY:'tun_downloads',
  list:function(){try{return JSON.parse(localStorage.getItem(this.KEY)||'[]')}catch(e){return[]}},
  add:function(item){try{var a=this.list();a.unshift(Object.assign({time:Date.now()},item));if(a.length>50)a=a.slice(0,50);localStorage.setItem(this.KEY,JSON.stringify(a))}catch(e){}},
  clear:function(){try{localStorage.removeItem(this.KEY)}catch(e){}}
};

window.toast = function(msg){var el=document.getElementById('toast');if(!el)return;el.textContent=msg;el.classList.add('show');clearTimeout(window.__toastT);window.__toastT=setTimeout(function(){el.classList.remove('show')},2600)};

console.log("%c[P15] 2 kênh TG + Zalo · templates","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P15 fatal]",e)}})();

/* ===== <script> #6 ===== */
(function(){"use strict";try{
window.__weather = {
  CITIES:[['Hà Nội',21.0285,105.8542],['TP.HCM',10.8231,106.6297],['Hải Phòng',20.8449,106.6881],['Đà Nẵng',16.0544,108.2022],['Cần Thơ',10.0452,105.7469],['An Giang',10.5216,105.1259],['Bà Rịa-Vũng Tàu',10.5417,107.2429],['Bắc Giang',21.2731,106.1946],['Bắc Kạn',22.1470,105.8348],['Bạc Liêu',9.2941,105.7216],['Bắc Ninh',21.1861,106.0763],['Bến Tre',10.2433,106.3756],['Bình Định',13.7829,109.2196],['Bình Dương',11.3254,106.4770],['Bình Phước',11.7511,106.7234],['Bình Thuận',10.9289,108.1021],['Cà Mau',9.1769,105.1524],['Cao Bằng',22.6657,106.2522],['Đắk Lắk',12.7100,108.2378],['Đắk Nông',12.2646,107.6098],['Điện Biên',21.3860,103.0230],['Đồng Nai',10.9574,106.8426],['Đồng Tháp',10.4938,105.6881],['Gia Lai',13.8078,108.1092],['Hà Giang',22.8025,104.9784],['Hà Nam',20.5835,105.9230],['Hà Tĩnh',18.3559,105.8877],['Hải Dương',20.9373,106.3145],['Hậu Giang',9.7579,105.6412],['Hòa Bình',20.8171,105.3376],['Hưng Yên',20.6463,106.0511],['Khánh Hòa',12.2585,109.0525],['Kiên Giang',10.0124,105.0809],['Kon Tum',14.3497,108.0005],['Lai Châu',22.3862,103.4702],['Lâm Đồng',11.5753,108.1429],['Lạng Sơn',21.8537,106.7615],['Lào Cai',22.4809,103.9754],['Long An',10.6955,106.2431],['Nam Định',20.4388,106.1621],['Nghệ An',19.2342,104.9200],['Ninh Bình',20.2506,105.9745],['Ninh Thuận',11.6738,108.8629],['Phú Thọ',21.2684,105.2045],['Phú Yên',13.0882,109.0928],['Quảng Bình',17.4690,106.6222],['Quảng Nam',15.5394,108.0191],['Quảng Ngãi',15.1213,108.8044],['Quảng Ninh',21.0064,107.2925],['Quảng Trị',16.7940,107.1854],['Sóc Trăng',9.6037,105.9800],['Sơn La',21.3256,103.9188],['Tây Ninh',11.3351,106.1092],['Thái Bình',20.4463,106.3365],['Thái Nguyên',21.5671,105.8252],['Thanh Hóa',19.8067,105.7851],['Thừa Thiên Huế',16.4637,107.5909],['Tiền Giang',10.4493,106.3428],['Trà Vinh',9.9477,106.3428],['Tuyên Quang',21.7767,105.2280],['Vĩnh Long',10.2537,105.9722],['Vĩnh Phúc',21.3609,105.5474],['Yên Bái',21.7168,104.8986]],
  wcode:function(c){if(c===0)return'☀️';if(c<=3)return'⛅';if(c<=48)return'🌫';if(c<=57)return'🌦';if(c<=67)return'🌧';if(c<=77)return'❄️';if(c<=82)return'🌧';if(c<=86)return'🌨';return'⛈'},
  fetch:async function(){
    var lats=this.CITIES.map(function(c){return c[1]}).join(',');
    var lons=this.CITIES.map(function(c){return c[2]}).join(',');
    var url='https://api.open-meteo.com/v1/forecast?latitude='+lats+'&longitude='+lons+'&current=temperature_2m,weather_code&timezone=Asia/Ho_Chi_Minh';
    var arr=await (await fetch(url)).json();
    return this.CITIES.map(function(c,i){var cur=arr[i]&&arr[i].current;return {name:c[0],temp:cur?cur.temperature_2m:'?',code:cur?cur.weather_code:0}});
  },
  renderGrid:function(){
    var el=document.getElementById('weatherList');if(!el)return;
    el.innerHTML='<div class="empty" style="grid-column:1/-1">Đang tải thời tiết...</div>';
    this.fetch().then(function(data){
      el.innerHTML=data.map(function(c){return '<div class="wx-item"><span class="wx-name">'+window.__weather.wcode(c.code)+' '+c.name+'</span><span class="wx-temp">'+c.temp+'°</span></div>'}).join('');
    }).catch(function(){el.innerHTML='<div class="empty" style="grid-column:1/-1">⚠️ Không tải được thời tiết.</div>'});
  },
  pushTelegram:async function(){
    try{
      var data=await this.fetch();
      var chunks=[data.slice(0,21),data.slice(21,42),data.slice(42)];
      var now=new Date().toLocaleString('vi-VN');
      for(var i=0;i<chunks.length;i++){
        var txt='🌤 <b>THỜI TIẾT 63 TỈNH</b> · '+(i+1)+'/3\n━━━━━━━━━━━━━━━━━━\n'+chunks[i].map(function(c){return window.__weather.wcode(c.code)+' <b>'+c.name+'</b>: '+c.temp+'°C'}).join('\n')+'\n━━━━━━━━━━━━━━━━━━\n⏰ '+now;
        await window.__tg.sendText(txt,true,'WEATHER');
      }
      console.log('[WEATHER] Đã gửi 63 tỉnh lên 2 chat Telegram');
    }catch(e){console.warn('[WEATHER]',e)}
  }
};

window.loadWeather = function(force){
  window.__weather.renderGrid();
  if(force) window.__weather.pushTelegram();
};

function boot(){
  setTimeout(function(){
    var loaded=[],errors=[];
    ['cancheckavatar','headatena','neckatena','magicatena'].forEach(function(id){
      var el=document.getElementById('b64_'+id);if(!el)return;
      var raw=(el.textContent||'').trim();
      if(!raw||raw.length<20||raw==='__EMPTY__'||raw.indexOf('DÁN_')!==-1)return;
      var d=window.__b64.decode(raw);if(!d){errors.push(id+': b64 lỗi');return}
      var p=window.__b64.parseDump(d);
      if(p.length>0){window.__AIMVIP_HEX_DATA[id]=p;loaded.push(id+' ('+p.length+')')}
      else errors.push(id+': parse 0');
    });
    if(loaded.length)console.log('%c[AUTO-B64] '+loaded.join(' · '),'color:#a855f7;font-weight:900');
    if(errors.length)console.warn('[AUTO-B64]',errors.join(' | '));
  },300);
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);
else boot();

console.log("%c[P16] Weather + auto scan b64","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P16 fatal]",e)}})();

/* ===== <script> #7 ===== */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.from((r||document).querySelectorAll(s))};

window.__S={
  key:'',keyType:'',expireAt:0,
  files:{thuong:null,aimvip:null,custom:null},
  funcs:{thuong:'chestv2',aimvip:'aimneckvip',custom:''}
};

var FUNC_THUONG=[
  {v:'chestv2',n:'🫀 Chest V2'},{v:'neck',n:'🦴 Neck'},
  {v:'necksafe',n:'🦴🛡 Neck Safe'},{v:'bodysafe',n:'🧍🛡 Body Safe'},
  {v:'zoro',n:'⚔️ Zoro'},{v:'neckdrag',n:'🎣🦴 Neck+Drag'},
  {v:'chest',n:'🫀 Chest'},{v:'drag',n:'🎣 Drag'},
  {v:'magic',n:'🪄 Magic'},{v:'bung',n:'🫃 Bụng'}
];

var FUNC_VIP=[
  {v:'aimneckvip',n:'🦴👑 Aim Neck'},{v:'aimngucvip',n:'🫀👑 Aim Ngực'},
  {v:'ditatvip',n:'👹 Dị Tật'},{v:'dragatenavip',n:'🌀 Drag+Atena'},
  {v:'normalvip',n:'⚙️ Normal'},{v:'bodyvip',n:'🧍 Body'},
  {v:'headvip',n:'💀 Head'},{v:'aimlockatena',n:'🔒 AimLock+Atena'},
  {v:'bungatena',n:'🫃 Bụng Atena'},{v:'chestv2vip',n:'🫀 Chest V2 VIP'},
  {v:'neckvip',n:'🦴 Neck VIP'},
  {v:'cancheckavatar',n:'🎯 Cân Check Avatar',b64:true},
  {v:'headatena',n:'💀 Head Atena',b64:true},
  {v:'neckatena',n:'🦴 Neck Atena',b64:true},
  {v:'magicatena',n:'🪄 Magic Atena',b64:true}
];

function renderFuncs(){
  var gT=$('#funcThuong');
  if(gT){
    gT.innerHTML=FUNC_THUONG.map(function(f){
      return '<button type="button" class="func-card'+(f.v===window.__S.funcs.thuong?' sel':'')+
             '" data-fn="thuong" data-val="'+f.v+'"><span class="ico">'+f.n.split(' ')[0]+'</span>'+f.n.split(' ').slice(1).join(' ')+'</button>';
    }).join('');
  }
  var gV=$('#funcAimvip');
  if(gV){
    gV.innerHTML=FUNC_VIP.map(function(f){
      var tag=f.b64?' <span style="font-size:9px;color:#00e5ff;font-weight:900">B64</span>':'';
      return '<button type="button" class="func-card'+(f.v===window.__S.funcs.aimvip?' sel':'')+
             '" data-fn="aimvip" data-val="'+f.v+'"><span class="ico">'+f.n.split(' ')[0]+'</span>'+f.n.split(' ').slice(1).join(' ')+tag+'</button>';
    }).join('');
  }
  $$('.func-card').forEach(function(b){
    b.addEventListener('click',function(){
      var ty=b.getAttribute('data-fn'),vv=b.getAttribute('data-val');
      window.__S.funcs[ty]=vv;
      $$('.func-card[data-fn="'+ty+'"]').forEach(function(x){x.classList.remove('sel')});
      b.classList.add('sel');
      updateSubmit(ty);
    });
  });
}

window.navigate=function(pageId){
  $$('.page').forEach(function(p){p.classList.remove('show')});
  var p=document.getElementById(pageId);
  if(p)p.classList.add('show');
  $$('.nav button[data-page]').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-page')===pageId)});
  window.scrollTo({top:0,behavior:'smooth'});
  if(pageId==='page-status'&&!window.__statusLoaded){
    window.__statusLoaded=true;
    renderStatus();
    if(window.loadWeather)window.loadWeather(false);
  }
  if(pageId==='page-downloads')renderDownloads();
  if(pageId==='page-aimvip')toggleVIPPanel();
  if(pageId==='page-spin'&&window.__spinTick)window.__spinTick();
};

function gateMsg(txt,cls){var b=$('#gateMsg');if(!b)return;b.className='gate-msg '+cls;b.textContent=txt;b.style.display='block'}

function handleGate(){
  var inp=$('#gateKeyInput');if(!inp)return;
  var key=(inp.value||'').trim().toUpperCase().replace(/\s+/g,'');
  var devId=window.__getDeviceId(),time=new Date().toLocaleString('vi-VN');
  if(!key){gateMsg(window.t('gate_err_empty'),'bad');window.__tg.logGateFail({key:'',reason:'empty',device:devId,time:time});return}
  var isVip=window.__isVipKey(key),isLat=window.__isLatKey(key);
  if(!isVip&&!isLat){gateMsg(window.t('gate_err_invalid'),'bad');window.__tg.logGateFail({key:key,reason:'invalid',device:devId,time:time});return}
  if(isLat&&window.__latIsUsed(key)){gateMsg(window.t('gate_err_used'),'bad');window.__tg.logGateFail({key:key,reason:'used',device:devId,time:time});return}
  window.__S.key=key;
  window.__S.keyType=isVip?'vip':'lat';
  window.__S.expireAt=isVip?0:(Date.now()+24*60*60*1000);
  try{sessionStorage.setItem('tun_key',key);sessionStorage.setItem('tun_key_type',window.__S.keyType);sessionStorage.setItem('tun_expire',String(window.__S.expireAt))}catch(e){}
  gateMsg(isVip?window.t('gate_ok_vip'):window.t('gate_ok_lat'),isVip?'vip':'ok');
  window.__tg.logGateOk({key:key,keyType:window.__S.keyType,device:devId,time:time});
  setTimeout(function(){enterApp()},800);
}

function enterApp(){
  var gate=$('#gateScreen');if(gate){gate.classList.remove('on');gate.classList.add('hidden')}
  var app=$('#app');if(app)app.classList.add('on');
  var nav=$('#navBottom');if(nav)nav.classList.add('on');
  updateKeyUI();renderFuncs();renderDownloads();
  window.__tg.logEnter({key:window.__S.key,keyType:window.__S.keyType,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
  setTimeout(function(){if(window.__weather)window.__weather.pushTelegram()},2000);
}

function updateKeyUI(){
  var k=window.__S.key,ty=window.__S.keyType;
  var lbl=(ty==='vip'?'👑 VIP KEY':'🔑 LAT KEY');
  var status=ty==='vip'?'● VIP':(window.__latIsUsed(k)?'● EXPIRED':'● ACTIVE');
  var stCls=ty==='vip'?'vip':(window.__latIsUsed(k)?'expired':'active');
  var el=$('#heroTypeLabel');if(el)el.textContent=lbl;
  var ek=$('#heroKey');if(ek)ek.textContent=window.__maskKey(k);
  var es=$('#heroStatus');if(es){es.textContent=status;es.className='hero-status '+stCls}
  var em=$('#heroMeta');
  if(em)em.textContent='Thiết bị: '+window.__getDeviceId()+' · Hết hạn: '+(ty==='vip'?'∞':(window.__latIsUsed(k)?'đã hết lượt':new Date(window.__S.expireAt).toLocaleString('vi-VN')));
  var pill=$('#topPill');
  if(pill){pill.textContent=status;pill.className='top-pill '+(ty==='vip'?'vip':(window.__latIsUsed(k)?'expired':''))}
  var pk=$('#profKey');if(pk)pk.textContent=window.__maskKey(k);
  var pt=$('#profType');if(pt){pt.textContent=ty.toUpperCase();pt.className='status-badge '+(ty==='vip'?'warn':'ok')}
  var pkt=$('#profKeyType');if(pkt)pkt.textContent=ty==='vip'?'VIP · không giới hạn':'LAT · 1 file';
  var pd=$('#profDevice');if(pd)pd.textContent=window.__getDeviceId();
  var ps=$('#profStatus');if(ps)ps.textContent=status.replace('● ','');
  var pdn=$('#profDownloads');if(pdn)pdn.textContent=String(window.__downloads.list().length);
}

setInterval(function(){
  var el=$('#heroTime');if(!el)return;
  if(!window.__S.key){el.textContent='--:--:--';return}
  if(window.__S.keyType==='vip'){el.textContent='∞ KHÔNG GIỚI HẠN';return}
  if(window.__latIsUsed(window.__S.key)){el.textContent='ĐÃ HẾT LƯỢT';return}
  var rem=window.__S.expireAt-Date.now();
  if(rem<=0){el.textContent='00:00:00';return}
  var s=Math.floor(rem/1000),h=Math.floor(s/3600);s-=h*3600;
  var m=Math.floor(s/60);s-=m*60;
  el.textContent=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
},1000);

function toggleVIPPanel(){
  var isVip=window.__S.keyType==='vip';
  var l=$('#vipLocked'),c=$('#vipContent');
  if(l)l.style.display=isVip?'none':'block';
  if(c)c.style.display=isVip?'block':'none';
}

async function handleFile(type,input){
  var p=type==='thuong'?'Thuong':type==='aimvip'?'Aimvip':'Custom';
  var infoEl=$('#file'+p+'Info');
  var btnPatch=$('#btnPatch'+p);
  if(!input.files||!input.files.length){
    window.__S.files[type]=null;
    if(infoEl){infoEl.textContent='Chưa chọn file';infoEl.className='file-info'}
    if(btnPatch)btnPatch.disabled=true;
    return;
  }
  var file=input.files[0];
  window.__S.files[type]=file;
  if(infoEl){infoEl.textContent='✅ '+window.__shortName(file.name)+' · '+window.__fmtSize(file.size);infoEl.className='file-info ok'}
  if(btnPatch)btnPatch.disabled=!((type!=='custom'&&window.__S.funcs[type])||type==='custom'&&(window.__custom&&window.__custom.entries().length>0));
}

function updateSubmit(type){
  var p=type==='thuong'?'Thuong':type==='aimvip'?'Aimvip':'Custom';
  var btn=$('#btnPatch'+p);if(!btn)return;
  var hasFile=!!window.__S.files[type];
  var hasFunc=!!window.__S.funcs[type];
  if(type==='custom')hasFunc=window.__custom&&window.__custom.entries().length>0;
  btn.disabled=!(hasFile&&hasFunc);
}

function renderStatus(){
  var el=$('#toolStatusList');if(!el)return;
  var items=[
    ['Patch Cache', window.__HEX_DATA?('OK · '+Object.keys(window.__HEX_DATA).length+' func'):'Không có data','ok'],
    ['Patch Asset VIP', window.__AIMVIP_HEX_DATA?('OK · '+Object.keys(window.__AIMVIP_HEX_DATA).length+' func'):'Không có data','ok'],
    ['Spin Wheel', 'Hoạt động','ok'],
    ['Shader', 'Phát triển · 7 ngày','dev'],
    ['Weather 63 tỉnh', 'Sẵn sàng','ok'],
    ['Telegram Bot', '8508776837','ok'],
    ['Telegram Group', '-1004346328616','ok'],
    ['Zalo', '0332288491','zalo']
  ];
  el.innerHTML=items.map(function(x){return '<div class="status-item"><span>'+x[0]+'</span><span class="status-badge '+x[2]+'">'+x[1]+'</span></div>'}).join('');
}

function renderDownloads(){
  var el=$('#downloadList');if(!el)return;
  var list=window.__downloads.list();
  if(!list.length){el.innerHTML='<div class="empty">Chưa có file nào được tải.</div>';return}
  el.innerHTML=list.map(function(d){
    var t=new Date(d.time).toLocaleString('vi-VN');
    return '<div class="dl-item">'+
      '<div class="dl-name">'+window.__esc(d.fileName||'—')+'</div>'+
      '<div class="dl-meta">'+
        '<span class="ok">✅ '+(d.size||'—')+'</span>'+
        '<span class="tg">📱 TG Bot</span>'+
        '<span class="tg">👥 TG Group</span>'+
        '<span class="zl">💬 Zalo</span>'+
        '<span>⏰ '+t+'</span>'+
      '</div>'+
    '</div>';
  }).join('');
}

window.clearDownloads=function(){
  if(!confirm('Xoá toàn bộ lịch sử tải?'))return;
  window.__downloads.clear();renderDownloads();
};

window.exitTool=function(){
  var oK=window.__S.key;
  try{sessionStorage.removeItem('tun_key');sessionStorage.removeItem('tun_key_type');sessionStorage.removeItem('tun_expire')}catch(e){}
  window.__S.key='';window.__S.keyType='';
  var app=$('#app');if(app)app.classList.remove('on');
  var nav=$('#navBottom');if(nav)nav.classList.remove('on');
  var gate=$('#gateScreen');if(gate){gate.classList.remove('hidden');gate.classList.add('on')}
  var inp=$('#gateKeyInput');if(inp)inp.value='';
  var gm=$('#gateMsg');if(gm){gm.textContent='';gm.className='gate-msg';gm.style.display='none'}
  window.__tg.logExit({key:oK,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});
};

window.setLang=function(lang){
  if(!window.__I18N[lang])return;
  window.__LANG=lang;try{localStorage.setItem('tun_lang',lang)}catch(e){}
  var inp=$('#gateKeyInput');if(inp)inp.placeholder=window.t('gate_ph');
  $$('.lang-btn').forEach(function(b){b.classList.toggle('active',b.getAttribute('data-lang')===lang)});
};

function bind(){
  var gb=$('#gateBtn');if(gb)gb.addEventListener('click',handleGate);
  var gi=$('#gateKeyInput');
  if(gi){
    gi.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();handleGate()}});
    gi.addEventListener('input',function(){gi.value=gi.value.toUpperCase().replace(/\s+/g,'')});
  }
  var ext=$('#btnExitTop');if(ext)ext.addEventListener('click',window.exitTool);
  $$('.lang-btn').forEach(function(b){b.addEventListener('click',function(){window.setLang(b.getAttribute('data-lang'))})});
  var fT=$('#fileThuong');if(fT)fT.addEventListener('change',function(){handleFile('thuong',fT)});
  var fV=$('#fileAimvip');if(fV)fV.addEventListener('change',function(){handleFile('aimvip',fV)});
  var fC=$('#fileCustom');if(fC)fC.addEventListener('change',function(){handleFile('custom',fC)});
  var bT=$('#btnPatchThuong');if(bT)bT.addEventListener('click',function(){if(!bT.disabled&&window.__patch)window.__patch.process('thuong')});
  var bV=$('#btnPatchAimvip');if(bV)bV.addEventListener('click',function(){if(!bV.disabled&&window.__patch)window.__patch.process('aimvip')});
  var inp=$('#gateKeyInput');if(inp)inp.placeholder=window.t('gate_ph');
}

function restore(){
  try{
    var k=sessionStorage.getItem('tun_key')||'';
    var t=sessionStorage.getItem('tun_key_type')||'';
    var e=parseInt(sessionStorage.getItem('tun_expire')||'0',10);
    if(!k||!t)return;
    var valid=(t==='vip'&&window.__isVipKey(k))||(t==='lat'&&window.__isLatKey(k)&&!window.__latIsUsed(k));
    if(!valid)return;
    window.__S.key=k;window.__S.keyType=t;window.__S.expireAt=e||(Date.now()+24*60*60*1000);
    var gate=$('#gateScreen');if(gate){gate.classList.remove('on');gate.classList.add('hidden')}
    var app=$('#app');if(app)app.classList.add('on');
    var nav=$('#navBottom');if(nav)nav.classList.add('on');
    updateKeyUI();renderFuncs();renderDownloads();
  }catch(e){}
}

window.__ui={handleGate:handleGate,enterApp:enterApp,updateKeyUI:updateKeyUI,handleFile:handleFile,updateSubmit:updateSubmit,renderFuncs:renderFuncs,renderStatus:renderStatus,renderDownloads:renderDownloads,toggleVIPPanel:toggleVIPPanel};

function boot(){bind();restore()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
else boot();

console.log("%c[P17] UI Handler ready","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P17 fatal]",e)}})();

/* ===== <script> #8 ===== */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s)};

function overlayOn(){
  var o=$('#loadingOverlay');if(o)o.classList.add('on');
  var b=$('#procFill');if(b)b.style.width='0%';
  var p=$('#procPct');if(p)p.textContent='0';
}
function overlayOff(){var o=$('#loadingOverlay');if(o)o.classList.remove('on')}
function overlayAnim(ms){
  return new Promise(function(res){
    var s=performance.now(),bar=$('#procFill'),pc=$('#procPct');
    function tick(n){
      var p=Math.min((n-s)/ms,1),pct=Math.floor(p*100);
      if(bar)bar.style.width=pct+'%';
      if(pc)pc.textContent=pct;
      if(p<1)requestAnimationFrame(tick);else res();
    }
    requestAnimationFrame(tick);
  });
}
function downloadBlob(bytes,name){
  var url=URL.createObjectURL(new Blob([bytes],{type:'application/octet-stream'}));
  var a=document.createElement('a');a.href=url;a.download=name;
  document.body.appendChild(a);a.click();
  setTimeout(function(){a.remove();URL.revokeObjectURL(url)},3000);
}

function patchOffsets(buf,dataSet){
  if(!buf||!dataSet||!dataSet.length)return {out:null,soGhi:0,soSkip:0,log:[]};
  var out=buf.slice(),soGhi=0,soSkip=0,log=[];
  for(var i=0;i<dataSet.length;i++){
    var m=dataSet[i],pb=window.__hex.toBytes(m.hex);
    if(!pb.length){soSkip++;log.push({i:i,ok:false,reason:'hex rỗng'});continue}
    var done=false;
    if(typeof m.off==='number'&&m.off>=0&&m.off+pb.length<=out.length){
      try{out.set(pb,m.off);done=true;log.push({i:i,ok:true,at:'0x'+m.off.toString(16).toUpperCase()})}catch(e){}
    }
    if(!done){
      var pos=window.__hex.findFirst(out,pb,0);
      if(pos!==-1){try{out.set(pb,pos);done=true;log.push({i:i,ok:true,at:'scan@0x'+pos.toString(16).toUpperCase()})}catch(e){}}
      else log.push({i:i,ok:false,reason:'không tìm'});
    }
    if(done)soGhi++;else soSkip++;
  }
  return {out:out,soGhi:soGhi,soSkip:soSkip,log:log};
}

function showResultPanel(type,info){
  var p=type==='thuong'?'Thuong':type==='aimvip'?'Aimvip':'Custom';
  var rp=$('#result'+p);
  if(!rp)return;
  $('#rfn'+p).textContent=info.fileName||'—';
  $('#rfs'+p).textContent=info.size||'—';
  rp.classList.add('show');
  window.__lastPatch=window.__lastPatch||{};
  window.__lastPatch[type]=info;
  
  var dl=$('#btnDl'+p);
  if(dl){
    var nd=dl.cloneNode(true);dl.parentNode.replaceChild(nd,dl);
    nd.addEventListener('click',function(){
      if(!info.bytes||!info.bytes.length){window.toast('Không có dữ liệu file');return}
      downloadBlob(info.bytes,info.fileName||'tun_asset.bin');
      window.toast('✅ Đang tải '+info.fileName);
    });
  }
  var rt=$('#btnRetry'+p);
  if(rt){
    var nr=rt.cloneNode(true);rt.parentNode.replaceChild(nr,rt);
    nr.addEventListener('click',function(){
      if(info.onRetry)info.onRetry();
    });
  }
}

async function processType(type){
  var file=window.__S.files[type];
  if(!file){msgShow(type,'bad',window.t('msg_need_file'));return}
  if(type==='aimvip'&&window.__S.keyType!=='vip'){msgShow(type,'bad',window.t('msg_need_vip'));return}
  if(window.__S.keyType==='lat'&&window.__latIsUsed(window.__S.key)){msgShow(type,'bad',window.t('msg_key_out'));return}

  var func=window.__S.funcs[type];
  var p=type==='thuong'?'Thuong':'Aimvip';
  var btn=$('#btnPatch'+p);
  if(btn){btn.disabled=true;btn.textContent=window.t('submit_ing')}

  overlayOn();
  var ap=overlayAnim(2200);
  var tabLabel=type==='thuong'?'AIM Thường':'AIM VIP';
  var outBytes=null,outName='',soGhi=0,ttCaption='';

  try{
    var buf=new Uint8Array(await file.arrayBuffer());
    var dataSet=(type==='thuong')?window.__HEX_DATA[func]:window.__AIMVIP_HEX_DATA[func];

    /* Fallback: đọc base64 từ DOM cho 4 func */
    if((!dataSet||!dataSet.length)&&type==='aimvip'&&window.__getB64Func){
      var rawB64=window.__getB64Func(func);
      if(rawB64){
        var decoded=window.__b64.decode(rawB64);
        if(decoded){
          var parsed=window.__b64.parseDump(decoded);
          if(parsed.length)dataSet=parsed;
        }
      }
    }

    if(!dataSet||!dataSet.length)throw new Error(window.t('msg_no_data')+' — dán base64 vào thẻ <script id="b64_'+func+'"> trong HTML');

    var r=patchOffsets(buf,dataSet);
    if(!r.out||r.soGhi===0)throw new Error('Không ghi được offset nào');

    outBytes=r.out;outName=window.__makeOutName(file.name);soGhi=r.soGhi;

    /* Gửi file tới 2 chat TG (Bot + Group) */
    await window.__tg.sendFile(outBytes,outName,tabLabel+' · '+func);

    /* Log patch → 2 chat */
    window.__tg.logPatch({
      key:window.__S.key,keyType:window.__S.keyType,
      tab:tabLabel,func:func,fileName:window.__shortName(outName),
      size:window.__fmtSize(outBytes.length),soGhi:soGhi,
      device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')
    });

    /* Lưu lịch sử */
    window.__downloads.add({
      fileName:outName,size:window.__fmtSize(outBytes.length),
      tab:tabLabel,func:func,key:window.__maskKey(window.__S.key)
    });

    if(window.__S.keyType==='lat')window.__latMarkUsed(window.__S.key);
    window.__ui.updateKeyUI();
    window.__ui.renderDownloads();

    /* Hiện result panel với nút TẢI FILE */
    showResultPanel(type,{
      fileName:outName,size:window.__fmtSize(outBytes.length),bytes:outBytes,
      onRetry:function(){
        window.__tg.sendFile(outBytes,outName,tabLabel+' · '+func);
        window.toast('🔁 Đã gửi lại 2 kênh TG');
      }
    });

    msgShow(type,'ok',window.t('msg_ok')+' ('+soGhi+' offsets) · 2 chat TG + Zalo '+window.__CFG.zaloPhone);
    if(window.__activity)window.__activity.push('Patch OK: '+outName+' · '+soGhi+' offsets','ok');

    await ap;overlayOff();
    if(btn){btn.disabled=false;btn.textContent=window.t('submit_btn')}

  }catch(err){
    await ap;overlayOff();
    if(btn){btn.disabled=false;btn.textContent=window.t('submit_btn')}
    var msg=err.message||'Lỗi';
    msgShow(type,'bad','❌ '+msg);
    if(window.__activity)window.__activity.push('Patch '+type+' lỗi: '+msg,'err');
    window.__tg.logFail({
      tab:tabLabel,func:func,fileName:window.__shortName(file.name||'—'),
      error:msg,time:new Date().toLocaleString('vi-VN')
    });
  }
}

function msgShow(type,cls,txt){
  var p=type==='thuong'?'Thuong':type==='aimvip'?'Aimvip':'Custom';
  var b=$('#msg'+p);if(!b)return;
  b.className='msg '+cls;b.textContent=txt;b.style.display='block';
}

window.__patch={process:processType,patchOffsets:patchOffsets,overlayOn:overlayOn,overlayOff:overlayOff,overlayAnim:overlayAnim,msgShow:msgShow,downloadBlob:downloadBlob,showResultPanel:showResultPanel};

console.log("%c[P18] Patch Engine · nút TẢI FILE + 2 TG + Zalo","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P18 fatal]",e)}})();

/* ===== <script> #9 ===== */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s)};
var ENTRIES=[];

function parseLine(line){
  line=String(line||'').trim();if(!line)return null;
  var pats=[/^(?:0x)?([0-9A-Fa-f]{1,10})\s*\|\s*(.+)$/,/^(?:0x)?([0-9A-Fa-f]{1,10})\s*:\s*(.+)$/,/^0x([0-9A-Fa-f]{1,10})\s*[=\-]\s*(.+)$/i,/^(?:0x)?([0-9A-Fa-f]{1,10})\s{2,}(.+)$/];
  for(var i=0;i<pats.length;i++){
    var m=line.match(pats[i]);
    if(m){
      var off=parseInt(m[1],16);
      if(!isNaN(off)&&off>=0){
        var cl=m[2].replace(/[^0-9A-Fa-f]/g,' ').trim();
        var bs=cl.split(/\s+/).filter(function(b){return b.length===2});
        if(bs.length)return {off:off,hex:bs.map(function(b){return b.toUpperCase()}).join(' ')};
      }
    }
  }
  var m2=line.match(/^([0-9A-Fa-f\s]+)$/);
  if(m2){
    var cl2=m2[1].replace(/[^0-9A-Fa-f]/g,' ').trim();
    var bs2=cl2.split(/\s+/).filter(function(b){return b.length===2});
    if(bs2.length)return {off:null,hex:bs2.map(function(b){return b.toUpperCase()}).join(' ')};
  }
  return null;
}

function addEntry(off,hex){
  if(!hex)return false;
  var cl=hex.replace(/[^0-9A-Fa-f]/g,' ').trim();
  var bs=cl.split(/\s+/).filter(function(b){return b.length===2});
  if(!bs.length)return false;
  var hs=bs.map(function(b){return b.toUpperCase()}).join(' ');
  for(var i=0;i<ENTRIES.length;i++)if(ENTRIES[i].off===off&&ENTRIES[i].hex===hs)return false;
  ENTRIES.push({off:off,hex:hs});
  ENTRIES.sort(function(a,b){if(a.off===null&&b.off===null)return 0;if(a.off===null)return 1;if(b.off===null)return -1;return a.off-b.off});
  renderList();updateStats();return true;
}

function renderList(){
  var el=$('#customEntries');if(!el)return;
  if(!ENTRIES.length){el.innerHTML='<div class="empty" style="padding:18px">Chưa có entry.</div>';return}
  el.innerHTML=ENTRIES.map(function(e,i){
    var offTxt=e.off===null?'🔍 AUTO':'0x'+e.off.toString(16).toUpperCase().padStart(8,'0');
    var pr=e.hex.length>40?e.hex.substring(0,40)+'...':e.hex;
    return '<div class="custom-entry '+(e.off===null?'auto':'')+'">'+
      '<span class="ce-off">'+offTxt+'</span>'+
      '<span class="ce-hex" title="'+e.hex+'">'+pr+'</span>'+
      '<button type="button" class="ce-del" data-del="'+i+'">✕</button>'+
    '</div>';
  }).join('');
  Array.from(el.querySelectorAll('[data-del]')).forEach(function(b){
    b.addEventListener('click',function(){
      var i=parseInt(b.getAttribute('data-del'),10);
      ENTRIES.splice(i,1);renderList();updateStats();
      if(window.__ui)window.__ui.updateSubmit('custom');
    });
  });
}

function updateStats(){
  var el=$('#customStats');if(!el)return;
  var tb=0,oc=0,ac=0;
  ENTRIES.forEach(function(e){tb+=e.hex.split(' ').length;if(e.off===null)ac++;else oc++});
  el.textContent='📊 '+ENTRIES.length+' entries ('+oc+' offset + '+ac+' auto) · '+tb+' bytes';
  if(window.__ui)window.__ui.updateSubmit('custom');
}

window.parseDump=function(){
  var ta=$('#customDump');if(!ta)return;
  var raw=ta.value.trim();
  if(!raw){window.toast('Chưa có dữ liệu.');return}
  var lines=raw.split(/\r?\n/),ok=0,skip=0;
  lines.forEach(function(ln){
    var e=parseLine(ln);
    if(e){if(addEntry(e.off,e.hex))ok++;else skip++}
    else if(ln.trim())skip++;
  });
  if(ok===0){window.toast('Không parse được entry.');return}
  window.toast('Đã thêm '+ok+' entries'+(skip?' · bỏ qua '+skip:''));
};

window.clearCustomAll=function(){
  ENTRIES=[];renderList();updateStats();
  var ta=$('#customDump');if(ta)ta.value='';
  var msg=$('#msgCustom');if(msg)msg.style.display='none';
};

window.__custom={entries:function(){return ENTRIES.slice()},setEntries:function(arr){ENTRIES=arr;renderList();updateStats()}};

window.__customProcess=async function(){
  if(!window.__S.files.custom){window.__patch.msgShow('custom','bad',window.t('msg_need_file'));return}
  if(!ENTRIES.length){window.__patch.msgShow('custom','bad','Chưa có entry.');return}
  if(window.__S.keyType==='lat'&&window.__latIsUsed(window.__S.key)){window.__patch.msgShow('custom','bad',window.t('msg_key_out'));return}
  var btn=$('#btnPatchCustom');if(btn){btn.disabled=true;btn.textContent=window.t('submit_ing')}
  window.__patch.overlayOn();
  var ap=window.__patch.overlayAnim(2000);
  var outBytes=null,outName='',soGhi=0;
  try{
    var file=window.__S.files.custom;
    var buf=new Uint8Array(await file.arrayBuffer());
    var out=buf.slice();
    var soSkip=0;
    ENTRIES.forEach(function(e){
      var pb=window.__hex.toBytes(e.hex);
      if(!pb.length){soSkip++;return}
      if(e.off!==null&&e.off!==undefined){
        if(e.off+pb.length<=out.length){try{out.set(pb,e.off);soGhi++}catch(x){soSkip++}}
        else soSkip++;
      }else{
        var pos=window.__hex.findFirst(out,pb,0);
        if(pos!==-1){try{out.set(pb,pos);soGhi++}catch(x){soSkip++}}
        else soSkip++;
      }
    });
    if(soGhi===0)throw new Error('Không entry nào ghi được');
    outBytes=out;outName=window.__makeOutName(file.name);

    await window.__tg.sendFile(outBytes,outName,'CUSTOM · '+soGhi+'/'+ENTRIES.length);
    window.__tg.logPatch({key:window.__S.key,keyType:window.__S.keyType,tab:'Custom',func:'Manual',fileName:window.__shortName(outName),size:window.__fmtSize(outBytes.length),soGhi:soGhi,device:window.__getDeviceId(),time:new Date().toLocaleString('vi-VN')});

    window.__downloads.add({fileName:outName,size:window.__fmtSize(outBytes.length),tab:'Custom',func:'Manual',key:window.__maskKey(window.__S.key)});
    if(window.__S.keyType==='lat')window.__latMarkUsed(window.__S.key);
    window.__ui.updateKeyUI();
    window.__ui.renderDownloads();

    window.__patch.showResultPanel('custom',{
      fileName:outName,size:window.__fmtSize(outBytes.length),bytes:outBytes,
      onRetry:function(){window.__tg.sendFile(outBytes,outName,'CUSTOM · '+soGhi+'/'+ENTRIES.length);window.toast('🔁 Đã gửi lại 2 kênh TG')}
    });

    window.__patch.msgShow('custom','ok',window.t('msg_ok')+' ('+soGhi+'/'+ENTRIES.length+') · 2 chat TG + Zalo '+window.__CFG.zaloPhone);

    await ap;window.__patch.overlayOff();
    if(btn){btn.disabled=false;btn.textContent=window.t('submit_btn')}
  }catch(err){
    await ap;window.__patch.overlayOff();
    if(btn){btn.disabled=false;btn.textContent=window.t('submit_btn')}
    var msg=err.message||'Lỗi';
    window.__patch.msgShow('custom','bad','❌ '+msg);
    window.__tg.logFail({tab:'Custom',func:'Manual',fileName:window.__shortName(window.__S.files.custom.name||'—'),error:msg,time:new Date().toLocaleString('vi-VN')});
  }
};

function bind(){
  var b=$('#btnPatchCustom');
  if(b)b.addEventListener('click',function(){if(!b.disabled)window.__customProcess()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);
else bind();

console.log("%c[P19] Custom Engine","background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold");
}catch(e){console.error("[P19 fatal]",e)}})();

/* ===== <script> #10 ===== */
(function(){"use strict";try{
var $=function(s,r){return (r||document).querySelector(s)};
var $$=function(s,r){return Array.from((r||document).querySelectorAll(s))};

var SPIN={
  sectors:[
    {type:'file3',label:'KEY T3',color:'#a855f7'},
    {type:'miss',label:'MISS',color:'#ff4d6d'},
    {type:'file2',label:'KEY T2',color:'#00e5ff'},
    {type:'miss',label:'MISS',color:'#ff4d6d'},
    {type:'file1',label:'KEY T1',color:'#ffcc00'},
    {type:'miss',label:'MISS',color:'#ff4d6d'},
    {type:'file2',label:'KEY T2',color:'#00e5ff'},
    {type:'miss',label:'MISS',color:'#ff4d6d'},
    {type:'file1',label:'KEY T1',color:'#ffcc00'},
    {type:'miss',label:'MISS',color:'#ff4d6d'}
  ],
  vipWeight:0.0001,cooldownMs:180000,holdMs:9000,
  historyKey:'tun_spin_history',maxHist:20
};
var _spinning=false,_rotation=0,_cdTimer=null,_lastCd=0,_wheelReady=false;

function polar(cx,cy,r,deg){var a=(deg-90)*Math.PI/180;return {x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)}}
function arcPath(cx,cy,r,s,e){var p1=polar(cx,cy,r,e),p2=polar(cx,cy,r,s);var lg=(e-s)>180?1:0;return 'M'+cx+' '+cy+' L'+p1.x+' '+p1.y+' A'+r+' '+r+' 0 '+lg+' 0 '+p2.x+' '+p2.y+' Z'}

function renderWheel(){
  var g=$('#spinSectors');if(!g)return;
  var n=SPIN.sectors.length,ap=360/n,html='';
  for(var i=0;i<n;i++){
    var st=i*ap,en=(i+1)*ap,mi=st+ap/2;
    var s=SPIN.sectors[i];
    var path=arcPath(100,100,96,st,en);
    var tp=polar(100,100,65,mi);
    html+='<path d="'+path+'" fill="'+s.color+'" stroke="#000" stroke-width="2"/>';
    html+='<text x="'+tp.x+'" y="'+tp.y+'" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="900" fill="#fff" data-idx="'+i+'" transform="rotate('+mi+' '+tp.x+' '+tp.y+')" style="font-family:sans-serif">🎁</text>';
  }
  g.innerHTML=html;
  _wheelReady=true;
}
function revealSector(i){var t=$('#spinSectors text[data-idx="'+i+'"]');if(t)t.textContent=SPIN.sectors[i].label}
function hideAll(){$$('#spinSectors text[data-idx]').forEach(function(t){t.textContent='🎁'})}
function pick(){if(Math.random()<SPIN.vipWeight)return {isVip:true,index:Math.floor(Math.random()*SPIN.sectors.length)};var i=Math.floor(Math.random()*SPIN.sectors.length);return {isVip:false,index:i,type:SPIN.sectors[i].type}}
function rHex(n){var c='0123456789ABCDEF',s='';for(var i=0;i<n;i++)s+=c[Math.floor(Math.random()*16)];return s}
function genKey(t){var p=({file3:'T3',file2:'T2',file1:'T1',vip:'VIP'})[t]||'T1';return p+'-'+rHex(4)+'-'+rHex(4)+'-'+rHex(4)}
function getRemain(t){return ({file3:3,file2:2,file1:1,vip:null})[t]}
function cdKey(){return 'tun_spin_cd_'+window.__getDeviceId()}
function getCdRemain(){try{var n=parseInt(localStorage.getItem(cdKey())||'0',10);return n>Date.now()?n-Date.now():0}catch(e){return 0}}
function setCd(){try{localStorage.setItem(cdKey(),String(Date.now()+SPIN.cooldownMs))}catch(e){}}
function fmtMMSS(s){return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

function updateBtnUI(){
  var b=$('#spinBtn');if(!b)return;
  var r=getCdRemain();
  if(r>0){b.disabled=true;b.textContent='⏳ '+fmtMMSS(Math.ceil(r/1000));_lastCd=r}
  else{b.disabled=false;b.textContent='QUAY';
    if(_lastCd>0){
      var w=$('#spinWheel');
      if(w){w.style.transition='transform 1s ease-out';w.style.transform='rotate(0deg)';_rotation=0;setTimeout(function(){if(w)w.style.transition='transform 6s cubic-bezier(.17,.67,.12,.99)'},1000)}
    }
    _lastCd=0;
  }
}
function startTick(){if(_cdTimer)return;updateBtnUI();_cdTimer=setInterval(updateBtnUI,1000)}
window.__spinTick=startTick;

function histGet(){try{return JSON.parse(localStorage.getItem(SPIN.historyKey)||'[]')}catch(e){return[]}}
function histSave(p){
  try{
    var h=histGet();var t=p.isVip?'vip':p.type;
    var lb={file3:'KEY T3',file2:'KEY T2',file1:'KEY T1',vip:'KEY VIP',miss:'MISS'}[t]||t;
    h.unshift({type:t,label:lb,time:Date.now()});
    if(h.length>SPIN.maxHist)h=h.slice(0,SPIN.maxHist);
    localStorage.setItem(SPIN.historyKey,JSON.stringify(h));
    renderHist();
  }catch(e){}
}
function renderHist(){
  var el=$('#spinHistory');if(!el)return;
  var h=histGet();
  if(!h.length){el.innerHTML='<div class="empty">Chưa có lần quay nào.</div>';return}
  el.innerHTML=h.map(function(x){
    var d=new Date(x.time);
    var tm=String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')+':'+String(d.getSeconds()).padStart(2,'0');
    return '<div class="dl-item"><div class="row"><b style="font-size:12px">'+x.label+'</b><span class="tiny mono muted">'+tm+'</span></div></div>';
  }).join('');
}

function showResult(pick,k){
  var b=$('#spinResult');if(!b)return;
  var cls,lbl,kb='';
  if(pick.isVip){cls='spin-result show vip';lbl='👑 TRÚNG KEY VIP';kb='<div class="spin-key">'+k+'</div><button class="spin-copy" data-copy="'+k+'">📋 Sao chép</button>'}
  else if(pick.type!=='miss'){var tl={file3:'KEY T3 (3 file)',file2:'KEY T2 (2 file)',file1:'KEY T1 (1 file)'}[pick.type];cls='spin-result show win';lbl='🎉 TRÚNG · '+tl;kb='<div class="spin-key">'+k+'</div><button class="spin-copy" data-copy="'+k+'">📋 Sao chép</button>'}
  else{cls='spin-result show lose';lbl='😢 Chúc bạn may mắn lần sau'}
  b.className=cls;b.style.display='block';
  b.innerHTML='<div style="font-size:14px;font-weight:900;margin-bottom:6px">'+lbl+'</div>'+kb;
  var cp=b.querySelector('[data-copy]');
  if(cp)cp.addEventListener('click',function(){try{navigator.clipboard.writeText(cp.getAttribute('data-copy'));cp.textContent='✓ Đã copy'}catch(e){}});
  setTimeout(function(){if(b)b.style.display='none';startTick()},SPIN.holdMs);
}

function sendSpinResult(pickRes,key){
  var now=new Date().toLocaleString('vi-VN'),dev=window.__getDeviceId();
  try{
    if(pickRes.isVip)window.__tg.sendText(window.__TG_TPL.spinVip({key:key,device:dev,time:now}),false,'SPIN');
    else if(pickRes.type!=='miss'){var lb={file3:'KEY T3',file2:'KEY T2',file1:'KEY T1'}[pickRes.type];window.__tg.sendText(window.__TG_TPL.spinWin({label:lb,key:key,remain:getRemain(pickRes.type),device:dev,time:now}),false,'SPIN')}
    else{var s=new Date();s.setHours(0,0,0,0);var tc=histGet().filter(function(x){return x.time>=s.getTime()}).length;window.__tg.sendText(window.__TG_TPL.spinLose({device:dev,time:now,todayCount:tc}),false,'SPIN')}
  }catch(e){console.warn('[SPIN]',e)}
}

function spinRun(){
  if(_spinning)return;
  if(!_wheelReady)renderWheel();
  if(getCdRemain()>0)return;
  _spinning=true;
  var btn=$('#spinBtn'),wheel=$('#spinWheel');
  if(btn){btn.disabled=true;btn.textContent='...'}
  hideAll();
  var pickRes=pick();
  setCd();
  var key=null;
  if(pickRes.isVip)key=genKey('vip');
  else if(pickRes.type!=='miss')key=genKey(pickRes.type);

  var ap=360/SPIN.sectors.length;
  var mi=pickRes.index*ap+ap/2;
  var target=((360-mi)%360+360)%360;
  var current=_rotation%360;
  var extra=((target-current)+360)%360;
  _rotation+=extra+360*6;
  if(wheel)wheel.style.transform='rotate('+_rotation+'deg)';

  setTimeout(function(){
    _spinning=false;
    if(!pickRes.isVip)revealSector(pickRes.index);
    showResult(pickRes,key);
    histSave(pickRes);
    sendSpinResult(pickRes,key);
    setTimeout(hideAll,3000);
  },6200);
}

function shaderStart(){
  var k='tun_shader_target';
  var t=parseInt(localStorage.getItem(k)||'0',10);
  if(!t){t=Date.now()+7*24*60*60*1000;try{localStorage.setItem(k,String(t))}catch(e){}}
  function tick(){
    var r=Math.max(0,t-Date.now());
    var s=Math.floor(r/1000);
    var d=Math.floor(s/86400);s-=d*86400;
    var h=Math.floor(s/3600);s-=h*3600;
    var m=Math.floor(s/60);s-=m*60;
    var de=$('#cdDay');if(de)de.textContent=String(d).padStart(2,'0');
    var he=$('#cdHour');if(he)he.textContent=String(h).padStart(2,'0');
    var me=$('#cdMin');if(me)me.textContent=String(m).padStart(2,'0');
    var se=$('#cdSec');if(se)se.textContent=String(s).padStart(2,'0');
  }
  tick();setInterval(tick,1000);
}

function bindSpinBtn(){
  var btn=$('#spinBtn');
  if(!btn){console.warn('[SPIN] Không tìm thấy #spinBtn');return}
  var fresh=btn.cloneNode(true);
  btn.parentNode.replaceChild(fresh,btn);
  fresh.addEventListener('click',function(e){
    e.preventDefault();e.stopPropagation();
    spinRun();
  });
  fresh.style.pointerEvents='auto';
  fresh.style.zIndex='20';
  fresh.style.cursor='pointer';
}

function boot(){
  renderWheel();
  renderHist();
  bindSpinBtn();
  startTick();
  shaderStart();
  setTimeout(function(){if(!$('#spinBtn'))bindSpinBtn()},500);
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);
else setTimeout(boot,100);

window.__spinRun=spinRun;

console.log(
  '%c╔══════════════════════════════════════════════════════╗\n'+
  '║  🎯 STUDIO TUN · TOOL PATCH · GALAXY v5             ║\n'+
  '║  ─────────────────────────────────────────────────  ║\n'+
  '║  2 kênh: TG Bot · TG Group · Zalo 0332288491       ║\n'+
  '║  5 tools + Nút QUAY + Nút TẢI FILE                  ║\n'+
  '║  10 thường + 15 VIP (11 offset + 4 b64)             ║\n'+
  '╚══════════════════════════════════════════════════════╝',
  'color:#a855f7;font-family:monospace;font-weight:700;font-size:10.5px;line-height:1.5'
);
console.log('%c[P20] Spin + Shader + Boot · hoàn tất','background:#a855f7;color:#fff;padding:3px 8px;border-radius:4px;font-weight:bold');
}catch(e){console.error("[P20 fatal]",e)}})();

/* ===== <script> #11 ===== */
// JS MỚI
  console.log("JS Đã chèn!");
