import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 595 (ca tự động 08/11/2026)
const W = "Mua khăn lụa đắt tiền xong, quàng lên mặt thấy xỉn hẳn? Mình cũng từng như vậy. Lỗi không nằm ở chiếc khăn, mà ở undertone. Khăn tông lạnh thì hợp da lạnh, khăn tông ấm thì hợp da ấm. Sai tông là da tự nhiên xỉn đi. Ở ToneLux, bọn mình luôn bảo khách thử màu sát cằm, dưới ánh sáng tự nhiên, rồi mới quyết định. Muốn mua khăn lụa hợp màu da thì nhớ điều này. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T595', 29.0, W, [
  {kind: "full", s: 0, e: 3.7, vid: "tlv/lib/v2/canh_11.mp4", tag: "Khăn lụa & undertone", title: "Khăn lụa đẹp\nmà mặt xỉn hẳn?", hi: "xỉn hẳn?", cover: true},
  {kind: "full", s: 3.7, e: 8.4, vid: "tlv/lib/s2/canh_10.mp4", tag: "Mình cũng từng thế", title: "Lỗi không ở khăn,\nmà ở undertone", hi: "undertone"},
  {kind: "tips", s: 8.4, e: 12.4, tag: "Undertone", title: "Khăn lạnh, da lạnh\nkhăn ấm, da ấm", hi: "khăn ấm, da ấm", items: ["Xanh lạnh", "Hồng lạnh", "Cam đào", "Vàng nghệ"], cols: ["#7a9cc6", "#e3a1b8", "#f4a68c", "#d9a43b"]},
  {kind: "drape", s: 12.4, e: 14.8, tag: "Sai tông", title: "Sai tông\nlà da xỉn đi", hi: "da xỉn đi", items: ["Đúng tông, da sáng", "Sai tông, da xỉn"], cols: ["#f4a68c", "#7a9cc6"]},
  {kind: "full", s: 14.8, e: 20.8, vid: "tlv/lib/s2/canh_05.mp4", tag: "Ở Tonelux", title: "Thử sát cằm,\nánh sáng tự nhiên", hi: "ánh sáng tự nhiên"},
  {kind: "full", s: 20.8, e: 23.9, vid: "tlv/lib/v2/canh_14.mp4", tag: "Trước khi mua khăn", title: "Nhớ thử\nmàu cạnh mặt", hi: "cạnh mặt"},
  {kind: "end", s: 23.9, e: 29.0, title: "Comment tone da,\nTonelux chọn giúp", hi: "chọn giúp", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t595.mp3'});
