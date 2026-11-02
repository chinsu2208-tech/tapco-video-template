import type {MemeSpec} from '../MemeVideo';
// Tập mẫu series "100 ngày": review nguyên văn FB005 (Kho ảnh). Câu hỏi comment là CÂU MẪU để xem bố cục — tập thật phải lấy comment thật.
export const series: MemeSpec = {
  day: 7,
  total: 100,
  caps: [
    [0.3, 3.5, 'Ngày 7: đọc đánh giá thật của khách'],
    [3.5, 8.5, 'Xịt một phát lên áo, trưa đi học về vẫn thơm'],
    [8.5, 12.5, 'Có bạn hỏi: xịt xong hơi hắc thì sao?'],
    [12.5, 17.5, 'Chờ hai đến ba phút cho mùi ổn định nha'],
  ],
  scenes: [
    {s: 0, e: 8.5, bg: 'pink', mode: 'none', title: ['ĐÁNH GIÁ', '5 SAO'], titleY: 440, titleSize: 96, review: {stars: 5, y: 760, text: 'giữ mùi cũng lâu phết, xịt đúng 1 phát vào trước áo cơ, 12h trưa đi học nắng nóng về vẫn thơm lắm', src: 'Khách Shopee · 06/05/2026'}, stickers: [{type: 'sparkle', x: 110, y: 1130, size: 110}, {type: 'heart', x: 940, y: 1250, size: 120}]},
    {s: 8.5, e: 17.5, bg: 'lime', mode: 'none', title: ['KHÁCH HỎI', 'SHOP ĐÁP'], titleY: 440, titleSize: 90, qa: {user: 'Khách hỏi (câu mẫu)', q: 'Xịt xong hơi hắc thì có sao không shop?', a: 'Chờ 2–3 phút cho mùi ổn định rồi ngửi lại nha!', y: 650}, stickers: [{type: 'star', x: 120, y: 1330, size: 130}, {type: 'burst', x: 930, y: 1300, size: 190, text: 'NÈ!'}]},
  ],
};
