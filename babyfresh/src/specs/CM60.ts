import {v} from '../make';

// CM60: dòng sheet 'Kho y tuong' (Babyfresh) - Đi date, đi chơi cuối tuần: thứ tự chuẩn trước khi mặc đồ
export default v('CM60', 'voice/v60.mp3', 33.312,
    'Outfit đã xinh, nhưng còn một bước nhỏ nhiều bạn hay quên: khử mùi! Thứ tự chuẩn nè. Tắm sạch, lau khô nách. Rồi lăn Babyfresh, serum lá trầu không mỏng nhẹ, thấm nhanh, thoáng ráo, không bết dính, lành tính cho da dịu nhẹ. Lăn vừa đủ thôi, để khô tự nhiên rồi mới mặc đồ, váy đẹp hay áo trắng cũng không lo dính. Một lăn là mùi khó chịu bị đẩy lùi, ngừa mùi tới 1 đến 3 ngày, giúp nách luôn khô thoáng. Đi date hay đi chơi cuối tuần đều tự tin hơn hẳn. Nhớ nha, khử mùi là bước cuối trước khi mặc đồ. Chốt đơn combo bé thơm đi học tặng chai xịt thơm quần áo, ưu đãi có hạn!',
    [
      {kind: 'full', s: 0, e: 4.3, vid: 'bfv/c03.mp4', tag: 'trước khi ra cửa', title: 'Outfit đã xinh\ncòn quên gì?', hi: 'quên gì', fx: ['shield'], fxl: ['tự tin'], brand: true},
      {kind: 'tip', s: 4.3, e: 7.0, n: 1, title: 'Tắm sạch\nlau khô nách', hi: 'lau khô', img: 'bf/mo-hop.jpg', note: 'thứ tự chuẩn nè', fx: ['dry'], fxl: ['khô thoáng']},
      {kind: 'full', s: 7.0, e: 13.5, vid: 'bfv/c14.mp4', tag: 'serum lá trầu không', title: 'Thấm nhanh\nthoáng ráo', hi: 'thoáng ráo', fx: ['leaf', 'dry'], fxl: ['lá trầu', 'thấm nhanh']},
      {kind: 'tip', s: 13.5, e: 16.4, n: 2, title: 'Lăn vừa đủ\nkhô rồi mặc đồ', hi: 'vừa đủ', img: 'bf/buoi-sang.jpg', note: 'để khô tự nhiên', fx: ['serum'], fxl: ['mỏng nhẹ']},
      {kind: 'full', s: 16.4, e: 20.7, vid: 'bfv/c17.mp4', tag: 'váy đẹp hay áo trắng', title: 'Không bết dính\nmặc đồ yên tâm', hi: 'không bết dính', fx: ['serum'], fxl: ['không bết']},
      {kind: 'cover', s: 20.7, e: 23.7, tag: 'một lần lăn', title: 'Ngừa mùi\n1–3 ngày', hi: '1–3 ngày', img: 'bf/xe-buyt.jpg', sub: 'nách luôn khô thoáng'},
      {kind: 'full', s: 23.7, e: 26.3, vid: 'bfv/c18.mp4', tag: 'đi date, đi chơi', title: 'Cuối tuần\ntự tin hơn hẳn', hi: 'tự tin', fx: ['shield'], fxl: ['tự tin']},
      {kind: 'check', s: 26.3, e: 29.1, title: 'Thứ tự chuẩn', items: ['Tắm sạch, lau khô', 'Lăn vừa đủ', 'Khô rồi mới mặc đồ']},
      {kind: 'end', s: 29.1, e: 33.312, title: 'Combo bé thơm\nđi học nha!', hi: 'bé thơm', img: 'bf/ghe-da.jpg', sub: 'Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm'},
    ]);
