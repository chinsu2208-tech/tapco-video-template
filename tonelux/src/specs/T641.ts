import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 641 (ca tự động 29/11/2026) · Trend đỏ cherry
const W = "Đỏ cherry đang phủ sóng từ môi đến túi xách, nhưng sao tô lên lại xỉn da? Vì cherry cũng có tông riêng. Cherry ngả hồng lạnh hợp mùa hè và mùa đông. Cherry ngả cam ấm hợp mùa xuân và mùa thu. Ở ToneLux, bọn mình hay bảo bạn so thử trên cổ tay, thấy da sáng lên là đúng tông. Hôm nay thử đúng một thỏi son thôi. Comment tone da của bạn, ToneLux giúp bạn xem hợp cherry nào.";

export default v('T641', 27.5, W, [
  {"kind": "full", "s": 0, "e": 5.8, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Trend mùa đông", "title": "Đỏ cherry tô lên\nlại xỉn da?", "hi": "xỉn da?", "cover": true},
  {"kind": "drape", "s": 5.8, "e": 7.9, "tag": "Vì sao", "title": "Cherry cũng có\ntông riêng", "hi": "tông riêng", "items": ["Đúng tông", "Lệch tông"], "cols": ["#b3204d", "#d2392b"]},
  {"kind": "tips", "s": 7.9, "e": 11.2, "tag": "Hồng lạnh", "title": "Cherry hồng lạnh\ncho Hạ, Đông", "hi": "Hạ, Đông", "items": ["Ngả hồng lạnh", "Ngả cam ấm"], "cols": ["#b3204d", "#d2392b"]},
  {"kind": "full", "s": 11.2, "e": 14.6, "vid": "tlv/lib/v2/canh_05.mp4", "tag": "Cam ấm", "title": "Cherry ngả cam\ncho Xuân, Thu", "hi": "Xuân, Thu"},
  {"kind": "full", "s": 14.6, "e": 20.2, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Mẹo thử", "title": "Thử trên\ncổ tay trước", "hi": "cổ tay", "line": "da sáng lên là đúng tông"},
  {"kind": "full", "s": 20.2, "e": 22.4, "vid": "tlv/lib/v2/canh_07.mp4", "tag": "Hôm nay", "title": "Thử đúng\nmột thỏi son", "hi": "một thỏi son"},
  {"kind": "end", "s": 22.4, "e": 27.5, "title": "Bạn hợp\ncherry nào?", "hi": "cherry nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t641.mp3'});
