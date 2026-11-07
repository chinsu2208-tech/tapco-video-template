import {v} from '../make';

// Bản 1 mùa, nền tối espresso: đổi season sang mùa khác là đổi toàn bộ bảng màu.
export default v('ToneAutumnDemo', 26,
  [
    'Nàng Thu Ấm đi làm nên mặc gì cho sang?',
    'Thu Ấm hợp gam ấm, độ đậm vừa, mang sắc đất tự nhiên.',
    'Đi làm, chọn mù tạt, gạch cam, xanh olive và xanh rêu.',
    'Gam lạnh nhạt như xanh pastel dễ làm da xỉn đi.',
    'Lưu lại bảng màu, hoặc đặt lịch để Tonelux tư vấn cho riêng chị.',
  ],
  [
    {kind: 'hook', s: 0, e: 4, tag: 'Mùa Thu Ấm', title: 'Đi làm mặc gì\ncho sang?', hi: 'cho sang'},
    {kind: 'palette', s: 4, e: 10, n: 8, title: 'Thu Ấm', line: 'ấm áp, đậm vừa, sắc đất tự nhiên'},
    {kind: 'tips', s: 10, e: 16, tag: 'Gợi ý công sở', title: 'Màu nên có\ntrong tủ đồ', hi: 'tủ đồ', items: ['Vàng mù tạt', 'Cam gạch', 'Xanh olive', 'Xanh rêu đậm'], cols: ['#d99e2b', '#c1622e', '#6b7f3a', '#2f6a5c']},
    {kind: 'drape', s: 16, e: 21, tag: 'So sánh', title: 'Ấm vs lạnh nhạt', hi: 'lạnh nhạt', items: ['Da ấm, có sức sống', 'Da xỉn, kém tươi']},
    {kind: 'end', s: 21, e: 26, title: 'Lưu lại\nbảng màu của bạn', hi: 'bảng màu', sub: 'Đặt lịch tư vấn'},
  ], {season: 'true-autumn', dark: true});
