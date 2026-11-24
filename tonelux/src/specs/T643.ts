import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 643 (ca tự động 25/11/2026) · Quà cuối năm cho bố
const W = 'Cuối năm rồi, bạn vẫn chưa biết tặng bố gì? Món đắt chưa chắc bố dùng. Một chiếc khăn quàng hay cà vạt đúng màu da của bố thì khác. Trước hết, xác định bố thuộc tông ấm hay tông lạnh. Màu hợp sẽ làm da sáng và khuôn mặt tươi hơn. Chuyên gia ToneLux hay chỉ một mẹo nhỏ: áp thử màu sát cằm bố dưới ánh sáng tự nhiên. Da trông khỏe hơn là màu hợp. Comment tone da của bố, ToneLux giúp bạn xem hợp màu nào.';

export default v('T643', 28.1, W, [
  {kind: 'full', s: 0, e: 3.6, cover: true, vid: 'tlv/lib/s2/canh_13.mp4', tag: 'Quà tặng cuối năm', title: 'Quà cuối năm\ncho bố?', hi: 'cho bố?'},
  {kind: 'full', s: 3.6, e: 8.8, vid: 'tlv/lib/s2/canh_12.mp4', tag: 'Món đắt chưa chắc dùng', title: 'Khăn, cà vạt\nđúng màu da bố', hi: 'đúng màu da bố'},
  {kind: 'tips', s: 8.8, e: 12.3, tag: 'Trước hết', title: 'Bố tông ấm\nhay tông lạnh?', hi: 'tông lạnh?', items: ['Ấm · Camel', 'Ấm · Nâu đất', 'Lạnh · Navy', 'Lạnh · Xám tro'], cols: ['#c19a6b', '#8a5a3b', '#1b2a49', '#a3a7ab']},
  {kind: 'full', s: 12.3, e: 15.6, vid: 'tlv/lib/s2/canh_05.mp4', tag: 'Màu hợp', title: 'Da sáng hơn,\nmặt tươi hơn', hi: 'mặt tươi hơn'},
  {kind: 'full', s: 15.6, e: 21.2, vid: 'tlv/lib/s2/canh_16.mp4', tag: 'Mẹo nhỏ', title: 'Áp màu sát cằm,\ndưới ánh sáng ngày', hi: 'ánh sáng ngày'},
  {kind: 'drape', s: 21.2, e: 23.4, tag: 'So nhanh', title: 'Da khỏe hơn\nlà màu hợp', hi: 'màu hợp', items: ['Da khỏe, tươi', 'Da xỉn, mệt'], cols: ['#1b2a49', '#b5a642']},
  {kind: 'end', s: 23.4, e: 28.1, title: 'Bố hợp\nmàu nào?', hi: 'màu nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t643.mp3'});
