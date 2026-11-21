import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 579 (ca tự động 22/11/2026)
const W = "Sắp phỏng vấn vị trí quản lý? Chọn navy hay xám than? Tùy mùa màu của bạn. Da tông lạnh, nhất là mùa Hè hoặc Đông, hợp navy đậm hoặc xám than lạnh, nhìn sắc nét, quyết đoán. Da tông ấm, mùa Xuân hoặc Thu, nên chọn navy ấm hơn hoặc xám than pha nâu, đỡ bị xỉn mặt. Ở ToneLux, bọn mình hay chỉ cách thử màu sát mặt dưới ánh sáng tự nhiên. Da nhìn khỏe hơn là màu đúng. Comment tone da của bạn, ToneLux giúp bạn chọn màu hợp.";

export default v('T579', 31.16, W, [
  {"kind": "full", "s": 0.0, "e": 4.3, "cover": true, "vid": "tlv/lib/s2/canh_13.mp4", "tag": "Công sở", "title": "Phỏng vấn quản lý:\nnavy hay xám than?", "hi": "navy hay xám than?"},
  {"kind": "seasons", "s": 4.3, "e": 6.53, "tag": "Câu trả lời", "title": "Tùy vào\nmùa màu của bạn", "hi": "mùa màu"},
  {"kind": "tips", "s": 6.53, "e": 13.3, "tag": "Tông lạnh · Hạ, Đông", "title": "Sắc nét,\nquyết đoán", "hi": "quyết đoán", "items": ["Navy đậm", "Xám than lạnh"], "cols": ["#1b2a49", "#3d4249"]},
  {"kind": "tips", "s": 13.3, "e": 19.67, "tag": "Tông ấm · Xuân, Thu", "title": "Đỡ xỉn mặt\nvới gam pha nâu", "hi": "pha nâu", "items": ["Navy ấm", "Xám than pha nâu"], "cols": ["#2b3a55", "#4a4540"]},
  {"kind": "full", "s": 19.67, "e": 24.48, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Tại ToneLux", "title": "Thử màu sát mặt,\nánh sáng tự nhiên", "hi": "ánh sáng tự nhiên"},
  {"kind": "full", "s": 24.48, "e": 26.76, "vid": "tlv/lib/s2/canh_10.mp4", "tag": "Dấu hiệu", "title": "Da khỏe hơn\nlà màu đúng", "hi": "màu đúng"},
  {"kind": "end", "s": 26.76, "e": 31.16, "title": "Bạn hợp navy\nhay xám than?", "hi": "xám than?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t579.mp3'});
