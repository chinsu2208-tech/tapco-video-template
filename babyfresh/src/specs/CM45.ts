import {v} from '../make';

// CM45: dòng sheet 'Kho y tuong' (Babyfresh) - Thấm nhanh, không bết dính: lăn xong mặc áo đồng phục
export default v('CM45', 'voice/v45.mp3', 25.56,
    'Lăn xong mặc áo đồng phục luôn, nách có bết không? Thử với Babyfresh nhé. Đầu tiên, lau khô nách, đừng lăn lên da còn ướt. Tiếp theo, lăn lượng vừa đủ thôi, serum lá trầu không mỏng nhẹ thấm nhanh cực kỳ. Rồi chờ khô tự nhiên một chút, xong mới mặc áo. Cận cảnh đây, nách khô thoáng, không bết dính, đi học cả ngày vẫn nhẹ tênh, ngừa mùi 1 đến 3 ngày. Tiết thể dục hay ngồi cạnh bạn cùng bàn cũng tự tin hơn hẳn. Vậy là mặc áo xong mà nách không bết, đúng không? Combo bé thơm đi học đang tặng kèm chai xịt thơm quần áo, ưu đãi có hạn, chốt liền nha!',
    [
      {kind: 'full', s: 0, e: 3.8, vid: 'bfv/c16.mp4', tag: 'mặc áo đồng phục', title: 'Lăn xong mặc áo\nnách có bết?', hi: 'bết', fx: ['serum'], fxl: ['không bết'], brand: true},
      {kind: 'tip', s: 3.8, e: 6.0, n: 1, title: 'Lau khô nách\ntrước khi lăn', hi: 'Lau khô', img: 'bf/buoi-sang.jpg', note: 'đừng lăn lên da ướt', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 6.0, e: 9.9, vid: 'bfv/c01.mp4', tag: 'bước 2', title: 'Lăn vừa đủ\nlá trầu không', hi: 'vừa đủ', fx: ['serum', 'dry'], fxl: ['mỏng nhẹ', 'thấm nhanh']},
      {kind: 'tip', s: 9.9, e: 12.1, n: 3, title: 'Chờ khô\nrồi mặc áo', hi: 'Chờ khô', img: 'bf/hanh-lang.jpg', note: 'khô tự nhiên một chút', fx: ['dry'], fxl: ['chờ khô']},
      {kind: 'full', s: 12.1, e: 16.7, vid: 'bfv/c14.mp4', tag: 'ngừa mùi 1–3 ngày', title: 'Khô thoáng\nkhông bết dính', hi: 'Khô thoáng', fx: ['dry', 'serum'], fxl: ['khô thoáng', 'nhẹ tênh']},
      {kind: 'full', s: 16.7, e: 19.3, vid: 'bfv/c13.mp4', tag: 'tiết thể dục', title: 'Ngồi cạnh bạn\ntự tin hơn', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 19.3, e: 21.5, title: 'Mặc áo không bết', items: ['Lau khô nách', 'Lăn vừa đủ', 'Chờ khô rồi mặc áo']},
      {kind: 'end', s: 21.5, e: 25.56, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/mo-hop.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
