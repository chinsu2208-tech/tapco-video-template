import {v} from '../make';

// CM84: dòng sheet 'Kho y tuong' (Babyfresh) - Đi làm thêm ca dài vẫn thoải mái: lăn trước khi khoác đồng phục
export default v('CM84', 'voice/v84.mp3', 29.184,
    'Ca dài mà cứ lo mùi nách giữa giờ thì mệt lắm đó, đúng không? Bạn ơi, đừng đợi tới lúc lo mới xử lý, làm ba bước này trước khi khoác đồng phục nha. Một, làm sạch vùng nách. Hai, lau thật khô. Ba, lăn serum Babyfresh vừa đủ rồi để khô tự nhiên mới mặc đồ. Serum lá trầu không mỏng nhẹ, thấm nhanh, không bết dính, lại lành tính cho da dịu nhẹ. Một lần lăn, ngừa mùi tới 1 đến 3 ngày, nên cả ca dài bạn cứ thoải mái chạy việc, tự tin đứng gần bất kỳ ai. Vậy là hết lo mùi giữa giờ rồi nhé! Chốt combo bé thơm đi học tặng kèm chai xịt thơm quần áo ngay, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 3.2, vid: 'bfv/c02.mp4', tag: 'ca làm thêm dài…', title: 'Lo mùi nách\ngiữa giờ làm?', hi: 'giữa giờ', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'cover', s: 3.2, e: 7.3, tag: 'trước ca làm', title: 'Làm 3 bước\ntrước giờ làm', hi: '3 bước', img: 'bf/hanh-lang.jpg', sub: 'chuẩn bị từ trước'},
      {kind: 'tip', s: 7.3, e: 9.1, n: 1, title: 'Làm sạch\nvùng nách', hi: 'làm sạch', img: 'bf/mo-hop.jpg', note: 'nhẹ nhàng thôi', fx: ['leaf'], fxl: ['sạch sẽ']},
      {kind: 'tip', s: 9.1, e: 10.9, n: 2, title: 'Lau thật khô\ntrước khi lăn', hi: 'thật khô', img: 'bf/nhat-ky.jpg', note: 'bước quan trọng nè', fx: ['dry'], fxl: ['khô ráo']},
      {kind: 'full', s: 10.9, e: 13.8, vid: 'bfv/c16.mp4', tag: 'bước 3', title: 'Lăn vừa đủ\nkhô rồi mặc đồ', hi: 'vừa đủ', fx: ['dry'], fxl: ['khô tự nhiên']},
      {kind: 'cover', s: 13.8, e: 18.2, tag: 'lá trầu không', title: 'Mỏng nhẹ\nthấm nhanh', hi: 'thấm nhanh', img: 'bf/buoi-sang.jpg', sub: 'không bết dính'},
      {kind: 'full', s: 18.2, e: 23.3, vid: 'bfv/c06.mp4', tag: 'ngừa mùi tới 1–3 ngày', title: 'Cả ca dài\nvẫn thoải mái', hi: 'thoải mái', fx: ['shield', 'leaf'], fxl: ['tự tin', 'lá trầu']},
      {kind: 'check', s: 23.3, e: 25.8, title: '3 bước trước ca', items: ['Làm sạch vùng nách', 'Lau thật khô', 'Lăn vừa đủ, chờ khô']},
      {kind: 'end', s: 25.8, e: 29.184, title: 'Chạy việc cả ca\nthật tự tin nha!', hi: 'tự tin', img: 'bf/balo.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
