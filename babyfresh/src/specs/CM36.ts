import {v} from '../make';

// CM36: dòng sheet 'Kho y tuong' (Babyfresh) - Trước tiết thể dục: 3 món nhỏ trong balo
export default v('CM36', 'voice/v36.mp3', 27.31,
    'Balo thể dục của bạn còn thiếu đúng 3 món nhỏ này đó! Món một, khăn bé xíu để lau mồ hôi. Món hai, một cái áo thay hoặc khăn giấy khô, đỡ dính dớp cả buổi học. Món ba, lăn nách Babyfresh làm từ lá trầu không, lành tính, serum mỏng nhẹ thấm nhanh, ngừa mùi tới 1 đến 3 ngày, đứng cạnh bạn cùng bàn cũng thoải mái. Nhớ lau khô nách, lăn vừa đủ, chờ khô tự nhiên rồi mới mặc áo nha. Ba món nhẹ tênh mà tự tin cả tiết thể dục. Sáng mai nhét đủ ba món vào balo, tìm Babyfresh ở TAP Store nhé!',
    [
      {kind: 'full', s: 0, e: 3.0, vid: 'bfv/c10.mp4', tag: 'trước tiết thể dục', title: 'Balo thể dục\ncòn thiếu 3 món?', hi: '3 món', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 3.0, e: 5.2, n: 1, title: 'Món 1\nKhăn bé xíu', hi: 'Khăn bé xíu', img: 'bf/ghe-da.jpg', note: 'lau mồ hôi sau giờ chạy', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'tip', s: 5.2, e: 9.1, n: 2, title: 'Món 2\nÁo thay, khăn giấy', hi: 'Áo thay', img: 'bf/lop-hoc.jpg', note: 'đỡ dính dớp cả buổi', fx: ['dry'], fxl: ['thoáng ráo']},
      {kind: 'full', s: 9.1, e: 14.2, n: 3, vid: 'bfv/c02.mp4', title: 'Món 3\nLăn Babyfresh', hi: 'Babyfresh', fx: ['leaf', 'serum'], fxl: ['lá trầu không', 'mỏng nhẹ'], brand: true},
      {kind: 'full', s: 14.2, e: 17.5, vid: 'bfv/c13.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Ngồi cạnh bạn\nvẫn thoải mái', hi: 'thoải mái', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'cover', s: 17.5, e: 21.0, tag: 'cách dùng', title: 'Lau khô, lăn vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', img: 'bf/nhat-ky-b.jpg', sub: 'chờ khô tự nhiên nha'},
      {kind: 'check', s: 21.0, e: 23.2, title: 'Balo thể dục nè', items: ['Khăn lau mồ hôi', 'Áo thay, khăn giấy', 'Lăn nách Babyfresh']},
      {kind: 'end', s: 23.2, e: 27.31, title: 'Sáng mai nhét\nđủ 3 món nha!', hi: '3 món', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
