# Cơ Giới Thiên Ân

Website doanh nghiệp cho thuê máy & thi công cơ giới.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion
- Sanity CMS (`/studio`)
- Resend (form liên hệ)
- Deploy: Vercel

## Chạy local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

Nội dung seed chạy được ngay **không cần** Sanity. Khi có `NEXT_PUBLIC_SANITY_PROJECT_ID`, trang sẽ ưu tiên dữ liệu từ CMS.

## Brand assets

Nằm trong `public/brand/` (logo, cover, decal, reel).

## Deploy

Xem [DEPLOY.md](./DEPLOY.md).
