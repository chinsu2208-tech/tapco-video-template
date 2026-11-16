import {v} from '../make';

// CM81: dòng sheet 'Kho y tuong' (Babyfresh) - Ngồi lớp học dài vẫn thoải mái: giơ tay phát biểu, áo khô thoáng
export default v('CM81', 'voice/v81.mp3', 30.864,
    'Đang định giơ tay phát biểu thì nghĩ tới cái nách, thế là thôi? Khỏi chần chừ nha, chuẩn bị từ sáng là xong. Bước một, làm sạch vùng nách. Bước hai, lau khô thật kỹ, bước này quyết định cảm giác thoáng ráo cả buổi đó. Bước ba, lăn Babyfresh vừa đủ thôi, serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính. Nhớ để khô tự nhiên rồi mới mặc áo nha. Một lần lăn, ngừa mùi tới 1 đến 3 ngày, ngồi lớp dài, ngồi cạnh bạn cùng bàn hay xách balo đến tiết thể dục vẫn tự tin. Combo bé thơm đi học đang tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, nên giơ tay phát biểu thật tự tin nhé!',
    [
      {kind: 'full', s: 0, e: 3.3, vid: 'bfv/c10.mp4', tag: 'định phát biểu mà…', title: 'Muốn giơ tay\nlại chần chừ?', hi: 'giơ tay', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 3.3, e: 5.5, tag: 'khỏi chần chừ nha', title: 'Chuẩn bị\ntừ sáng là xong', hi: 'từ sáng', img: 'bf/hanh-lang.jpg', sub: '3 bước nhỏ thôi'},
      {kind: 'tip', s: 5.5, e: 7.3, n: 1, title: 'Làm sạch\nvùng nách', hi: 'làm sạch', img: 'bf/mo-hop.jpg', note: 'nhẹ nhàng thôi', fx: ['leaf'], fxl: ['sạch sẽ']},
      {kind: 'tip', s: 7.3, e: 11.4, n: 2, title: 'Lau khô\nthật kỹ', hi: 'thật kỹ', img: 'bf/nhat-ky.jpg', note: 'bước quan trọng nè', fx: ['dry'], fxl: ['thoáng ráo']},
      {kind: 'tip', s: 11.4, e: 16.6, n: 3, title: 'Lăn Babyfresh\nvừa đủ thôi', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', note: 'serum lá trầu không', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'full', s: 16.6, e: 18.8, vid: 'bfv/c06.mp4', tag: 'thấm nhanh, không bết', title: 'Khô tự nhiên\nrồi mới mặc áo', hi: 'khô tự nhiên', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'full', s: 18.8, e: 24.8, vid: 'bfv/c14.mp4', tag: 'ngừa mùi tới 1–3 ngày', title: 'Ngồi lớp dài\nvẫn tự tin', hi: 'tự tin', fx: ['shield', 'leaf'], fxl: ['tự tin', 'lá trầu']},
      {kind: 'check', s: 24.8, e: 27.4, title: '3 bước từ sáng', items: ['Làm sạch vùng nách', 'Lau khô thật kỹ', 'Lăn vừa đủ, chờ khô']},
      {kind: 'end', s: 27.4, e: 30.864, title: 'Giơ tay phát biểu\nthật tự tin nha!', hi: 'tự tin', img: 'bf/lop-hoc.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
