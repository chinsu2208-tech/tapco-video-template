import {v} from '../make';

// BDM30 · CM-97 (sheet 'Kho y tuong'). Voice: public/voice/b97.mp3, mốc cảnh theo faster-whisper.
// Bản mix (voice nhắc Joy + Night). Clip/ảnh UGC (chai Angel) chỉ ở cảnh chung không nêu tên mùi.
export default v('BM97', 'mix', 'voice/b97.mp3', 26.21,
  "Đi công viên giải trí với bạn thân mà quên mang thứ này là toang cả vibe đó. Outfit có rồi, ảnh check-in cũng có rồi, nhưng mùi hương thì sao? Mẹo nhỏ nè: chọn mùi theo tâm trạng của ngày đi chơi. Ngày vui, tinh nghịch, cười banh nóc cùng best friend thì hợp nhất với Baby Joy, mùi kẹo nho đáng yêu xỉu, ngọt như đang cầm cây kẹo bông giữa hội chợ. Chai tím nhỏ xíu bỏ vừa túi, chơi tàu lượn xong còn xịt lại được liền. Đi date thì có Night, còn ngày quẩy với bạn thân thì cứ Joy mà chọn. Vậy là vibe cả ngày đủ đầy rồi. Nghía giỏ hàng bên dưới nha.",
  [
    {kind: 'full', s: 0, e: 3.4, vid: 'bmv/k1.mp4', tag: 'công viên giải trí', title: 'Quên món này\nlà toang vibe', hi: 'toang vibe'},
    {kind: 'full', s: 3.4, e: 6.9, img: 'bm/u-selfie-rap.jpg', title: 'Outfit, check-in\ncòn mùi hương?', hi: 'mùi hương'},
    {kind: 'quiz', s: 6.9, e: 9.6, title: 'Chọn mùi theo\ntâm trạng', hi: 'tâm trạng'},
    {kind: 'scent', s: 9.6, e: 16.5, scent: 'joy', title: 'kẹo nho đáng yêu', hi: 'kẹo nho', line: 'ngọt như cầm cây kẹo bông'},
    {kind: 'features', s: 16.5, e: 20.5, scent: 'joy', title: 'Chai tím nhỏ xíu\nbỏ vừa túi', hi: 'bỏ vừa túi', items: ['Nhỏ gọn bỏ túi', 'Chơi xong xịt lại', 'Bản limited']},
    {kind: 'scent', s: 20.5, e: 22.4, scent: 'night', title: 'ngọt sâu, ấm áp', hi: 'ngọt sâu', line: 'đi date thì có Night'},
    {kind: 'scent', s: 22.4, e: 24.4, scent: 'joy', title: 'quẩy với bạn thân', hi: 'bạn thân', line: 'thì cứ Joy mà chọn'},
    {kind: 'end', s: 24.4, e: 26.21, title: 'Vibe cả ngày\nđủ đầy rồi', hi: 'đủ đầy', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
