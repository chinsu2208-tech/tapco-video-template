import {v} from '../make';

// Sheet content_planner_make_v3 · tab personalcolor · dòng 652 (ca tự động 25/11/2026) · Nhìn lại màu sắc năm 2026
const W = 'Bức ảnh chị thích nhất năm 2026, chị đang mặc màu gì? Thử nhìn lại nhé. Rất nhiều chị chọn đúng bức có làn da trông sáng và khỏe nhất. Đó thường là màu hợp tông da, lạnh hay ấm, sáng hay trầm. Ở ToneLux, bọn mình hay thấy màu hợp sẽ làm gương mặt rạng rỡ, không bị xỉn hay mệt. Gợi ý cho chị: mở album, chọn ba bức thích nhất, xem chúng chung tông nào. Đó là manh mối đầu tiên cho bảng màu của chị. Comment tone da của bạn, ToneLux giúp bạn xem hợp màu nào.';

export default v('T652', 33.9, W, [
  {kind: 'full', s: 0, e: 4.8, cover: true, vid: 'tlv/lib/s2/canh_15.mp4', tag: 'Nhìn lại một năm', title: 'Ảnh đẹp nhất 2026,\nchị mặc màu gì?', hi: 'chị mặc màu gì?'},
  {kind: 'full', s: 4.8, e: 10.6, vid: 'tlv/lib/v2/canh_14.mp4', tag: 'Thử nhìn lại', title: 'Bức thích nhất\nlà da sáng khỏe', hi: 'da sáng khỏe'},
  {kind: 'steps', s: 10.6, e: 15.0, tag: 'Màu hợp tông', title: 'Thường là\nmàu hợp tông', hi: 'màu hợp tông', items: ['Nhiệt độ\nlạnh hay ấm', 'Độ sáng\nsáng hay đậm', 'Độ trầm\nđậm hay dịu']},
  {kind: 'full', s: 15.0, e: 20.9, vid: 'tlv/lib/v2/canh_08.mp4', tag: 'Màu hợp', title: 'Gương mặt\nrạng rỡ hơn', hi: 'rạng rỡ hơn', line: 'không xỉn, không mệt'},
  {kind: 'full', s: 20.9, e: 25.9, vid: 'tlv/lib/v2/canh_18.mp4', tag: 'Gợi ý', title: 'Chọn 3 bức\nthích nhất', hi: 'thích nhất', line: 'xem chúng chung tông nào'},
  {kind: 'seasons', s: 25.9, e: 28.7, tag: 'Manh mối đầu tiên', title: 'Cho bảng màu\ncủa chị', hi: 'của chị'},
  {kind: 'end', s: 28.7, e: 33.9, title: 'Bảng màu\ncủa chị là gì?', hi: 'là gì?', sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'},
], {audio: 'voice/t652.mp3'});
