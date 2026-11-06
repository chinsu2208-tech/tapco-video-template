import {v} from '../make';

// CM39: dòng sheet 'Kho y tuong' (Babyfresh) - Thói quen buổi sáng: 3 món nhỏ cho vào balo
export default v('CM39', 'voice/v39.mp3', 30.144,
    'Balo của bạn đủ sách vở rồi, nhưng đã đủ đồ để tự tin chưa? Thử checklist 30 giây này nhé. Một là chai nước, hai là khăn giấy nhỏ, ba là Babyfresh serum lăn nách lá trầu không, lành tính, thấm nhanh, không bết dính, ngừa mùi tới 1 đến 3 ngày. Dùng đúng ba bước thôi: làm sạch và lau khô nách, lăn vừa đủ, để khô tự nhiên rồi mới mặc áo. Thế là đi học nhẹ đầu hẳn, tiết thể dục hay ngồi cạnh bạn cùng bàn cũng thoải mái. Balo đủ ba món này mới gọi là đủ tự tin. Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn đó nha!',
    [
      {kind: 'full', s: 0, e: 3.9, vid: 'bfv/c15.mp4', tag: 'thói quen buổi sáng', title: 'Balo đủ đồ\nđể tự tin chưa?', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 3.9, e: 7.7, tag: 'checklist 30 giây', title: 'Balo cần\n3 món nhỏ', hi: '3 món nhỏ', img: 'bf/balo.jpg', sub: 'chai nước · khăn giấy nhỏ'},
      {kind: 'full', s: 7.7, e: 10.1, vid: 'bfv/c02.mp4', tag: 'món thứ ba', title: 'Lăn nách\nlá trầu không', hi: 'lá trầu không', fx: ['leaf'], fxl: ['lành tính'], brand: true},
      {kind: 'full', s: 10.1, e: 13.8, vid: 'bfv/c06.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Thấm nhanh\nkhông bết dính', hi: 'Thấm nhanh', fx: ['serum', 'dry'], fxl: ['mỏng nhẹ', 'thấm nhanh']},
      {kind: 'tip', s: 13.8, e: 16.5, n: 1, title: 'Làm sạch\nlau khô nách', hi: 'lau khô', img: 'bf/buoi-sang.jpg', note: 'trước khi lăn', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 16.5, e: 19.3, vid: 'bfv/c01.mp4', tag: 'bước 2 · 3', title: 'Lăn vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 19.3, e: 23.4, vid: 'bfv/c13.mp4', tag: 'tiết thể dục', title: 'Đi học\nnhẹ đầu hẳn', hi: 'nhẹ đầu', fx: ['shield'], fxl: ['thoải mái']},
      {kind: 'check', s: 23.4, e: 26.1, title: 'Balo đủ 3 món', items: ['Chai nước', 'Khăn giấy nhỏ', 'Babyfresh lăn nách']},
      {kind: 'end', s: 26.1, e: 30.144, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/mo-hop.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
