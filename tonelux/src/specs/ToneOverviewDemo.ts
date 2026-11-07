import {v} from '../make';

// Bản tổng quan (không gắn mùa): quạt 12 màu, 3 bước, 12 mùa, thử drape, công cụ, kết.
export default v('ToneOverviewDemo', 30,
  [
    'Cùng một chiếc áo, sao người khác mặc sáng da còn mình thì không?',
    'Personal color xem ba điều: nhiệt độ, độ sáng và độ trong của màu.',
    'Từ đó chia ra bốn nhóm, mười hai mùa màu khác nhau.',
    'Đặt đúng màu sát mặt, da sáng và hài hoà hơn hẳn.',
    'Tonelux có thẻ màu và vải drape để chị tự kiểm tra tại nhà.',
    'Đặt lịch tư vấn để biết mình thuộc mùa nào nha.',
  ],
  [
    {kind: 'hook', s: 0, e: 4, tag: 'Personal color', title: 'Mặc màu nào\nđể da sáng lên?', hi: 'da sáng lên'},
    {kind: 'steps', s: 4, e: 9.5, tag: '3 bước xác định mùa', title: 'Màu da của bạn\ncó 3 đặc điểm', hi: '3 đặc điểm'},
    {kind: 'seasons', s: 9.5, e: 15, tag: '4 nhóm · 12 mùa', title: 'Bạn thuộc mùa nào?', hi: 'mùa nào'},
    {kind: 'drape', s: 15, e: 20.5, tag: 'Thử vải drape', title: 'Đúng màu,\nkhác hẳn', hi: 'khác hẳn'},
    {kind: 'product', s: 20.5, e: 25.5, tag: 'Bộ công cụ Tonelux', title: 'Tự kiểm tra\ntại nhà', hi: 'tại nhà'},
    {kind: 'end', s: 25.5, e: 30, title: 'Tìm đúng mùa\ncủa riêng bạn', hi: 'của riêng bạn', sub: 'Đặt lịch tư vấn'},
  ]);
