import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 580 (ca tự động 22/11/2026)
const W = "Đi tiệc cưới ngoài trời mùa khô, sợ nắng làm da xỉn màu. Mẹo nằm ở độ sáng và tông màu. Nắng gắt làm da bạn nhợt đi, nên hãy chọn màu có độ trầm vừa phải, hợp tông da. Ở ToneLux, bọn mình thường tránh trắng, kem và bạc cho khách mời, vì dễ lấn cô dâu. Hãy thử xanh sage, hồng đất hoặc xanh dương dịu, tùy tone da. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T580', 27.56, W, [
  {"kind": "full", "s": 0.0, "e": 4.67, "cover": true, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Tiệc cưới mùa khô", "title": "Cưới ngoài trời,\nsợ nắng xỉn da", "hi": "xỉn da"},
  {"kind": "steps", "s": 4.67, "e": 7.18, "tag": "Mẹo nằm ở", "title": "Độ sáng\nvà tông màu", "hi": "tông màu", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nvừa với nắng", "Độ trầm\nvừa phải"]},
  {"kind": "drape", "s": 7.18, "e": 9.2, "tag": "Dưới nắng gắt", "title": "Màu quá nhạt\nlàm da nhợt", "hi": "da nhợt", "items": ["Trầm vừa, rạng rỡ", "Quá nhạt, nhợt da"], "cols": ["#c08081", "#b8b0a4"]},
  {"kind": "full", "s": 9.2, "e": 12.3, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Chọn màu", "title": "Độ trầm vừa phải,\nhợp tông da", "hi": "hợp tông da"},
  {"kind": "full", "s": 12.3, "e": 18.41, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tại ToneLux", "title": "Khách mời tránh\ntrắng, kem, bạc", "hi": "trắng, kem, bạc", "line": "để không lấn cô dâu"},
  {"kind": "tips", "s": 18.41, "e": 22.6, "tag": "Tùy tone da", "title": "Gợi ý cho\nkhách mời", "hi": "khách mời", "items": ["Xanh sage", "Hồng đất", "Xanh dương dịu"], "cols": ["#9caf88", "#c08081", "#8fa9c4"]},
  {"kind": "end", "s": 22.6, "e": 27.56, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t580.mp3'});
