import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 645 (ca tự động 25/11/2026) · Quà tốt nghiệp cho em gái
const W = 'Em gái sắp đi làm ngày đầu, chị tặng gì đây. Tặng em hiểu màu hợp với mình. Tông da có thể ấm, lạnh hoặc trung tính, và màu hợp sẽ làm da sáng, mặt rạng rỡ hơn. Thử ngay: đặt vải trắng và vải kem cạnh mặt. Da sáng hơn với màu nào, đó là hướng tông của em. Ở ToneLux, bọn mình thấy một khởi đầu chỉn chu bắt đầu từ đây. Comment tone da của em, ToneLux giúp em xem hợp màu nào.';

export default v('T645', 26.5, W, [
  {kind: 'full', s: 0, e: 3.7, cover: true, vid: 'tlv/lib/v2/canh_13.mp4', tag: 'Quà tốt nghiệp', title: 'Quà cho em gái\nngày đầu đi làm', hi: 'ngày đầu đi làm'},
  {kind: 'full', s: 3.7, e: 5.8, vid: 'tlv/lib/v2/canh_18.mp4', tag: 'Món quà khác biệt', title: 'Tặng em hiểu\nmàu hợp mình', hi: 'màu hợp mình'},
  {kind: 'steps', s: 5.8, e: 11.5, tag: 'Tông da', title: 'Ấm, lạnh\nhay trung tính?', hi: 'trung tính?', items: ['Ấm\nánh vàng, đào', 'Lạnh\nánh hồng, xanh', 'Trung tính\nở giữa hai bên']},
  {kind: 'tips', s: 11.5, e: 14.5, tag: 'Thử ngay', title: 'Vải trắng\nhay vải kem?', hi: 'vải kem?', items: ['Trắng', 'Kem'], cols: ['#f7f7f5', '#efe3c8']},
  {kind: 'full', s: 14.5, e: 17.8, vid: 'tlv/lib/v2/canh_14.mp4', tag: 'Nhìn da, đừng nhìn vải', title: 'Da sáng hơn\nlà hướng tông em', hi: 'hướng tông em'},
  {kind: 'full', s: 17.8, e: 21.9, vid: 'tlv/lib/v2/canh_11.mp4', tag: 'Ngày đầu đi làm', title: 'Một khởi đầu\nchỉn chu', hi: 'chỉn chu'},
  {kind: 'end', s: 21.9, e: 26.5, title: 'Em gái bạn\nhợp màu nào?', hi: 'hợp màu nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t645.mp3'});
