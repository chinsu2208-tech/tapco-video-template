import {v} from '../make';

// CM38: dòng sheet 'Kho y tuong' (Babyfresh) - Lăn xong mặc áo đồng phục lúc nào
export default v('CM38', 'voice/v38.mp3', 29.808,
    'Lăn nách xong mặc áo đồng phục liền là sai bước rồi nha! Babyfresh ghi rõ trên nhãn: lau khô, thoa vừa đủ, để khô tự nhiên rồi mới mặc áo. Nghe dài nhưng gọn lắm. Mẹo một: lau khô nách xong là lăn luôn, rồi đi đánh răng, buộc tóc, ăn sáng, cứ để serum thấm nhanh, thoáng ráo, không bết dính. Mẹo hai: thoa lượng vừa đủ thôi, đừng lăn quá tay. Có lá trầu không lành tính, ngừa mùi tới 1 đến 3 ngày, đi học, giờ thể dục hay ngồi cạnh bạn cùng bàn đều tự tin hơn. Xong hết mới mặc áo đồng phục, vậy là đúng bước! Chốt combo bé thơm đi học tặng chai xịt thơm quần áo, ưu đãi có hạn nha!',
    [
      {kind: 'full', s: 0, e: 3.0, vid: 'bfv/c01.mp4', tag: 'mẹo áo đồng phục', title: 'Lăn xong mặc áo\nliền là sai bước', hi: 'sai bước', fx: ['dry'], fxl: ['chờ khô'], brand: true},
      {kind: 'cover', s: 3.0, e: 8.8, tag: 'nhãn ghi rõ', title: 'Khô rồi\nmới mặc áo', hi: 'Khô rồi', img: 'bf/mo-hop.jpg', sub: 'lau khô · vừa đủ · chờ khô'},
      {kind: 'tip', s: 8.8, e: 12.8, n: 1, title: 'Lăn xong\nlàm việc khác', hi: 'việc khác', img: 'bf/buoi-sang.jpg', note: 'đánh răng, buộc tóc, ăn sáng', fx: ['dry'], fxl: ['thoáng ráo']},
      {kind: 'full', s: 12.8, e: 15.2, vid: 'bfv/c17.mp4', title: 'Thấm nhanh\nkhông bết dính', hi: 'Thấm nhanh', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'tip', s: 15.2, e: 18.0, n: 2, title: 'Thoa vừa đủ\nđừng quá tay', hi: 'vừa đủ', img: 'bf/nhat-ky-b.jpg', note: 'lượng vừa đủ là được', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'full', s: 18.0, e: 23.6, vid: 'bfv/c12.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Lá trầu không\ntự tin đi học', hi: 'tự tin', fx: ['leaf', 'shield'], fxl: ['lá trầu không', 'tự tin'], brand: true},
      {kind: 'check', s: 23.6, e: 26.3, title: 'Đúng bước nè', items: ['Lau khô nách', 'Lăn vừa đủ', 'Khô rồi mặc áo']},
      {kind: 'end', s: 26.3, e: 29.808, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/hanh-lang.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
