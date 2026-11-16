import {v} from '../make';

// BDM30 · CM-94 (sheet 'Kho y tuong'). Voice: public/voice/b94.mp3, mốc cảnh theo faster-whisper.
export default v('BM94', 'puffy', 'voice/b94.mp3', 26.52,
  "Trễ chuông rồi mà vẫn thơm được, bạn tin không? Sáng nào cũng chạy như ma đuổi thì làm gì có thời gian làm thơm cầu kỳ. Mình chỉ cần một chai Baby Puffy bé xíu, hương phấn nhẹ nhàng, nhét sẵn vào túi áo hoặc ngăn cặp cạnh hộp bút. Lúc chạy kịp vào lớp, thở phào một cái, xịt nhẹ một chút là xong. Thơm tho như bạn cùng bàn ngoan nhất lớp, chẳng ai biết bạn vừa phi như bay qua cổng trường. Chai nhỏ xinh, nhìn thôi đã thấy vui đầu ngày. Nhớ để sẵn từ tối nha, sáng mai khỏi cuống. Vậy là trễ chuông vẫn thơm, đúng như mình hứa. Nghía giỏ hàng bên dưới nha.",
  [
    {kind: 'full', s: 0, e: 2.3, img: 'kho/IMG031.jpg', tag: 'sáng đi học', title: 'Trễ chuông\nvẫn thơm?', hi: 'vẫn thơm'},
    {kind: 'full', s: 2.3, e: 5.3, img: 'kho/IMG030.jpg', title: 'Chạy như\nma đuổi', hi: 'ma đuổi'},
    {kind: 'scent', s: 5.3, e: 10.6, title: 'hương phấn nhẹ', hi: 'phấn nhẹ', line: 'nhét sẵn túi áo, cạnh hộp bút'},
    {kind: 'full', s: 10.6, e: 13.9, vid: 'kho/CLIP022.mp4', tag: 'kịp vào lớp', title: 'Thở phào\nxịt nhẹ là xong', hi: 'xịt nhẹ'},
    {kind: 'full', s: 13.9, e: 17.7, vid: 'kho/CLIP021.mp4', title: 'Thơm như bạn\nngoan nhất lớp', hi: 'ngoan nhất'},
    {kind: 'features', s: 17.7, e: 22.05, title: 'Để sẵn từ tối\nsáng khỏi cuống', hi: 'để sẵn'},
    {kind: 'end', s: 22.05, e: 26.52, title: 'Trễ chuông\nvẫn thơm nha', hi: 'vẫn thơm', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
