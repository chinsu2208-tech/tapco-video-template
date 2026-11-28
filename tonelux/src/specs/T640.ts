import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 640 (ca tự động 29/11/2026) · Màu của năm 2027
const W = "Màu của năm 2027 sắp ra, bạn chạy theo ngay hay đợi? Đừng vội. Màu hợp mốt chưa chắc hợp da bạn. Điều quan trọng là tông lạnh hay ấm, sáng hay trầm. Ở ToneLux, bọn mình thường bảo khách: màu hot nằm trong bảng màu của bạn thì mặc ngay. Không nằm trong đó thì dùng làm phụ kiện, để xa mặt một chút. Thử đặt màu sát mặt dưới ánh sáng tự nhiên, da tươi lên là hợp. Bạn chọn chạy theo hay đợi? Comment cho ToneLux biết nhé.";

export default v('T640', 28.0, W, [
  {"kind": "full", "s": 0, "e": 4.6, "vid": "tlv/lib/s2/canh_08.mp4", "tag": "Xu hướng", "title": "Màu năm 2027\nsắp ra mắt", "hi": "sắp ra mắt", "cover": true},
  {"kind": "full", "s": 4.6, "e": 7.8, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Đừng vội", "title": "Hợp mốt chưa chắc\nhợp da bạn", "hi": "hợp da bạn"},
  {"kind": "steps", "s": 7.8, "e": 11.1, "tag": "Điều quan trọng", "title": "Lạnh hay ấm,\nsáng hay trầm", "hi": "sáng hay trầm", "items": ["Nhiệt độ\nlạnh hay ấm", "Độ sáng\nsáng hay đậm", "Độ trầm\ntrầm hay trong"]},
  {"kind": "drape", "s": 11.1, "e": 16.1, "tag": "Màu hot", "title": "Có trong\nbảng màu không?", "hi": "bảng màu", "items": ["Trong bảng màu", "Ngoài bảng màu"], "cols": ["#c19a6b", "#8e9aaf"]},
  {"kind": "full", "s": 16.1, "e": 19.7, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Không hợp?", "title": "Dùng làm\nphụ kiện", "hi": "phụ kiện", "line": "để xa mặt một chút"},
  {"kind": "full", "s": 19.7, "e": 23.7, "vid": "tlv/lib/s2/canh_17.mp4", "tag": "Thử ngay", "title": "Thử sát mặt,\nánh sáng tự nhiên", "hi": "ánh sáng tự nhiên", "line": "da tươi lên là hợp"},
  {"kind": "end", "s": 23.7, "e": 28.0, "title": "Chạy theo\nhay đợi?", "hi": "hay đợi?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t640.mp3'});
