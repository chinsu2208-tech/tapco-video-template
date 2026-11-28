import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 634 (ca tự động 29/11/2026) · Eyeliner đen hay nâu
const W = "Kẻ eyeliner xong mà mắt cứng, kém tươi? Có thể bạn kẻ sai tông. Eyeliner đen hợp người có tông lạnh, da sáng rõ, tương phản mạnh, kiểu mùa Đông. Nâu hợp tông ấm hoặc nền da dịu, mùa Thu, mùa Xuân. Ở ToneLux, bọn mình thường chỉ nhìn tông da và độ tương phản trước khi chọn nét kẻ. Mẹo nhanh: thử nâu trầm sát chân mi, thấy mắt mềm và sáng hơn thì hợp. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T634', 30.0, W, [
  {"kind": "full", "s": 0, "e": 4.9, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Makeup theo tone", "title": "Kẻ eyeliner xong,\nmắt lại cứng?", "hi": "mắt lại cứng?", "cover": true},
  {"kind": "full", "s": 4.9, "e": 10.6, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Eyeliner đen", "title": "Kẻ đen hợp\nmùa Đông", "hi": "mùa Đông", "line": "tông lạnh, tương phản mạnh"},
  {"kind": "full", "s": 10.6, "e": 14.7, "vid": "tlv/lib/v2/canh_03.mp4", "tag": "Eyeliner nâu", "title": "Kẻ nâu hợp\nXuân và Thu", "hi": "Xuân và Thu", "line": "tông ấm, nền da dịu"},
  {"kind": "steps", "s": 14.7, "e": 20.0, "tag": "Trước khi kẻ", "title": "Nhìn tông da\nvà tương phản", "hi": "tương phản", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nda sáng rõ hay dịu", "Tương phản\nmạnh hay nhẹ"]},
  {"kind": "drape", "s": 20.0, "e": 22.8, "tag": "Mẹo nhanh", "title": "Thử nâu trầm\nsát chân mi", "hi": "nâu trầm", "items": ["Nâu trầm", "Đen gắt"], "cols": ["#5a3e2b", "#1a1a1a"]},
  {"kind": "full", "s": 22.8, "e": 25.1, "vid": "tlv/lib/v2/canh_07.mp4", "tag": "Kết quả", "title": "Mắt mềm, sáng hơn\nlà hợp", "hi": "là hợp"},
  {"kind": "end", "s": 25.1, "e": 30.0, "title": "Mắt bạn hợp\nđen hay nâu?", "hi": "đen hay nâu?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t634.mp3'});
