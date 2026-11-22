import {v} from '../make';

// BDM30 · CM-101 (sheet 'Kho y tuong'). Voice: public/voice/b101.mp3, mốc cảnh theo faster-whisper.
// Bản 1 mùi Soft. Voice không đọc câu CTA cuối nên phụ đề bỏ câu đó (CTA nằm ở cảnh end).
export default v('BM101', 'soft', 'voice/b101.mp3', 23.02,
  "Ai bảo xịt body chỉ để đi date thôi? Học nhóm ở thư viện cũng cần một mùi xinh xinh đó nha. Mẹo đầu tiên: chọn mùi hợp không gian chung, nghĩa là nhẹ nhàng thôi. Baby Soft hoa ngọt mềm, nữ tính, ngồi cạnh bạn thân hay bạn cùng bàn đều dễ chịu. Mẹo thứ hai: chọn chai bỏ túi, nhỏ xíu, nhét cạnh chồng sách vở là vừa. Mẹo thứ ba: xịt nhẹ nhàng trước khi đến, đừng xịt quá tay. Vậy là bạn có một buổi học nhóm thơm ngọt, đáng yêu, chẳng cần đợi đi date mới được thơm.",
  [
    {kind: 'full', s: 0, e: 4.9, vid: 'kho/CLIP038.mp4', tag: 'học nhóm thư viện', title: 'Ai bảo chỉ\nđể đi date?', hi: 'đi date'},
    {kind: 'scent', s: 4.9, e: 12.2, title: 'hoa ngọt mềm', hi: 'hoa ngọt', line: 'ngồi cạnh bạn đều dễ chịu'},
    {kind: 'features', s: 12.2, e: 15.9, title: 'Mẹo 2: chai\nbỏ túi', hi: 'bỏ túi', items: ['Nhỏ gọn bỏ túi', 'Nhét cạnh sách vở', 'Bản limited']},
    {kind: 'full', s: 15.9, e: 18.8, vid: 'kho/CLIP023.mp4', title: 'Mẹo 3: xịt nhẹ\nđừng quá tay', hi: 'xịt nhẹ'},
    {kind: 'full', s: 18.8, e: 21.0, vid: 'kho/CLIP021.mp4', title: 'Học nhóm\nthơm ngọt', hi: 'thơm ngọt'},
    {kind: 'end', s: 21.0, e: 23.02, title: 'Chẳng cần đợi\nđi date', hi: 'đi date', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
