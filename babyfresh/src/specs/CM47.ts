import {v} from '../make';

// CM47: dòng sheet 'Kho y tuong' (Babyfresh) - Serum mỏng nhẹ, Glycerin + Allantoin dưỡng ẩm
export default v('CM47', 'voice/v47.mp3', 30.312,
    'Nách cũng là da đó, đâu chỉ cần hết mùi mà thôi! Đi học cả ngày, tiết thể dục chạy nhảy, đeo balo nữa, nên chọn sản phẩm phải nhìn kết cấu trước nha. Serum lăn Babyfresh mỏng nhẹ, thấm nhanh, thoáng ráo, không bết dính. Có chiết xuất lá trầu không giúp ngừa mùi 1 đến 3 ngày, lại thêm Glycerin và Allantoin dưỡng ẩm, làm dịu da, hạn chế khô căng. Mẹo nhỏ: lau khô nách, thoa lượng vừa đủ, để khô tự nhiên rồi hẵng mặc áo. Ngồi cạnh bạn cùng bàn cũng tự tin hơn hẳn. Vậy nên nách cũng cần dưỡng, chọn đúng là thoải mái liền. Combo bé thơm đi học tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, chốt ngay nha!',
    [
      {kind: 'full', s: 0, e: 2.8, vid: 'bfv/c18.mp4', tag: 'không chỉ hết mùi', title: 'Nách cũng\nlà da đó!', hi: 'là da', fx: ['shield'], fxl: ['chăm da'], brand: true},
      {kind: 'full', s: 2.8, e: 7.6, vid: 'bfv/c12.mp4', tag: 'đi học cả ngày', title: 'Chọn lăn nách\nnhìn kết cấu', hi: 'kết cấu', fx: ['serum'], fxl: ['kết cấu']},
      {kind: 'cover', s: 7.6, e: 11.1, tag: 'serum lăn Babyfresh', title: 'Mỏng nhẹ\nthoáng ráo', hi: 'thoáng ráo', img: 'bf/mo-hop.jpg', sub: 'thấm nhanh · không bết dính'},
      {kind: 'full', s: 11.1, e: 13.6, vid: 'bfv/c17.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Chiết xuất\nlá trầu không', hi: 'lá trầu không', fx: ['leaf'], fxl: ['lá trầu']},
      {kind: 'cover', s: 13.6, e: 17.6, tag: 'dưỡng ẩm', title: 'Glycerin\n+ Allantoin', hi: 'Allantoin', img: 'bf/nhat-ky-b.jpg', sub: 'làm dịu da, hạn chế khô căng'},
      {kind: 'full', s: 17.6, e: 21.2, vid: 'bfv/c01.mp4', tag: 'mẹo nhỏ', title: 'Lăn vừa đủ\nkhô rồi mặc áo', hi: 'vừa đủ', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 21.2, e: 23.5, vid: 'bfv/c06.mp4', tag: 'bạn cùng bàn', title: 'Ngồi cạnh bạn\ntự tin hơn hẳn', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 23.5, e: 26.2, title: 'Nách cũng cần dưỡng', items: ['Mỏng nhẹ, thấm nhanh', 'Lá trầu không', 'Glycerin + Allantoin']},
      {kind: 'end', s: 26.2, e: 30.312, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/xe-buyt.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
