# tapco-video-template

Template Remotion (scrapbook doodle, 1080x1920, 30fps) cho video TikTok TAPCo.

- `src/Video4.tsx` — composition `TipsXit` (video Tips, 7 cảnh, caption theo mốc giờ voice)
- `src/Video3.tsx` — `ReviewTips3` (review + clip) và `Carousel` (ảnh 1080x1350)
- `public/f/` — font Baloo2 + Patrick Hand (hỗ trợ tiếng Việt)

Render: `npx remotion render TipsXit out/video.mp4 --concurrency=2`

Pipeline: Sheet "Content Pipeline TAPCo" → Make scenario 1 (kịch bản) → scenario 2 (voice) → tác vụ Claude định kỳ dựng video từ dòng "Voice xong".
Voice mp3 và ảnh được tải về `public/dl/` mỗi lần chạy, không commit.
