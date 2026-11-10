import {v} from '../make';

// CM46: dòng sheet 'Kho y tuong' (Babyfresh) - Chiết xuất lá trầu không lành tính
export default v('CM46', 'voice/v46.mp3', 29.328,
    'Mùi nách giữa tiết thể dục, bạn xịt thơm rồi mà vẫn lo? Bí quyết là đừng chỉ che mùi, hãy chọn loại giúp làm sạch và giảm mùi. Babyfresh dùng chiết xuất lá trầu không, nguyên liệu quen thuộc, lành tính, nằm gọn trong chai lăn xinh xắn. Serum mỏng nhẹ, thấm nhanh, không bết dính, bỏ balo vào là chạy đi học luôn. Nhớ lau khô nách, thoa vừa đủ, để khô tự nhiên rồi mới mặc áo nhé. Ngừa mùi được 1 đến 3 ngày, ngồi cạnh bạn cùng bàn hay best friend cũng tự tin hết cỡ. Hết lo mùi giữa tiết thể dục rồi nha! Chốt combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 3.3, vid: 'bfv/c10.mp4', tag: 'xịt thơm rồi vẫn lo?', title: 'Mùi nách giữa\ntiết thể dục?', hi: 'tiết thể dục', fx: ['shield'], fxl: ['yên tâm'], brand: true},
      {kind: 'cover', s: 3.3, e: 6.7, tag: 'bí quyết', title: 'Đừng chỉ\nche mùi', hi: 'che mùi', img: 'bf/lop-hoc.jpg', sub: 'chọn loại giúp làm sạch, giảm mùi'},
      {kind: 'full', s: 6.7, e: 11.7, vid: 'bfv/c15.mp4', tag: 'chiết xuất', title: 'Lá trầu không\nlành tính', hi: 'Lá trầu không', fx: ['leaf'], fxl: ['lành tính'], brand: true},
      {kind: 'full', s: 11.7, e: 15.6, vid: 'bfv/c03.mp4', tag: 'bỏ balo là đi học', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'thấm nhanh', fx: ['serum', 'dry'], fxl: ['mỏng nhẹ', 'không bết']},
      {kind: 'tip', s: 15.6, e: 19.1, n: 1, title: 'Lau khô, lăn đủ\nkhô rồi mặc áo', hi: 'khô rồi', img: 'bf/nhat-ky.jpg', note: 'để khô tự nhiên', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'cover', s: 19.1, e: 23.1, tag: 'ngừa mùi 1–3 ngày', title: 'Ngồi cạnh bạn\ntự tin hết cỡ', hi: 'tự tin', img: 'bf/ghe-da.jpg', sub: 'bạn cùng bàn · best friend'},
      {kind: 'check', s: 23.1, e: 25.5, title: 'Hết lo mùi nha', items: ['Lá trầu không lành tính', 'Mỏng nhẹ, thấm nhanh', 'Lau khô · lăn · chờ khô']},
      {kind: 'end', s: 25.5, e: 29.328, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
