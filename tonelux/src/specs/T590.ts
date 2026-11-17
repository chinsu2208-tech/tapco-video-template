import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 590 (ca tự động 18/11/2026)
const W = "Họp online với khách mà mặt bạn cứ xỉn, mờ? Do màu áo đấy. Màn hình làm da kém tươi, nên cần màu có độ tương phản vừa đủ với da. Da tông ấm hợp be, nâu caramel, xanh rêu. Da tông lạnh hợp xanh navy, xám lạnh, hồng dịu. Ở ToneLux, bọn mình hay chỉ: tránh áo trùng màu da, tránh nền quá sáng chói. Hôm nay thử một chiếc áo trầm vừa phải, hợp tông da. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T590', 30.08, W, [
  {"kind": "full", "s": 0, "e": 4.34, "cover": true, "vid": "tlv/lib/s2/canh_13.mp4", "tag": "Họp online", "title": "Lên hình\nmặt xỉn, mờ?", "hi": "xỉn, mờ?"},
  {"kind": "drape", "s": 4.34, "e": 8.68, "tag": "Tương phản", "title": "Màu áo cần\ntương phản vừa", "hi": "tương phản vừa", "items": ["Tương phản vừa đủ", "Trùng màu da"], "cols": ["#1b2a49", "#e3c9ae"]},
  {"kind": "tips", "s": 8.68, "e": 12.38, "tag": "Da tông ấm", "title": "Da ấm chọn\ngam đất", "hi": "gam đất", "items": ["Be", "Nâu caramel", "Xanh rêu"], "cols": ["#d8c3a5", "#a86b3c", "#5b6b3a"]},
  {"kind": "tips", "s": 12.38, "e": 16.16, "tag": "Da tông lạnh", "title": "Da lạnh chọn\ngam mát", "hi": "gam mát", "items": ["Xanh navy", "Xám lạnh", "Hồng dịu"], "cols": ["#1b2a49", "#8e949b", "#d8a7b5"]},
  {"kind": "full", "s": 16.16, "e": 21.36, "vid": "tlv/lib/s2/canh_12.mp4", "tag": "Tại ToneLux", "title": "Tránh áo trùng\nmàu da", "hi": "màu da", "line": "và nền quá sáng chói"},
  {"kind": "full", "s": 21.36, "e": 24.88, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Hôm nay", "title": "Thử áo trầm\nvừa phải", "hi": "vừa phải"},
  {"kind": "end", "s": 24.88, "e": 30.08, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t590.mp3'});
