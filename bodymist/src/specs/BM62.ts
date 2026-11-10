import {v} from '../make';

// BDM30 · CM-62 (sheet 'Kho y tuong'). Voice: public/voice/b62.mp3, mốc cảnh theo faster-whisper.
export default v('BM62', 'joy', 'voice/b62.mp3', 27.74,
  "Hẹn bạn thân đi cà phê mà quên món thứ ba này là hơi phí đó nha. Món đó không phải bánh, mà là một chai nhỏ xíu màu tím, Baby Joy mùi kẹo nho. Mẹo là chọn mùi theo tâm trạng buổi hẹn. Đi date thì hợp mùi sâu, ấm. Còn cuối tuần ngồi cười với best friend thì cứ chọn mùi kẹo vui vẻ cho đúng vibe. Chai bé tí, bỏ túi xách là xong, khỏi chuẩn bị gì. Vừa xịt vừa chụp hình là bạn thân khen ngay, nghe nói thơm đến mức cả quán ngoái lại luôn. Cuối tuần này nhớ gọi hai ly nước và thêm món thứ ba nhé. Nghía giỏ hàng bên dưới nha.",
  [
    {kind: 'hook', s: 0, e: 3.86, tag: 'cà phê cuối tuần', title: 'Hẹn bạn thân\nquên món này?', hi: 'món này'},
    {kind: 'scent', s: 3.86, e: 8.46, title: 'kẹo nho đáng yêu', hi: 'kẹo nho', line: 'món thứ ba là bé này nè'},
    {kind: 'quiz', s: 8.46, e: 12.64, title: 'Chọn mùi theo\ntâm trạng', hi: 'tâm trạng'},
    {kind: 'occasion', s: 12.64, e: 16.48, title: 'Cuối tuần với\nbest friend', hi: 'best friend', items: ['Cà phê', 'Đi chơi', 'Chụp hình', 'Làm quà']},
    {kind: 'features', s: 16.48, e: 19.66, title: 'Bé tí\nbỏ túi là xong', hi: 'bỏ túi'},
    {kind: 'hook', s: 19.66, e: 24.2, tag: 'bạn thân khen ngay', title: 'Vừa xịt\nvừa chụp hình', hi: 'chụp hình'},
    {kind: 'end', s: 24.2, e: 27.74, title: 'Hai ly nước\nvà món thứ ba', hi: 'món thứ ba', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
