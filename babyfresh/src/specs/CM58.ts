import {v} from '../make';

// CM58: dòng sheet 'Kho y tuong' (Babyfresh) - Ngừa mùi 1-3 ngày: mẹo lịch 3 ô, thoa một lần đầu ngày
export default v('CM58', 'voice/v58.mp3', 32.256,
    'Đang ngồi cạnh bạn cùng bàn mà cứ lo mùi nách, bạn có từng thế chưa? Thử mẹo lịch ba ô này nha. Đầu ngày, làm sạch và lau khô vùng dưới cánh tay. Lăn Babyfresh vừa đủ thôi, rồi để khô tự nhiên trước khi mặc áo. Serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính, lành tính cho da. Chỉ một lần thoa đúng cách, ngừa mùi một đến ba ngày, tùy cơ địa và hoạt động của bạn. Thế là đi học, tiết thể dục, đeo balo chạy khắp sân cũng tự tin hơn hẳn. Hết cảnh lo bạn cùng bàn ngửi thấy mùi nữa nhé. Lưu mẹo này cho best friend của bạn. Combo bé thơm đi học đang tặng kèm một chai xịt thơm quần áo, ưu đãi có hạn thôi nha.',
    [
      {kind: 'full', s: 0, e: 4.1, vid: 'bfv/c06.mp4', tag: 'ngồi cạnh bạn cùng bàn', title: 'Ngồi cạnh bạn\ncứ lo mùi nách?', hi: 'lo mùi nách', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 4.1, e: 5.9, tag: 'thử ngay nha', title: 'Mẹo lịch\nba ô', hi: 'ba ô', img: 'bf/nhat-ky.jpg', sub: 'thoa một lần đầu ngày'},
      {kind: 'tip', s: 5.9, e: 8.4, n: 1, title: 'Làm sạch\nlau khô', hi: 'lau khô', img: 'bf/buoi-sang.jpg', note: 'vùng dưới cánh tay', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 8.4, e: 11.8, vid: 'bfv/c01.mp4', tag: 'bước 2', title: 'Lăn vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 11.8, e: 15.7, vid: 'bfv/c16.mp4', tag: 'serum thấm nhanh', title: 'Lá trầu không\nmỏng nhẹ', hi: 'lá trầu không', fx: ['leaf', 'serum'], fxl: ['lá trầu', 'không bết']},
      {kind: 'cover', s: 15.7, e: 19.9, tag: 'thoa đúng cách', title: 'Ngừa mùi\n1–3 ngày', hi: '1–3 ngày', img: 'bf/mo-hop.jpg', sub: 'tùy cơ địa, hoạt động'},
      {kind: 'full', s: 19.9, e: 23.8, vid: 'bfv/c13.mp4', tag: 'đeo balo chạy khắp sân', title: 'Tiết thể dục\nvẫn tự tin', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 23.8, e: 27.8, title: 'Mẹo lịch ba ô', items: ['Lau khô vùng nách', 'Lăn vừa đủ', 'Chờ khô rồi mặc áo']},
      {kind: 'end', s: 27.8, e: 32.256, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/hanh-lang.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
