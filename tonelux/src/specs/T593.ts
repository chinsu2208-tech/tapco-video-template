import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 593 (ca tự động 08/11/2026)
const W = "Sắp đi Hàn mùa thu, chưa biết mặc màu gì chụp với lá phong đỏ? Đỏ cam rất rực, nên bạn cần chọn màu theo tông da. Da ấm hợp be, nâu caramel, xanh rêu. Da lạnh hợp xám khói, đỏ rượu, xanh navy. Ở ToneLux, bọn mình hay chỉ một mẹo: đưa áo sát mặt, màu nào làm da sáng và đều hơn thì chọn màu đó. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T593', 29.6, W, [
  {kind: "full", s: 0, e: 5.0, vid: "tlv/lib/v2/canh_14.mp4", tag: "Du lịch Hàn mùa thu", title: "Chụp cùng lá phong\nmặc màu gì?", hi: "mặc màu gì?", cover: true},
  {kind: "full", s: 5.0, e: 8.9, vid: "tlv/lib/v2/canh_11.mp4", tag: "Lá phong đỏ cam", title: "Rất rực, nên chọn\ntheo tông da", hi: "theo tông da"},
  {kind: "tips", s: 8.9, e: 13.0, tag: "Da ấm", title: "Da ấm\nhợp gam đất", hi: "gam đất", items: ["Be", "Nâu caramel", "Xanh rêu"], cols: ["#d8c3a5", "#a8693a", "#5b6b3a"]},
  {kind: "tips", s: 13.0, e: 16.9, tag: "Da lạnh", title: "Da lạnh\nhợp gam trầm mát", hi: "trầm mát", items: ["Xám khói", "Đỏ rượu", "Xanh navy"], cols: ["#8d8f94", "#6d1f2e", "#1b2a49"]},
  {kind: "full", s: 16.9, e: 20.9, vid: "tlv/lib/s2/canh_18.mp4", tag: "Mẹo Tonelux", title: "Đưa áo\nsát mặt", hi: "sát mặt"},
  {kind: "drape", s: 20.9, e: 24.5, tag: "So nhanh", title: "Da sáng, đều hơn\nlà màu hợp", hi: "màu hợp", items: ["Da sáng, đều màu", "Da xỉn, kém tươi"], cols: ["#a8693a", "#8d8f94"]},
  {kind: "end", s: 24.5, e: 29.6, title: "Bạn thuộc\ntông da nào?", hi: "tông da nào?", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t593.mp3'});
