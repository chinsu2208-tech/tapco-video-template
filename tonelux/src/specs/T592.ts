import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 592 (ca tự động 08/11/2026)
const W = "Tủ đồ đầy mà sáng nào cũng không biết mặc gì? Vấn đề thường nằm ở màu, không phải số lượng. Trước khi mua, hãy xác định da bạn thiên tông ấm hay lạnh. Ở ToneLux, bọn mình luôn bắt đầu từ bảng màu cá nhân, vì món nào đúng màu thì mặc được nhiều dịp, phối được nhiều lần. Gợi ý cho bạn: mở tủ đồ, chọn ba màu hợp nhất, rồi chỉ mua đồ thuộc nhóm màu đó. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.";

export default v('T592', 27.73, W, [
  {kind: "full", s: 0, e: 3.4, vid: "tlv/lib/v2/canh_13.mp4", tag: "Tủ đồ thông minh", title: "Tủ đầy mà vẫn\nkhông có đồ mặc?", hi: "không có đồ mặc?", cover: true},
  {kind: "full", s: 3.4, e: 6.2, vid: "tlv/lib/s2/canh_08.mp4", tag: "Vấn đề thật sự", title: "Nằm ở màu,\nkhông ở số lượng", hi: "không ở số lượng"},
  {kind: "full", s: 6.2, e: 10.2, vid: "tlv/lib/s2/canh_16.mp4", tag: "Trước khi mua", title: "Da bạn thiên\nấm hay lạnh?", hi: "ấm hay lạnh?"},
  {kind: "full", s: 10.2, e: 13.5, vid: "tlv/lib/v2/canh_18.mp4", tag: "Ở Tonelux", title: "Luôn bắt đầu từ\nbảng màu cá nhân", hi: "bảng màu cá nhân"},
  {kind: "seasons", s: 13.5, e: 17.2, title: "Đúng màu là\nmặc được nhiều dịp", hi: "nhiều dịp", sub: "phối được nhiều lần"},
  {kind: "steps", s: 17.2, e: 23.0, tag: "Gợi ý cho bạn", title: "Mua sắm\ntheo bảng màu", hi: "theo bảng màu", items: ["Mở tủ đồ\nxem lại từng món", "Chọn 3 màu\nhợp nhất", "Chỉ mua đồ\nthuộc nhóm màu đó"]},
  {kind: "end", s: 23.0, e: 27.73, title: "Comment tone da,\nTonelux xem giúp", hi: "xem giúp", sub: "Mua bộ test · giỏ hàng|Đặt lịch test tại studio"},
], {audio: 'voice/t592.mp3'});
