import {v} from '../make';

// Bản 1 mùi Baby Angel, dùng ảnh UGC thật (public/bm/u-*.jpg — ảnh UGC hiện chỉ có chai Angel).
export default v('MistAngelDemo', 'angel', undefined, 24,
  [
    'Đi date mà muốn thơm kiểu tiểu thư?',
    'Baby Angel nè, sang chảnh, hơi điệu đà một chút.',
    'Chai nhỏ xinh, bỏ túi mang theo cả ngày.',
    'Lưu hương hai đến bốn tiếng, đi xem phim, đi cà phê đều hợp.',
    'Hẹn hò, dã ngoại, mùa lễ, có Angel là xinh.',
    'Bản limited thôi nha, lưu lại kẻo lỡ!',
  ],
  [
    {kind: 'full', s: 0, e: 3.2, img: 'bm/u-selfie-rap.jpg', tag: 'mùi đi date', title: 'Thơm kiểu\ntiểu thư?', hi: 'tiểu thư'},
    {kind: 'scent', s: 3.2, e: 8, title: 'tiểu thư sang chảnh', hi: 'sang chảnh', line: 'hơi điệu đà một chút'},
    {kind: 'full', s: 8, e: 11, img: 'bm/u-xe-buyt.jpg', title: 'Nhỏ xinh\nbỏ túi', hi: 'bỏ túi'},
    {kind: 'features', s: 11, e: 15.6, title: 'Đi đâu cũng\nmang theo', hi: 'mang theo'},
    {kind: 'occasion', s: 15.6, e: 19.2, title: 'Hợp nhất là', hi: 'nhất', img: 'bm/u-ca-phe.jpg', items: ['Đi date', 'Mùa lễ', 'Làm quà', 'Dã ngoại']},
    {kind: 'full', s: 19.2, e: 21.4, img: 'bm/u-vuon-nang.jpg', title: 'Xịt một chút\nlà xinh', hi: 'xinh', ty: 1330},
    {kind: 'end', s: 21.4, e: 24, title: 'Lưu lại\nkẻo lỡ nha!', hi: 'kẻo lỡ', sub: 'Bản giới hạn, số lượng có hạn'},
  ]);
