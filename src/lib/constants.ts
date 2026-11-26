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
  introLead: "Đơn vị hoạt động trong lĩnh vực xe cơ giới và máy công trình.",
  introServices: [
    "Thi công san lấp mặt bằng",
    "Cho thuê xe cuốc, máy công trình",
    "Phá dỡ công trình cũ",
    "Đục phá bê tông",
    "Thu mua xác nhà cũ",
    "Lắp đặt cống – ống nước",
    "Thi công làm đường",
  ],
} as const;

/** Ảnh web tối ưu — một nguồn, không trùng file */
export const PHOTOS = {
  hero: "/media/photos/hero-banner.webp",
  site: "/media/photos/may-cong-truong.webp",
  excavators: "/media/photos/hai-may-cuoc-xanh.webp",
  demolition: "/media/photos/pha-do-hem.webp",
  concrete: "/media/photos/duc-pha-be-tong.webp",
  komatsu: "/media/photos/may-komatsu.webp",
  leveling: "/media/photos/san-lap-mat-bang.webp",
  scrapHouse: "/media/photos/thu-mua-xac-nha-cu.webp",
  waterPipe: "/media/photos/lap-dat-ong-nuoc.webp",
  project1: "/media/photos/congtrinh-1.webp",
  project2: "/media/photos/congtrinh-2.webp",
  project3: "/media/photos/congtrinh-3.webp",
  videoPoster1: "/media/posters/project-1.webp",
  videoPoster2: "/media/posters/project-2.webp",
  videoPoster3: "/media/posters/project-3.webp",
} as const;

export const VIDEOS = {
  reel: "/media/videos/reel.mp4",
  project1: "/media/videos/project-1.mp4",
  project2: "/media/videos/project-2.mp4",
  project3: "/media/videos/project-3.mp4",
} as const;

export const BRAND = {
  logo: "/media/brand/logo.webp",
  logoPhone: "/media/brand/logo-phone.webp",
  cover: "/media/brand/cover.webp",
  avatar: "/media/brand/avatar.webp",
  reel: VIDEOS.reel,
  profilePdf: "/docs/ho-so-nang-luc.pdf",
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
