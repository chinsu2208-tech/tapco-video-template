import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 586 (ca tự động 22/11/2026)
const W = "Sắp nhuộm tóc đón năm mới mà chưa biết chọn nâu nào? Bí quyết nằm ở tone da. Da ngả vàng, hợp nâu ấm như nâu caramel, nâu hạt dẻ. Da hồng hoặc ngả lạnh, hợp nâu lạnh như nâu tro, nâu socola lạnh. Chọn lệch tone, da dễ xỉn và mặt thiếu sức sống. Ở ToneLux, bọn mình luôn soi tone da trước, rồi mới chọn độ sáng. Mẹo nhanh: áp tay lên tóc ở chỗ sáng tự nhiên, thấy da tươi hơn là đúng tông. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T586', 30.78, W, [
  {"kind": "full", "s": 0.0, "e": 3.26, "cover": true, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Tóc năm mới", "title": "Tóc năm mới,\nchọn nâu nào?", "hi": "chọn nâu nào?"},
  {"kind": "full", "s": 3.26, "e": 5.13, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Bí quyết", "title": "Nằm ở\ntone da", "hi": "tone da"},
  {"kind": "tips", "s": 5.13, "e": 9.12, "tag": "Da ngả vàng", "title": "Da vàng hợp\nnâu ấm", "hi": "nâu ấm", "items": ["Nâu caramel", "Nâu hạt dẻ"], "cols": ["#a86b3c", "#6f3f24"]},
  {"kind": "tips", "s": 9.12, "e": 13.56, "tag": "Da hồng · ngả lạnh", "title": "Da lạnh hợp\nnâu lạnh", "hi": "nâu lạnh", "items": ["Nâu tro", "Socola lạnh"], "cols": ["#7b6e66", "#4a3530"]},
  {"kind": "drape", "s": 13.56, "e": 16.97, "tag": "Chọn lệch tone", "title": "Lệch tone,\nmặt thiếu sức sống", "hi": "thiếu sức sống", "items": ["Đúng tone, da tươi", "Lệch tone, da xỉn"], "cols": ["#a86b3c", "#7b6e66"]},
  {"kind": "full", "s": 16.97, "e": 21.26, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Tại ToneLux", "title": "Soi tone da trước,\nrồi chọn độ sáng", "hi": "độ sáng"},
  {"kind": "full", "s": 21.26, "e": 26.29, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Mẹo nhanh", "title": "Áp tay lên tóc,\nda tươi là đúng", "hi": "da tươi là đúng"},
  {"kind": "end", "s": 26.29, "e": 30.78, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t586.mp3'});
