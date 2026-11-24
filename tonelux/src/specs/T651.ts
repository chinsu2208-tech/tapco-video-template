import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 651 (ca tự động 25/11/2026) · Đồ dùng mỗi ngày tố mùa màu của bạn
const W = 'Ốp điện thoại, hình nền, sổ tay bạn chọn mỗi ngày, có thể đang tố mùa màu của bạn đó. Màu yêu thích hay lặp lại thường cho thấy bạn hợp tông lạnh hay ấm. Hồng đào, be, nâu thường nghiêng về ấm. Hồng lạnh, xanh navy, bạc thường nghiêng về lạnh. Nhưng màu bạn thích chưa chắc đã hợp tone da. Ở ToneLux, bọn mình luôn đặt màu cạnh gương mặt để kiểm tra. Thử ngay, áp món đồ yêu thích lên cạnh mặt, xem da sáng hay xỉn. Comment tone da của bạn, ToneLux đoán mùa màu giúp bạn.';

export default v('T651', 31.1, W, [
  {kind: 'full', s: 0, e: 3.7, cover: true, vid: 'tlv/lib/v2/canh_11.mp4', tag: 'Đồ dùng mỗi ngày', title: 'Ốp điện thoại,\nhình nền, sổ tay', hi: 'sổ tay'},
  {kind: 'full', s: 3.7, e: 6.1, vid: 'tlv/lib/s2/canh_08.mp4', tag: 'Có thể', title: 'Đang tố\nmùa màu của bạn', hi: 'mùa màu của bạn'},
  {kind: 'full', s: 6.1, e: 10.0, vid: 'tlv/lib/v2/canh_18.mp4', tag: 'Màu yêu thích', title: 'Màu hay lặp lại\nlà manh mối', hi: 'manh mối'},
  {kind: 'tips', s: 10.0, e: 12.9, tag: 'Thường là ấm', title: 'Nghiêng về\ngam ấm', hi: 'gam ấm', items: ['Hồng đào', 'Be', 'Nâu'], cols: ['#f4a58a', '#d8c3a5', '#7b5236']},
  {kind: 'tips', s: 12.9, e: 16.3, tag: 'Thường là lạnh', title: 'Nghiêng về\ngam lạnh', hi: 'gam lạnh', items: ['Hồng lạnh', 'Xanh navy', 'Bạc'], cols: ['#d995a8', '#1b2a49', '#c0c0c8']},
  {kind: 'drape', s: 16.3, e: 19.0, tag: 'Nhưng', title: 'Thích chưa chắc\nđã hợp', hi: 'đã hợp', items: ['Da sáng: màu hợp', 'Da xỉn: chỉ là thích'], cols: ['#d995a8', '#e0a040']},
  {kind: 'full', s: 19.0, e: 22.7, vid: 'tlv/lib/s2/canh_05.mp4', tag: 'Cách kiểm tra', title: 'Đặt màu\ncạnh gương mặt', hi: 'cạnh gương mặt'},
  {kind: 'full', s: 22.7, e: 26.4, vid: 'tlv/lib/v2/canh_10.mp4', tag: 'Thử ngay', title: 'Áp món yêu thích,\nda sáng hay xỉn?', hi: 'da sáng hay xỉn?'},
  {kind: 'end', s: 26.4, e: 31.1, title: 'Bạn thuộc\nmùa nào?', hi: 'mùa nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t651.mp3'});
