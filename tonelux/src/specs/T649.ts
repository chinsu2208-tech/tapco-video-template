import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 649 (ca tự động 25/11/2026) · Chọn vải áo dài Tết theo tone da
const W = 'Sắp đi chọn vải may áo dài Tết? Khoan cắt vội. Đem tấm vải ra gần cửa sổ, nơi có ánh sáng tự nhiên. Đặt sát cằm, nhìn mặt mình, đừng nhìn vải. Nếu da sáng và đều hơn, đó là sắc độ hợp. Nếu da xỉn hoặc lộ quầng thâm, vải lệch tông. Ở ToneLux, bọn mình luôn thử vải sát cằm trước khi cắt may. Thử thêm một tấm sáng hơn hoặc trầm hơn để so. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.';

export default v('T649', 28.5, W, [
  {kind: 'full', s: 0, e: 3.7, cover: true, vid: 'tlv/lib/v2/canh_14.mp4', tag: 'Khoan cắt vội', title: 'Chọn vải\náo dài Tết', hi: 'áo dài Tết'},
  {kind: 'full', s: 3.7, e: 7.2, vid: 'tlv/lib/s2/canh_10.mp4', tag: 'Bước 1', title: 'Ra gần cửa sổ,\nánh sáng tự nhiên', hi: 'ánh sáng tự nhiên'},
  {kind: 'full', s: 7.2, e: 10.2, vid: 'tlv/lib/v2/canh_11.mp4', tag: 'Đặt sát cằm', title: 'Nhìn mặt mình,\nđừng nhìn vải', hi: 'đừng nhìn vải'},
  {kind: 'drape', s: 10.2, e: 16.7, tag: 'Đọc kết quả', title: 'Da sáng đều\nlà sắc độ hợp', hi: 'sắc độ hợp', items: ['Da sáng, đều màu', 'Da xỉn, lộ quầng thâm'], cols: ['#b23a48', '#a89f68']},
  {kind: 'full', s: 16.7, e: 20.8, vid: 'tlv/lib/s2/canh_16.mp4', tag: 'Thói quen tốt', title: 'Thử vải sát cằm\ntrước khi cắt may', hi: 'trước khi cắt may'},
  {kind: 'tips', s: 20.8, e: 23.7, tag: 'So thêm', title: 'Thêm một tấm\nsáng, một tấm trầm', hi: 'một tấm trầm', items: ['Sáng hơn', 'Tấm gốc', 'Trầm hơn'], cols: ['#e8a0a8', '#c2526a', '#7a2236']},
  {kind: 'end', s: 23.7, e: 28.5, title: 'Áo dài Tết\nhợp màu nào?', hi: 'hợp màu nào?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t649.mp3'});
