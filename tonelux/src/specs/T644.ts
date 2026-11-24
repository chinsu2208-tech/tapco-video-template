import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 644 (ca tự động 25/11/2026) · Quà tặng chồng đầu năm
const W = 'Chọn quà tặng chồng dịp đầu năm, sao không tặng anh ấy sự tự tin. Gặp đối tác, màu áo quyết định cảm giác đầu tiên. Mỗi người có một tông nền riêng, lạnh hoặc ấm, và độ sáng độ trầm đi kèm. Ở ToneLux, bọn mình thường thấy chỉ cần đúng màu sơ mi, gương mặt đã sáng và có thần hơn. Thử ngay nhé, đặt áo xanh navy cạnh áo nâu be sát mặt anh ấy, xem màu nào làm da tươi hơn. Comment tone da của chồng bạn, ToneLux giúp xem hợp màu nào.';

export default v('T644', 32.1, W, [
  {kind: 'full', s: 0, e: 5.3, cover: true, vid: 'tlv/lib/s2/canh_17.mp4', tag: 'Quà đầu năm', title: 'Quà tặng chồng:\nsự tự tin', hi: 'sự tự tin'},
  {kind: 'full', s: 5.3, e: 8.9, vid: 'tlv/lib/s2/canh_11.mp4', tag: 'Gặp đối tác', title: 'Màu áo quyết định\nấn tượng đầu', hi: 'ấn tượng đầu'},
  {kind: 'steps', s: 8.9, e: 14.1, tag: 'Tông nền riêng', title: 'Mỗi người\nmột tông nền', hi: 'tông nền', items: ['Tông da\nlạnh hay ấm', 'Độ sáng\nnhạt hay đậm', 'Độ trầm\nđậm hay dịu']},
  {kind: 'full', s: 14.1, e: 20.2, vid: 'tlv/lib/s2/canh_13.mp4', tag: 'Sơ mi đúng màu', title: 'Gương mặt sáng\nvà có thần hơn', hi: 'có thần hơn'},
  {kind: 'tips', s: 20.2, e: 24.8, tag: 'Thử ngay', title: 'Navy hay nâu be\nsát mặt anh ấy', hi: 'sát mặt anh ấy', items: ['Xanh navy', 'Nâu be'], cols: ['#1b2a49', '#c8ad8d']},
  {kind: 'full', s: 24.8, e: 27.2, vid: 'tlv/lib/s2/canh_05.mp4', tag: 'So sánh', title: 'Màu nào làm\nda tươi hơn?', hi: 'da tươi hơn?'},
  {kind: 'end', s: 27.2, e: 32.1, title: 'Chồng bạn\nhợp màu nào?', hi: 'hợp màu nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t644.mp3'});
