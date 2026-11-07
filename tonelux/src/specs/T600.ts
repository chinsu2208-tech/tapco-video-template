import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 600 (ca tự động 08/11/2026)
const W = "Mặc áo trắng mà da xỉn hoặc mặt nhợt nhạt? Do bạn chọn sai sắc trắng. Trắng tinh có nền lạnh, sáng gắt, hợp da tông lạnh, nhưng dễ làm da ấm bị vàng. Trắng kem ngả vàng nhẹ, làm da ấm trông hài hòa, khỏe hơn. Trắng ngà trầm và dịu, hợp da ấm hoặc da trầm, nhìn mềm mại. Ở ToneLux, bọn mình thường bảo khách đặt từng áo sát cằm để so. Da sáng đều là sắc trắng hợp. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T600', 29.77, W, [
  {kind: "full", s: 0, e: 4.8, vid: "tlv/lib/s2/canh_05.mp4", tag: "Áo trắng & tone da", title: "Áo trắng\nmà da xỉn?", hi: "da xỉn?", cover: true, line: "do chọn sai sắc trắng"},
  {kind: "full", s: 4.8, e: 10.1, vid: "tlv/lib/v2/canh_10.mp4", tag: "Trắng tinh", title: "Trắng tinh:\nnền lạnh, sáng gắt", hi: "sáng gắt", line: "hợp da lạnh, dễ làm da ấm bị vàng"},
  {kind: "tips", s: 10.1, e: 14.2, tag: "Trắng kem", title: "Da ấm:\ntrắng kem hài hoà", hi: "hài hoà", items: ["Trắng kem", "Kem ngả vàng nhẹ"], cols: ["#f5ecd2", "#efdcae"]},
  {kind: "tips", s: 14.2, e: 18.7, tag: "Trắng ngà", title: "Trầm và dịu,\nnhìn mềm mại", hi: "mềm mại", items: ["Trắng tinh", "Trắng kem", "Trắng ngà"], cols: ["#ffffff", "#f5ecd2", "#e9dfc9"]},
  {kind: "full", s: 18.7, e: 23.0, vid: "tlv/lib/s2/canh_16.mp4", tag: "Ở Tonelux", title: "Đặt từng áo\nsát cằm để so", hi: "sát cằm"},
  {kind: "full", s: 23.0, e: 24.9, vid: "tlv/lib/v2/canh_11.mp4", tag: "Kết quả", title: "Da sáng đều\nlà sắc trắng hợp", hi: "sắc trắng hợp"},
  {kind: "end", s: 24.9, e: 29.77, title: "Comment tone da,\nTonelux tư vấn", hi: "tư vấn", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t600.mp3'});
