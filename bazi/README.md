# bazi-pack — dựng video Bát tự vẽ tay từ script + mp3 (Remotion, 1080x1920)
Cài: npm install. Font thư pháp: đặt QuangNinhThuphap.ttf vào public/fonts/. Giọng đọc: public/bazi-voice.mp3.
Align: python3 tools/align_dp.py public/bazi-voice.mp3 script-bazi.txt src/baziScriptCap.json --num 8   (xem BaziScript.tsx để biết cấu trúc json: clauses, phrases)
Render nhanh (15fps stop-motion, máy 2 nhân ~30 phút/77s): npx remotion render src/index.ts BaziScript15 out/v15.mp4 --concurrency=2 --browser-executable=<chrome>
Ghép: ffmpeg -i out/v15.mp4 -r 30 -c:v libx264 -crf 18 -pix_fmt yuv420p out/final.mp4
BaziScript.tsx là TẬP MẪU (9 cảnh S1..S9, mốc giây lấy từ json). Tập mới: copy thành Episode, viết lại cảnh theo script, dùng lại primitive trong BaziHand.tsx.
Dữ liệu trong cảnh là minh hoạ, không phải lá số thật. Có dòng chân trang "tham khảo theo mệnh lý truyền thống".

## Chạy trên máy khác (Windows/Mac/Linux)
Cần: Node 18+, ffmpeg, Python 3 + numpy (pip install numpy).
1. Giải nén, mở terminal trong thư mục bazi-pack, chạy: npm install
2. Xem thử: npm run studio  (chọn BaziScript15)
3. Render: npx remotion render src/index.ts BaziScript15 out/v15.mp4 --concurrency=4   (tăng concurrency theo số nhân CPU)
4. Ghép 30fps: ffmpeg -i out/v15.mp4 -r 30 -c:v libx264 -crf 18 -pix_fmt yuv420p out/final.mp4
Lần đầu Remotion tự tải Chrome, cần mạng.
Font QuangNinhThuphap.ttf: dùng cho video của chính chủ; nếu bán gói cho người khác, cần kiểm tra bản quyền font.

## Bản 1992 (comment thật) — `Bazi1992`
- `src/Bazi1992.tsx`: 10 cảnh, thẻ comment Threads thật (`COMMENTS`, `MASK=true` che handle), vùng an toàn TikTok (SAFE/SafeCtx trong `BaziHand.tsx`).
- `src/cap1992.json`: timestamp lời đọc (mẫu), tạo lại bằng `python tools/align_dp.py` từ mp3 + script.
- Composition: `Bazi1992` (30fps) và `Bazi1992-15` (15fps, render stop-motion rồi ffmpeg lên 30fps).
- Cần đặt `public/s1992.mp3` (không commit). Render: `npx remotion render src/index.ts Bazi1992-15 out/v15.mp4 --concurrency=2`
- Đổi bài: sửa `COMMENTS`, bảng `SCENES`, nội dung từng cảnh, chạy lại align.
