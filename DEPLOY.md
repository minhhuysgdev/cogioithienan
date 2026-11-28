# Deploy checklist — Cơ Giới Thiên Ân

## 1. Env trên Vercel
Copy từ `.env.example` và điền:

- `NEXT_PUBLIC_SITE_URL` — domain production (`https://cogioithienan.vn`)
- `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_GA_ID`

## 2. Sanity
1. Tạo project tại [sanity.io/manage](https://www.sanity.io/manage)
2. Gán `projectId` vào env
3. Mở `/studio` trên site, đăng nhập Sanity, nhập dịch vụ / sản phẩm / công trình / tin tức

Website vẫn chạy với nội dung seed nếu chưa cấu hình Sanity.

## 3. Resend
1. Tạo API key tại [resend.com](https://resend.com)
2. Verify domain gửi mail (hoặc dùng `onboarding@resend.dev` để test)
3. Form `/lien-he` gửi về `CONTACT_TO_EMAIL`

Không có `RESEND_API_KEY`: form vẫn trả OK và log server (demo).

## 4. Deploy Vercel
```bash
npx vercel
```
hoặc Import Git repo trên [vercel.com](https://vercel.com) → Framework: Next.js → Add env → Deploy.

## 5. Domain & SEO
- Trỏ domain về Vercel
- Domain chính Vercel: `cogioithienan.vn` (www redirect về non-www)
- Google Search Console: chỉ giữ `https://cogioithienan.vn/sitemap.xml`
- Gắn GA4 qua `NEXT_PUBLIC_GA_ID`
