import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 621 (ca tự động 11/11/2026)
const W = "Chọn kính mà mặt cứ xỉn đi? Vấn đề có thể nằm ở màu gọng. Da tông ấm, hợp nâu đồi mồi hoặc gold, nhìn mềm và sáng da hơn. Da tông lạnh, hợp đen mờ hoặc bạc, nhìn gọn và thanh thoát hơn. Mùa màu sáng thì chọn gọng nhẹ, mảnh. Mùa màu trầm thì chọn gọng đậm hơn. Ở ToneLux, bọn mình thường dặn: thử gọng sát mặt, ở ánh sáng tự nhiên. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T621', 28.52, W, [
  {"kind": "full", "s": 0, "e": 4.3, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Chọn kính", "title": "Mặt xỉn đi\nvì màu gọng?", "hi": "màu gọng?", "cover": true},
  {"kind": "tips", "s": 4.3, "e": 9.05, "tag": "Da tông ấm", "title": "Da ấm: gọng\nnâu đồi mồi, gold", "hi": "nâu đồi mồi, gold", "items": ["Nâu đồi mồi", "Gold"], "cols": ["#7a4a26", "#c9a54a"]},
  {"kind": "tips", "s": 9.05, "e": 13.8, "tag": "Da tông lạnh", "title": "Da lạnh: gọng\nđen mờ, bạc", "hi": "đen mờ, bạc", "items": ["Đen mờ", "Bạc"], "cols": ["#2b2b2d", "#c0c3c7"]},
  {"kind": "full", "s": 13.8, "e": 16.55, "vid": "tlv/lib/s2/canh_14.mp4", "tag": "Mùa màu sáng", "title": "Chọn gọng\nnhẹ, mảnh", "hi": "nhẹ, mảnh"},
  {"kind": "full", "s": 16.55, "e": 19.05, "vid": "tlv/lib/s2/canh_15.mp4", "tag": "Mùa màu trầm", "title": "Chọn gọng\nđậm hơn", "hi": "đậm hơn"},
  {"kind": "full", "s": 19.05, "e": 23.7, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Tại ToneLux", "title": "Thử gọng sát mặt,\nánh sáng tự nhiên", "hi": "ánh sáng tự nhiên"},
  {"kind": "end", "s": 23.7, "e": 28.52, "title": "Gọng nào\nhợp bạn?", "hi": "hợp bạn?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t621.mp3'});
