import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 602 (dựng thử 07/11/2026)
const W = 'Giỏ hàng cuối năm đang có hai món, một món be ấm, một món xám lạnh, và bạn không biết bỏ món nào? Đừng chọn theo cảm giác nữa. Mỗi người có một nhóm màu riêng, dựa trên tông da lạnh hay ấm, độ sáng và độ trầm. Da ấm thường hợp be, camel, nâu đất, olive, đúng kiểu mùa Xuân hoặc Thu. Da lạnh hợp xám tro, hồng lạnh, xanh navy, đúng kiểu mùa Hạ hoặc Đông. Chọn sai tông thì món đồ đẹp mấy cũng làm mặt bạn hơi xỉn, như thiếu ngủ cả tuần. Mẹo nhanh: đặt từng món sát cằm dưới ánh sáng ban ngày. Món nào làm da sáng và đều màu hơn thì là món hợp bạn. Bạn thuộc tông da hay mùa màu nào?';

export default v('T602', 48.4, W, [
  {kind: 'full', s: 0, e: 4.4, cover: true, vid: 'tlv/lib/v2/canh_08.mp4', tag: 'Mua sắm cuối năm', title: 'Giỏ hàng có 2 món,\nbỏ món nào?', hi: 'bỏ món nào?'},
  {kind: 'full', s: 4.4, e: 8.3, vid: 'tlv/lib/v2/canh_17.mp4', tag: 'Phân vân', title: 'Một be ấm,\nmột xám lạnh', hi: 'xám lạnh'},
  {kind: 'steps', s: 8.3, e: 16.7, tag: '3 tiêu chí', title: 'Đừng chọn\ntheo cảm giác', hi: 'cảm giác', items: ['Tông da\nấm hay lạnh', 'Độ sáng\nnhạt hay đậm', 'Độ trầm\nđậm hay dịu']},
  {kind: 'tips', s: 16.7, e: 23.2, tag: 'Da ấm', title: 'Xuân & Thu\nhợp gam đất', hi: 'gam đất', items: ['Be', 'Camel', 'Nâu đất', 'Olive'], cols: ['#d8c3a5', '#c19a6b', '#8a5a3b', '#6b7f3a']},
  {kind: 'tips', s: 23.2, e: 29.9, tag: 'Da lạnh', title: 'Hạ & Đông\nhợp gam lạnh', hi: 'gam lạnh', items: ['Xám tro', 'Hồng lạnh', 'Xanh navy'], cols: ['#a3a7ab', '#d995a8', '#1b2a49']},
  {kind: 'full', s: 29.9, e: 36.1, vid: 'tlv/lib/v2/canh_11.mp4', tag: 'Lưu ý', title: 'Sai tông là\nmặt xỉn ngay', hi: 'xỉn ngay', line: 'đồ đẹp mấy cũng thành kém tươi'},
  {kind: 'full', s: 36.1, e: 40.8, vid: 'tlv/lib/s2/canh_16.mp4', tag: 'Mẹo nhanh', title: 'Đặt sát cằm,\ndưới ánh sáng ngày', hi: 'ánh sáng ngày'},
  {kind: 'drape', s: 40.8, e: 45, tag: 'So nhanh', title: 'Da sáng đều\nlà món hợp', hi: 'món hợp', items: ['Da sáng, đều màu', 'Da xỉn, kém tươi'], cols: ['#c19a6b', '#8e9aaf']},
  {kind: 'end', s: 45, e: 48.4, title: 'Bạn thuộc\nmùa màu nào?', hi: 'mùa màu nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t602.mp3'});
