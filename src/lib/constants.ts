export const SITE = {
  name: "Cơ Giới Thiên Ân",
  shortName: "Thiên Ân",
  slogan: "Vững nền móng – Dựng tương lai",
  tagline: "Xe cơ giới – Máy công trình",
  hotline: "0969273010",
  hotlineDisplay: "0969 273 010",
  email: "lienhe@cogioithienan.com",
  zalo: "0969273010",
  facebook: "https://www.facebook.com/profile.php?id=61596575926007",
  description:
    "Đơn vị hoạt động trong lĩnh vực xe cơ giới và máy công trình: thi công san lấp mặt bằng, cho thuê xe cuốc, phá dỡ công trình cũ, đục phá bê tông, thu mua xác nhà cũ, lắp đặt cống – ống nước và thi công làm đường.",
  intro:
    "Cơ Giới Thiên Ân xây dựng hình ảnh một đơn vị cơ giới mạnh mẽ, thực tế và đáng tin cậy. Thương hiệu lấy máy móc, tinh thần trách nhiệm và sự chỉn chu trong từng hạng mục làm trọng tâm.",
} as const;

export const PHOTOS = {
  site1: "/brand/hosonangluc/clean/may-cong-truong-1.webp",
  site2: "/brand/hosonangluc/clean/may-cong-truong-2.webp",
  excavators: "/brand/hosonangluc/clean/hai-may-cuoc-xanh.webp",
  demolition: "/brand/hosonangluc/clean/pha-do-hem.webp",
  concrete: "/brand/hosonangluc/clean/duc-pha-be-tong.webp",
  komatsu: "/brand/hosonangluc/clean/may-komatsu.webp",
} as const;

export const BRAND = {
  logo: "/brand/optimized/logo.webp",
  logoPhone: "/brand/optimized/logo-phone.webp",
  logoFlat: "/brand/optimized/logo.webp",
  cover: "/brand/optimized/cover.webp",
  avatar: "/brand/optimized/avatar.webp",
  decal: "/brand/optimized/decal.webp",
  /** Prefer compressed reel when available; falls back to original. */
  reel: "/brand/optimized/reel-720.mp4",
  reelFallback: "/brand/Co_Gioi_Thien_An_Reel_9x16.mp4",
  profilePdf: "/Co_Gioi_Thien_An_Ho_So_Nang_Luc_Thuong_Hieu.pdf",
} as const;

export const NAV = [
  { href: "/", label: "Trang chủ" },
  { href: "/dich-vu", label: "Dịch vụ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/cong-trinh", label: "Công trình" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

export function telHref(phone = SITE.hotline) {
  return `tel:${phone}`;
}

export function zaloHref(phone = SITE.zalo) {
  return `https://zalo.me/${phone}`;
}

export function facebookHref() {
  return SITE.facebook;
}
