# Template babyfresh

Template video 9:16 (1080x1920, 30fps) cho lăn nách **Babyfresh** (serum lá trầu không), tạo 05/11/2026.
Style: tím lavender + xanh lá trầu, sạch, uy tín, cute, hợp cả nam và nữ học sinh. Không dùng nơ, hồng hay ngọc trai (bản hồng coquette trong `Coquette.tsx` chỉ để tham khảo, Sếp đã bỏ).

## Cấu trúc
- `src/Fresh.tsx`: component chính (đang dùng), gồm bảng màu `P`, các cảnh và icon motion.
- `src/Coquette.tsx`: chứa type `Scene`/`VideoData` (dùng chung) và bản hồng cũ.
- `src/make.ts`: hàm `v()` và `makeCaps()`. Phụ đề chia theo số ký tự trên độ dài voice.
- `src/specs/CMxx.ts`: mỗi video là 1 spec. Thêm spec mới thì import vào `src/data.ts`.
- `public/bf/*.jpg`: 9 ảnh UGC lăn nách (720x1280).
- `public/bfv/cNN.mp4`: 12 clip lăn nách (720p, 5 giây, không tiếng).
- `public/voice/`: mp3 tải về lúc dựng (không commit).

## Loại cảnh (`kind`)
| kind | Mô tả |
|---|---|
| `full` | Clip (`vid`) hoặc ảnh (`img`) phủ kín khung, tiêu đề trên, icon motion (`fx`, nhãn `fxl`), `brand: true` hiện pill Babyfresh |
| `cover` | Khung ảnh lớn 790x900 + tiêu đề + `tag` + chip `sub` |
| `tip` | Bước `n` (huy hiệu tròn tím) + tiêu đề + khung ảnh lớn + 1 icon `fx` + chip `note` |
| `check` | Thẻ checklist 3 dòng (`items`) có tick xanh |
| `end` | Ảnh + CTA + pill Babyfresh + `sub` (dòng "Mẹo chung, dùng theo hướng dẫn trên nhãn sản phẩm") |

`hi` = cụm từ trong tiêu đề được tô xanh lá. Tiêu đề tự co cỡ chữ nếu dòng dài; nên giữ mỗi dòng không quá 20 ký tự.

## Icon motion (`fx`)
- `shield`: khiên tím, sóng lan, tick vẽ lại → bảo vệ, an toàn, kín nắp, tự tin.
- `dry`: gió quét + giọt nước bốc hơi → khô thoáng, thấm nhanh.
- `serum`: giọt rơi loang thành màng mỏng + lông vũ → serum mỏng nhẹ, không bết dính.
- `leaf`: lá trầu xoay quanh sparkle → lá trầu không, lành tính, gọn gàng.

## Kho ảnh/clip (chỉ lăn nách Babyfresh)
Ảnh `public/bf/`: balo (cất chai vào balo tím), buoi-sang (cầm chai trên giường), ghe-da (ghế đá sân trường), hanh-lang, lop-hoc, mo-hop (cầm hộp + chai), nhat-ky, nhat-ky-b (bàn học tối), xe-buyt (balo trên xe buýt).
Clip `public/bfv/`: c01 lăn nách thật (cảnh "lăn vừa đủ"), c02/c03 bỏ chai vào balo be, c06 bàn học, c10 ban công trường, c12 balo trên xe buýt, c13 sân trường, c14 bàn học + balo, c15 balo tím mở, c16 cầm chai trên giường, c17 bàn học, c18 bàn học đèn tối.
Đã loại các clip chai xịt hồng (không phải lăn nách).

## Quy tắc nội dung
- Chỉ nói thông tin có trên nhãn: lá trầu không, serum mỏng nhẹ, thấm nhanh, không bết dính, ngừa mùi 1–3 ngày (chỉ khi kịch bản có), cách dùng (lau khô, lăn vừa đủ, chờ khô rồi mặc áo).
- Không hứa công dụng khác, không trước-sau, không phán xét người xem.
- Vùng an toàn TikTok: chữ chính y 250–1500, x 90–880; phụ đề y≈1590; không đặt chữ ở cột icon phải (x>880, y 1090–1900).

## Dựng
```
npm install
B=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome   # hoặc node -e "console.log(require('playwright').chromium.executablePath())"
npx remotion still src/index.ts CM35 out/a.png --frame=300 --browser-executable=$B
npx remotion render src/index.ts CM35 out/raw.mp4 --concurrency=2 --browser-executable=$B
ffmpeg -i out/raw.mp4 -c:v libx264 -preset veryfast -crf 22 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart out/Babyfresh_CM35.mp4
```
Mỗi video khoảng 30 giây, render mất khoảng 5–7 phút trên máy 2 nhân.
