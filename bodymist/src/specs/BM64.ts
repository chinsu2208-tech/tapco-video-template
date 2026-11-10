import {v} from '../make';

// BDM30 · CM-64 (sheet 'Kho y tuong'). Voice: public/voice/b64.mp3, mốc cảnh theo faster-whisper.
export default v('BM64', 'night', 'voice/b64.mp3', 23.57,
  "Đi date rạp phim tối mà xịt mùi nào cũng được á? Chưa chắc nha! Tối rạp phim đèn mờ, không gian ấm, nên bạn cần một mùi ngọt sâu, ấm áp, quyến rũ kiểu dễ thương, đúng chất Baby Night luôn. Nghe thôi đã thấy crush muốn ngồi sát lại rồi đúng không? Mẹo nhỏ nè: xịt một chút trước khi ra khỏi nhà, rồi bỏ chai bé xíu vào túi, nằm ngay cạnh tấm vé phim. Gọn xinh, xịt khi cần, bước vào rạp là tự tin liền. Vậy nên đi date tối, đừng xịt đại, hãy chọn mùi hợp tông buổi hẹn nha. Nghía giỏ hàng bên dưới nha!",
  [
    {kind: 'hook', s: 0, e: 3.42, tag: 'date rạp phim', title: 'Xịt mùi nào\ncũng được?', hi: 'mùi nào'},
    {kind: 'scent', s: 3.42, e: 9.22, title: 'ngọt sâu, ấm áp', hi: 'ngọt sâu', line: 'quyến rũ kiểu dễ thương'},
    {kind: 'occasion', s: 9.22, e: 11.42, title: 'Crush muốn\nngồi sát lại', hi: 'sát lại', items: ['Rạp phim', 'Đi date', 'Hẹn tối', 'Mùa lễ']},
    {kind: 'features', s: 11.42, e: 16.44, title: 'Xịt trước khi đi\nrồi bỏ túi', hi: 'bỏ túi', items: ['Bỏ túi cạnh vé phim', 'Xịt lại khi cần', 'Bản limited']},
    {kind: 'hook', s: 16.44, e: 18.94, tag: 'gọn xinh, xịt khi cần', title: 'Bước vào rạp\nlà tự tin', hi: 'tự tin'},
    {kind: 'end', s: 18.94, e: 23.57, title: 'Chọn mùi hợp\ntông buổi hẹn', hi: 'buổi hẹn', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
