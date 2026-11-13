import {v} from '../make';

// CM59: dòng sheet 'Kho y tuong' (Babyfresh) - Đi tập gym tự tin hơn: thêm bước lăn trước khi xách túi
export default v('CM59', 'voice/v59.mp3', 29.208,
    'Túi gym xếp xong rồi mà quên món quan trọng nhất à? Thêm một bước này nữa thôi nhé. Đầu tiên, làm sạch nách. Tiếp theo, lau thật khô. Rồi lăn Babyfresh vừa đủ, serum mỏng nhẹ thấm nhanh, không bết dính. Chiết xuất lá trầu không lành tính giúp ngừa mùi tới 1 đến 3 ngày, lại còn hỗ trợ kiểm soát mồ hôi, đỉnh luôn. Nhớ để khô tự nhiên rồi mới mặc đồ nha. Làm xong là xách túi đi tập, giơ tay thoải mái, đứng cạnh best friend cũng tự tin hơn hẳn. Đừng quên bước cuối trong checklist nha. Combo bé thơm đi học đang tặng kèm một chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 4.5, vid: 'bfv/c02.mp4', tag: 'trước khi đi tập', title: 'Túi gym xếp xong\ncòn quên gì?', hi: 'quên gì', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 4.5, e: 7.7, n: 1, title: 'Làm sạch\nlau thật khô', hi: 'lau thật khô', img: 'bf/mo-hop.jpg', note: 'nách khô rồi mới lăn', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'tip', s: 7.7, e: 11.6, n: 2, title: 'Lăn vừa đủ\nmỏng nhẹ', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', note: 'thấm nhanh, không bết dính', fx: ['serum'], fxl: ['không bết']},
      {kind: 'full', s: 11.6, e: 16.9, vid: 'bfv/c15.mp4', tag: 'chiết xuất lành tính', title: 'Lá trầu không\nngừa mùi 1–3 ngày', hi: 'lá trầu không', fx: ['leaf'], fxl: ['lá trầu']},
      {kind: 'full', s: 16.9, e: 19.5, vid: 'bfv/c10.mp4', tag: 'nhớ nha', title: 'Để khô tự nhiên\nrồi mới mặc đồ', hi: 'khô tự nhiên', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 19.5, e: 23.6, vid: 'bfv/c12.mp4', tag: 'xách túi đi tập', title: 'Giơ tay\nthoải mái hơn', hi: 'thoải mái', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 23.6, e: 25.5, title: 'Checklist túi gym', items: ['Làm sạch, lau khô', 'Lăn vừa đủ', 'Khô rồi mới mặc đồ']},
      {kind: 'end', s: 25.5, e: 29.208, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/lop-hoc.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
