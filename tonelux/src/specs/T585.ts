import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 585 (ca tự động 22/11/2026)
const W = "Cuối năm rồi, bạn đã chọn quà cho mẹ chưa? Mẹ chọn áo thường theo thói quen, nên đôi khi màu áo làm da mẹ xỉn đi. Bí quyết nằm ở tông da, ấm hay lạnh. Da ngả vàng hợp màu ấm như kem, cam đất. Da ngả hồng hợp màu lạnh như xanh navy, hồng dịu. Ở ToneLux, bọn mình thấy chỉ cần đúng màu, mẹ trông tươi và rạng rỡ hơn. Thử đặt vải gần mặt mẹ dưới ánh sáng tự nhiên nhé. Comment tone da của mẹ, ToneLux giúp bạn xem hợp màu nào.";

export default v('T585', 31.62, W, [
  {"kind": "full", "s": 0.0, "e": 2.87, "cover": true, "vid": "tlv/lib/v2/canh_13.mp4", "tag": "Cuối năm", "title": "Quà cuối năm\ncho mẹ", "hi": "cho mẹ"},
  {"kind": "full", "s": 2.87, "e": 7.82, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Thói quen", "title": "Màu áo quen\nlàm da mẹ xỉn", "hi": "da mẹ xỉn"},
  {"kind": "steps", "s": 7.82, "e": 11.0, "tag": "Bí quyết", "title": "Nằm ở\ntông da", "hi": "tông da", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\ndịu hay trong"]},
  {"kind": "tips", "s": 11.0, "e": 14.24, "tag": "Da ngả vàng", "title": "Mẹ da ấm\nhợp màu ấm", "hi": "màu ấm", "items": ["Kem", "Cam đất"], "cols": ["#efe3c8", "#b5653a"]},
  {"kind": "tips", "s": 14.24, "e": 17.58, "tag": "Da ngả hồng", "title": "Mẹ da lạnh\nhợp màu lạnh", "hi": "màu lạnh", "items": ["Xanh navy", "Hồng dịu"], "cols": ["#1b2a49", "#e3aebd"]},
  {"kind": "full", "s": 17.58, "e": 22.96, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tại ToneLux", "title": "Đúng màu,\nmẹ rạng rỡ hơn", "hi": "rạng rỡ hơn"},
  {"kind": "full", "s": 22.96, "e": 26.02, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Thử ngay", "title": "Vải sát mặt mẹ,\nánh sáng tự nhiên", "hi": "ánh sáng tự nhiên"},
  {"kind": "end", "s": 26.02, "e": 31.62, "title": "Tone da của mẹ\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t585.mp3'});
