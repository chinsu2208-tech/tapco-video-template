import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 598 (ca tự động 08/11/2026)
const W = "Bạn bảo aesthetic của mình là earth tone? Khoan đã. Earth tone cũng chia ấm và lạnh. Da ánh vàng hợp nâu caramel, olive, cam đất. Da ánh hồng hợp nâu mocha, rêu xám, đỏ gạch trầm. Ở ToneLux, bọn mình hay thấy nhiều bạn chọn đúng tông nâu mà lệch undertone nên da xỉn hẳn. Thử ngay: kề tờ giấy nâu cam và nâu hồng lên cằm, màu nào da sáng hơn là màu đó. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T598', 30.34, W, [
  {kind: "full", s: 0, e: 3.7, vid: "tlv/lib/v2/canh_18.mp4", tag: "Gen Z · earth tone", title: "Aesthetic của bạn\nlà earth tone?", hi: "earth tone?", cover: true},
  {kind: "full", s: 3.7, e: 6.1, vid: "tlv/lib/v2/canh_17.mp4", tag: "Khoan đã", title: "Earth tone cũng\ncó ấm và lạnh", hi: "ấm và lạnh"},
  {kind: "tips", s: 6.1, e: 9.6, tag: "Da ánh vàng", title: "Da ánh vàng\nhợp gam đất ấm", hi: "gam đất ấm", items: ["Nâu caramel", "Olive", "Cam đất"], cols: ["#a8693a", "#708238", "#c0603a"]},
  {kind: "tips", s: 9.6, e: 13.6, tag: "Da ánh hồng", title: "Da ánh hồng\nhợp gam đất lạnh", hi: "gam đất lạnh", items: ["Nâu mocha", "Rêu xám", "Đỏ gạch trầm"], cols: ["#6f5446", "#7d806a", "#8e3b32"]},
  {kind: "full", s: 13.6, e: 19.6, vid: "tlv/lib/v2/canh_14.mp4", tag: "Ở Tonelux", title: "Đúng tông nâu,\nlệch undertone", hi: "lệch undertone", line: "là da xỉn hẳn"},
  {kind: "drape", s: 19.6, e: 25.3, tag: "Thử ngay", title: "Nâu cam hay\nnâu hồng?", hi: "nâu hồng?", items: ["Da sáng hơn: chọn", "Da xỉn đi: bỏ qua"], cols: ["#c0703a", "#a8737a"]},
  {kind: "end", s: 25.3, e: 30.34, title: "Comment tone da,\nTonelux xem giúp", hi: "xem giúp", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t598.mp3'});
