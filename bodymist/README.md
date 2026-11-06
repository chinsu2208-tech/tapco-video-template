# Template bodymist

Template video 9:16 (1080x1920, 30fps) cho **dòng xịt body Baby** (5 mùi, bản limited, nhỏ gọn bỏ túi, lưu hương 2–4 tiếng), tạo 06/11/2026.
Style: ngọt ngào, kẹo ngọt, đáng yêu, hợp đi date và mùa lễ. Mỗi mùi có bảng màu + họa tiết + tính cách riêng.
Brand theo nhãn chai: **Summer Lab** (sửa `BRAND` trong `src/theme.ts` nếu cần). Chai thật: 30ml, bơm trong suốt, nhãn mascot gấu.

## 5 mùi (`src/theme.ts`)
| key | Tên | Hương / tính cách | Màu | Họa tiết |
|---|---|---|---|---|
| `puffy` | Baby Puffy | hương phấn em bé | xanh baby (theo nhãn) | mây |
| `soft` | Baby Soft | hoa ngọt mềm, nhẹ nhàng, nữ tính | vàng bơ (theo nhãn) | hoa rơi |
| `night` | Baby Night | ngọt sâu, ấm áp, quyến rũ | tím lavender, nền đêm + sao vàng | trăng + sao |
| `angel` | Baby Angel | tiểu thư sang chảnh, hơi điệu đà | hồng phấn + kem ngọc trai (theo nhãn) | ngọc trai + nơ |
| `joy` | Baby Joy | kẹo nho đáng yêu | hồng kẹo + tím nho (theo nhãn) | chùm nho + kẹo |
| `mix` | (bản 5 mùi) | | hồng kẹo | tim + kẹo nhiều màu |

## Ảnh (`public/bm/`)
Nguồn: Drive thư mục BDM30 (https://drive.google.com/drive/folders/12aI6q-UDPq8ROke_AwOoBvEMGcYbYwUn).
- `bottle-<mùi>.png`: chai thật đã tách nền, dựng thẳng, cao 1000px. Component `Bottle` dùng mặc định (truyền `drawn` để dùng chai vẽ dự phòng).
- `sp-<mùi>.jpg`: ảnh gốc nền trắng.
- `u-*.jpg` (720x1280): 7 ảnh UGC, **đều là chai Baby Angel** — chỉ dùng cho video/cảnh Angel hoặc cảnh chung (đi date): `u-selfie-rap` (selfie rạp phim), `u-rap-phim` (cầm chai trước rạp), `u-ca-phe`, `u-xe-buyt`, `u-da-ngoai` (picnic, chai trên khăn), `u-vuon-nang` (xịt cổ tay), `u-nu-sinh-xit` (xịt ngoài sân).
- 5 clip Kling (.mov, >10MB) trong thư mục BDM30_UGC_SP chưa đưa vào (connector Drive giới hạn 10MB); nén về 720p rồi đặt vào `public/bmv/` để dùng ở cảnh `full` (`vid`).

## 2 chế độ
- **Bản 5 mùi**: `theme: 'mix'`. Mỗi cảnh `scent` có `scent: 'puffy'…` tự đổi sang màu mùi đó. Mẫu: `src/specs/MistLineupDemo.ts` (33s).
- **Bản 1 mùi**: `theme: 'night'` (hoặc mùi khác), cả video theo màu mùi đó. Mẫu: `src/specs/MistNightDemo.ts` (23s), `src/specs/MistAngelDemo.ts` (24s, dùng ảnh UGC thật). Đổi mùi chỉ cần đổi theme + chữ.

## Loại cảnh (`kind`)
| kind | Mô tả |
|---|---|
| `hook` | Tiêu đề lớn + `tag`; bản mix = 5 chai xòe quạt, bản 1 mùi = 1 chai lớn đang xịt sương |
| `lineup` | Dàn 5 chai, lần lượt từng chai nhảy lên xịt, tên mùi bên dưới |
| `scent` | Tên mùi chữ viết tay + `title` (mô tả hương) + chai lớn xịt + 3 chip tính cách + thẻ thoại `line`; `n` = số thứ tự (1/5) |
| `features` | 3 thẻ icon động: nhỏ gọn bỏ túi / lưu hương 2–4 tiếng / bản limited (đổi chữ qua `items`) |
| `occasion` | Chai giữa + tối đa 4 sticker dịp dùng (mặc định: Đi date, Mùa lễ, Làm quà, Đi chơi; đổi qua `items`) |
| `quiz` | "Bạn là Baby nào?": 5 thẻ tính cách, hợp kêu gọi comment |
| `full` | Ảnh/clip thật phủ kín khung (`img`/`vid`), pill brand trên cùng, tiêu đề nửa dưới (y=`ty`, mặc định 1180) để không che mặt/chai |
| `end` | Dàn chai + tem LIMITED xoay + CTA + pill brand + `sub` |

`hi` = cụm từ tô màu trong tiêu đề. Mỗi dòng tiêu đề nên ≤ 20 ký tự (tự co chữ nếu dài).
Có `img` ở cảnh `hook`, `scent`, `occasion` thì ảnh sản phẩm thật thay cho chai minh hoạ.

## Phụ đề
Tham số script của `v()`:
- chuỗi = phụ đề chia theo cả voice (dùng khi có mp3 thật, giống babyfresh);
- mảng 1 câu / cảnh = phụ đề khớp đúng từng cảnh (dùng cho bản demo không voice).
`audio` để `undefined` = bản xem thử không tiếng.

## Quy tắc nội dung
- Chỉ dùng thông tin sản phẩm đã có: 5 mùi + mô tả ở bảng trên, nhỏ gọn bỏ túi, bản limited, lưu hương 2–4 tiếng.
- Không hứa thêm công dụng, không so sánh brand khác.
- Vùng an toàn TikTok: chữ chính y 250–1500, x 90–880; phụ đề y≈1590; không đặt chữ ở cột phải x>880, y 1090–1900.

## Dựng
```
npm install
B=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome
npx remotion still src/index.ts MistNightDemo out/a.png --frame=150 --browser-executable=$B
npx remotion render src/index.ts MistNightDemo out/raw.mp4 --concurrency=2 --browser-executable=$B
ffmpeg -i out/raw.mp4 -c:v libx264 -preset veryfast -crf 22 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart out/MistNightDemo.mp4
```
Thêm spec mới: tạo `src/specs/<ID>.ts`, import vào `src/data.ts`.
