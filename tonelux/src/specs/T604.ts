import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 604 (ca tự động 18/11/2026)
const W = "Mê màu runway Paris thu đông 2026 nhưng sợ mặc lên không hợp? Deep Winter hợp màu lạnh, trầm và đậm. Hãy chọn đỏ rượu, xanh navy, xanh lục bảo, tím mận, đen và trắng tinh. Còn cam đất, vàng mù tạt, be ấm thì chỉ nên ngắm. Ở ToneLux, bọn mình hay bảo khách thử màu sát mặt trước. Hôm nay hãy thử một chiếc áo đỏ rượu. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T604', 27.78, W, [
  {"kind": "full", "s": 0, "e": 5.4, "cover": true, "vid": "tlv/lib/s2/canh_17.mp4", "tag": "Paris thu đông 2026", "title": "Mê màu runway,\nsợ không hợp?", "hi": "không hợp?"},
  {"kind": "palette", "s": 5.4, "e": 8.06, "season": "dark-winter", "n": 10, "title": "Đông Đậm", "line": "Deep Winter: lạnh, trầm và đậm"},
  {"kind": "tips", "s": 8.06, "e": 13.32, "tag": "Nên chọn", "title": "Màu nên mặc\ncho Deep Winter", "hi": "Deep Winter", "items": ["Đỏ rượu", "Xanh navy", "Lục bảo", "Tím mận"], "cols": ["#6d1f2c", "#1b2a49", "#046a4f", "#5b2245"]},
  {"kind": "drape", "s": 13.32, "e": 16.88, "tag": "Chỉ nên ngắm", "title": "Gam ấm\nchỉ nên ngắm", "hi": "chỉ nên ngắm", "items": ["Đỏ rượu", "Cam đất"], "cols": ["#6d1f2c", "#c0643a"]},
  {"kind": "full", "s": 16.88, "e": 20.96, "vid": "tlv/lib/s2/canh_05.mp4", "tag": "Tại ToneLux", "title": "Thử màu\nsát mặt trước", "hi": "sát mặt trước"},
  {"kind": "full", "s": 20.96, "e": 23.34, "vid": "tlv/lib/v2/canh_14.mp4", "tag": "Hôm nay", "title": "Thử một áo\nđỏ rượu", "hi": "đỏ rượu"},
  {"kind": "end", "s": 23.34, "e": 27.78, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t604.mp3', season: 'dark-winter'});
