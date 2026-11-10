import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 623 (ca tự động 11/11/2026)
const W = "Sắp tặng quà đồng nghiệp cuối năm? Đừng chọn khăn lụa theo mốt. Hãy chọn theo tông da. Da tông ấm hợp màu vàng kem, cam đất, xanh rêu. Da tông lạnh hợp hồng lạnh, xanh navy, tím lavender. Màu đúng làm da sáng và khỏe hơn, nên người nhận hay dùng lại. Ở ToneLux, bọn mình thường chỉ cách xem tông qua màu tĩnh mạch cổ tay. Xanh lam là lạnh, xanh lục là ấm. Comment tone da đồng nghiệp của bạn, ToneLux giúp bạn chọn màu khăn hợp nhất.";

export default v('T623', 30.13, W, [
  {"kind": "full", "s": 0, "e": 4.3, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Quà cuối năm", "title": "Tặng khăn lụa,\nđừng theo mốt", "hi": "đừng theo mốt", "cover": true},
  {"kind": "tips", "s": 4.3, "e": 9.75, "tag": "Chọn theo tông da", "title": "Da ấm hợp\ngam đất", "hi": "gam đất", "items": ["Vàng kem", "Cam đất", "Xanh rêu"], "cols": ["#efd9a0", "#c0703f", "#5d6b3a"]},
  {"kind": "tips", "s": 9.75, "e": 13.7, "tag": "Da tông lạnh", "title": "Da lạnh hợp\ngam lạnh", "hi": "gam lạnh", "items": ["Hồng lạnh", "Xanh navy", "Tím lavender"], "cols": ["#d995a8", "#1b2a49", "#b8a6d9"]},
  {"kind": "full", "s": 13.7, "e": 17.7, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Màu đúng", "title": "Da sáng\nvà khỏe hơn", "hi": "khỏe hơn", "line": "người nhận hay dùng lại"},
  {"kind": "full", "s": 17.7, "e": 22.3, "vid": "tlv/lib/s2/canh_13.mp4", "tag": "Mẹo ToneLux", "title": "Xem tông\nqua cổ tay", "hi": "cổ tay", "line": "nhìn màu tĩnh mạch"},
  {"kind": "tips", "s": 22.3, "e": 24.65, "tag": "Tĩnh mạch cổ tay", "title": "Lam là lạnh,\nlục là ấm", "hi": "lục là ấm", "items": ["Xanh lam · lạnh", "Xanh lục · ấm"], "cols": ["#3b6fb6", "#4f8a5b"]},
  {"kind": "end", "s": 24.65, "e": 30.13, "title": "Đồng nghiệp\ntone gì?", "hi": "tone gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t623.mp3'});
