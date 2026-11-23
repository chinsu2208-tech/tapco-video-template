import {v} from '../make';

// CM90: dòng sheet 'Kho y tuong' (Babyfresh) - Đi làm văn phòng cả ngày: laptop, cà phê, cánh tay thoải mái
export default v('CM90', 'voice/v90.mp3', 26.784,
    "Cả ngày ngồi máy lạnh gõ laptop mà vẫn thấy lấn cấn vì vùng nách? Bí quyết nằm ở vài bước nhỏ buổi sáng thôi. Một, làm sạch vùng dưới cánh tay. Hai, lau khô thật kỹ. Ba, lăn Babyfresh lượng vừa đủ, serum lá trầu không mỏng nhẹ, thấm nhanh, thoáng ráo, không bết dính, ngừa mùi tới 1 đến 3 ngày. Bốn, để khô tự nhiên rồi mới mặc áo, bước này đừng bỏ nha. Thế là từ cuộc họp đến ly cà phê chiều, cánh tay nhẹ tênh, tự tin hơn, thoải mái hơn, năng lượng hơn. Hết lấn cấn rồi đó! Combo Babyfresh đang có ưu đãi có hạn, thử ngay nhé.",
    [
      {kind: 'full', s: 0, e: 4.7, vid: 'bfv/c06.mp4', tag: 'vài bước buổi sáng', title: 'Ngồi máy lạnh\ncả ngày dài', hi: 'cả ngày', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 4.7, e: 6.6, n: 1, title: 'Làm sạch vùng\ndưới cánh tay', hi: 'Làm sạch', img: 'bf/buoi-sang.jpg', note: 'mỗi sáng', fx: ['leaf'], fxl: ['sạch sẽ']},
      {kind: 'tip', s: 6.6, e: 8.6, n: 2, title: 'Lau khô\nthật kỹ', hi: 'thật kỹ', img: 'bf/nhat-ky.jpg', note: 'đừng vội nha', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'full', s: 8.6, e: 14.8, vid: 'bfv/c01.mp4', tag: 'bước 3', title: 'Lăn Babyfresh\nvừa đủ', hi: 'vừa đủ', fx: ['serum', 'dry'], fxl: ['mỏng nhẹ', 'thấm nhanh']},
      {kind: 'tip', s: 14.8, e: 18.3, n: 4, title: 'Khô tự nhiên\nrồi mặc áo', hi: 'Khô tự nhiên', img: 'bf/nhat-ky-b.jpg', note: 'bước này đừng bỏ', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 18.3, e: 21.0, vid: 'bfv/c18.mp4', tag: 'từ cuộc họp tới chiều', title: 'Cánh tay\nnhẹ tênh', hi: 'nhẹ tênh', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 21.0, e: 23.8, title: '4 bước buổi sáng', items: ['Làm sạch, lau khô kỹ', 'Lăn lượng vừa đủ', 'Khô rồi mới mặc áo']},
      {kind: 'end', s: 23.8, e: 26.784, title: 'Thoải mái\ncả ngày nha!', hi: 'Thoải mái', img: 'bf/mo-hop.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
