import {v} from '../make';

// BDM30 · CM-100 (sheet 'Kho y tuong'). Voice: public/voice/b100.mp3, mốc cảnh theo faster-whisper.
// Bản 1 mùi Soft. Voice không đọc câu CTA cuối nên phụ đề bỏ câu đó (CTA nằm ở cảnh end).
export default v('BM100', 'soft', 'voice/b100.mp3', 29.88,
  "Dạo hồ chiều se lạnh với bạn thân mà quên mùi hương thì tiếc lắm đó. Mẹo nhỏ nè: chọn mùi theo không khí buổi đi chơi, đừng chọn đại. Chiều hồ gió mát, hai đứa đi chậm, tám chuyện, chụp ảnh. Lúc này cần một mùi mềm mềm, nhẹ nhàng, nữ tính, và hoa ngọt của Baby Soft chính là chuẩn bài luôn. Vừa xịt là thấy cả buổi chiều dịu hẳn, như được ôm một bó hoa ngọt. Chai nhỏ xíu, bỏ túi áo là mang đi được, cần thì xịt lại, bạn thân còn phải hỏi bạn thơm thế. Về nhà nhớ vẽ cánh hoa và chai nhỏ vào scrapbook nữa nha. Buổi dạo hồ nào cũng xứng đáng có mùi riêng.",
  [
    {kind: 'hook', s: 0, e: 3.7, tag: 'dạo hồ chiều', title: 'Quên xịt thơm\nthì tiếc lắm', hi: 'tiếc lắm'},
    {kind: 'quiz', s: 3.7, e: 7.1, title: 'Chọn mùi theo\nkhông khí', hi: 'không khí'},
    {kind: 'full', s: 7.1, e: 10.4, vid: 'kho/CLIP026.mp4', title: 'Gió mát, đi chậm\ntám chuyện', hi: 'tám chuyện'},
    {kind: 'scent', s: 10.4, e: 15.4, title: 'hoa ngọt mềm', hi: 'hoa ngọt', line: 'nhẹ nhàng, nữ tính'},
    {kind: 'full', s: 15.4, e: 18.8, img: 'kho/IMG030.jpg', title: 'Như ôm một\nbó hoa ngọt', hi: 'bó hoa'},
    {kind: 'features', s: 18.8, e: 23.5, title: 'Bỏ túi áo\nmang đi được', hi: 'bỏ túi', items: ['Nhỏ gọn bỏ túi', 'Cần thì xịt lại', 'Bản limited']},
    {kind: 'occasion', s: 23.5, e: 27.0, title: 'Vẽ cánh hoa\nvào scrapbook', hi: 'scrapbook', items: ['Dạo hồ', 'Bạn thân', 'Chụp ảnh', 'Đi chơi']},
    {kind: 'end', s: 27.0, e: 29.88, title: 'Mỗi buổi dạo hồ\nmột mùi riêng', hi: 'mùi riêng', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
