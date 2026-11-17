import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 603 (ca tự động 18/11/2026)
const W = "Tháng 11 trở lạnh, bạn đang phân vân chọn cardigan màu nào? Bốn gam đang lên ngôi là be kem, nâu cacao, xanh rêu và đỏ rượu vang. Chọn theo mùa màu sẽ dễ hơn. Da ấm, mùa Xuân hoặc Thu, hợp be kem và nâu cacao. Da lạnh, mùa Hè hoặc Đông, hợp xanh rêu trầm và đỏ rượu vang. Ở ToneLux, bọn mình luôn xem tông trước, rồi mới tới độ sáng. Hôm nay hãy thử áp cardigan sát mặt. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T603', 30.08, W, [
  {"kind": "full", "s": 0, "e": 4.28, "cover": true, "vid": "tlv/lib/v2/canh_18.mp4", "tag": "Tháng 11", "title": "Trở lạnh,\ncardigan màu nào?", "hi": "màu nào?"},
  {"kind": "tips", "s": 4.28, "e": 9.56, "tag": "Đang lên ngôi", "title": "4 gam cardigan\nmùa này", "hi": "mùa này", "items": ["Be kem", "Nâu cacao", "Xanh rêu", "Đỏ rượu vang"], "cols": ["#e8d9bf", "#5c3a2a", "#4f5d2f", "#6d1f2c"]},
  {"kind": "seasons", "s": 9.56, "e": 11.62, "tag": "Mẹo chọn", "title": "Chọn theo\nmùa màu", "hi": "mùa màu"},
  {"kind": "full", "s": 11.62, "e": 15.22, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Da ấm · Xuân, Thu", "title": "Be kem và\nnâu cacao", "hi": "nâu cacao"},
  {"kind": "full", "s": 15.22, "e": 19.26, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Da lạnh · Hạ, Đông", "title": "Xanh rêu trầm,\nđỏ rượu vang", "hi": "đỏ rượu vang"},
  {"kind": "full", "s": 19.26, "e": 23.24, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Tại ToneLux", "title": "Xem tông trước,\nrồi tới độ sáng", "hi": "độ sáng"},
  {"kind": "full", "s": 23.24, "e": 25.72, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Hôm nay", "title": "Áp cardigan\nsát mặt", "hi": "sát mặt"},
  {"kind": "end", "s": 25.72, "e": 30.08, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t603.mp3'});
