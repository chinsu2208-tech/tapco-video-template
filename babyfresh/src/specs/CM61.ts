import {v} from '../make';

// CM61: dòng sheet 'Kho y tuong' (Babyfresh) - Ngày thi hồi hộp vẫn thoải mái: lăn serum buổi sáng, cầm bút khô thoáng
export default v('CM61', 'voice/v61.mp3', 27.432,
    'Sáng ngày thi, tim đập thình thịch mà nách còn ẩm thì khổ lắm đúng không? Thử bước 5 phút này nhé. Một, lau khô vùng nách thật sạch. Hai, lăn Babyfresh vừa đủ thôi, đừng lăn quá tay. Ba, chờ khô rồi hẵng mặc áo. Serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính, ngừa mùi tới 1 đến 3 ngày, nên cả buổi ngồi phòng thi vẫn khô thoáng, tự tin cầm bút. Nhớ cho bước này vào checklist cạnh bút thước và thẻ dự thi nha. Tự tin hơn, thoải mái hơn mỗi ngày! Chốt combo bé thơm đi học, tặng kèm chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 3.6, vid: 'bfv/c16.mp4', tag: 'sáng ngày thi', title: 'Tim thình thịch\nnách còn ẩm?', hi: 'ngày thi', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 3.6, e: 6.7, n: 1, title: 'Lau khô\nvùng nách', hi: 'lau khô', img: 'bf/mo-hop.jpg', note: 'bước 5 phút nè', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 6.7, e: 9.7, vid: 'bfv/c01.mp4', tag: 'bước 2', title: 'Lăn vừa đủ\nđừng quá tay', hi: 'vừa đủ', fx: ['serum'], fxl: ['vừa đủ']},
      {kind: 'tip', s: 9.7, e: 11.6, n: 3, title: 'Chờ khô\nrồi mặc áo', hi: 'chờ khô', img: 'bf/buoi-sang.jpg', note: 'đừng vội nha', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'full', s: 11.6, e: 14.5, vid: 'bfv/c17.mp4', tag: 'serum lá trầu không', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'thấm nhanh', fx: ['leaf', 'serum'], fxl: ['lá trầu', 'không bết']},
      {kind: 'cover', s: 14.5, e: 19.0, tag: 'ngừa mùi tới 1–3 ngày', title: 'Cả buổi thi\nvẫn khô thoáng', hi: 'khô thoáng', img: 'bf/lop-hoc.jpg', sub: 'tự tin cầm bút'},
      {kind: 'check', s: 19.0, e: 21.9, title: 'Checklist ngày thi', items: ['Bút, thước', 'Thẻ dự thi', 'Lăn Babyfresh từ sáng']},
      {kind: 'full', s: 21.9, e: 24.0, vid: 'bfv/c18.mp4', tag: 'mỗi ngày', title: 'Tự tin hơn\nthoải mái hơn', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'end', s: 24.0, e: 27.432, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/ghe-da.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
