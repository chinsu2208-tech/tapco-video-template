import {v} from '../make';

// BDM30 · CM-96 (sheet 'Kho y tuong'). Voice: public/voice/b96.mp3, mốc cảnh theo faster-whisper.
export default v('BM96', 'puffy', 'voice/b96.mp3', 26.23,
  "Giỏ picnic có đủ đồ ăn, đủ outfit rồi mà vẫn thiếu một món nhỏ xíu. Đoán xem là gì nè? Là mùi hương đó! Đi picnic ngồi thảm, hóng gió, chụp ảnh với bạn thân, thì đừng chọn mùi nồng như đi date tối. Hãy chọn mùi hợp không khí, nhẹ nhàng, sạch sẽ, thân thuộc. Baby Puffy hương phấn em bé chính là chân ái, xịt lên là cả buổi chill luôn dễ chịu, thơm xịn như vừa bước ra từ cuốn truyện cổ tích. Chai nhỏ xíu bỏ túi, nhét gọn trong giỏ như một gói khăn giấy. Vậy là giỏ picnic đã đủ bộ rồi nha. Nghía giỏ hàng bên dưới nha.",
  [
    {kind: 'hook', s: 0, e: 6.2, tag: 'picnic cuối tuần', title: 'Đoán xem\ngiỏ còn thiếu gì?', hi: 'thiếu gì'},
    {kind: 'occasion', s: 6.2, e: 10.6, title: 'Ngồi thảm\nhóng gió, chụp ảnh', hi: 'hóng gió', items: ['Picnic', 'Cuối tuần', 'Chụp ảnh', 'Bạn thân']},
    {kind: 'quiz', s: 10.6, e: 13.8, title: 'Chọn mùi hợp\nkhông khí', hi: 'không khí'},
    {kind: 'scent', s: 13.8, e: 17.9, title: 'hương phấn em bé', hi: 'phấn em bé', line: 'chân ái cho buổi chill'},
    {kind: 'lineup', s: 17.9, e: 20.6, title: 'Thơm như\ntruyện cổ tích', hi: 'cổ tích'},
    {kind: 'features', s: 20.6, e: 23.6, title: 'Gọn như\ngói khăn giấy', hi: 'khăn giấy'},
    {kind: 'end', s: 23.6, e: 26.23, title: 'Giỏ picnic\nđủ bộ rồi', hi: 'đủ bộ', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
