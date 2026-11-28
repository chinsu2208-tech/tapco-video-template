import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 633 (ca tự động 29/11/2026) · Áo choàng tốt nghiệp tối màu
const W = "Mặc áo choàng tốt nghiệp tối màu mà sợ mặt bị chìm trong ảnh? Áo choàng đen hay xanh navy hút sáng khỏi da, nên gương mặt dễ xỉn. Cách cứu là thêm độ sáng và đúng tông gần mặt. Ở ToneLux, bọn mình thường xét da ấm hay lạnh trước. Da ấm chọn son cam đào, san hô, áo trong màu kem. Da lạnh chọn son hồng mận, hồng lạnh, áo trong trắng tinh. Thử ngay hôm nay. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T633', 31.8, W, [
  {"kind": "full", "s": 0, "e": 4.1, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Mùa tốt nghiệp", "title": "Áo choàng tối,\nsợ mặt chìm?", "hi": "mặt chìm?", "cover": true},
  {"kind": "full", "s": 4.1, "e": 9.8, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Vì sao", "title": "Áo tối màu\nhút sáng khỏi da", "hi": "hút sáng", "line": "gương mặt dễ xỉn"},
  {"kind": "full", "s": 9.8, "e": 13.2, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Cách cứu", "title": "Thêm độ sáng,\nđúng tông gần mặt", "hi": "gần mặt"},
  {"kind": "full", "s": 13.2, "e": 17.2, "vid": "tlv/lib/s2/canh_05.mp4", "tag": "Bước đầu", "title": "Xét da ấm\nhay lạnh trước", "hi": "lạnh trước"},
  {"kind": "tips", "s": 17.2, "e": 21.3, "tag": "Da ấm", "title": "Da ấm chọn\nsắc cam đào", "hi": "cam đào", "items": ["Son cam đào", "San hô", "Áo trong màu kem"], "cols": ["#f2a07b", "#ff7f6a", "#f3e5c8"]},
  {"kind": "tips", "s": 21.3, "e": 25.3, "tag": "Da lạnh", "title": "Da lạnh chọn\nhồng mận", "hi": "hồng mận", "items": ["Son hồng mận", "Hồng lạnh", "Áo trong trắng tinh"], "cols": ["#8e3b5b", "#e48aa8", "#ffffff"]},
  {"kind": "end", "s": 25.3, "e": 31.8, "title": "Da bạn\nấm hay lạnh?", "hi": "ấm hay lạnh?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t633.mp3'});
