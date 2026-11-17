import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 591 (ca tự động 18/11/2026)
const W = "Chị em từng mua chiếc áo hợp mốt, mặc lên mặt xỉn hẳn chưa? Lỗi thường không nằm ở áo, mà ở tông màu. Da hợp tông ấm hay lạnh, sáng hay trầm, mỗi kiểu khác nhau. Áo trắng lạnh dễ làm da ngả vàng, xỉn. Ở ToneLux, bọn mình hay thấy chuyện này. Mẹo nhanh: kê áo sát cằm, trước gương, dưới ánh sáng ban ngày. Mặt tươi lên là hợp, xám đi là chưa. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T591', 27.34, W, [
  {"kind": "full", "s": 0, "e": 4.0, "cover": true, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Chị em ơi", "title": "Áo hợp mốt\nmà mặt xỉn?", "hi": "mặt xỉn?"},
  {"kind": "full", "s": 4.0, "e": 6.8, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Lỗi ở đâu", "title": "Không ở áo,\nmà ở tông màu", "hi": "tông màu"},
  {"kind": "steps", "s": 6.8, "e": 10.86, "tag": "Mỗi người một kiểu", "title": "Ấm hay lạnh,\nsáng hay trầm", "hi": "sáng hay trầm", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\nđậm hay dịu"]},
  {"kind": "drape", "s": 10.86, "e": 16.1, "tag": "Ví dụ", "title": "Trắng lạnh\ndễ làm da xỉn", "hi": "da xỉn", "items": ["Trắng ngà · da sáng", "Trắng lạnh · da xỉn"], "cols": ["#b89766", "#8fa5c2"]},
  {"kind": "full", "s": 16.1, "e": 20.18, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Mẹo nhanh", "title": "Kê áo sát cằm,\nánh sáng ngày", "hi": "ánh sáng ngày"},
  {"kind": "full", "s": 20.18, "e": 22.98, "vid": "tlv/lib/s2/canh_18.mp4", "tag": "Kết quả", "title": "Mặt tươi lên\nlà hợp", "hi": "là hợp", "line": "xám đi là chưa"},
  {"kind": "end", "s": 22.98, "e": 27.34, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t591.mp3'});
