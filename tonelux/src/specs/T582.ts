import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 582 (ca tự động 22/11/2026)
const W = "Sắp làm móng Tết mà chưa biết chọn màu nào? Mẹo này cho bạn. Đỏ nào cũng đẹp, nhưng hợp hay không nằm ở tông ấm hay lạnh. Da ấm hợp đỏ cam, đỏ gạch. Da lạnh hợp đỏ cherry, đỏ mận. Mùa màu càng trầm, đỏ càng nên sâu. Ở ToneLux, bọn mình thường bảo bạn thử màu lên da trước khi chọn. Soi cổ tay dưới ánh sáng tự nhiên là xong. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T582', 25.83, W, [
  {"kind": "full", "s": 0.0, "e": 3.72, "cover": true, "vid": "tlv/lib/v2/canh_18.mp4", "tag": "Móng Tết", "title": "Móng Tết năm nay\nchọn đỏ nào?", "hi": "chọn đỏ nào?"},
  {"kind": "drape", "s": 3.72, "e": 7.52, "tag": "Đỏ nào cũng đẹp", "title": "Hợp hay không\nnằm ở tông da", "hi": "tông da", "items": ["Đỏ đúng tông", "Đỏ lệch tông"], "cols": ["#b0182f", "#e0603a"]},
  {"kind": "tips", "s": 7.52, "e": 9.73, "tag": "Da ấm", "title": "Da ấm chọn\nđỏ cam, đỏ gạch", "hi": "đỏ cam, đỏ gạch", "items": ["Đỏ cam", "Đỏ gạch"], "cols": ["#d9472b", "#a8432c"]},
  {"kind": "tips", "s": 9.73, "e": 11.93, "tag": "Da lạnh", "title": "Da lạnh chọn\ncherry, đỏ mận", "hi": "cherry, đỏ mận", "items": ["Đỏ cherry", "Đỏ mận"], "cols": ["#a3122d", "#6e1a37"]},
  {"kind": "full", "s": 11.93, "e": 14.46, "vid": "tlv/lib/v2/canh_17.mp4", "tag": "Mùa màu trầm", "title": "Mùa càng trầm,\nđỏ càng sâu", "hi": "đỏ càng sâu"},
  {"kind": "full", "s": 14.46, "e": 18.58, "vid": "tlv/lib/v2/canh_13.mp4", "tag": "Tại ToneLux", "title": "Thử màu lên da\ntrước khi chọn", "hi": "trước khi chọn"},
  {"kind": "full", "s": 18.58, "e": 21.26, "vid": "tlv/lib/v2/canh_05.mp4", "tag": "Mẹo nhanh", "title": "Soi cổ tay,\nánh sáng tự nhiên", "hi": "ánh sáng tự nhiên"},
  {"kind": "end", "s": 21.26, "e": 25.83, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t582.mp3'});
