import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 588 (ca tự động 18/11/2026)
const W = "Sắp Tết mà chưa biết mặc áo dài màu nào cho hợp? Bí quyết nằm ở tông da, ấm hay lạnh. Da ngả vàng, hợp đỏ cam, vàng mật, xanh rêu. Da ngả hồng, hợp đỏ cherry, hồng lạnh, xanh navy. Ở ToneLux, chuyên gia drape trực tiếp từng màu lên da bạn, rồi chọn luôn bộ áo dài, váy, phụ kiện cho cả tuần Tết. Thử ngay: đặt tay cạnh vải trắng, xem gân tay xanh hay xanh lục. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T588', 29.5, W, [
  {"kind": "full", "s": 0, "e": 3.4, "cover": true, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Tết này", "title": "Áo dài Tết\nmặc màu nào?", "hi": "màu nào?"},
  {"kind": "full", "s": 3.4, "e": 6.24, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Bí quyết", "title": "Tông da\nấm hay lạnh", "hi": "ấm hay lạnh"},
  {"kind": "tips", "s": 6.24, "e": 9.74, "tag": "Da ngả vàng", "title": "Da vàng hợp\ngam ấm", "hi": "gam ấm", "items": ["Đỏ cam", "Vàng mật", "Xanh rêu"], "cols": ["#d9532c", "#d9a03a", "#5b6b3a"]},
  {"kind": "tips", "s": 9.74, "e": 13.54, "tag": "Da ngả hồng", "title": "Da hồng hợp\ngam lạnh", "hi": "gam lạnh", "items": ["Đỏ cherry", "Hồng lạnh", "Xanh navy"], "cols": ["#a3123a", "#d98fb0", "#1b2a49"]},
  {"kind": "full", "s": 13.54, "e": 17.16, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Tại ToneLux", "title": "Drape trực tiếp\ntừng màu", "hi": "từng màu"},
  {"kind": "full", "s": 17.16, "e": 20.8, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Trọn tuần Tết", "title": "Áo dài, váy,\nphụ kiện", "hi": "phụ kiện", "line": "chọn đồng bộ theo mùa màu"},
  {"kind": "full", "s": 20.8, "e": 24.88, "vid": "tlv/lib/s2/canh_05.mp4", "tag": "Thử ngay", "title": "Đặt tay cạnh\nvải trắng", "hi": "vải trắng", "line": "gân tay xanh hay xanh lục?"},
  {"kind": "end", "s": 24.88, "e": 29.5, "title": "Tết này bạn\nhợp màu nào?", "hi": "hợp màu nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t588.mp3'});
