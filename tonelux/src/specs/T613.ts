import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 613 (ca tự động 15/11/2026)
const W = "Tủ đồ mùa đông đầy mà sáng nào cũng không biết mặc gì? Chỉ cần 12 món và 5 màu chủ đạo theo mùa màu của bạn. Chọn 2 màu trung tính, 2 màu chính, 1 màu nhấn, cùng tông lạnh hoặc ấm với da. Ở ToneLux, bọn mình hay chia 12 món thành áo, quần, khoác, rồi mix chéo, cả tuần gần như không lặp lại. Tối nay thử xếp 5 màu lên giường. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T613', 29.91, W, [
  {"kind": "full", "s": 0, "e": 3.8, "cover": true, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tủ đồ mùa đông", "title": "Tủ đầy mà\nkhông có gì mặc?", "hi": "không có gì mặc?"},
  {"kind": "full", "s": 3.8, "e": 8.0, "vid": "tlv/lib/s2/canh_08.mp4", "tag": "Capsule wardrobe", "title": "12 món,\n5 màu chủ đạo", "hi": "5 màu chủ đạo"},
  {"kind": "steps", "s": 8.0, "e": 14.4, "tag": "Công thức 5 màu", "title": "Cùng tông\nvới da bạn", "hi": "với da bạn", "items": ["2 màu\ntrung tính", "2 màu\nchính", "1 màu\nnhấn"]},
  {"kind": "full", "s": 14.4, "e": 19.2, "vid": "tlv/lib/s2/canh_15.mp4", "tag": "Tại Tonelux", "title": "Chia áo,\nquần, khoác", "hi": "quần, khoác"},
  {"kind": "hook", "s": 19.2, "e": 22.6, "tag": "Kết quả", "title": "Mix chéo,\ncả tuần không lặp", "hi": "không lặp", "sub": "12 món · 5 màu · 7 ngày"},
  {"kind": "full", "s": 22.6, "e": 25.0, "vid": "tlv/lib/v2/canh_17.mp4", "tag": "Tối nay", "title": "Xếp 5 màu\nlên giường", "hi": "5 màu"},
  {"kind": "end", "s": 25.0, "e": 29.91, "title": "Tone da bạn\nhợp màu nào?", "hi": "màu nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {"audio": "voice/t613.mp3"});
