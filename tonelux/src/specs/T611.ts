import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 611 (ca tự động 15/11/2026)
const W = "Sinh nhật mẹ sắp tới, bạn vẫn chưa biết tặng gì? Nhiều mẹ tuổi 55 mặc đồ đẹp nhưng da vẫn xỉn, vì màu áo chưa hợp tông da. Mỗi người có nền da lạnh hoặc ấm, và màu hợp sẽ làm da sáng, rạng rỡ hơn. Ở ToneLux, bọn mình thường bắt đầu từ việc xem màu nào làm gương mặt mẹ tươi lên. Bạn thử đặt sát mặt mẹ một màu đỏ ấm và một màu đỏ hồng, xem màu nào làm da sáng hơn. Comment tuổi của mẹ, ToneLux giúp bạn chọn quà.";

export default v('T611', 30.25, W, [
  {"kind": "full", "s": 0, "e": 3.5, "cover": true, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Sinh nhật mẹ", "title": "Quà cho mẹ,\ntặng gì đây?", "hi": "tặng gì đây?"},
  {"kind": "full", "s": 3.5, "e": 6.9, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Mẹ tuổi 55", "title": "Mặc đồ đẹp\nmà da vẫn xỉn?", "hi": "da vẫn xỉn?"},
  {"kind": "full", "s": 6.9, "e": 9.2, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Lý do", "title": "Vì màu áo\nchưa hợp tông da", "hi": "chưa hợp tông da"},
  {"kind": "drape", "s": 9.2, "e": 14.6, "tag": "Nền da", "title": "Lạnh hay ấm,\nmàu hợp là sáng", "hi": "màu hợp là sáng", "items": ["Màu hợp · da sáng", "Màu lệch · da xỉn"], "cols": ["#c97b84", "#9a9a8e"]},
  {"kind": "full", "s": 14.6, "e": 19.8, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tại Tonelux", "title": "Tìm màu làm\ngương mặt tươi lên", "hi": "tươi lên"},
  {"kind": "tips", "s": 19.8, "e": 25.5, "tag": "Thử tại nhà", "title": "Đỏ ấm hay\nđỏ hồng?", "hi": "đỏ hồng?", "items": ["Đỏ ấm", "Đỏ hồng"], "cols": ["#c0392b", "#c2185b"]},
  {"kind": "end", "s": 25.5, "e": 30.25, "title": "Mẹ bạn\nbao nhiêu tuổi?", "hi": "bao nhiêu tuổi?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {"audio": "voice/t611.mp3"});
