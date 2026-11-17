import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 587 (ca tự động 18/11/2026)
const W = "Cùng một sân khấu, sao mỗi idol lại hợp một màu outfit khác nhau? Bí mật nằm ở tông da. Người da tông lạnh hợp xanh dương, hồng lạnh, bạc. Da tông ấm lên màu cam đất, vàng, be rất sang. Ở ToneLux, bọn mình còn xét thêm độ sáng và độ trầm nữa. Áp dụng ngay: úp cổ tay xuống, thấy gân xanh là hơi lạnh, xanh lục là hơi ấm. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T587', 27.99, W, [
  {"kind": "full", "s": 0, "e": 5.16, "cover": true, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Kpop & màu sắc", "title": "Cùng sân khấu,\nkhác màu hợp", "hi": "khác màu hợp"},
  {"kind": "full", "s": 5.16, "e": 7.16, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Bí mật", "title": "Nằm ở\ntông da", "hi": "tông da"},
  {"kind": "tips", "s": 7.16, "e": 10.68, "tag": "Tông lạnh", "title": "Da lạnh hợp\ngam mát", "hi": "gam mát", "items": ["Xanh dương", "Hồng lạnh", "Bạc"], "cols": ["#2f5fa8", "#d98fb0", "#c0c4c8"]},
  {"kind": "tips", "s": 10.68, "e": 14.26, "tag": "Tông ấm", "title": "Da ấm lên màu\nrất sang", "hi": "rất sang", "items": ["Cam đất", "Vàng", "Be"], "cols": ["#c0643a", "#e0b33c", "#d8c3a5"]},
  {"kind": "steps", "s": 14.26, "e": 18.44, "tag": "Tại ToneLux", "title": "Xét thêm\nsáng và trầm", "hi": "sáng và trầm", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\nđậm hay dịu"]},
  {"kind": "full", "s": 18.44, "e": 23.84, "vid": "tlv/lib/s2/canh_05.mp4", "tag": "Áp dụng ngay", "title": "Úp cổ tay,\nnhìn màu gân", "hi": "màu gân", "line": "gân xanh: hơi lạnh · xanh lục: hơi ấm"},
  {"kind": "end", "s": 23.84, "e": 27.99, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t587.mp3'});
