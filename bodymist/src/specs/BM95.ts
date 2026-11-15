import {v} from '../make';

// BDM30 · CM-95 (sheet 'Kho y tuong'). Voice: public/voice/b95.mp3, mốc cảnh theo faster-whisper.
export default v('BM95', 'puffy', 'voice/b95.mp3', 25.3,
  "Túi đồ chụp kỷ yếu của bạn còn thiếu đúng một món bé xíu đó nha. Son, gương, kẹp tóc có hết rồi, mà quên mùi hương là hơi tiếc đó. Chụp cả lớp là đứng sát rạt nhau, nên chọn mùi phấn thơm dịu như Baby Puffy, ngọt nhẹ kiểu bạn cùng bàn dễ thương, ai đứng cạnh cũng dễ chịu. Chai thì nhỏ xíu, nhét vừa túi luôn, thay đồ xong, di chuyển qua điểm chụp mới là xịt lại một chút, thơm tho cả buổi, tự tin nhìn thẳng ống kính. Vậy là món bé xíu còn thiếu chính là chai xịt bỏ túi. Nghía giỏ hàng bên dưới nha",
  [
    {kind: 'hook', s: 0, e: 3.1, tag: 'chụp kỷ yếu', title: 'Túi kỷ yếu\nthiếu 1 món', hi: '1 món'},
    {kind: 'occasion', s: 3.1, e: 6.8, title: 'Đủ đồ rồi\ncòn thiếu gì?', hi: 'thiếu gì', items: ['Son', 'Kỷ yếu', 'Kẹp tóc', 'Mùi hương?']},
    {kind: 'scent', s: 6.8, e: 14.0, title: 'phấn thơm dịu', hi: 'thơm dịu', line: 'ngọt nhẹ, ai đứng cạnh cũng dễ chịu'},
    {kind: 'features', s: 14.0, e: 19.1, title: 'Nhỏ xíu\nnhét vừa túi', hi: 'vừa túi', items: ['Nhỏ gọn bỏ túi', 'Đổi cảnh xịt lại', 'Bản limited']},
    {kind: 'lineup', s: 19.1, e: 21.5, title: 'Tự tin nhìn\nthẳng ống kính', hi: 'ống kính'},
    {kind: 'end', s: 21.5, e: 25.3, title: 'Món bé xíu\ncòn thiếu', hi: 'bé xíu', sub: 'Nghía giỏ hàng bên dưới nha'},
  ]);
