import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 648 (ca tự động 25/11/2026) · Mua son ở quầy miễn thuế theo bảng màu
const W = 'Sắp bay, đứng giữa quầy miễn thuế, thỏi son nào cũng đẹp lấp lánh. Coi chừng, đèn quầy đang làm màu giúp bạn. Cốt lõi là tông lạnh hay ấm của da. Da hợp tông nào thì son cùng tông mới lên màu sạch. Ở ToneLux, bọn mình hay bảo khách chụp sẵn bảng màu cá nhân vào điện thoại. Giơ thỏi son cạnh mặt, so với bảng, rồi mới quyết định. Mua mỹ phẩm theo bảng màu, ví tiền đỡ khóc. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.';

export default v('T648', 30.4, W, [
  {kind: 'full', s: 0, e: 5.3, cover: true, vid: 'tlv/lib/v2/canh_08.mp4', tag: 'Trước chuyến bay', title: 'Quầy miễn thuế,\nson nào cũng đẹp', hi: 'son nào cũng đẹp'},
  {kind: 'full', s: 5.3, e: 8.3, vid: 'tlv/lib/v2/canh_10.mp4', tag: 'Coi chừng', title: 'Đèn quầy đang\nlàm màu giúp bạn', hi: 'làm màu giúp bạn'},
  {kind: 'tips', s: 8.3, e: 14.3, tag: 'Cốt lõi', title: 'Son cùng tông\nmới lên màu sạch', hi: 'lên màu sạch', items: ['Da lạnh · Hồng lạnh', 'Da ấm · Cam đào'], cols: ['#d6587a', '#e8875a']},
  {kind: 'full', s: 14.3, e: 18.7, vid: 'tlv/lib/v2/canh_18.mp4', tag: 'Mẹo nhỏ', title: 'Chụp bảng màu\nvào điện thoại', hi: 'vào điện thoại'},
  {kind: 'full', s: 18.7, e: 22.4, vid: 'tlv/lib/v2/canh_13.mp4', tag: 'Trước khi mua', title: 'Son cạnh mặt,\nso rồi mới chọn', hi: 'so rồi mới chọn'},
  {kind: 'product', s: 22.4, e: 25.6, tag: 'Bộ test tại nhà', title: 'Mua theo bảng màu,\nví đỡ khóc', hi: 'ví đỡ khóc', items: ['Thẻ màu 12 mùa', 'Vải drape chuẩn màu', 'Tự test tại nhà']},
  {kind: 'end', s: 25.6, e: 30.4, title: 'Son nào\nhợp tông bạn?', hi: 'hợp tông bạn?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t648.mp3'});
