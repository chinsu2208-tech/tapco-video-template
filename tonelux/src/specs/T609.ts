import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 609 (ca tự động 15/11/2026)
const W = "Đi làm ngày Black Friday mà son đỏ lên môi lại thành ma cà rồng? Đừng chọn theo ảnh quảng cáo. Chọn theo mùa màu. Da xuân hợp đỏ cam tươi. Da hè hợp đỏ hồng mát, hơi dịu. Da thu hợp đỏ gạch, đỏ nâu ấm. Da đông hợp đỏ lạnh, đậm và rõ. Ở ToneLux, bọn mình hay bảo khách quẹt thử sát hàm dưới dưới ánh sáng ban ngày. Comment tone da của bạn, ToneLux giúp bạn xem hợp đỏ nào.";

export default v('T609', 26.12, W, [
  {"kind": "full", "s": 0, "e": 2.1, "cover": true, "vid": "tlv/lib/v2/canh_02.mp4", "tag": "Đi làm", "title": "Son đỏ\nngày Black Friday", "hi": "Black Friday"},
  {"kind": "full", "s": 2.1, "e": 4.4, "vid": "tlv/lib/v2/canh_04.mp4", "tag": "Sự cố", "title": "Lên môi lại\nthành ma cà rồng?", "hi": "ma cà rồng?"},
  {"kind": "seasons", "s": 4.4, "e": 7.3, "tag": "Đừng theo quảng cáo", "title": "Chọn son\ntheo mùa màu", "hi": "theo mùa màu"},
  {"kind": "tips", "s": 7.3, "e": 11.8, "tag": "Xuân & Hạ", "title": "Xuân đỏ cam,\nHạ đỏ hồng", "hi": "Hạ đỏ hồng", "items": ["Xuân · đỏ cam tươi", "Hạ · đỏ hồng mát"], "cols": ["#e8553a", "#c94a6a"]},
  {"kind": "tips", "s": 11.8, "e": 16.6, "tag": "Thu & Đông", "title": "Thu đỏ gạch,\nĐông đỏ lạnh", "hi": "Đông đỏ lạnh", "items": ["Thu · đỏ gạch", "Thu · đỏ nâu", "Đông · đỏ lạnh"], "cols": ["#a5442f", "#7b3a2c", "#b0102f"]},
  {"kind": "full", "s": 16.6, "e": 18.9, "vid": "tlv/lib/v2/canh_05.mp4", "tag": "Tại Tonelux", "title": "Quẹt thử\nsát hàm dưới", "hi": "sát hàm dưới"},
  {"kind": "full", "s": 18.9, "e": 21.3, "vid": "tlv/lib/v2/canh_18.mp4", "tag": "Mẹo", "title": "Dưới ánh sáng\nban ngày", "hi": "ban ngày"},
  {"kind": "end", "s": 21.3, "e": 26.12, "title": "Bạn hợp\nsắc đỏ nào?", "hi": "sắc đỏ nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {"audio": "voice/t609.mp3"});
