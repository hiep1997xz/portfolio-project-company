import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLng, languages } from "./utils/i18n/settting";

// Set ngôn ngữ mặc định nếu không có cookie
export function middleware(request: NextRequest) {
  let lng = request.cookies.get(cookieName)?.value; // Lấy từ cookie

  if (!lng) {
    lng = acceptLanguage.get(request.headers.get("Accept-Language")) || fallbackLng;
  }

  // Kiểm tra xem ngôn ngữ có hợp lệ không
  if (!languages.includes(lng as any)) {
    lng = fallbackLng;
  }

  // Đảm bảo response có cookie lưu ngôn ngữ
  const response: any = NextResponse.next();
  response.cookies.set(cookieName, lng, {
    path: "/",
    maxAge: 365 * 24 * 60 * 60, // 1 năm
  });

  return response;
}

// Không cần matcher vì middleware chạy trên tất cả request
export const config = {
  matcher: "/:path*",
};
