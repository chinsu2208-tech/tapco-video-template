import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 636 (ca tự động 29/11/2026) · Màu đồ mặc nhà và tâm trạng
const W = "Sáng nào bạn cũng soi gương trong bộ đồ ngủ cũ xỉn màu? Màu đó âm thầm kéo tâm trạng bạn đấy. Tông ấm như kem, cam đất, be làm không khí dịu và ấm áp. Tông lạnh như xanh bạc hà, xám xanh làm đầu óc tỉnh và yên. Chuyên gia ToneLux hay nói, đồ ở nhà cũng nên hợp tone da, nhìn mình khỏe là vui liền. Thử đổi một món gần mặt nhất, như áo hoặc khăn turban. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T636', 31.5, W, [
  {"kind": "full", "s": 0, "e": 4.3, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Đồ mặc nhà", "title": "Sáng nào cũng soi\nđồ ngủ xỉn màu?", "hi": "xỉn màu?", "cover": true},
  {"kind": "full", "s": 4.3, "e": 7.3, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Tâm trạng", "title": "Màu âm thầm\nkéo tâm trạng", "hi": "tâm trạng"},
  {"kind": "tips", "s": 7.3, "e": 12.1, "tag": "Tông ấm", "title": "Dịu và ấm áp\nvới gam kem", "hi": "gam kem", "items": ["Kem", "Cam đất", "Be"], "cols": ["#f3e5c8", "#c06a3e", "#d8c3a5"]},
  {"kind": "tips", "s": 12.1, "e": 16.6, "tag": "Tông lạnh", "title": "Tỉnh và yên\nvới gam lạnh", "hi": "gam lạnh", "items": ["Xanh bạc hà", "Xám xanh"], "cols": ["#a8dcc4", "#7d8f99"]},
  {"kind": "full", "s": 16.6, "e": 22.7, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Lời khuyên", "title": "Đồ ở nhà cũng\nnên hợp tone da", "hi": "hợp tone da", "line": "nhìn mình khỏe là vui liền"},
  {"kind": "full", "s": 22.7, "e": 27.0, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Thử ngay", "title": "Đổi một món\ngần mặt nhất", "hi": "gần mặt nhất", "line": "áo hoặc khăn turban"},
  {"kind": "end", "s": 27.0, "e": 31.5, "title": "Màu nào\nhợp tone da bạn?", "hi": "hợp tone da bạn?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t636.mp3'});
