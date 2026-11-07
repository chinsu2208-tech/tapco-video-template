import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 597 (ca tự động 08/11/2026)
const W = "Sắp gặp đối tác mà chưa biết phối blazer với áo trong thế nào? Bí quyết là chọn theo mùa màu. Mùa xuân và mùa thu, tông ấm, hãy thử blazer be hoặc nâu với áo kem. Mùa hè, tông lạnh mềm, chọn blazer xám xanh với áo trắng ngà. Mùa đông, tông lạnh rõ, blazer đen hoặc navy với áo trắng tinh. Ở ToneLux, bọn mình luôn chọn màu áo trong gần mặt trước. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T597', 30.94, W, [
  {kind: "full", s: 0, e: 3.9, vid: "tlv/lib/s2/canh_12.mp4", tag: "Blazer công sở", title: "Gặp đối tác,\nphối blazer sao?", hi: "phối blazer sao?", cover: true},
  {kind: "seasons", s: 3.9, e: 6.4, title: "Bí quyết:\nchọn theo mùa màu", hi: "theo mùa màu"},
  {kind: "tips", s: 6.4, e: 12.1, tag: "Xuân & Thu · ấm", title: "Blazer be, nâu\nvới áo kem", hi: "áo kem", items: ["Be", "Nâu", "Kem"], cols: ["#d8c3a5", "#7b4a2d", "#f3e5c8"]},
  {kind: "full", s: 12.1, e: 16.7, vid: "tlv/lib/s2/canh_18.mp4", tag: "Hạ · lạnh mềm", title: "Blazer xám xanh\nvới áo trắng ngà", hi: "áo trắng ngà"},
  {kind: "tips", s: 16.7, e: 22.1, tag: "Đông · lạnh rõ", title: "Đen, navy\nvới trắng tinh", hi: "trắng tinh", items: ["Đen", "Xanh navy", "Trắng tinh"], cols: ["#111111", "#1b2a49", "#ffffff"]},
  {kind: "full", s: 22.1, e: 25.6, vid: "tlv/lib/s2/canh_15.mp4", tag: "Ở Tonelux", title: "Chọn áo trong\ngần mặt trước", hi: "gần mặt trước"},
  {kind: "end", s: 25.6, e: 30.94, title: "Bạn thuộc\nmùa màu nào?", hi: "mùa màu nào?", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t597.mp3'});
