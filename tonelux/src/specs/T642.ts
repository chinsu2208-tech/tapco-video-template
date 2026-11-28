import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 642 (ca tự động 29/11/2026) · Clean girl makeup theo tone da
const W = "Làm clean girl makeup mà mặt vẫn nhạt nhòa? Lớp nền mỏng chỉ sang khi má hồng và son đúng sắc độ của bạn. Da tông ấm, hợp cam đào, san hô. Da tông lạnh, hợp hồng lạnh, hồng berry. Chọn thêm độ sáng và độ trầm gần với màu da và môi thật. Ở ToneLux, bọn mình hay bảo khách thử má hồng trước, vì nó đổi cả khí sắc. Hôm nay, bạn thử đúng một thỏi má hồng nhé. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T642', 29.5, W, [
  {"kind": "full", "s": 0, "e": 3.3, "vid": "tlv/lib/v2/canh_13.mp4", "tag": "Trend makeup", "title": "Clean girl mà\nmặt vẫn nhạt?", "hi": "mặt vẫn nhạt?", "cover": true},
  {"kind": "full", "s": 3.3, "e": 7.3, "vid": "tlv/lib/v2/canh_02.mp4", "tag": "Bí quyết", "title": "Nền mỏng cần\nmá, son đúng sắc", "hi": "đúng sắc"},
  {"kind": "tips", "s": 7.3, "e": 10.2, "tag": "Tông ấm", "title": "Da ấm hợp\ncam đào", "hi": "cam đào", "items": ["Cam đào", "San hô"], "cols": ["#f4a582", "#ff7f6a"]},
  {"kind": "tips", "s": 10.2, "e": 13.1, "tag": "Tông lạnh", "title": "Da lạnh hợp\nhồng berry", "hi": "hồng berry", "items": ["Hồng lạnh", "Hồng berry"], "cols": ["#e48aa8", "#a2315a"]},
  {"kind": "steps", "s": 13.1, "e": 17.0, "tag": "Chọn thêm", "title": "Gần màu da\nvà môi thật", "hi": "môi thật", "items": ["Độ sáng\ngần màu da", "Độ trầm\ngần môi thật", "Tổng thể\nnhìn tự nhiên"]},
  {"kind": "full", "s": 17.0, "e": 21.9, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Mẹo ToneLux", "title": "Thử má hồng\ntrước tiên", "hi": "má hồng", "line": "vì nó đổi cả khí sắc"},
  {"kind": "full", "s": 21.9, "e": 24.6, "vid": "tlv/lib/v2/canh_06.mp4", "tag": "Hôm nay", "title": "Hôm nay thử\nmột thỏi má hồng", "hi": "má hồng"},
  {"kind": "end", "s": 24.6, "e": 29.5, "title": "Bạn hợp\nmá hồng nào?", "hi": "má hồng nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t642.mp3'});
