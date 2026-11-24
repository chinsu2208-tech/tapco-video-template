import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 650 (ca tự động 25/11/2026) · Spring hay Winter: bạn chọn mùa nào?
const W = 'Nếu được đổi mùa màu trong một ngày, bạn chọn Spring hay Winter? Spring ấm, sáng, tươi, hợp màu đào, cam san hô. Winter lạnh, rõ, tương phản mạnh, hợp đỏ cherry, xanh cobalt. Điểm khác nằm ở tông ấm hay lạnh và độ sáng. Ở ToneLux, bọn mình hay bảo, cứ thử màu sát mặt, da sáng khỏe là đúng hướng. Hôm nay thử một màu áo thôi nhé. Comment Spring hay Winter và lý do, ToneLux giúp bạn xem hợp mùa nào.';

export default v('T650', 30.2, W, [
  {kind: 'full', s: 0, e: 4.2, cover: true, vid: 'tlv/lib/s2/canh_18.mp4', tag: 'Đổi mùa một ngày', title: 'Spring hay\nWinter?', hi: 'Winter?'},
  {kind: 'tips', s: 4.2, e: 8.2, tag: 'Spring', title: 'Spring: ấm,\nsáng và tươi', hi: 'sáng và tươi', items: ['Hồng đào', 'Cam san hô'], cols: ['#f6a57f', '#f88379']},
  {kind: 'tips', s: 8.2, e: 13.2, tag: 'Winter', title: 'Winter: lạnh,\nrõ, tương phản', hi: 'rõ, tương phản', items: ['Đỏ cherry', 'Xanh cobalt'], cols: ['#b0102c', '#0047ab']},
  {kind: 'steps', s: 13.2, e: 16.6, tag: 'Điểm khác', title: 'Khác ở tông\nvà độ sáng', hi: 'độ sáng', items: ['Tông\nấm hay lạnh', 'Độ sáng\nsáng hay đậm', 'Độ trong\ntươi hay rõ nét']},
  {kind: 'full', s: 16.6, e: 21.9, vid: 'tlv/lib/s2/canh_17.mp4', tag: 'Thử màu sát mặt', title: 'Da sáng khỏe\nlà đúng hướng', hi: 'đúng hướng'},
  {kind: 'full', s: 21.9, e: 24.0, vid: 'tlv/lib/v2/canh_13.mp4', tag: 'Hôm nay', title: 'Thử một\nmàu áo thôi', hi: 'màu áo thôi'},
  {kind: 'end', s: 24.0, e: 30.2, title: 'Spring hay Winter,\nbạn chọn?', hi: 'bạn chọn?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t650.mp3'});
