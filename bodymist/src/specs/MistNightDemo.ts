import {v} from '../make';

// Bản 1 mùi: theme = 'night'. Đổi theme sang puffy/soft/angel/joy cho mùi khác.
export default v('MistNightDemo', 'night', undefined, 23,
  [
    'Đi date buổi tối mà muốn để lại dấu ấn?',
    'Thử Baby Night nè. Ngọt sâu, ấm áp, hơi quyến rũ.',
    'Chai nhỏ xinh bỏ túi, lưu hương hai đến bốn tiếng, xịt thêm trước khi gặp người ấy.',
    'Hợp những buổi hẹn mùa lễ.',
    'Bản limited, còn bốn mùi khác cho mỗi tính cách.',
    'Lưu lại cho buổi hẹn tới nha!',
  ],
  [
    {kind: 'hook', s: 0, e: 3.4, tag: 'mùi đi date', title: 'Hẹn tối nay\nthơm kiểu gì?', hi: 'thơm kiểu gì'},
    {kind: 'scent', s: 3.4, e: 8.6, title: 'ngọt sâu, ấm áp', hi: 'ngọt sâu', line: 'hợp những buổi hẹn mùa lễ'},
    {kind: 'features', s: 8.6, e: 14.2, title: 'Bỏ túi\nxịt lại khi cần', hi: 'xịt lại'},
    {kind: 'occasion', s: 14.2, e: 17.4, title: 'Hợp nhất là', hi: 'nhất', items: ['Đi date', 'Noel', 'Làm quà', 'Tiệc tối']},
    {kind: 'lineup', s: 17.4, e: 20.4, title: 'Còn 4 bé nữa\ncho mỗi tính cách', hi: '4 bé', scent: 'night'},
    {kind: 'end', s: 20.4, e: 23, title: 'Lưu lại\ncho buổi hẹn tới', hi: 'buổi hẹn', sub: 'Bản giới hạn, số lượng có hạn'},
  ]);
