import {v} from '../make';

// Video thật đầu tiên: "Con trai đi test personal color có kì không?"
// Source: clip quay tại studio Tonelux (khách nam thử vải drape + phân tích bảng màu).
// Bản không voice: chữ trên hình + phụ đề ngắn; thêm nhạc trend khi đăng.
export default v('ToneNamTest', 33,
  [
    'Nhiều anh em vẫn nghĩ test màu là chuyện của con gái',
    'Tủ đồ nam ít món, mặc sai màu là lộ ngay',
    'Chuyên viên xem tông da, màu tóc và màu mắt',
    'Nhiệt độ, độ sáng, độ trong của màu',
    'Đúng màu: da sáng, nét mặt rõ hơn hẳn',
    'Kết quả là bảng màu riêng theo 12 mùa',
    'Không tiện ghé studio? Có bộ test tại nhà',
    'Bấm giỏ hàng hoặc đặt lịch test ngay',
  ],
  [
    {kind: 'full', s: 0, e: 3.8, cover: true, vid: 'tlv/lib/s2/canh_17.mp4', tag: 'Personal color cho nam', title: 'Con trai đi test\npersonal color\ncó kì không?', hi: 'có kì không?'},
    {kind: 'full', s: 3.8, e: 8, vid: 'tlv/lib/s2/canh_12.mp4', tag: 'Câu trả lời', title: 'Không kì.\nCòn đáng làm nhất', hi: 'đáng làm nhất', line: 'vì tủ đồ nam ít món, chọn đúng màu là ăn điểm'},
    {kind: 'full', s: 8, e: 11.5, vid: 'tlv/lib/s2/canh_02.mp4', tag: 'Bước 1', title: 'Phân tích\nda · tóc · mắt', hi: 'da · tóc · mắt'},
    {kind: 'steps', s: 11.5, e: 16, tag: 'Bước 2', title: '3 điều quyết định\nmùa của bạn', hi: 'mùa của bạn'},
    {kind: 'full', s: 16, e: 20.2, vid: 'tlv/lib/s2/canh_18.mp4', tag: 'Bước 3', title: 'Thử vải drape\nsát mặt', hi: 'sát mặt', line: 'đúng màu là thấy da sáng lên'},
    {kind: 'full', s: 20.2, e: 23.8, vid: 'tlv/lib/s2/canh_08.mp4', tag: 'Kết quả', title: 'Bảng màu\ncủa riêng bạn', hi: 'của riêng bạn', season: 'true-autumn'},
    {kind: 'product', s: 23.8, e: 28.4, tag: 'Bộ test tại nhà', title: 'Không tiện\nghé studio?', hi: 'ghé studio?', items: ['Thẻ màu 12 mùa', 'Vải drape chuẩn màu', 'Tự test tại nhà']},
    {kind: 'end', s: 28.4, e: 33, title: 'Biết mùa của mình\nmặc gì cũng đẹp', hi: 'mặc gì cũng đẹp', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
  ]);
