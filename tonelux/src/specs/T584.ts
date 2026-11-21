import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 584 (ca tự động 22/11/2026)
const W = "Da sáng mặc gì cũng đẹp? Chưa chắc đâu. Bí mật nằm ở độ tương phản giữa da, tóc và mắt. Da sáng, tóc đen, mắt đậm thì hợp màu rõ nét, sắc độ mạnh. Còn da sáng, tóc nâu nhạt, mắt nhạt thì hợp màu dịu, mềm. Mặc sai độ tương phản, người sẽ bị chìm hoặc bị lấn át. Ở ToneLux, bọn mình luôn xem độ tương phản trước. Thử ngay: chụp ảnh đen trắng, xem da, tóc, mắt cách nhau nhiều hay ít. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T584', 31.69, W, [
  {"kind": "full", "s": 0.0, "e": 3.15, "cover": true, "vid": "tlv/lib/s2/canh_10.mp4", "tag": "Lầm tưởng", "title": "Da sáng mặc gì\ncũng đẹp?", "hi": "cũng đẹp?"},
  {"kind": "steps", "s": 3.15, "e": 6.51, "tag": "Bí mật", "title": "Là độ\ntương phản", "hi": "tương phản", "items": ["Da\nsáng hay ngăm", "Tóc\nđen hay nâu nhạt", "Mắt\nđậm hay nhạt"]},
  {"kind": "drape", "s": 6.51, "e": 10.7, "tag": "Tóc đen, mắt đậm", "title": "Tương phản cao:\nmàu rõ nét", "hi": "màu rõ nét", "items": ["Màu rõ nét", "Màu quá dịu"], "cols": ["#b0182f", "#b48f86"]},
  {"kind": "drape", "s": 10.7, "e": 14.96, "tag": "Tóc nâu, mắt nhạt", "title": "Tương phản thấp:\nmàu dịu, mềm", "hi": "màu dịu, mềm", "items": ["Màu dịu, mềm", "Màu quá gắt"], "cols": ["#d9b8a8", "#1a1a1a"]},
  {"kind": "full", "s": 14.96, "e": 18.53, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Mặc sai", "title": "Sai tương phản,\nngười bị chìm", "hi": "bị chìm", "line": "hoặc bị màu lấn át"},
  {"kind": "full", "s": 18.53, "e": 21.75, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Tại ToneLux", "title": "Xem tương phản\ntrước tiên", "hi": "trước tiên"},
  {"kind": "full", "s": 21.75, "e": 26.66, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Thử ngay", "title": "Chụp ảnh\nđen trắng", "hi": "đen trắng", "line": "da, tóc, mắt cách nhau nhiều hay ít"},
  {"kind": "end", "s": 26.66, "e": 31.69, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t584.mp3'});
