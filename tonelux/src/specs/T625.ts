import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 625 (ca tự động 11/11/2026)
const W = "Sắp sale cuối năm, định xả ví đúng không? Khoan đã. Hãy xác định tông da lạnh hay ấm, màu sáng hay trầm, rồi chọn bảng màu của mình. Ở ToneLux, bọn mình luôn khuyên lập danh sách 7 món đồ nền trước: áo thun, sơ mi, quần, blazer, áo len, túi, giày. Chỉ cần đúng màu chủ đạo, đồ dễ phối và ít mua hớ. Hôm nay hãy ghi danh sách đó vào ghi chú điện thoại. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T625', 29.29, W, [
  {"kind": "full", "s": 0, "e": 4.15, "vid": "tlv/lib/s2/canh_18.mp4", "tag": "Mua sắm cuối năm", "title": "Khoan\nmở ví đã!", "hi": "mở ví đã!", "cover": true},
  {"kind": "steps", "s": 4.15, "e": 9.3, "tag": "Xác định trước", "title": "Biết màu mình\ntrước đã", "hi": "trước đã", "items": ["Tông da\nlạnh hay ấm", "Màu\nsáng hay trầm", "Bảng màu\ncủa riêng bạn"]},
  {"kind": "full", "s": 9.3, "e": 13.5, "vid": "tlv/lib/v2/canh_18.mp4", "tag": "Tại ToneLux", "title": "Lập danh sách\n7 món đồ nền", "hi": "7 món đồ nền"},
  {"kind": "full", "s": 13.5, "e": 17.85, "vid": "tlv/lib/s2/canh_08.mp4", "tag": "7 món nền", "title": "Áo thun, sơ mi,\nquần, blazer", "hi": "blazer", "line": "áo len, túi, giày"},
  {"kind": "drape", "s": 17.85, "e": 21.5, "tag": "Đúng màu chủ đạo", "title": "Dễ phối,\nít mua hớ", "hi": "ít mua hớ", "items": ["Đúng màu chủ đạo", "Chọn theo cảm hứng"], "cols": ["#c19a6b", "#8e9aaf"]},
  {"kind": "full", "s": 21.5, "e": 24.5, "vid": "tlv/lib/v2/canh_13.mp4", "tag": "Hôm nay", "title": "Ghi danh sách\nvào điện thoại", "hi": "điện thoại"},
  {"kind": "end", "s": 24.5, "e": 29.29, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t625.mp3'});
