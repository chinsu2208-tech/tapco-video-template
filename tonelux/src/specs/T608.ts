import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 608 (ca tự động 15/11/2026)
const W = "Sắp comeback mà chưa biết nhuộm tóc hồng khói, bạc lavender hay nâu choco? Đừng chọn theo idol, chọn theo undertone. Da ngả hồng, tông lạnh, hợp hồng khói và bạc lavender. Da ngả vàng, tông ấm, hợp nâu choco ấm hơn. Ở ToneLux, bọn mình hay bảo khách cầm thử màu lên sát mặt trước khi nhuộm. Da sáng hơn lên hay xỉn đi, nhìn là biết ngay. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T608', 25.3, W, [
  {"kind": "full", "s": 0, "e": 4.6, "cover": true, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Mùa comeback", "title": "Hồng khói,\nlavender hay\nnâu choco?", "hi": "nâu choco?"},
  {"kind": "full", "s": 4.6, "e": 7.3, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Nguyên tắc", "title": "Đừng theo idol,\nhãy theo undertone", "hi": "undertone"},
  {"kind": "tips", "s": 7.3, "e": 10.8, "tag": "Da ngả hồng", "title": "Tông lạnh hợp\nhồng khói, bạc", "hi": "hồng khói, bạc", "items": ["Hồng khói", "Bạc lavender"], "cols": ["#c8a2a8", "#c4bdd8"]},
  {"kind": "drape", "s": 10.8, "e": 14.3, "tag": "Da ngả vàng", "title": "Tông ấm hợp\nnâu choco ấm", "hi": "nâu choco ấm", "items": ["Nâu choco ấm", "Bạc lavender"], "cols": ["#5c3a21", "#c4bdd8"]},
  {"kind": "full", "s": 14.3, "e": 18.1, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tại Tonelux", "title": "Cầm màu sát mặt\ntrước khi nhuộm", "hi": "sát mặt"},
  {"kind": "full", "s": 18.1, "e": 20.9, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Nhìn là biết", "title": "Da sáng lên\nhay xỉn đi?", "hi": "xỉn đi?"},
  {"kind": "end", "s": 20.9, "e": 25.3, "title": "Tone da bạn\nhợp màu nào?", "hi": "màu nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {"audio": "voice/t608.mp3"});
