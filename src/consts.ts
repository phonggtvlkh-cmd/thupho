// Thông tin chung của blog. Đổi tên và mô tả ở đây là cả trang đổi theo.
export const SITE_NAME = "thupho"; // chữ hiện ở logo
export const SITE_TITLE = "thupho - blog"; // tên hiện trên thẻ trình duyệt
export const SITE_DESCRIPTION =
	"Ghi chép thật về kinh doanh, AI và làm việc một mình. Ngắn, có ví dụ cụ thể, đọc xong áp dụng được.";

// Chủ đề của bài viết. Khoá bên trái dùng trong frontmatter (category: kd).
export const CATEGORIES = {
	kd: "Kinh doanh",
	ai: "Dùng AI",
	solo: "Làm một mình",
	note: "Ghi chép",
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
