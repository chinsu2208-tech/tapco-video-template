import {v} from '../make';

// CM55: dòng sheet 'Kho y tuong' (Babyfresh) - Thoáng ráo cả ngày, 3 bước 2 phút buổi sáng
export default v('CM55', 'voice/v55.mp3', 27.864,
    'Tiết cuối rồi mà bạn cùng bàn vẫn ngồi sát bạn thoải mái, bí quyết nằm ở 2 phút buổi sáng. Bước một, làm sạch vùng nách. Bước hai, lau thật khô, đừng để ẩm. Bước ba, lăn Babyfresh vừa đủ thôi, rồi để khô tự nhiên mới mặc áo. Serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính, ngừa mùi 1 đến 3 ngày, đi học, tiết thể dục hay đeo balo cả buổi vẫn thoáng ráo, tự tin hết cỡ. Thấy chưa, thoải mái cả ngày bắt đầu từ 2 phút buổi sáng thôi. Chốt combo bé thơm đi học, tặng kèm chai xịt thơm quần áo, ưu đãi có hạn nha!',
    [
      {kind: 'full', s: 0, e: 3.0, vid: 'bfv/c06.mp4', tag: 'tiết cuối rồi', title: 'Tiết cuối vẫn\nthoải mái?', hi: 'thoải mái', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'full', s: 3.0, e: 5.0, vid: 'bfv/c16.mp4', tag: 'bí quyết nằm ở', title: 'Chỉ 2 phút\nbuổi sáng', hi: '2 phút', fx: ['shield'], fxl: ['cả ngày']},
      {kind: 'tip', s: 5.0, e: 6.7, n: 1, title: 'Làm sạch\nvùng nách', hi: 'Làm sạch', img: 'bf/buoi-sang.jpg', note: 'bước đầu tiên', fx: ['dry'], fxl: ['sạch thoáng']},
      {kind: 'tip', s: 6.7, e: 9.0, n: 2, title: 'Lau thật khô\nđừng để ẩm', hi: 'thật khô', img: 'bf/ghe-da.jpg', note: 'trước khi lăn', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 9.0, e: 12.7, vid: 'bfv/c01.mp4', tag: 'bước 3', title: 'Lăn vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'cover', s: 12.7, e: 16.9, tag: 'serum lá trầu không', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'thấm nhanh', img: 'bf/mo-hop.jpg', sub: 'không bết dính · ngừa mùi 1–3 ngày'},
      {kind: 'full', s: 16.9, e: 20.8, vid: 'bfv/c12.mp4', tag: 'thể dục, đeo balo', title: 'Cả buổi vẫn\nthoáng ráo', hi: 'thoáng ráo', fx: ['dry'], fxl: ['thoáng ráo']},
      {kind: 'check', s: 20.8, e: 24.0, title: 'Thoải mái cả ngày', items: ['Làm sạch, lau khô', 'Lăn vừa đủ, chờ khô', 'Serum lá trầu không']},
      {kind: 'end', s: 24.0, e: 27.864, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/xe-buyt.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
