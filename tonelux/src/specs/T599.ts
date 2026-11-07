import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 599 (ca tự động 08/11/2026)
const W = "Da sạm nắng, tóc bạc dần, tone màu của bạn có đổi không? Tông lạnh hay ấm nằm ở nền da, nên nắng chỉ làm da tối đi, không đổi tông gốc. Tóc bạc thì tương phản trên gương mặt giảm, nên màu quá đậm dễ làm bạn trông nặng nề. Ở ToneLux, bọn mình thường gợi ý chọn màu mềm và sáng hơn một bậc. Thử ngay trước gương. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T599', 25.3, W, [
  {kind: "full", s: 0, e: 4.5, vid: "tlv/lib/s2/canh_17.mp4", tag: "Tone màu & tuổi", title: "Da sạm, tóc bạc:\ntone màu có đổi?", hi: "có đổi?", cover: true},
  {kind: "full", s: 4.5, e: 7.0, vid: "tlv/lib/v2/canh_10.mp4", tag: "Nền da", title: "Tông lạnh hay ấm\nnằm ở nền da", hi: "nằm ở nền da"},
  {kind: "full", s: 7.0, e: 9.8, vid: "tlv/lib/v2/canh_14.mp4", tag: "Da sạm nắng", title: "Chỉ tối đi,\nkhông đổi tông gốc", hi: "không đổi tông gốc"},
  {kind: "full", s: 9.8, e: 12.2, vid: "tlv/lib/s2/canh_13.mp4", tag: "Tóc bạc", title: "Tóc bạc làm\ntương phản giảm", hi: "tương phản giảm"},
  {kind: "drape", s: 12.2, e: 14.9, tag: "Lưu ý", title: "Màu quá đậm\ndễ nặng nề", hi: "nặng nề", items: ["Mềm, sáng hơn", "Quá đậm, nặng nề"], cols: ["#b9a3c9", "#2a2230"]},
  {kind: "full", s: 14.9, e: 17.3, vid: "tlv/lib/s2/canh_18.mp4", tag: "Ở Tonelux", title: "Gợi ý từ\nchuyên viên", hi: "chuyên viên"},
  {kind: "tips", s: 17.3, e: 20.9, tag: "Thử ngay trước gương", title: "Màu mềm,\nsáng hơn một bậc", hi: "sáng hơn một bậc", items: ["Hồng phấn", "Xanh xám nhạt", "Be sữa", "Oải hương"], cols: ["#f2c4ce", "#a9b8c6", "#eadbc8", "#c3b1e1"]},
  {kind: "end", s: 20.9, e: 25.3, title: "Comment tone da,\nTonelux tư vấn", hi: "tư vấn", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t599.mp3'});
