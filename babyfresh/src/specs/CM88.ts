import {v} from '../make';

// CM88: dòng sheet 'Kho y tuong' (Babyfresh) - Da dưới cánh tay dịu nhẹ, lành tính: chai và lá trầu không
export default v('CM88', 'voice/v88.mp3', 31.248,
    "Nách bạn có đang âm thầm kêu cứu vì khô căng không? Nhiều bạn nghĩ khử mùi mạnh thì da phải chịu khó chịu. Babyfresh nói không nhé! Serum lăn làm từ lá trầu không lành tính, có Glycerin và Allantoin dưỡng ẩm, làm dịu da, lại còn ngừa mùi 1 đến 3 ngày. Mẹo nhỏ cho ngày đi học, tiết thể dục hay đeo balo: lau khô nách, lăn vừa đủ, để khô tự nhiên rồi mới mặc áo. Serum mỏng nhẹ, thấm nhanh, thoáng ráo, không bết dính. Bạn cùng bàn cũng không còn lo, tự tin hết cỡ. Vậy là nách hết kêu cứu rồi! Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, chốt ngay nha!",
    [
      {kind: 'full', s: 0, e: 5.3, vid: 'bfv/c16.mp4', tag: 'khử mùi mà khô căng?', title: 'Nách bạn đang\nkêu cứu?', hi: 'kêu cứu', fx: ['leaf'], fxl: ['dịu nhẹ'], brand: true},
      {kind: 'cover', s: 5.3, e: 11.9, tag: 'Babyfresh nói không', title: 'Lá trầu không\nlành tính', hi: 'lành tính', img: 'bf/mo-hop.jpg', sub: 'có Glycerin + Allantoin'},
      {kind: 'full', s: 11.9, e: 16.3, vid: 'bfv/c12.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Đi học, thể dục\nhay đeo balo', hi: 'đeo balo', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'full', s: 16.3, e: 19.7, vid: 'bfv/c01.mp4', tag: 'mẹo nhỏ', title: 'Lau khô, lăn\nvừa đủ thôi', hi: 'vừa đủ', fx: ['dry'], fxl: ['khô rồi mặc áo']},
      {kind: 'cover', s: 19.7, e: 22.7, tag: 'serum lăn', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'thấm nhanh', img: 'bf/nhat-ky.jpg', sub: 'thoáng ráo, không bết dính'},
      {kind: 'full', s: 22.7, e: 25.2, vid: 'bfv/c17.mp4', tag: 'bạn cùng bàn', title: 'Không còn lo\ntự tin hết cỡ', hi: 'tự tin', fx: ['shield', 'serum'], fxl: ['tự tin', 'không bết']},
      {kind: 'check', s: 25.2, e: 27.6, title: 'Nách hết kêu cứu', items: ['Lau khô vùng nách', 'Lăn lượng vừa đủ', 'Khô rồi mới mặc áo']},
      {kind: 'end', s: 27.6, e: 31.248, title: 'Dịu nhẹ\nmỗi ngày nha!', hi: 'Dịu nhẹ', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
