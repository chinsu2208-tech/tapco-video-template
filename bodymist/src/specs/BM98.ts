import {v} from '../make';

// BDM30 · CM-98 (sheet 'Kho y tuong'). Voice: public/voice/b98.mp3, mốc cảnh theo faster-whisper.
// Bản 1 mùi Joy. Voice không đọc câu CTA cuối nên phụ đề bỏ câu đó (CTA nằm ở cảnh end).
export default v('BM98', 'joy', 'voice/b98.mp3', 24.84,
  "Giờ ra chơi mà rút ra viên kẹo nho này, bạn cùng bàn xin liền! Nhưng đây không phải kẹo đâu, là Baby Joy, chai xịt body nhỏ xíu bỏ túi, thơm mùi kẹo nho đáng yêu xỉu. Mẹo một, vẽ hẳn một hộp kẹo doodle, cất chai nhỏ vào trong cho thật dễ thương. Mẹo hai, xịt cho mình trước, rồi cho bạn cùng bàn ngửi thử, kiểu chia nhau một khoảnh khắc ngọt ngào. Mẹo ba, hỏi bạn xem mùi này giống tính cách ai trong lớp, cười cả giờ ra chơi luôn. Một chai nhỏ thôi mà biến giờ ra chơi thành giờ chia kẹo nho cực ngọt.",
  [
    {kind: 'hook', s: 0, e: 3.2, tag: 'giờ ra chơi', title: 'Rút viên kẹo nho\nbạn xin liền', hi: 'kẹo nho'},
    {kind: 'scent', s: 3.2, e: 8.5, title: 'kẹo nho đáng yêu', hi: 'kẹo nho', line: 'không phải kẹo đâu nha'},
    {kind: 'full', s: 8.5, e: 12.3, img: 'kho/IMG032.jpg', title: 'Mẹo 1: cất chai\nvào hộp kẹo', hi: 'hộp kẹo'},
    {kind: 'full', s: 12.3, e: 16.9, vid: 'kho/CLIP019.mp4', title: 'Mẹo 2: xịt rồi\ncho bạn ngửi', hi: 'cho bạn ngửi'},
    {kind: 'quiz', s: 16.9, e: 20.9, title: 'Mẹo 3: mùi này\ngiống ai trong lớp?', hi: 'giống ai'},
    {kind: 'features', s: 20.9, e: 22.7, title: 'Một chai nhỏ\nthôi mà', hi: 'chai nhỏ'},
    {kind: 'end', s: 22.7, e: 24.84, title: 'Giờ ra chơi\nngọt kẹo nho', hi: 'kẹo nho', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
