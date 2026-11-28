import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 635 (ca tự động 29/11/2026) · Đồng hồ vàng hồng, bạc hay gold
const W = "Chọn đồng hồ mà đeo lên thấy cổ tay xỉn màu? Có thể do kim loại chưa hợp tone da. Da tông lạnh thường lên đẹp với bạc. Da tông ấm hợp vàng gold hơn. Vàng hồng hay hợp da trung tính hoặc ấm nhẹ. Ở ToneLux, bọn mình hay bảo khách nhìn gân tay dưới ánh sáng tự nhiên. Xanh thiên tím là lạnh, xanh thiên lục là ấm. Thử xong, bạn chọn đồng hồ dễ hơn nhiều. Comment tone da của bạn, ToneLux giúp bạn xem hợp kim loại nào.";

export default v('T635', 29.6, W, [
  {"kind": "full", "s": 0, "e": 3.1, "vid": "tlv/lib/s2/canh_12.mp4", "tag": "Phụ kiện & tone da", "title": "Đeo đồng hồ,\ncổ tay lại xỉn?", "hi": "lại xỉn?", "cover": true},
  {"kind": "full", "s": 3.1, "e": 5.9, "vid": "tlv/lib/s2/canh_02.mp4", "tag": "Lý do", "title": "Do kim loại\nchưa hợp tone", "hi": "chưa hợp tone"},
  {"kind": "tips", "s": 5.9, "e": 10.8, "tag": "Kim loại", "title": "Lạnh hợp bạc,\nấm hợp gold", "hi": "ấm hợp gold", "items": ["Bạc · tông lạnh", "Vàng gold · tông ấm"], "cols": ["#c0c0c0", "#d4af37"]},
  {"kind": "full", "s": 10.8, "e": 14.1, "vid": "tlv/lib/s2/canh_08.mp4", "tag": "Vàng hồng", "title": "Vàng hồng hợp\nda trung tính", "hi": "trung tính", "line": "hoặc da ấm nhẹ"},
  {"kind": "full", "s": 14.1, "e": 18.9, "vid": "tlv/lib/s2/canh_11.mp4", "tag": "Mẹo nhỏ", "title": "Nhìn gân tay\ndưới ánh sáng ngày", "hi": "ánh sáng ngày"},
  {"kind": "tips", "s": 18.9, "e": 22.4, "tag": "Test gân tay", "title": "Tím là lạnh,\nlục là ấm", "hi": "lục là ấm", "items": ["Gân thiên tím · lạnh", "Gân thiên lục · ấm"], "cols": ["#5b5fa8", "#4f7a4a"]},
  {"kind": "product", "s": 22.4, "e": 25.0, "tag": "Bộ test tại nhà", "title": "Biết tông rồi,\nchọn dễ hơn", "hi": "chọn dễ hơn", "items": ["Thẻ màu 12 mùa", "Vải drape chuẩn màu", "Tự test tại nhà"]},
  {"kind": "end", "s": 25.0, "e": 29.6, "title": "Bạn hợp\nkim loại nào?", "hi": "kim loại nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t635.mp3'});
