# Template tonelux

Video 9:16 (1080x1920, 30fps) cho **Tonelux**: tư vấn personal color (hệ 12 mùa) + bán bộ test màu (thẻ màu 12 mùa, vải drape) trên TikTok Shop. Tạo 07/11/2026.
Phong cách: **tạp chí thời trang hiện đại** — masthead TONELUX chữ Didone cực lớn, chữ nhỏ in hoa giãn, số trang, đường kẻ mảnh. Nền ngà `#f4efe7` (hoặc đen espresso khi `dark`), màu sắc chỉ xuất hiện dưới dạng khối màu tràn mép / thẻ Pantone → đa màu mà vẫn sang.
Khách hàng: nữ dân văn phòng có thu nhập, yêu cái đẹp bản thân (có cả khách nam). Giọng: sang trọng, chuyên môn, gần gũi.

## Cấu trúc
- `src/theme.ts`: 12 mùa (`SEASONS`, mỗi mùa 8 màu + 3 đặc điểm), `FAMILY` (4 nhóm), `RAINBOW`, font (Playfair Display, Cormorant Garamond, Be Vietnam Pro — đều có tiếng Việt).
- `src/Tonelux.tsx`: các cảnh. `src/make.ts`: type `Scene`, `v(id, dur, script, scenes, {season, dark, audio})`, `makeCaps()`.
- `src/specs/*.ts` → import vào `src/data.ts`. Mẫu: `ToneOverviewDemo` (tổng quan, nền ngà), `ToneAutumnDemo` (1 mùa, nền tối), `ToneNamTest` (cảnh quay thật full khung).

## Loại cảnh (`kind`)
| kind | Mô tả | Trường dùng |
|---|---|---|
| `full` | Ảnh/clip thật phủ kín 9:16, gradient dưới, khung chỉ mảnh, dải màu nhỏ, tiêu đề serif trắng ở `ty` (mặc định 1150) | `vid`/`img`, `tag`, `title`, `hi`, `line`, `cover` (true = masthead TONELUX lớn kiểu bìa, dùng cho cảnh mở đầu), `ty` |
| `hook` | Bìa đồ hoạ: masthead + dải màu tràn mép (12 mùa hoặc 8 màu của `season`) | `tag`, `title`, `hi`, `sub`, `n`, `img` |
| `steps` | Mục lục 01·02·03 số lớn | `items` (3, dạng "Tiêu đề\nmô tả") |
| `seasons` | Lưới 4 nhóm × 3 mùa tràn mép | `title`, `sub` |
| `palette` | Chân dung 1 mùa: nửa trái dải màu, tên mùa khổng lồ + thông số + 8 ô màu | `season`, `n`, `line`, `img` |
| `drape` | So sánh chia đôi: ✓ Đúng mùa / ✕ Lệch tone, chữ "vs" | `items` [hợp, chưa hợp], `cols` [màu hợp, màu lệch], `img`/`img2` |
| `tips` | 2×2 thẻ Pantone (tên + mã hex) | `items` (≤4), `cols` |
| `product` | Khối màu + quạt thẻ màu + chú thích đánh số (bộ test) | `items` (3), `img` |
| `end` | Bìa sau: masthead, CTA, dải 12 ô màu. Nhiều nút: ngăn bằng `|` trong `sub` | `title`, `hi`, `sub` |

`hi` phải nằm nguyên văn trong `title` (in nghiêng). Tiêu đề 2–3 dòng, mỗi dòng ≤ 18 ký tự (tự co chữ nếu dài).
CTA chuẩn: `sub: 'Mua bộ test · giỏ hàng|Đặt lịch test tại studio'`.

## Kho b-roll
Danh mục: `clips.json` (loại: drape, tu-van, tai-lieu, the-mau, makeup, phan-tich, studio; kèm danh sách clip KHÔNG dùng vì dính chữ/logo).
Tải: `bash scripts/fetch-broll.sh` → `public/tlv/lib/<s2|v2>/canh_XX.mp4` (1080x1920). Không commit clip lên git (có mặt khách).
Dùng trong spec: `vid: 'tlv/lib/s2/canh_05.mp4'`. Clip ngắn hơn cảnh thì tự lặp; nên chọn clip dài ≥ cảnh.

## Quy tắc nội dung
- Chỉ nói kiến thức personal color chung (12 mùa, nhiệt độ/độ sáng/độ trong, thử drape). Không bịa giá, khuyến mãi, số năm kinh nghiệm, review khách. Không dùng: rẻ, giá tốt, deal, sale, bình dân.
- Vùng an toàn TikTok: chữ chính y 250–1500, x 90–880; phụ đề y≈1590; không đặt chữ ở x>880 khi y 1090–1900.

## Dựng
```
npm install && bash scripts/fetch-broll.sh
B=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome
npx remotion still src/index.ts ToneNamTest out/a.png --frame=100 --browser-executable=$B
npx remotion render src/index.ts ToneNamTest out/raw.mp4 --concurrency=2 --browser-executable=$B
ffmpeg -i out/raw.mp4 -c:v libx264 -preset veryfast -crf 22 -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart out/final.mp4
```
Luồng tự động (sheet content_planner_make_v3, tab personalcolor): xem Project doc `tonelux-workflow-make-video.md`.
