import {v} from '../make';

// CM82: dòng sheet 'Kho y tuong' (Babyfresh) - Đi xe buýt giờ cao điểm tự tin: nắm tay vịn, vùng nách khô thoáng
export default v('CM82', 'voice/v82.mp3', 26.28,
    'Giơ tay nắm tay vịn giữa xe buýt đông, bạn có dám giơ thoải mái không? Bí quyết nằm ở ba bước buổi sáng thôi nhé. Một, làm sạch vùng nách. Hai, lau thật khô, đừng để ẩm. Ba, lăn Babyfresh serum lá trầu không vừa đủ, rồi chờ khô hẳn mới mặc áo. Serum mỏng nhẹ, thấm nhanh, không bết dính, hỗ trợ giảm mùi và kiểm soát mồ hôi, ngừa mùi tới 1 đến 3 ngày. Đi học hay đi làm, đứng sát bạn cùng bàn cũng tự tin. Vậy là giơ tay thoải mái cả chuyến xe. Chốt combo bé thơm đi học, tặng kèm chai xịt thơm quần áo, ưu đãi có hạn nha!',
    [
      {kind: 'full', s: 0, e: 3.4, vid: 'bfv/c12.mp4', tag: 'xe buýt giờ cao điểm', title: 'Giơ tay nắm vịn\ncó ngại không?', hi: 'giơ tay', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 3.4, e: 5.3, tag: 'bí quyết đây', title: 'Chỉ 3 bước\nbuổi sáng', hi: '3 bước', img: 'bf/xe-buyt.jpg', sub: '3 bước nhỏ thôi'},
      {kind: 'tip', s: 5.3, e: 7.0, n: 1, title: 'Làm sạch\nvùng nách', hi: 'làm sạch', img: 'bf/mo-hop.jpg', note: 'nhẹ nhàng thôi', fx: ['leaf'], fxl: ['sạch sẽ']},
      {kind: 'tip', s: 7.0, e: 8.9, n: 2, title: 'Lau thật khô\nđừng để ẩm', hi: 'thật khô', img: 'bf/nhat-ky.jpg', note: 'bước quan trọng nè', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 8.9, e: 12.5, vid: 'bfv/c01.mp4', tag: 'bước 3 · serum lá trầu không', title: 'Lăn vừa đủ\nchờ khô hẳn', hi: 'vừa đủ', fx: ['leaf'], fxl: ['lá trầu']},
      {kind: 'cover', s: 12.5, e: 18.2, tag: 'ngừa mùi 1–3 ngày', title: 'Mỏng nhẹ\nkhông bết dính', hi: 'không bết dính', img: 'bf/hanh-lang.jpg', sub: 'thấm nhanh, thoáng ráo'},
      {kind: 'full', s: 18.2, e: 21.9, vid: 'bfv/c03.mp4', tag: 'đứng sát bạn cùng bàn', title: 'Thoải mái\ncả chuyến xe', hi: 'thoải mái', fx: ['shield', 'dry'], fxl: ['tự tin', 'khô thoáng']},
      {kind: 'check', s: 21.9, e: 24.2, title: '3 bước buổi sáng', items: ['Làm sạch vùng nách', 'Lau thật khô', 'Lăn vừa đủ, chờ khô']},
      {kind: 'end', s: 24.2, e: 26.28, title: 'Giơ tay thật\nthoải mái nha!', hi: 'thoải mái', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
