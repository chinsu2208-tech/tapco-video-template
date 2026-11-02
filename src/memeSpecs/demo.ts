import type {MemeSpec} from '../MemeVideo';
export const demo: MemeSpec = {
  voice: 'dl/voice14.mp3',
  caps: [[0.0, 3.83, "Đừng vội mua son hay kem nền chỉ vì nhìn mạch máu cổ tay thấy xanh hay xanh lá nha"], [3.83, 5.85, "Mẹo này chỉ là bước gợi ý đầu thôi"], [5.85, 6.45, "Muốn chắc hơn"], [6.45, 8.28, "bạn thử thêm ba phép trước khi chốt đơn"], [8.28, 8.42, "Một"], [8.42, 10.81, "nhìn mạch máu cổ tay dưới ánh sáng tự nhiên"], [10.81, 10.95, "Hai"], [10.95, 13.36, "so sánh viền trắng và viền vàng đặt gần mặt"], [13.36, 15.54, "xem cái nào nhìn da sáng và dễ chịu hơn"], [15.54, 17.11, "Ba, quẹt swatch thật ở hàm"], [17.11, 17.95, "rồi xem ngoài sáng"], [17.95, 20.56, "Ba phép cùng cho một hướng thì yên tâm hơn nhiều"], [20.56, 21.35, "đỡ mua xong để đó"], [21.35, 22.19, "Đi học hay đi date"], [22.19, 23.92, "chọn đồ hợp với mình vẫn nên thử thật"], [23.92, 25.18, "Nghía giỏ hàng bên dưới nha"]],
  scenes: [
    {s:0,e:5.85,bg:'pink',photo:'dl/i022.jpg',mode:'full',title:['ĐỪNG VỘI MUA SON','CHỈ VÌ MẠCH XANH!'],titleY:330,note:'mẹo chỉ là bước đầu thôi nha'},
    {s:5.85,e:13.36,bg:'lime',photo:'dl/i025.jpg',mode:'card',title:['THỬ THÊM 3 PHÉP'],titleY:300,list:['Ánh sáng tự nhiên','Viền trắng vs viền vàng','Quẹt swatch thử'],listY:1080},
    {s:13.36,e:21.35,bg:'yellow',photo:'dl/i016.jpg',mode:'full',title:['3 PHÉP CÙNG','1 HƯỚNG = CHỐT!'],titleY:330},
    {s:21.35,e:26.3,bg:'violet',mode:'none',title:['ĐI HỌC HAY ĐI DATE','THỬ THẬT VẪN HƠN'],titleY:600,note:'nghía giỏ hàng bên dưới nha'},
  ],
};
