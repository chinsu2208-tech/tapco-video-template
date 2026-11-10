import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 622 (ca tự động 11/11/2026)
const W = "Bạn cầm túi nào cũng thấy sai sai, mà không biết sai ở đâu? Có thể do túi lệch tone da. Da tông ấm hợp be, nâu caramel, đỏ gạch. Da tông lạnh hợp trắng tinh, xám, xanh navy, hồng lạnh. Ở ToneLux, bọn mình hay bảo, thử áp túi sát mặt dưới ánh sáng tự nhiên, thấy mặt sáng và đều hơn là đúng tone. Bạn team ấm hay team lạnh? Comment màu túi yêu thích, ToneLux chỉ bạn mùa màu tương ứng.";

export default v('T622', 26.91, W, [
  {"kind": "full", "s": 0, "e": 4.1, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Chọn túi xách", "title": "Túi nào cũng\nthấy sai sai?", "hi": "sai sai?", "cover": true},
  {"kind": "full", "s": 4.1, "e": 6.15, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Lý do", "title": "Có thể do\nlệch tone da", "hi": "lệch tone da"},
  {"kind": "tips", "s": 6.15, "e": 9.3, "tag": "Team ấm", "title": "Túi cho\nteam ấm", "hi": "team ấm", "items": ["Be", "Nâu caramel", "Đỏ gạch"], "cols": ["#d8c3a5", "#a8693a", "#a5442f"]},
  {"kind": "tips", "s": 9.3, "e": 13.15, "tag": "Team lạnh", "title": "Túi cho\nteam lạnh", "hi": "team lạnh", "items": ["Trắng tinh", "Xám", "Xanh navy", "Hồng lạnh"], "cols": ["#f5f5f2", "#9a9ea3", "#1b2a49", "#d995a8"]},
  {"kind": "full", "s": 13.15, "e": 17.6, "vid": "tlv/lib/s2/canh_18.mp4", "tag": "Tại ToneLux", "title": "Áp túi sát mặt,\nánh sáng tự nhiên", "hi": "sát mặt"},
  {"kind": "drape", "s": 17.6, "e": 20.35, "tag": "So nhanh", "title": "Mặt sáng, đều\nlà đúng tone", "hi": "đúng tone", "items": ["Mặt sáng, đều màu", "Mặt xỉn, kém tươi"], "cols": ["#a8693a", "#8e9aaf"]},
  {"kind": "end", "s": 20.35, "e": 26.91, "title": "Team ấm\nhay team lạnh?", "hi": "team lạnh?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t622.mp3'});
