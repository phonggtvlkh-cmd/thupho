// Ước lượng số phút đọc: khoảng 220 chữ mỗi phút.
export function readMinutes(body?: string): number {
	const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.ceil(words / 220));
}
