import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 615 (ca tự động 15/11/2026)
const W = "Hẹn hò lần đầu mà chưa biết mặc áo màu gì? Nghe nè. Màu áo hợp mùa màu sẽ làm da sáng, mặt có thần, người ta nhớ bạn lâu hơn. Da tông ấm, mùa Xuân hoặc Thu, chọn màu kem, cam đất, xanh rêu. Da tông lạnh, mùa Hè hoặc Đông, chọn xanh dương, hồng tro, trắng tinh. Ở ToneLux, bọn mình hay nói, hợp tông trước, đẹp sau. Chốt một món thôi, áo đúng tông. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T615', 31.86, W, [
  {"kind": "full", "s": 0, "e": 4.6, "cover": true, "vid": "tlv/lib/s2/canh_17.mp4", "tag": "Hẹn hò lần đầu", "title": "Lần đầu gặp,\nmặc màu gì?", "hi": "mặc màu gì?"},
  {"kind": "full", "s": 4.6, "e": 7.6, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Nguyên tắc", "title": "Màu hợp mùa\nlàm da sáng", "hi": "da sáng"},
  {"kind": "drape", "s": 7.6, "e": 10.6, "tag": "Ấn tượng", "title": "Mặt có thần,\nnhớ bạn lâu hơn", "hi": "nhớ bạn lâu hơn", "items": ["Đúng mùa · có thần", "Lệch mùa · kém tươi"], "cols": ["#d97a5a", "#8e9aaf"]},
  {"kind": "tips", "s": 10.6, "e": 16.0, "tag": "Tông ấm · Xuân & Thu", "title": "Kem, cam đất,\nxanh rêu", "hi": "xanh rêu", "items": ["Kem", "Cam đất", "Xanh rêu"], "cols": ["#f1e4c8", "#c0643a", "#4a5d3a"]},
  {"kind": "tips", "s": 16.0, "e": 20.5, "tag": "Tông lạnh · Hạ & Đông", "title": "Xanh dương,\nhồng tro, trắng", "hi": "hồng tro, trắng", "items": ["Xanh dương", "Hồng tro", "Trắng tinh"], "cols": ["#2f5fa7", "#c9a0a8", "#ffffff"]},
  {"kind": "full", "s": 20.5, "e": 24.9, "vid": "tlv/lib/s2/canh_16.mp4", "tag": "Tại Tonelux", "title": "Hợp tông trước,\nđẹp sau", "hi": "đẹp sau"},
  {"kind": "full", "s": 24.9, "e": 27.2, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Chốt đơn giản", "title": "Một món thôi:\náo đúng tông", "hi": "áo đúng tông"},
  {"kind": "end", "s": 27.2, "e": 31.86, "title": "Bạn hợp\nmàu áo nào?", "hi": "màu áo nào?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {"audio": "voice/t615.mp3"});
