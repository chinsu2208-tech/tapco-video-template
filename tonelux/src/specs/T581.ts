import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 581 (ca tự động 22/11/2026)
const W = "Cùng một thỏi son, lên môi bạn thì xỉn, lên môi bạn bè lại sáng bừng? Không phải do môi bạn đâu. Do undertone. Da tông ấm hợp son cam, đỏ gạch, san hô. Da tông lạnh hợp hồng mận, đỏ lạnh, berry. Ở ToneLux, bọn mình còn xét thêm độ sáng và độ trầm của từng mùa màu. Thử ngay: áp son lên da tay, nếu da trông sáng và đều hơn là hợp. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T581', 30.92, W, [
  {"kind": "full", "s": 0.0, "e": 5.08, "cover": true, "vid": "tlv/lib/v2/canh_10.mp4", "tag": "Son môi", "title": "Cùng một thỏi son,\nsao khác màu?", "hi": "sao khác màu?"},
  {"kind": "full", "s": 5.08, "e": 7.81, "vid": "tlv/lib/v2/canh_11.mp4", "tag": "Sự thật", "title": "Không phải môi,\nmà là undertone", "hi": "undertone"},
  {"kind": "tips", "s": 7.81, "e": 11.85, "tag": "Da tông ấm", "title": "Son ấm\ncho da ấm", "hi": "da ấm", "items": ["Cam", "Đỏ gạch", "San hô"], "cols": ["#e0733d", "#a8432c", "#f27b6b"]},
  {"kind": "tips", "s": 11.85, "e": 15.28, "tag": "Da tông lạnh", "title": "Son lạnh\ncho da lạnh", "hi": "da lạnh", "items": ["Hồng mận", "Đỏ lạnh", "Berry"], "cols": ["#9b3f63", "#b0182f", "#7a1f4b"]},
  {"kind": "steps", "s": 15.28, "e": 20.38, "tag": "Tại ToneLux", "title": "Xét thêm\nsáng và trầm", "hi": "sáng và trầm", "items": ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\ndịu hay trong"]},
  {"kind": "full", "s": 20.38, "e": 25.48, "vid": "tlv/lib/v2/canh_08.mp4", "tag": "Thử ngay", "title": "Quẹt son lên tay,\nda sáng là hợp", "hi": "da sáng là hợp"},
  {"kind": "end", "s": 25.48, "e": 30.92, "title": "Tone da của bạn\nlà gì?", "hi": "là gì?", "sub": "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t581.mp3'});
