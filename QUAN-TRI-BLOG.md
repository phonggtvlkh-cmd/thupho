# Quản trị thupho

Trang quản trị được đặt tại `/admin/` và dùng Decap CMS. Bài viết vẫn được lưu dưới dạng Markdown trong `src/content/blog/`; ảnh tải lên nằm trong `public/uploads/`.

## Quy trình xuất bản

1. Người viết mở `/admin/` và đăng nhập bằng GitHub.
2. Chọn **Bài viết mới**, nhập nội dung rồi lưu bản nháp.
3. Decap tạo một nhánh và pull request trên GitHub.
4. Quản trị viên xem lại, chuyển trạng thái và xuất bản.
5. GitHub hợp nhất thay đổi vào `main`; Cloudflare triển khai lại blog.

## Việc cần làm một lần để đăng nhập hoạt động

1. Repo GitHub `phonggtvlkh-cmd/thupho` chứa mã nguồn trên nhánh `main`.
2. Kết nối repo với Cloudflare Workers để tự triển khai khi `main` thay đổi.
3. OAuth đăng nhập qua Worker `https://thupho-cms-auth.thupho.workers.dev`; Client ID và Client Secret được lưu dưới dạng Cloudflare secrets, không nằm trong repo.
4. Nếu URL thật khác `https://thupho.thupho.workers.dev`, sửa `site_url` và `display_url` trong `public/admin/config.yml`.

## Phân quyền

- Quản trị viên repo có thể duyệt và hợp nhất bài viết.
- Người có quyền ghi repo có thể soạn và xuất bản theo workflow.
- `open_authoring: true` cho phép cộng tác viên dùng GitHub fork để gửi bài mà không có quyền ghi trực tiếp vào repo.
