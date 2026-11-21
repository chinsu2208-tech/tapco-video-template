import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 577 (ca tự động 22/11/2026)
const W = "Tủ đồ mùa đông chỉ được giữ một màu, bạn chọn màu nào? Màu chủ đạo trong tủ đồ nên hợp tông da trước, rồi mới tới xu hướng. Da ngả hồng hoặc xanh thường hợp tông lạnh, da ngả vàng hoặc đào thường hợp tông ấm. Ở ToneLux, bọn mình hay bắt đầu từ tông lạnh hay ấm trước. Thử ngay: đặt áo màu đó sát mặt dưới ánh sáng ban ngày. Da sáng và khỏe hơn là hợp. Comment màu bạn chọn, ToneLux nhận xét giúp bạn.";

export default v('T577', 28.69, W, [
  {"kind": "full", "s": 0.0, "e": 4.11, "cover": true, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tủ đồ mùa đông", "title": "Tủ đồ mùa đông\nchỉ giữ một màu", "hi": "một màu"},
  {"kind": "full", "s": 4.11, "e": 9.1, "vid": "tlv/lib/s2/canh_08.mp4", "tag": "Màu chủ đạo", "title": "Hợp tông da\ntrước xu hướng", "hi": "trước xu hướng"},
  {"kind": "tips", "s": 9.1, "e": 14.47, "tag": "Nhìn sắc da", "title": "Lạnh hay ấm,\nnhìn sắc da", "hi": "nhìn sắc da", "items": ["Ngả hồng · lạnh", "Ngả xanh · lạnh", "Ngả vàng · ấm", "Ngả đào · ấm"], "cols": ["#e3a6b4", "#9fb8c9", "#e2c07a", "#f2b48f"]},
  {"kind": "steps", "s": 14.47, "e": 18.19, "tag": "Tại ToneLux", "title": "Bắt đầu từ\nlạnh hay ấm", "hi": "lạnh hay ấm", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\ndịu hay trong"]},
  {"kind": "full", "s": 18.19, "e": 22.05, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Thử ngay", "title": "Áo sát mặt,\ndưới ánh sáng ngày", "hi": "ánh sáng ngày"},
  {"kind": "drape", "s": 22.05, "e": 24.58, "tag": "So nhanh", "title": "Da sáng khỏe\nlà màu hợp", "hi": "màu hợp", "items": ["Da sáng, khỏe", "Da xỉn, mệt"], "cols": ["#2f4a6d", "#b9a37e"]},
  {"kind": "end", "s": 24.58, "e": 28.69, "title": "Bạn chọn\nmàu nào?", "hi": "màu nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t577.mp3'});
