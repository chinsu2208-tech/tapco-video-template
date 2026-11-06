import {v} from '../make';

// Bản 5 mùi (theme 'mix'): mỗi cảnh `scent` tự đổi sang màu của mùi đó.
// Demo không voice: script dưới chỉ dùng để chạy phụ đề.
export default v('MistLineupDemo', 'mix', undefined, 33,
  [
    'Tủ thơm của nàng sắp có thêm năm bé xinh nè!',
    'Dòng xịt body Baby, nhỏ gọn bỏ túi, bản giới hạn thôi nha.',
    'Baby Puffy, hương phấn em bé, mềm mại trong trẻo.',
    'Baby Soft, hoa ngọt mềm, nhẹ nhàng nữ tính.',
    'Baby Night, ngọt sâu, ấm áp, quyến rũ.',
    'Baby Angel, tiểu thư sang chảnh, hơi điệu đà.',
    'Baby Joy, kẹo nho đáng yêu hết nấc.',
    'Lưu hương hai đến bốn tiếng, bỏ túi mang theo.',
    'Đi chơi, đi date, mùa lễ làm quà cũng xinh.',
    'Còn bạn, bạn là Baby nào?',
    'Comment cho mình biết nha!',
  ],
  [
    {kind: 'hook', s: 0, e: 3, tag: 'BẢN LIMITED', title: '5 bé thơm\nmới về nè!', hi: '5 bé thơm'},
    {kind: 'lineup', s: 3, e: 6.5, title: 'Dòng xịt body\nBaby', hi: 'Baby', sub: '5 mùi · 5 tính cách'},
    {kind: 'scent', s: 6.5, e: 9.5, scent: 'puffy', n: 1, title: 'hương phấn em bé', hi: 'phấn em bé', line: 'thơm như má em bé'},
    {kind: 'scent', s: 9.5, e: 12.5, scent: 'soft', n: 2, title: 'hoa ngọt mềm', hi: 'hoa ngọt', line: 'dịu dàng, nữ tính'},
    {kind: 'scent', s: 12.5, e: 15.5, scent: 'night', n: 3, title: 'ngọt sâu, ấm áp', hi: 'ngọt sâu', line: 'cho buổi hẹn tối'},
    {kind: 'scent', s: 15.5, e: 18.5, scent: 'angel', n: 4, title: 'tiểu thư sang chảnh', hi: 'sang chảnh', line: 'hơi điệu đà một chút'},
    {kind: 'scent', s: 18.5, e: 21.5, scent: 'joy', n: 5, title: 'kẹo nho đáng yêu', hi: 'kẹo nho', line: 'vui hết nấc'},
    {kind: 'features', s: 21.5, e: 25, title: 'Nhỏ xinh\nmà thơm lâu', hi: 'thơm lâu'},
    {kind: 'occasion', s: 25, e: 27.6, title: 'Mang theo\nmọi cuộc hẹn', hi: 'cuộc hẹn', img: 'bm/u-selfie-rap.jpg', items: ['Đi date', 'Mùa lễ', 'Làm quà', 'Đi chơi']},
    {kind: 'quiz', s: 27.6, e: 31, title: 'Bạn là\nBaby nào?', hi: 'Baby nào', sub: 'comment cho mình nha'},
    {kind: 'end', s: 31, e: 33, title: 'Lưu lại\nchọn mùi nha!', hi: 'chọn mùi', sub: 'Bản giới hạn, số lượng có hạn'},
  ]);
