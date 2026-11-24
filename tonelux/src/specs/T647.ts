import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 647 (ca tự động 25/11/2026) · Một món vào, một món ra theo bảng màu
const W = 'Tủ đầy đồ mà sáng nào cũng không biết mặc gì? Vấn đề thường nằm ở màu. Quy tắc đơn giản: một món vào, một món ra. Muốn mua món mới, hãy loại một món khác. Món mới phải thuộc bảng màu hợp tone da, tông ấm hoặc lạnh, độ sáng, độ trầm của bạn. Ở ToneLux, bọn mình gọi bảng màu là kim chỉ nam cho tủ đồ. Đặt lịch tư vấn riêng để có bảng màu của mình. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.';

export default v('T647', 27.9, W, [
  {kind: 'full', s: 0, e: 3.2, cover: true, vid: 'tlv/lib/v2/canh_18.mp4', tag: 'Tủ đồ tinh gọn', title: 'Tủ đầy đồ mà\nchẳng biết mặc gì?', hi: 'mặc gì?'},
  {kind: 'full', s: 3.2, e: 5.1, vid: 'tlv/lib/v2/canh_17.mp4', tag: 'Vấn đề', title: 'Thường nằm\nở màu sắc', hi: 'màu sắc'},
  {kind: 'full', s: 5.1, e: 8.3, vid: 'tlv/lib/s2/canh_08.mp4', tag: 'Quy tắc đơn giản', title: 'Một món vào,\nmột món ra', hi: 'một món ra'},
  {kind: 'steps', s: 8.3, e: 16.8, tag: 'Trước khi mua', title: 'Món mới\nphải qua 3 cửa', hi: '3 cửa', items: ['Bớt một món\nmới thêm món mới', 'Tông da\nấm hay lạnh', 'Độ sáng, độ trầm\nđúng bảng màu']},
  {kind: 'seasons', s: 16.8, e: 20.8, tag: '4 nhóm · 12 mùa', title: 'Bảng màu là\nkim chỉ nam', hi: 'kim chỉ nam'},
  {kind: 'full', s: 20.8, e: 23.4, vid: 'tlv/lib/v2/canh_08.mp4', tag: 'Tư vấn riêng', title: 'Có bảng màu\ncủa riêng mình', hi: 'của riêng mình'},
  {kind: 'end', s: 23.4, e: 27.9, title: 'Tủ đồ của bạn\ntheo mùa nào?', hi: 'mùa nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t647.mp3'});
