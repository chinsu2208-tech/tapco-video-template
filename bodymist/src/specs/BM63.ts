import {v} from '../make';

// BDM30 · CM-63 (sheet 'Kho y tuong'). Voice: public/voice/b63.mp3, mốc cảnh theo faster-whisper.
export default v('BM63', 'soft', 'voice/b63.mp3', 29.64,
  "Túi đi chụp ảnh lớp 20/11 của bạn có hoa, có áo đẹp rồi, nhưng vẫn thiếu một món. Là mùi hương đó! Đứng sát bạn thân, sát bạn cùng bàn, cả lớp chen chúc cười toe, thì thơm nhẹ một chút là điểm cộng liền. Mình chọn Baby Soft, hoa ngọt mềm, nhẹ nhàng, nữ tính, hợp y chang bó hoa trên tay luôn. Chai nhỏ xíu, nhét túi cạnh bó hoa vẫn vừa, đi học hay đi chụp đều mang theo được. Xịt vào là thấy mình xinh hơn hẳn, tự tin đứng giữa hàng đầu luôn. Vậy nên túi 20/11 đủ bộ là hoa, áo đẹp và một chai Baby Soft. Nghía giỏ hàng bên dưới nha.",
  [
    {kind: 'hook', s: 0, e: 5.62, tag: 'chụp ảnh 20/11', title: 'Túi 20/11\ncòn thiếu 1 món', hi: '1 món'},
    {kind: 'occasion', s: 5.62, e: 10.92, title: 'Cả lớp đứng sát\nthơm nhẹ là +1', hi: 'thơm nhẹ', items: ['Chụp ảnh lớp', '20/11', 'Đi học', 'Làm quà']},
    {kind: 'scent', s: 10.92, e: 16.08, title: 'hoa ngọt mềm', hi: 'hoa ngọt', line: 'hợp y chang bó hoa trên tay'},
    {kind: 'features', s: 16.08, e: 20.2, title: 'Nhét túi\ncạnh bó hoa', hi: 'bó hoa'},
    {kind: 'scent', s: 20.2, e: 23.14, title: 'xịt vào là thấy xinh', hi: 'thấy xinh', line: 'tự tin đứng hàng đầu'},
    {kind: 'end', s: 23.14, e: 29.64, title: 'Hoa, áo đẹp\nvà Baby Soft', hi: 'Baby Soft', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
