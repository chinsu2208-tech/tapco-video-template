import {v} from '../make';

// BDM30 · CM-99 (sheet 'Kho y tuong'). Voice: public/voice/b99.mp3, mốc cảnh theo faster-whisper.
// Bản 1 mùi Joy (voice chỉ nói "mùi quyến rũ", không nêu tên mùi khác).
export default v('BM99', 'joy', 'voice/b99.mp3', 31.49,
  "Hẹn trà sữa với crush mà xịt mùi quyến rũ thì hơi lệch vibe đó nha. Buổi hẹn nhẹ nhàng, ngồi sát nhau nhâm nhi ly trà sữa thì cần một mùi ngọt, dễ thương, gần gũi thôi. Chính là Baby Joy hương kẹo nho đáng yêu, thơm như vừa bóc viên kẹo tím xinh xắn. Nghe thôi đã thấy mình cute hơn hẳn rồi đúng không? Mẹo nhỏ nè: chọn mùi theo bối cảnh, trà sữa thì kẹo nho, còn tối muộn thì để mùi quyến rũ lo. Chai BDM30 bé xíu, nhét túi áo là đi, trước giờ gặp crush xịt một cái là tự tin liền. Vậy nên hẹn trà sữa đừng quyến rũ quá, cứ ngọt như kẹo nho là chuẩn bài. Nghía giỏ hàng bên dưới nha.",
  [
    {kind: 'full', s: 0, e: 3.7, vid: 'kho/CLIP036.mp4', tag: 'hẹn trà sữa', title: 'Hẹn trà sữa\nxịt mùi gì?', hi: 'mùi gì'},
    {kind: 'occasion', s: 3.7, e: 9.0, title: 'Ngọt, dễ thương\ngần gũi thôi', hi: 'dễ thương', items: ['Hẹn trà sữa', 'Ngồi gần', 'Đi date', 'Đi chơi']},
    {kind: 'scent', s: 9.0, e: 15.4, title: 'kẹo nho đáng yêu', hi: 'kẹo nho', line: 'như vừa bóc viên kẹo tím'},
    {kind: 'quiz', s: 15.4, e: 20.2, title: 'Chọn mùi\ntheo bối cảnh', hi: 'bối cảnh'},
    {kind: 'features', s: 20.2, e: 26.0, title: 'Bé xíu, nhét\ntúi áo là đi', hi: 'túi áo', items: ['Nhỏ gọn bỏ túi', 'Xịt trước giờ hẹn', 'Bản limited']},
    {kind: 'full', s: 26.0, e: 29.7, vid: 'kho/CLIP020.mp4', title: 'Cứ ngọt như\nkẹo nho', hi: 'kẹo nho', ty: 1330},
    {kind: 'end', s: 29.7, e: 31.49, title: 'Chuẩn bài\nhẹn trà sữa', hi: 'trà sữa', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
