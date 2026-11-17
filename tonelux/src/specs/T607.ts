import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 607 (ca tự động 18/11/2026)
const W = "Da vàng nên tránh pastel? Chưa chắc đâu. Vấn đề không nằm ở pastel, mà ở sắc độ. Da vàng thường hợp tông ấm, nên pastel ngả lạnh như xanh lavender dễ làm da xỉn. Chuyên gia ToneLux hay chọn pastel ấm hơn, như đào, bơ, xanh bạc hà nhạt, hồng san hô nhạt. Nhìn mềm mà da vẫn tươi. Hôm nay hãy thử áo màu đào nhạt sát mặt. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T607', 27.3, W, [
  {"kind": "full", "s": 0, "e": 3.38, "cover": true, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Lầm tưởng", "title": "Da vàng\nkhông hợp pastel?", "hi": "pastel?"},
  {"kind": "full", "s": 3.38, "e": 6.26, "vid": "tlv/lib/v2/canh_18.mp4", "tag": "Sự thật", "title": "Vấn đề nằm\nở sắc độ", "hi": "sắc độ"},
  {"kind": "drape", "s": 6.26, "e": 11.96, "tag": "Da vàng · tông ấm", "title": "Pastel lạnh\ndễ làm da xỉn", "hi": "da xỉn", "items": ["Đào nhạt · da tươi", "Lavender · da xỉn"], "cols": ["#e39a78", "#a48fcb"]},
  {"kind": "tips", "s": 11.96, "e": 18.46, "tag": "Chuyên gia chọn", "title": "Pastel ấm\ncho da vàng", "hi": "cho da vàng", "items": ["Đào", "Bơ", "Bạc hà nhạt", "San hô nhạt"], "cols": ["#f6c1a4", "#f3e3a1", "#c9e8d6", "#f5b5a0"]},
  {"kind": "full", "s": 18.46, "e": 20.38, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Kết quả", "title": "Mềm mà\nda vẫn tươi", "hi": "da vẫn tươi"},
  {"kind": "full", "s": 20.38, "e": 22.88, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Hôm nay", "title": "Áo đào nhạt\nsát mặt", "hi": "đào nhạt"},
  {"kind": "end", "s": 22.88, "e": 27.3, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t607.mp3'});
