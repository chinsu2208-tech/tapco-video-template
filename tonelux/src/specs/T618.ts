import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 618 (ca tự động 11/11/2026)
const W = "Đi làm mà tủ đồ toàn màu lộn xộn? Thử quy tắc 3 màu. Một màu chủ đạo, một màu phụ, một màu nhấn. Tông da ấm hợp be, nâu, olive. Tông da lạnh hợp xám, xanh navy, trắng tinh. Chuyên gia ToneLux hay chỉ: chọn màu chủ đạo trước, chiếm khoảng một nửa outfit. Áp dụng ngay: chọn một màu hợp tone làm áo hoặc quần, rồi thêm một màu nhấn nhỏ ở phụ kiện. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T618', 30.03, W, [
  {"kind": "full", "s": 0, "e": 3.15, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Công sở", "title": "Tủ đồ toàn màu\nlộn xộn?", "hi": "lộn xộn?", "cover": true},
  {"kind": "steps", "s": 3.15, "e": 7.95, "tag": "Quy tắc 3 màu", "title": "Chỉ cần\n3 màu là đủ", "hi": "3 màu", "items": ["Chủ đạo\nchiếm một nửa", "Màu phụ\nđi kèm", "Màu nhấn\nđiểm nhỏ"]},
  {"kind": "tips", "s": 7.95, "e": 10.45, "tag": "Da tông ấm", "title": "Da ấm hợp\ngam đất", "hi": "gam đất", "items": ["Be", "Nâu", "Olive"], "cols": ["#d8c3a5", "#8a5a3b", "#6b7f3a"]},
  {"kind": "tips", "s": 10.45, "e": 13.85, "tag": "Da tông lạnh", "title": "Da lạnh hợp\ngam lạnh", "hi": "gam lạnh", "items": ["Xám", "Xanh navy", "Trắng tinh"], "cols": ["#9a9ea3", "#1b2a49", "#f5f5f2"]},
  {"kind": "full", "s": 13.85, "e": 19.0, "vid": "tlv/lib/s2/canh_13.mp4", "tag": "Chuyên gia mách", "title": "Màu chủ đạo\nchiếm một nửa", "hi": "một nửa", "line": "chọn màu chủ đạo trước"},
  {"kind": "full", "s": 19.0, "e": 25.0, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Áp dụng ngay", "title": "Thêm màu nhấn\nở phụ kiện", "hi": "màu nhấn"},
  {"kind": "end", "s": 25.0, "e": 30.03, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t618.mp3'});
