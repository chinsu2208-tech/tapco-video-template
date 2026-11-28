import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 638 (ca tự động 29/11/2026) · Dưỡng trắng có đổi tone da không
const W = "Bạn uống vitamin, bôi kem dưỡng trắng cả năm, tưởng sẽ đổi được tone da? Chưa chắc đâu. Dưỡng trắng chủ yếu làm da sáng và đều hơn, tức là đổi độ sáng. Còn undertone, tông lạnh hay ấm nằm sâu bên dưới, do sắc tố nền quyết định, gần như đi cùng bạn suốt đời. Ở ToneLux, bọn mình hay nói: da sáng lên không có nghĩa là đổi mùa màu. Thử ngay: so một tấm vải bạc và một tấm vải vàng gold sát cằm, xem da tươi hơn ở bên nào. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T638', 31.3, W, [
  {"kind": "full", "s": 0, "e": 5.0, "vid": "tlv/lib/s2/canh_10.mp4", "tag": "Lầm tưởng", "title": "Dưỡng trắng\ncó đổi tone da?", "hi": "đổi tone da?", "cover": true},
  {"kind": "full", "s": 5.0, "e": 9.0, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Sự thật", "title": "Dưỡng trắng\nđổi độ sáng", "hi": "độ sáng", "line": "da sáng và đều hơn"},
  {"kind": "steps", "s": 9.0, "e": 15.6, "tag": "Undertone", "title": "Nằm sâu\ndưới làn da", "hi": "dưới làn da", "items": ["Sắc tố nền\nquyết định", "Lạnh hay ấm\nnằm bên dưới", "Gần như\ntheo bạn suốt đời"]},
  {"kind": "full", "s": 15.6, "e": 20.4, "vid": "tlv/lib/s2/canh_07.mp4", "tag": "Ghi nhớ", "title": "Da sáng lên,\nmùa vẫn vậy", "hi": "vẫn vậy"},
  {"kind": "tips", "s": 20.4, "e": 23.9, "tag": "Thử ngay", "title": "Vải bạc và\nvàng gold sát cằm", "hi": "sát cằm", "items": ["Vải bạc", "Vải vàng gold"], "cols": ["#c0c0c0", "#d4af37"]},
  {"kind": "full", "s": 23.9, "e": 26.2, "vid": "tlv/lib/s2/canh_14.mp4", "tag": "So sánh", "title": "Bên nào da\ntươi hơn?", "hi": "tươi hơn?"},
  {"kind": "end", "s": 26.2, "e": 31.3, "title": "Undertone\ncủa bạn là gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t638.mp3'});
