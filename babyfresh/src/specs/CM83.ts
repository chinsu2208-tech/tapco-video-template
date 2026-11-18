import {v} from '../make';

// CM83: dòng sheet 'Kho y tuong' (Babyfresh) - Đá bóng sân trường thoải mái: lăn serum trước khi xỏ giày ra sân
export default v('CM83', 'voice/v83.mp3', 32.424,
    'Đá bóng sân trường mà còn lo bạn cùng bàn né ra xa? Khoan xỏ giày đã! Chỉ ba thao tác thôi. Một, lau khô nách cho sạch sẽ. Hai, lăn serum Babyfresh lá trầu không, thoa vừa đủ thôi, serum mỏng nhẹ thấm nhanh, thoáng ráo, không bết dính. Ba, đợi khô tự nhiên rồi mới mặc áo, xỏ giày. Vậy là nách thoải mái, ngừa mùi một đến ba ngày, hỗ trợ kiểm soát mồ hôi cả trận, thoải mái ôm vai best friend ăn mừng bàn thắng. Nhớ nhé, lau khô, lăn, đợi khô rồi mới xỏ giày. Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, chốt ngay!',
    [
      {kind: 'full', s: 0, e: 3.0, vid: 'bfv/c13.mp4', tag: 'giờ ra chơi sân trường', title: 'Ra sân đá bóng\ncó lo không?', hi: 'đá bóng', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 3.0, e: 6.2, tag: 'khoan xỏ giày đã!', title: 'Chỉ 3 thao tác\ntrước khi ra sân', hi: '3 thao tác', img: 'bf/ghe-da.jpg', sub: 'nhanh gọn lẹ'},
      {kind: 'tip', s: 6.2, e: 8.8, n: 1, title: 'Lau khô nách\ncho sạch sẽ', hi: 'lau khô', img: 'bf/mo-hop.jpg', note: 'sạch sẽ trước nha', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'tip', s: 8.8, e: 12.0, n: 2, title: 'Lăn Babyfresh\nvừa đủ thôi', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', note: 'serum lá trầu không', fx: ['leaf'], fxl: ['lá trầu']},
      {kind: 'full', s: 12.0, e: 14.9, vid: 'bfv/c15.mp4', tag: 'thấm nhanh, thoáng ráo', title: 'Mỏng nhẹ\nkhông bết dính', hi: 'không bết dính', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'tip', s: 14.9, e: 18.1, n: 3, title: 'Đợi khô tự nhiên\nrồi mới mặc áo', hi: 'khô tự nhiên', img: 'bf/hanh-lang.jpg', note: 'rồi mới xỏ giày', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 18.1, e: 24.0, vid: 'bfv/c10.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Thoải mái\ncả trận đấu', hi: 'thoải mái', fx: ['shield', 'leaf'], fxl: ['tự tin', 'lá trầu']},
      {kind: 'check', s: 24.0, e: 27.8, title: '3 thao tác nhớ nhé', items: ['Lau khô nách', 'Lăn vừa đủ', 'Đợi khô rồi xỏ giày']},
      {kind: 'end', s: 27.8, e: 32.424, title: 'Ăn mừng bàn thắng\nthật tự tin nha!', hi: 'tự tin', img: 'bf/lop-hoc.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
