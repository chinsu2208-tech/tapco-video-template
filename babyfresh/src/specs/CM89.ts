import {v} from '../make';

// CM89: dòng sheet 'Kho y tuong' (Babyfresh) - Không bết dính khi mặc áo trắng: lăn xong khoác áo, vải thoáng
export default v('CM89', 'voice/v89.mp3', 31.992,
    "Lăn khử mùi xong mà mặc áo trắng vẫn thoáng ráo, nghe khó tin đúng không? Bí quyết nằm ở 3 bước cực dễ cho ngày đi học. Một, làm sạch và lau khô vùng nách. Hai, thoa lượng vừa đủ thôi, đừng quét quá tay nha. Ba, để khô tự nhiên một chút rồi hãy mặc áo. Babyfresh là serum lá trầu không mỏng nhẹ, thấm nhanh, nên áo trắng thoáng ráo, không bết dính, kể cả tiết thể dục hay đeo balo cả ngày. Lại còn ngừa mùi 1 đến 3 ngày, ngồi cạnh bạn cùng bàn hay best friend cũng tự tin hết cỡ. Muốn áo trắng thoáng ráo, nhớ làm đúng 3 bước nhé. Combo bé thơm đi học tặng kèm chai xịt thơm quần áo đang có ưu đãi có hạn, chốt liền nha!",
    [
      {kind: 'full', s: 0, e: 4.1, vid: 'bfv/c10.mp4', tag: 'nghe khó tin không?', title: 'Áo trắng vẫn\nthoáng ráo', hi: 'thoáng ráo', fx: ['dry'], fxl: ['thoáng ráo'], brand: true},
      {kind: 'cover', s: 4.1, e: 6.4, tag: 'ngày đi học', title: 'Bí quyết là\n3 bước cực dễ', hi: '3 bước', img: 'bf/hanh-lang.jpg', sub: 'lưu lại làm theo nha'},
      {kind: 'tip', s: 6.4, e: 8.5, n: 1, title: 'Làm sạch và\nlau khô nách', hi: 'lau khô', img: 'bf/nhat-ky-b.jpg', note: 'bước đầu tiên', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'tip', s: 8.5, e: 11.4, n: 2, title: 'Thoa lượng\nvừa đủ thôi', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', note: 'đừng quét quá tay', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'tip', s: 11.4, e: 14.2, n: 3, title: 'Khô tự nhiên\nrồi mặc áo', hi: 'Khô tự nhiên', img: 'bf/lop-hoc.jpg', note: 'chờ một chút thôi', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 14.2, e: 19.2, vid: 'bfv/c14.mp4', tag: 'serum lá trầu không', title: 'Mỏng nhẹ\nkhông bết dính', hi: 'không bết dính', fx: ['serum', 'leaf'], fxl: ['mỏng nhẹ', 'lá trầu không']},
      {kind: 'full', s: 19.2, e: 25.7, vid: 'bfv/c03.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Thể dục, đeo balo\nvẫn tự tin', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 25.7, e: 28.4, title: 'Nhớ đúng 3 bước', items: ['Làm sạch, lau khô', 'Thoa vừa đủ', 'Khô rồi mới mặc áo']},
      {kind: 'end', s: 28.4, e: 31.992, title: 'Áo trắng\nthoáng ráo nha!', hi: 'thoáng ráo', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
