import {v} from '../make';

// CM56: dòng sheet 'Kho y tuong' (Babyfresh) - Đọc nhãn: Aluminum Chlorohydrate hỗ trợ giảm tiết mồ hôi
export default v('CM56', 'voice/v56.mp3', 30.912,
    'Lăn nách mà chỉ biết át mùi thì chưa đủ đâu, bạn cùng bàn ơi, nhìn nhãn là biết liền! Lật chai Babyfresh lên, chỉ cần tìm đúng một dòng: Aluminum Chlorohydrate. Đây là thành phần hỗ trợ giảm tiết mồ hôi, nên đi học, tiết thể dục hay đeo balo chạy cả ngày, nách vẫn khô thoáng, thoải mái. Chưa hết, chiết xuất lá trầu không lành tính còn hỗ trợ làm sạch và ngừa mùi tới 1 đến 3 ngày. Dạng serum mỏng nhẹ, thấm nhanh, không bết dính. Nhớ lau khô nách, thoa vừa đủ, để khô tự nhiên rồi mặc áo nhé. Tự tin như best friend của chính mình nha! Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, chốt liền thôi!',
    [
      {kind: 'full', s: 0, e: 2.5, vid: 'bfv/c14.mp4', tag: 'không chỉ át mùi', title: 'Lăn nách\nchỉ để át mùi?', hi: 'át mùi', fx: ['shield'], fxl: ['xem nhãn'], brand: true},
      {kind: 'cover', s: 2.5, e: 7.0, tag: 'lật chai Babyfresh lên', title: 'Nhìn nhãn\ntìm một dòng', hi: 'một dòng', img: 'bf/mo-hop.jpg', sub: 'bạn cùng bàn ơi, xem nè'},
      {kind: 'full', s: 7.0, e: 10.3, vid: 'bfv/c18.mp4', tag: 'thành phần trên nhãn', title: 'Aluminum\nChlorohydrate', hi: 'Chlorohydrate', fx: ['dry'], fxl: ['giảm mồ hôi']},
      {kind: 'full', s: 10.3, e: 14.6, vid: 'bfv/c02.mp4', tag: 'học, thể dục, đeo balo', title: 'Nách vẫn\nkhô thoáng', hi: 'khô thoáng', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'cover', s: 14.6, e: 19.2, tag: 'chiết xuất lành tính', title: 'Lá trầu không\nngừa mùi 1–3 ngày', hi: 'Lá trầu không', img: 'bf/nhat-ky.jpg', sub: 'hỗ trợ làm sạch, ngừa mùi'},
      {kind: 'full', s: 19.2, e: 21.6, vid: 'bfv/c13.mp4', tag: 'dạng serum', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'Mỏng nhẹ', fx: ['serum'], fxl: ['không bết']},
      {kind: 'cover', s: 21.6, e: 24.4, tag: 'nhớ nhé', title: 'Lau khô, vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', sub: 'lau khô · thoa vừa đủ · chờ khô'},
      {kind: 'check', s: 24.4, e: 26.8, title: 'Tự tin cả ngày', items: ['Giảm tiết mồ hôi', 'Lá trầu không', 'Serum mỏng nhẹ']},
      {kind: 'end', s: 26.8, e: 30.912, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
