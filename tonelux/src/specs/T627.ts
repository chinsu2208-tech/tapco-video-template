import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 627 (ca tự động 11/11/2026)
const W = "Qua tuổi 40, bạn thấy màu từng hợp giờ hơi lệch? Không sao. Mùa màu của bạn thường không đổi. Cái đổi là da bớt sáng, tương phản dịu đi. Vì vậy hãy tinh chỉnh độ sáng và độ bão hòa, đừng đổi hẳn mùa. Ở ToneLux, bọn mình hay giữ nguyên tông ấm hoặc lạnh, chỉ làm màu dịu và sâu hơn một chút. Hôm nay, bạn thử đổi một màu quá chói sang phiên bản trầm hơn. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T627', 29.91, W, [
  {"kind": "full", "s": 0, "e": 4.8, "vid": "tlv/lib/s2/canh_13.mp4", "tag": "Tuổi 40", "title": "Màu từng hợp\ngiờ hơi lệch?", "hi": "hơi lệch?", "cover": true, "line": "không sao cả"},
  {"kind": "seasons", "s": 4.8, "e": 6.9, "tag": "Yên tâm", "title": "Mùa màu\nthường không đổi", "hi": "không đổi"},
  {"kind": "full", "s": 6.9, "e": 10.15, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Cái thay đổi", "title": "Da bớt sáng,\ntương phản dịu", "hi": "tương phản dịu"},
  {"kind": "steps", "s": 10.15, "e": 14.7, "tag": "Tinh chỉnh", "title": "Chỉnh, đừng\nđổi hẳn mùa", "hi": "đổi hẳn mùa", "items": ["Giữ tông\nấm hay lạnh", "Độ sáng\nđiều chỉnh", "Độ bão hòa\ndịu hơn"]},
  {"kind": "full", "s": 14.7, "e": 20.85, "vid": "tlv/lib/s2/canh_17.mp4", "tag": "Tại ToneLux", "title": "Giữ tông,\nmàu dịu và sâu hơn", "hi": "dịu và sâu hơn"},
  {"kind": "drape", "s": 20.85, "e": 24.9, "tag": "Thử hôm nay", "title": "Đổi màu chói\nsang bản trầm", "hi": "bản trầm", "items": ["Đỏ gạch, trầm hơn", "Đỏ tươi, quá chói"], "cols": ["#a5442f", "#e0262b"]},
  {"kind": "end", "s": 24.9, "e": 29.91, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t627.mp3'});
