import {v} from '../make';

// CM86: dòng sheet 'Kho y tuong' (Babyfresh) - Dùng đơn giản vài giây: lau khô, thoa vừa đủ, để khô tự nhiên
export default v('CM86', 'voice/v86.mp3', 31.848,
    "Bạn cùng bàn có ngửi thấy gì không? Yên tâm, cứ làm đúng 3 bước này thôi. Bước một, lau khô nách. Đây là bước nền, nhiều bạn hay bỏ qua, mà da khô ráo thì serum mới lên đều. Bước hai, thoa vừa đủ. Babyfresh là serum mỏng nhẹ chiết xuất lá trầu không, lành tính, chỉ cần một lớp mỏng là đủ, không cần bôi dày. Bước ba, để khô tự nhiên rồi mới mặc áo, nách thoáng ráo, không bết dính. Sáng đi học, tiết thể dục hay nhét balo chạy vội, ngừa mùi tới 1 đến 3 ngày, tự tin sát cạnh best friend. Lau khô, thoa vừa đủ, để khô, xong! Chốt combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn nha!",
    [
      {kind: 'full', s: 0, e: 3.7, vid: 'bfv/c14.mp4', tag: 'ngồi cạnh bạn cùng bàn…', title: 'Yên tâm, chỉ\ncần 3 bước', hi: '3 bước', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 3.7, e: 9.0, n: 1, title: 'Lau khô nách\nbước nền nè', hi: 'Lau khô', img: 'bf/nhat-ky-b.jpg', note: 'da khô, serum lên đều', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'tip', s: 9.0, e: 12.2, n: 2, title: 'Thoa vừa đủ\nmột lớp mỏng', hi: 'vừa đủ', img: 'bf/mo-hop.jpg', note: 'không cần bôi dày', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'full', s: 12.2, e: 16.1, vid: 'bfv/c16.mp4', tag: 'lá trầu không', title: 'Serum mỏng nhẹ\nlành tính', hi: 'lành tính', fx: ['leaf'], fxl: ['lá trầu']},
      {kind: 'tip', s: 16.1, e: 19.9, n: 3, title: 'Để khô tự nhiên\nrồi mặc áo', hi: 'khô tự nhiên', img: 'bf/buoi-sang.jpg', note: 'thoáng ráo nè', fx: ['dry'], fxl: ['không bết dính']},
      {kind: 'full', s: 19.9, e: 25.5, vid: 'bfv/c03.mp4', tag: 'ngừa mùi tới 1–3 ngày', title: 'Thể dục, balo\nchạy vội', hi: 'chạy vội', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 25.5, e: 28.0, title: 'Xong 3 bước!', items: ['Lau khô', 'Thoa vừa đủ', 'Để khô rồi mặc áo']},
      {kind: 'end', s: 28.0, e: 31.848, title: 'Tự tin sát\ncạnh bạn thân!', hi: 'Tự tin', img: 'bf/ghe-da.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
