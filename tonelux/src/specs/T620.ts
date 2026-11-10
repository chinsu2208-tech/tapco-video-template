import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 620 (ca tự động 11/11/2026)
const W = "Sắp chụp ảnh cưới mà một người hợp tông ấm, một người hợp tông lạnh? Đừng vội chọn màu theo sở thích. Mỗi người có undertone riêng, nên cùng một màu có thể làm da người này sáng lên, người kia xỉn đi. Bí quyết là chọn bảng màu có độ sáng và độ trầm gần nhau, như kem, be trầm, xanh sage dịu. Ở ToneLux, bọn mình thường chỉnh sắc độ cho từng người rồi ghép lại thành một bảng chung. Comment tone da của hai bạn, ToneLux giúp xem hợp màu nào.";

export default v('T620', 29.07, W, [
  {"kind": "full", "s": 0, "e": 4.05, "vid": "tlv/lib/v2/canh_18.mp4", "tag": "Ảnh cưới", "title": "Một ấm, một lạnh\nchụp ảnh cưới?", "hi": "chụp ảnh cưới?", "cover": true},
  {"kind": "full", "s": 4.05, "e": 6.1, "vid": "tlv/lib/v2/canh_13.mp4", "tag": "Khoan đã", "title": "Đừng chọn\ntheo sở thích", "hi": "sở thích"},
  {"kind": "drape", "s": 6.1, "e": 12.35, "tag": "Undertone riêng", "title": "Cùng một màu,\nhai hiệu ứng", "hi": "hai hiệu ứng", "items": ["Người này sáng lên", "Người kia xỉn đi"], "cols": ["#d8b98a", "#a7b4c7"]},
  {"kind": "full", "s": 12.35, "e": 16.45, "vid": "tlv/lib/s2/canh_08.mp4", "tag": "Bí quyết", "title": "Cùng độ sáng,\ncùng độ trầm", "hi": "cùng độ trầm"},
  {"kind": "tips", "s": 16.45, "e": 19.05, "tag": "Gợi ý", "title": "Bảng màu chung\ncho cả hai", "hi": "cho cả hai", "items": ["Kem", "Be trầm", "Xanh sage"], "cols": ["#f0e6d2", "#b8a58c", "#9caf88"]},
  {"kind": "full", "s": 19.05, "e": 24.2, "vid": "tlv/lib/s2/canh_12.mp4", "tag": "Tại ToneLux", "title": "Chỉnh sắc độ\ntừng người", "hi": "từng người", "line": "rồi ghép thành một bảng chung"},
  {"kind": "end", "s": 24.2, "e": 29.07, "title": "Tone da\nhai bạn là gì?", "hi": "hai bạn là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t620.mp3'});
