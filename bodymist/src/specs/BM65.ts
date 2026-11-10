import {v} from '../make';

// BDM30 · CM-65 (sheet 'Kho y tuong'). Voice: public/voice/b65.mp3, mốc cảnh theo faster-whisper.
export default v('BM65', 'mix', 'voice/b65.mp3', 26.06,
  "Tối Noel này bạn định làm nhân vật nào đi dạo phố? Nhớ nha, chọn mùi hương cũng như chọn vai vậy đó. Muốn dịu dàng như hoa thì có Baby Soft, muốn ngọt sâu quyến rũ thì có Baby Night. Còn nếu tối nay bạn muốn làm tiểu thư sang chảnh, hơi điệu đà giữa phố đèn lung linh, thì Baby Angel chính là vai chính luôn. Chai xinh nhỏ xíu bỏ túi là mang theo được ngay, đi date hay đi với best friend đều xinh hết nấc. Bản limited nên nhanh tay kẻo hết nha. Vậy là tối Noel này, bạn đã biết mình là nhân vật nào rồi đúng không? Nghía giỏ hàng bên dưới nha",
  [
    {kind: 'full', s: 0, e: 3.02, vid: 'bmv/k4.mp4', tag: 'Noel dạo phố', title: 'Bạn là\nnhân vật nào?', hi: 'nhân vật'},
    {kind: 'quiz', s: 3.02, e: 5.48, title: 'Chọn mùi\nnhư chọn vai', hi: 'chọn vai'},
    {kind: 'scent', s: 5.48, e: 7.58, scent: 'soft', title: 'hoa ngọt mềm', hi: 'hoa ngọt', line: 'dịu dàng như hoa'},
    {kind: 'scent', s: 7.58, e: 10.0, scent: 'night', title: 'ngọt sâu, quyến rũ', hi: 'ngọt sâu', line: 'ấm áp cho tối Noel'},
    {kind: 'scent', s: 10.0, e: 13.72, scent: 'angel', title: 'tiểu thư sang chảnh', hi: 'sang chảnh', line: 'hơi điệu đà giữa phố đèn'},
    {kind: 'full', s: 13.72, e: 15.82, vid: 'bmv/k5.mp4', title: 'Vai chính là\nBaby Angel', hi: 'Baby Angel'},
    {kind: 'features', s: 15.82, e: 18.04, title: 'Nhỏ xinh\nbỏ túi', hi: 'bỏ túi'},
    {kind: 'occasion', s: 18.04, e: 20.36, title: 'Đi date hay\nbest friend', hi: 'best friend', img: 'bm/u-ca-phe.jpg', items: ['Đi date', 'Noel', 'Best friend', 'Dạo phố']},
    {kind: 'end', s: 20.36, e: 26.06, title: 'Tối Noel này\nbạn là ai?', hi: 'Noel', sub: 'Bản giới hạn, số lượng có hạn'},
  ]);
