import type {MemeSpec} from '../MemeVideo';
// Tập mẫu series "100 ngày": đọc đánh giá thật (FB005) -> đọc câu hỏi -> giải đáp + chia sẻ -> CTA nói về mùi (từ review thật FB006).
// Câu hỏi của khách trong mẫu là CÂU MẪU để xem bố cục; tập thật phải lấy comment thật.
export const series: MemeSpec = {
  day: 7,
  total: 100,
  caps: [
    [0.3, 3.4, 'Ngày 7: đọc đánh giá năm sao của khách'],
    [3.4, 9.0, 'Bạn viết: xịt đúng một phát vào áo, trưa đi học về vẫn thơm'],
    [9.0, 12.5, 'Có bạn hỏi: xịt xong hơi hắc thì sao?'],
    [12.5, 16.5, 'Giải đáp: chờ hai đến ba phút cho mùi dịu lại rồi ngửi lại nha'],
    [16.5, 20.0, 'Chia sẻ thêm: xịt vào mặt trong áo, cách một gang tay'],
    [20.0, 24.0, 'Còn mùi thì khách tả giống sữa, kẹo và em bé'],
    [24.0, 27.0, 'Tò mò mùi thì nghía giỏ hàng bên dưới nha'],
  ],
  scenes: [
    {s: 0, e: 9, bg: 'pink', mode: 'full', photo: 'dl/i016.jpg', title: ['ĐÁNH GIÁ', '5 SAO'], titleY: 440, titleSize: 96, review: {stars: 5, y: 960, text: 'giữ mùi cũng lâu phết, xịt đúng 1 phát vào trước áo cơ, 12h trưa đi học nắng nóng về vẫn thơm lắm', src: 'Khách Shopee · 06/05/2026'}, stickers: [{type: 'sparkle', x: 110, y: 880, size: 110}, {type: 'heart', x: 950, y: 1000, size: 120}]},
    {s: 9, e: 20, bg: 'lime', mode: 'full', photo: 'dl/CLIP040.mp4', title: ['GIẢI ĐÁP', '+ CHIA SẺ'], titleY: 440, titleSize: 90, qa: {user: 'Khách hỏi (câu mẫu)', q: 'Xịt xong hơi hắc thì có sao không shop?', a: 'Chờ 2–3 phút cho mùi dịu lại rồi ngửi lại nha!', y: 650}, note: 'Chia sẻ: xịt mặt trong áo, cách 1 gang tay', stickers: [{type: 'star', x: 130, y: 1010, size: 120}, {type: 'burst', x: 940, y: 560, size: 180, text: 'NÈ!'}]},
    {s: 20, e: 27, bg: 'violet', mode: 'full', photo: 'dl/i022.jpg', title: ['MÙI NÀY', 'KHÁCH TẢ SAO?'], titleY: 440, titleSize: 90, list: ['Sữa', 'Kẹo', 'Em bé'], listY: 860, note: 'theo review thật của khách', stickers: [{type: 'heart', x: 950, y: 800, size: 120}, {type: 'sparkle', x: 110, y: 820, size: 100}]},
  ],
};
