import {v} from '../make';

// CM87: dòng sheet 'Kho y tuong' (Babyfresh) - Ngoại khoá năng lượng hơn: nhảy flashmob, tay giơ cao tự tin
export default v('CM87', 'voice/v87.mp3', 31.128,
    "Checklist flashmob của bạn còn thiếu một món nè! Đồng phục có rồi, bài nhảy thuộc rồi, nhưng khởi động nách chưa? Chỉ ba bước thôi. Một, làm sạch vùng dưới cánh tay. Hai, lau thật khô. Ba, lăn Babyfresh vừa đủ rồi để khô tự nhiên trước khi mặc áo. Serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính, ngừa mùi tới một đến ba ngày, lại còn giữ da khô thoáng và dưỡng ẩm. Thế là bạn giơ tay thật cao, nhảy hết mình, cả sân trường chỉ nhìn năng lượng của bạn thôi. Thêm bước nách vào checklist đi, tự tin hơn mỗi ngày. Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, chốt liền nha!",
    [
      {kind: 'full', s: 0, e: 5.8, vid: 'bfv/c13.mp4', tag: 'checklist flashmob…', title: 'Khởi động nách\nchưa nè?', hi: 'nách', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 5.8, e: 8.6, n: 1, title: 'Làm sạch vùng\ndưới cánh tay', hi: 'Làm sạch', img: 'bf/hanh-lang.jpg', note: 'chỉ 3 bước thôi', fx: ['leaf'], fxl: ['sạch sẽ']},
      {kind: 'tip', s: 8.6, e: 10.4, n: 2, title: 'Lau thật khô\ntrước khi lăn', hi: 'thật khô', img: 'bf/nhat-ky.jpg', note: 'đừng bỏ qua nha', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'full', s: 10.4, e: 13.7, vid: 'bfv/c15.mp4', tag: 'bước 3', title: 'Lăn vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', fx: ['dry'], fxl: ['khô tự nhiên']},
      {kind: 'cover', s: 13.7, e: 18.0, tag: 'lá trầu không', title: 'Mỏng nhẹ\nkhông bết dính', hi: 'không bết dính', img: 'bf/mo-hop.jpg', sub: 'ngừa mùi tới 1–3 ngày'},
      {kind: 'full', s: 18.0, e: 24.3, img: 'bf/ghe-da.jpg', tag: 'cả sân trường', title: 'Giơ tay thật cao\nnhảy hết mình', hi: 'hết mình', fx: ['shield', 'dry'], fxl: ['tự tin', 'khô thoáng']},
      {kind: 'check', s: 24.3, e: 26.4, title: 'Checklist flashmob', items: ['Làm sạch dưới cánh tay', 'Lau thật khô', 'Lăn vừa đủ, chờ khô']},
      {kind: 'end', s: 26.4, e: 31.128, title: 'Năng lượng hơn\nmỗi ngày nha!', hi: 'Năng lượng', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
