import {v} from '../make';

// CM34: dòng sheet 'Kho y tuong' (Babyfresh)
export default v('CM34', 'voice/v34.mp3', 30.24,
    'Sáng nào cũng trễ giờ mà vẫn muốn tự tin đi học? Bí quyết nằm ở khoảng chờ mà bạn đang bỏ phí. Nghe nè, chỉ ba bước thôi. Một, lau khô nách. Hai, lăn Babyfresh vừa đủ, serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính. Ba, để khô tự nhiên, và đây mới là phần hay: trong lúc chờ, bạn buộc tóc, xếp sách, nhét đồ thể dục vào balo là xong hết. Thấy chưa, chờ khô đâu có mất thời gian. Xong xuôi mới mặc áo, bước vào lớp thoải mái, ngồi cạnh bạn cùng bàn cũng tự tin hơn mỗi ngày. Khoảng chờ nhỏ xíu mà đáng giá cực. Thử ngay sáng mai cùng Babyfresh nha!',
    [
      {kind: 'full', s: 0, e: 2.8, vid: 'bfv/c13.mp4', tag: 'đi học sáng sớm', title: 'Sáng trễ giờ\nvẫn tự tin?', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin cả ngày'], brand: true},
      {kind: 'cover', s: 2.8, e: 6.6, tag: '3 bước thôi', title: 'Bí quyết nằm ở\nkhoảng chờ', hi: 'khoảng chờ', img: 'bf/buoi-sang.jpg', sub: 'lăn gọn trước khi ra khỏi nhà'},
      {kind: 'tip', s: 6.6, e: 8.4, n: 1, title: 'Lau khô\nnách', hi: 'khô', img: 'bf/ghe-da.jpg', note: 'bước nhỏ mà quan trọng', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 8.4, e: 12.4, n: 2, vid: 'bfv/c01.mp4', title: 'Bước 2\nLăn vừa đủ', hi: 'vừa đủ', fx: ['serum', 'leaf'], fxl: ['mỏng nhẹ', 'lá trầu không']},
      {kind: 'tip', s: 12.4, e: 15.6, n: 3, title: 'Chờ khô\ntự nhiên', hi: 'tự nhiên', img: 'bf/nhat-ky.jpg', note: 'không bết dính', fx: ['dry'], fxl: ['thấm nhanh']},
      {kind: 'full', s: 15.6, e: 21.0, vid: 'bfv/c02.mp4', title: 'Trong lúc chờ:\nsoạn balo luôn', hi: 'soạn balo', fx: ['leaf'], fxl: ['gọn gàng']},
      {kind: 'check', s: 21.0, e: 26.0, title: 'Nhớ nhanh nè', items: ['Lau khô nách', 'Lăn vừa đủ', 'Khô rồi mới mặc áo']},
      {kind: 'end', s: 26.0, e: 30.24, title: 'Thử ngay\nsáng mai nha!', hi: 'sáng mai', img: 'bf/lop-hoc.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
