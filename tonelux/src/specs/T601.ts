import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 601 (ca tự động 08/11/2026)
const W = "Sắp cưới mà vẫn lo, son này có hợp váy không, hoa cầm tay có lệch tông da không. Thật ra, mọi thứ hài hòa hay không nằm ở tông lạnh hay ấm, độ sáng và độ trầm của bạn. Ví dụ da tông ấm thường hợp hoa đào, cam san hô, trắng kem. Da tông lạnh thường lên đẹp hơn với hồng lạnh, tím nhạt, trắng tinh. Đó là lý do cùng một chiếc váy, người này rạng rỡ, người kia lại hơi xỉn. Gợi ý nhỏ cho bạn, trước khi chốt hoa và son, hãy đặt từng màu cạnh mặt dưới ánh sáng tự nhiên, xem da sáng lên hay xám đi. Ngày cưới chỉ có một lần, nên mình muốn bạn đẹp đúng với chính mình. Bạn thuộc tông nào, để lại tone da hoặc mùa màu của bạn ở phần bình luận nhé.";

export default v('T601', 50.05, W, [
  {kind: "full", s: 0, e: 6.4, vid: "tlv/lib/v2/canh_08.mp4", tag: "Dành cho cô dâu", title: "Son, hoa cưới\ncó hợp tông da?", hi: "hợp tông da?", cover: true},
  {kind: "steps", s: 6.4, e: 13.9, tag: "3 tiêu chí", title: "Hài hoà hay không\nnằm ở đây", hi: "nằm ở đây", items: ["Tông da\nấm hay lạnh", "Độ sáng\nnhạt hay đậm", "Độ trầm\nđậm hay dịu"]},
  {kind: "tips", s: 13.9, e: 19.3, tag: "Da tông ấm", title: "Da ấm hợp\nđào, san hô", hi: "đào, san hô", items: ["Hồng đào", "Cam san hô", "Trắng kem"], cols: ["#f4a68c", "#f27a5e", "#f5ecd2"]},
  {kind: "tips", s: 19.3, e: 23.9, tag: "Da tông lạnh", title: "Da lạnh hợp\nhồng, tím nhạt", hi: "tím nhạt", items: ["Hồng lạnh", "Tím nhạt", "Trắng tinh"], cols: ["#e3a1b8", "#c3b1e1", "#ffffff"]},
  {kind: "drape", s: 23.9, e: 29.7, tag: "Cùng một chiếc váy", title: "Người rạng rỡ,\nngười hơi xỉn", hi: "hơi xỉn", items: ["Đúng tông, rạng rỡ", "Lệch tông, hơi xỉn"], cols: ["#f4a68c", "#c3b1e1"]},
  {kind: "full", s: 29.7, e: 33.3, vid: "tlv/lib/v2/canh_10.mp4", tag: "Trước khi chốt hoa, son", title: "Đặt từng màu\ncạnh mặt", hi: "cạnh mặt"},
  {kind: "full", s: 33.3, e: 38.9, vid: "tlv/lib/v2/canh_14.mp4", tag: "Ánh sáng tự nhiên", title: "Da sáng lên\nhay xám đi?", hi: "xám đi?"},
  {kind: "full", s: 38.9, e: 43.5, vid: "tlv/lib/v2/canh_11.mp4", tag: "Ngày cưới", title: "Đẹp đúng\nvới chính mình", hi: "chính mình"},
  {kind: "end", s: 43.5, e: 50.05, title: "Bạn thuộc\nmùa màu nào?", hi: "mùa màu nào?", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t601.mp3'});
