import {v} from '../make';

// CM57: dòng sheet 'Kho y tuong' (Babyfresh) - Đọc nhãn theo cặp: giảm mùi + Glycerin, Allantoin dịu da
export default v('CM57', 'voice/v57.mp3', 33.576,
    'Khử mùi xịn mà nách khô căng thì có thoải mái không? Mẹo cho bạn đi học nè: đọc nhãn theo cặp. Cặp thứ nhất là thành phần giảm mùi, giảm mồ hôi, như lá trầu không và Aluminum Chlorohydrate. Cặp thứ hai là thành phần dưỡng ẩm, làm dịu da, như Glycerin và Allantoin. Babyfresh có đủ cả hai, nên ngừa mùi 1 đến 3 ngày mà da vẫn mềm mượt, thoáng ráo, không bết dính. Tiết thể dục xong, balo nặng trĩu vẫn tự tin đứng cạnh bạn cùng bàn. Nhớ lau khô nách, thoa vừa đủ, để khô tự nhiên nhé. Vậy là khử mùi mà da vẫn thoải mái rồi! Chốt combo bé thơm đi học tặng chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 3.3, vid: 'bfv/c17.mp4', tag: 'khử mùi xong thì sao', title: 'Nách khô căng\ncó thoải mái?', hi: 'khô căng', fx: ['shield'], fxl: ['chăm da'], brand: true},
      {kind: 'cover', s: 3.3, e: 5.5, tag: 'mẹo cho bạn đi học', title: 'Đọc nhãn\ntheo cặp', hi: 'theo cặp', img: 'bf/nhat-ky-b.jpg', sub: 'nhìn 2 nhóm thành phần'},
      {kind: 'tip', s: 5.5, e: 10.8, n: 1, title: 'Giảm mùi\ngiảm mồ hôi', hi: 'giảm mồ hôi', img: 'bf/mo-hop.jpg', note: 'lá trầu + Aluminum Chlorohydrate', fx: ['leaf'], fxl: ['lá trầu']},
      {kind: 'tip', s: 10.8, e: 15.9, n: 2, title: 'Dưỡng ẩm\nlàm dịu da', hi: 'làm dịu da', img: 'bf/buoi-sang.jpg', note: 'Glycerin + Allantoin', fx: ['shield'], fxl: ['dịu da']},
      {kind: 'full', s: 15.9, e: 21.4, vid: 'bfv/c15.mp4', tag: 'Babyfresh có đủ cả hai', title: 'Ngừa mùi 1–3 ngày\nda vẫn mềm mượt', hi: 'mềm mượt', fx: ['serum'], fxl: ['không bết']},
      {kind: 'full', s: 21.4, e: 25.0, vid: 'bfv/c03.mp4', tag: 'sau tiết thể dục', title: 'Balo nặng trĩu\nvẫn tự tin', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'full', s: 25.0, e: 27.5, vid: 'bfv/c10.mp4', tag: 'nhớ nhé', title: 'Lau khô, vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'check', s: 27.5, e: 30.2, title: 'Khử mùi mà dịu da', items: ['Lá trầu không', 'Glycerin + Allantoin', 'Mỏng nhẹ, không bết']},
      {kind: 'end', s: 30.2, e: 33.576, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/hanh-lang.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
