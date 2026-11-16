import {v} from '../make';

// CM80: dòng sheet 'Kho y tuong' (Babyfresh) - Nhỏ gọn bỏ vừa balo: nhét chai lăn vào ngăn nhỏ cạnh hộp bút
export default v('CM80', 'voice/v80.mp3', 30.36,
    'Balo chật cứng mà vẫn còn chỗ cho một chai khử mùi, tin không? Tin đi, vì Babyfresh nhỏ xíu, nhét vừa ngăn nhỏ cạnh hộp bút luôn. Từ giờ chai lăn có địa chỉ nhà cố định, đi học, tiết thể dục hay đi chơi với bạn cùng bàn đều có sẵn. Nhớ dùng đúng ba bước nha: làm sạch và lau khô nách, thoa vừa đủ, rồi để khô tự nhiên trước khi mặc áo. Serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính, ngừa mùi tới 1 đến 3 ngày, tự tin cả ngày luôn. Vậy là balo chật mấy cũng còn chỗ cho Babyfresh. Mua combo bé thơm đi học, tặng kèm chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 3.5, vid: 'bfv/c15.mp4', tag: 'balo chật cứng', title: 'Vẫn còn chỗ\ncho chai lăn?', hi: 'còn chỗ', fx: ['leaf'], fxl: ['nhỏ gọn'], brand: true},
      {kind: 'full', s: 3.5, e: 7.6, vid: 'bfv/c02.mp4', tag: 'cạnh hộp bút luôn', title: 'Nhỏ xíu\nvừa ngăn nhỏ', hi: 'vừa ngăn nhỏ', fx: ['leaf'], fxl: ['gọn gàng']},
      {kind: 'cover', s: 7.6, e: 12.9, tag: 'từ giờ chai lăn có', title: 'Địa chỉ nhà\ncố định', hi: 'cố định', img: 'bf/balo.jpg', sub: 'đi học, thể dục, đi chơi'},
      {kind: 'tip', s: 12.9, e: 15.8, n: 1, title: 'Làm sạch\nlau khô nách', hi: 'lau khô', img: 'bf/mo-hop.jpg', note: 'đúng 3 bước nha', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'tip', s: 15.8, e: 18.7, n: 2, title: 'Thoa vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', note: 'để khô tự nhiên', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'full', s: 18.7, e: 21.6, vid: 'bfv/c12.mp4', tag: 'serum lá trầu không', title: 'Thấm nhanh\nkhông bết dính', hi: 'thấm nhanh', fx: ['leaf', 'dry'], fxl: ['lá trầu', 'thấm nhanh']},
      {kind: 'cover', s: 21.6, e: 24.3, tag: 'một lần lăn', title: 'Ngừa mùi\n1–3 ngày', hi: '1–3 ngày', img: 'bf/xe-buyt.jpg', sub: 'tự tin cả ngày luôn'},
      {kind: 'check', s: 24.3, e: 26.7, title: 'Balo gọn nè', items: ['Chai nhỏ, vừa ngăn bút', 'Làm sạch, lau khô', 'Lăn vừa đủ, chờ khô']},
      {kind: 'end', s: 26.7, e: 30.36, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/hanh-lang.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
