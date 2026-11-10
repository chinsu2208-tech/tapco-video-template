import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 626 (ca tự động 11/11/2026)
const W = "Lần đầu được drape khăn màu, bạn có hồi hộp không? Mình thì có. Khi khăn tông hợp được đưa lên, gương mặt sáng hẳn, da đều màu hơn, ánh mắt cũng có thần. Đó là lúc tông lạnh hay ấm, độ sáng, độ trầm của bạn khớp với màu. Ở ToneLux, bọn mình thường để bạn tự nhìn gương trước khi nghe kết luận. Thử ngay một tấm khăn ấm và một tấm lạnh cạnh mặt, ánh sáng tự nhiên. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T626', 28.21, W, [
  {"kind": "full", "s": 0, "e": 4.4, "vid": "tlv/lib/s2/canh_10.mp4", "tag": "Lần đầu drape", "title": "Bạn có\nhồi hộp không?", "hi": "hồi hộp", "cover": true},
  {"kind": "full", "s": 4.4, "e": 6.25, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Khoảnh khắc", "title": "Khăn hợp tông\nđưa lên", "hi": "hợp tông"},
  {"kind": "drape", "s": 6.25, "e": 10.0, "tag": "Khác biệt", "title": "Gương mặt\nsáng hẳn", "hi": "sáng hẳn", "items": ["Da đều, có thần", "Da xỉn, kém tươi"], "cols": ["#d9867a", "#8e9aaf"]},
  {"kind": "steps", "s": 10.0, "e": 14.75, "tag": "Vì sao", "title": "Khi màu khớp\nvới bạn", "hi": "khớp", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\nđậm hay dịu"]},
  {"kind": "full", "s": 14.75, "e": 19.15, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Tại ToneLux", "title": "Tự nhìn gương\ntrước kết luận", "hi": "nhìn gương"},
  {"kind": "full", "s": 19.15, "e": 23.4, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Thử ngay", "title": "Một khăn ấm,\nmột khăn lạnh", "hi": "khăn lạnh", "line": "cạnh mặt, ánh sáng tự nhiên"},
  {"kind": "end", "s": 23.4, "e": 28.21, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t626.mp3'});
