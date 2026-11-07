import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 596 (ca tự động 08/11/2026)
const W = "Sắp kỷ niệm mà chưa biết tặng bạn gái gì? Thử tặng cô ấy một buổi tư vấn màu sắc cá nhân. Mỗi người có một tông da riêng, ấm, lạnh hoặc trung tính. Hợp đúng tông, da trông sáng và khỏe hơn. Ở ToneLux, bọn mình thường thấy các bạn gái rất bất ngờ khi lần đầu biết màu nào thực sự tôn mình. Mẹo nhỏ: so tờ giấy trắng cạnh mặt dưới ánh sáng tự nhiên, xem da ngả vàng hay hồng. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T596', 29.55, W, [
  {kind: "full", s: 0, e: 2.9, vid: "tlv/lib/s2/canh_13.mp4", tag: "Quà kỷ niệm", title: "Chưa biết tặng\nbạn gái gì?", hi: "bạn gái gì?", cover: true},
  {kind: "full", s: 2.9, e: 6.0, vid: "tlv/lib/v2/canh_08.mp4", tag: "Gợi ý quà", title: "Một buổi tư vấn\nmàu sắc cá nhân", hi: "màu sắc cá nhân"},
  {kind: "tips", s: 6.0, e: 10.1, tag: "Mỗi người một tông", title: "Ấm, lạnh\nhay trung tính?", hi: "trung tính?", items: ["Ấm", "Lạnh", "Trung tính"], cols: ["#c98b5e", "#8fa3c7", "#b9a99a"]},
  {kind: "drape", s: 10.1, e: 12.9, tag: "Hợp đúng tông", title: "Đúng tông,\nda sáng khỏe", hi: "da sáng khỏe", items: ["Da sáng, khỏe hơn", "Da xỉn, kém tươi"], cols: ["#c98b5e", "#8fa3c7"]},
  {kind: "full", s: 12.9, e: 19.0, vid: "tlv/lib/v2/canh_10.mp4", tag: "Ở Tonelux", title: "Lần đầu biết\nmàu tôn mình", hi: "màu tôn mình"},
  {kind: "full", s: 19.0, e: 24.6, vid: "tlv/lib/v2/canh_14.mp4", tag: "Mẹo nhỏ", title: "Tờ giấy trắng\ncạnh mặt", hi: "cạnh mặt", line: "da ngả vàng hay hồng?"},
  {kind: "end", s: 24.6, e: 29.55, title: "Bạn thuộc\ntông da nào?", hi: "tông da nào?", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t596.mp3'});
