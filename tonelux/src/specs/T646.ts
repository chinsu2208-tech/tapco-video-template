import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 646 (ca tự động 25/11/2026) · Layering mùa đông theo tone da
const W = 'Mặc nhiều lớp mùa đông mà da bỗng xỉn đi? Món sát mặt mới quyết định sắc da. Khăn, cổ áo len nên hợp tông lạnh hay ấm và độ sáng của bạn. Da ấm chọn be, camel, rêu. Da lạnh chọn xám xanh, hồng lạnh, navy. Ở ToneLux, bọn mình hay để áo khoác ngoài cùng phá cách thoải mái. Thử ngay: đặt khăn hợp tone sát cằm trước gương. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.';

export default v('T646', 27.5, W, [
  {kind: 'full', s: 0, e: 3.3, cover: true, vid: 'tlv/lib/v2/canh_10.mp4', tag: 'Layering mùa đông', title: 'Mặc nhiều lớp,\nda bỗng xỉn?', hi: 'da bỗng xỉn?'},
  {kind: 'full', s: 3.3, e: 5.7, vid: 'tlv/lib/v2/canh_11.mp4', tag: 'Điểm mấu chốt', title: 'Món sát mặt\nquyết định sắc da', hi: 'sắc da'},
  {kind: 'steps', s: 5.7, e: 10.0, tag: 'Khăn & cổ len', title: 'Chọn theo\ntông của bạn', hi: 'tông của bạn', items: ['Tông da\nlạnh hay ấm', 'Độ sáng\nnhạt hay đậm', 'Sát mặt\nkhăn, cổ áo len']},
  {kind: 'tips', s: 10.0, e: 12.8, tag: 'Da ấm', title: 'Da ấm\nchọn gam đất', hi: 'gam đất', items: ['Be', 'Camel', 'Rêu'], cols: ['#d8c3a5', '#c19a6b', '#5f6b3a']},
  {kind: 'tips', s: 12.8, e: 16.1, tag: 'Da lạnh', title: 'Da lạnh\nchọn gam lạnh', hi: 'gam lạnh', items: ['Xám xanh', 'Hồng lạnh', 'Navy'], cols: ['#7d8c99', '#d995a8', '#1b2a49']},
  {kind: 'full', s: 16.1, e: 20.2, vid: 'tlv/lib/v2/canh_08.mp4', tag: 'Lớp ngoài cùng', title: 'Áo khoác ngoài\nđược phá cách', hi: 'phá cách'},
  {kind: 'full', s: 20.2, e: 23.1, vid: 'tlv/lib/v2/canh_14.mp4', tag: 'Thử ngay', title: 'Khăn sát cằm\ntrước gương', hi: 'trước gương'},
  {kind: 'end', s: 23.1, e: 27.5, title: 'Bạn hợp\nmàu khăn nào?', hi: 'màu khăn nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t646.mp3'});
