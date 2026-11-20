import {v} from '../make';

// CM85: dòng sheet 'Kho y tuong' (Babyfresh) - Họp nhóm, thuyết trình tự tin: giơ tay chỉ slide thoải mái
export default v('CM85', 'voice/v85.mp3', 27.864,
    "Checklist trước giờ thuyết trình của bạn có soát slide, uống nước, mà quên mất một chỗ ngay dưới cánh tay không? Thêm bước cuối chỉ mất ba phút thôi nè. Làm sạch vùng nách, lau thật khô. Rồi lăn serum Babyfresh, thoa vừa đủ, đừng dày quá. Chờ khô tự nhiên rồi mới mặc áo. Serum chiết xuất lá trầu không lành tính, mỏng nhẹ thấm nhanh, ngừa mùi tới 1 đến 3 ngày, khô thoáng không bết dính. Thế là bạn tự tin giơ tay chỉ slide thoải mái, đứng cạnh bảng cũng thật tự nhiên. Đừng để nách làm khó bạn nữa nha! Thêm Babyfresh vào checklist ngay, combo bé thơm tặng kèm chai xịt thơm quần áo, ưu đãi có hạn!",
    [
      {kind: 'full', s: 0, e: 4.5, vid: 'bfv/c17.mp4', tag: 'trước giờ thuyết trình…', title: 'Soát slide rồi,\ncòn quên gì?', hi: 'quên gì', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 4.5, e: 6.3, tag: 'checklist', title: 'Thêm bước cuối\nchỉ 3 phút', hi: '3 phút', img: 'bf/hanh-lang.jpg', sub: 'nhanh gọn nè'},
      {kind: 'tip', s: 6.3, e: 8.3, n: 1, title: 'Làm sạch\nlau thật khô', hi: 'thật khô', img: 'bf/mo-hop.jpg', note: 'bước nền nha', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'full', s: 8.3, e: 11.2, vid: 'bfv/c01.mp4', tag: 'bước 2', title: 'Lăn vừa đủ\nđừng dày quá', hi: 'vừa đủ', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'tip', s: 11.2, e: 13.0, n: 3, title: 'Chờ khô rồi\nmới mặc áo', hi: 'Chờ khô', img: 'bf/buoi-sang.jpg', note: 'khô tự nhiên', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'cover', s: 13.0, e: 18.5, tag: 'lá trầu không', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'thấm nhanh', img: 'bf/nhat-ky.jpg', sub: 'ngừa mùi tới 1–3 ngày'},
      {kind: 'full', s: 18.5, e: 22.3, vid: 'bfv/c10.mp4', tag: 'đứng cạnh bảng', title: 'Giơ tay chỉ slide\nthật tự nhiên', hi: 'tự nhiên', fx: ['shield', 'dry'], fxl: ['tự tin', 'khô thoáng']},
      {kind: 'check', s: 22.3, e: 24.6, title: 'Checklist 3 phút', items: ['Làm sạch, lau thật khô', 'Lăn vừa đủ', 'Chờ khô rồi mặc áo']},
      {kind: 'end', s: 24.6, e: 27.864, title: 'Tự tin đứng\ntrước cả lớp nha!', hi: 'Tự tin', img: 'bf/lop-hoc.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
