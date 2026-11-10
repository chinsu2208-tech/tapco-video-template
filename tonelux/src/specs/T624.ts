import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 624 (ca tự động 11/11/2026)
const W = "Làm văn phòng, chiều xuống là mặt xỉn hẳn? Do màu áo sát mặt đấy. Đèn văn phòng thường lạnh, nên da dễ nhìn nhạt và mệt. Màu sát mặt càng xám hoặc càng đục thì càng kéo da xuống. Ở ToneLux, bọn mình hay chỉ một mẹo: chọn áo đúng tông ấm lạnh của da, độ sáng vừa phải, màu trong và sạch. Mai thử một chiếc áo như vậy nhé. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T624', 27.3, W, [
  {"kind": "full", "s": 0, "e": 5.2, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Dân văn phòng", "title": "Chiều xuống\nlà mặt xỉn?", "hi": "mặt xỉn?", "cover": true, "line": "do màu áo sát mặt"},
  {"kind": "full", "s": 5.2, "e": 8.75, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Đèn văn phòng", "title": "Đèn lạnh làm\nda nhạt, mệt", "hi": "nhạt, mệt"},
  {"kind": "drape", "s": 8.75, "e": 12.85, "tag": "Màu sát mặt", "title": "Xám, đục là\nkéo da xuống", "hi": "kéo da xuống", "items": ["Màu trong, sạch", "Màu xám, đục"], "cols": ["#3f7cc0", "#8f8e88"]},
  {"kind": "full", "s": 12.85, "e": 15.4, "vid": "tlv/lib/s2/canh_05.mp4", "tag": "Mẹo ToneLux", "title": "Một mẹo nhỏ\ncho áo sát mặt", "hi": "áo sát mặt"},
  {"kind": "steps", "s": 15.4, "e": 20.05, "tag": "Ghi nhớ", "title": "Chọn áo\nđúng 3 điều", "hi": "3 điều", "items": ["Đúng tông\nấm lạnh", "Độ sáng\nvừa phải", "Màu\ntrong, sạch"]},
  {"kind": "full", "s": 20.05, "e": 22.4, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Mai thử nhé", "title": "Một chiếc áo\nnhư vậy", "hi": "như vậy"},
  {"kind": "end", "s": 22.4, "e": 27.3, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t624.mp3'});
