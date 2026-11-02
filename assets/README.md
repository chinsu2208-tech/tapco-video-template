# Kho ảnh/clip đặt sẵn (cache cho ca dựng video)

Tên file = ID ở cột A tab 'Kho ảnh' (Content Pipeline TAPCo), ví dụ `IMG028.jpg`, `CLIP021.mp4`.

- Ảnh: jpg 1080px chiều rộng, dọc 9:16 để phủ full khung (khoảng 300-500KB).
- Clip: mp4 h264 720p, cắt 6-8 giây đầu (khoảng 1-2MB).
- Ca dựng video lấy file ở đây trước (`ls assets/<ID>.*`); chỉ khi thiếu mới tải từ Drive, rồi nén và lưu vào đây.
- Sếp có thể kéo thả ảnh/clip gốc vào thư mục này trên web GitHub (Add file > Upload files). Tên file gốc cũng được: ca dựng sẽ đối chiếu cột E (mô tả = tên file bỏ đuôi) để ghép ID và đổi tên.
