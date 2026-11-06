import {v} from '../make';

// CM37: dòng sheet 'Kho y tuong' (Babyfresh) - Lần đầu dùng: 3 thông tin trên nhãn
export default v('CM37', 'voice/v37.mp3', 33.576,
    'Lần đầu lăn nách mà chưa đọc nhãn thì khoan đã, 10 giây thôi, bạn sẽ đỡ lo mùi hơn nhiều. Một, xem nó làm gì: Babyfresh giúp giảm mùi, hỗ trợ kiểm soát mồ hôi, ngừa mùi từ một đến ba ngày, đi học hay tiết thể dục đều yên tâm. Hai, xem bên trong có gì: chiết xuất lá trầu không lành tính, Aluminum Chlorohydrate, thêm Glycerin và Allantoin dịu da, dưỡng ẩm. Ba, xem dùng thế nào: lau khô nách, thoa vừa đủ, để khô tự nhiên rồi hãy mặc áo. Serum mỏng nhẹ, thấm nhanh, không bết dính, ngồi cạnh bạn cùng bàn vẫn tự tin. Đọc đủ ba thứ này là lăn đúng ngay lần đầu. Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 4.8, vid: 'bfv/c16.mp4', tag: 'lần đầu dùng', title: 'Lần đầu lăn nách?\nĐọc nhãn đã!', hi: 'Đọc nhãn', fx: ['shield'], fxl: ['yên tâm'], brand: true},
      {kind: 'tip', s: 4.8, e: 10.6, n: 1, title: 'Xem nó\nlàm gì', hi: 'làm gì', img: 'bf/mo-hop.jpg', note: 'giảm mùi, ngừa mùi 1–3 ngày', fx: ['shield'], fxl: ['giảm mùi']},
      {kind: 'full', s: 10.6, e: 12.4, vid: 'bfv/c06.mp4', title: 'Đi học, thể dục\nđều yên tâm', hi: 'yên tâm', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'tip', s: 12.4, e: 19.6, n: 2, title: 'Bên trong\ncó gì', hi: 'Bên trong', img: 'bf/nhat-ky.jpg', note: 'Glycerin, Allantoin dịu da', fx: ['leaf'], fxl: ['lá trầu không']},
      {kind: 'tip', s: 19.6, e: 23.8, n: 3, title: 'Xem dùng\nthế nào', hi: 'thế nào', img: 'bf/buoi-sang.jpg', note: 'lau khô, vừa đủ, chờ khô', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 23.8, e: 28.1, vid: 'bfv/c14.mp4', title: 'Mỏng nhẹ\nkhông bết dính', hi: 'Mỏng nhẹ', fx: ['serum', 'dry'], fxl: ['mỏng nhẹ', 'thấm nhanh'], brand: true},
      {kind: 'check', s: 28.1, e: 30.4, title: 'Đọc nhãn 3 điều', items: ['Nó làm gì', 'Bên trong có gì', 'Dùng thế nào']},
      {kind: 'end', s: 30.4, e: 33.576, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/xe-buyt.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
