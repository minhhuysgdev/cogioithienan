import { PHOTOS, VIDEOS } from "./constants";

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
};

export type Product = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  category: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  description: string;
  image: string;
  year: string;
  video?: string;
  poster?: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  publishedAt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "san-lap-mat-bang",
    title: "Thi công san lấp mặt bằng",
    shortTitle: "San lấp",
    summary: "San gạt, tạo mặt bằng phục vụ chuẩn bị và triển khai công trình.",
    description:
      "Cơ Giới Thiên Ân thực hiện san gạt, đắp đất và tạo mặt bằng theo cao độ yêu cầu, phục vụ chuẩn bị và triển khai các hạng mục công trình dân dụng, nhà xưởng và hạ tầng.",
    highlights: [
      "San gạt, đắp đất theo cao độ yêu cầu",
      "Phù hợp dân dụng, nhà xưởng, hạ tầng",
      "Bàn giao mặt bằng sẵn sàng thi công",
    ],
    image: PHOTOS.leveling,
  },
  {
    slug: "cho-thue-xe-cuoc",
    title: "Cho thuê xe cuốc, máy công trình",
    shortTitle: "Thuê máy",
    summary: "Máy móc phục vụ nhu cầu thi công theo hạng mục.",
    description:
      "Cho thuê xe cuốc và máy công trình theo ca hoặc theo dự án. Máy được bảo dưỡng định kỳ, có thể kèm vận hành viên để đảm bảo tiến độ và an toàn hiện trường.",
    highlights: [
      "Thuê theo ca hoặc theo dự án",
      "Máy bảo dưỡng định kỳ",
      "Có thể kèm vận hành viên",
    ],
    image: PHOTOS.site,
  },
  {
    slug: "dap-pha-nha-cua",
    title: "Đập phá nhà cửa, công trình cũ",
    shortTitle: "Phá dỡ",
    summary: "Phá dỡ công trình cũ theo phạm vi công việc thống nhất.",
    description:
      "Nhận đập phá nhà cửa và công trình cũ theo phạm vi đã thống nhất. Triển khai kiểm soát an toàn, thu dọn hiện trường và bàn giao mặt bằng sẵn sàng cho hạng mục tiếp theo.",
    highlights: [
      "Phá dỡ theo phạm vi đã thống nhất",
      "Kiểm soát an toàn hiện trường",
      "Thu dọn và bàn giao mặt bằng",
    ],
    image: PHOTOS.demolition,
  },
  {
    slug: "duc-pha-be-tong",
    title: "Đục phá bê tông",
    shortTitle: "Đục bê tông",
    summary: "Hỗ trợ các hạng mục đục phá, tháo dỡ kết cấu bê tông.",
    description:
      "Hỗ trợ đục phá, tháo dỡ kết cấu bê tông bằng thiết bị chuyên dụng. Phù hợp cải tạo, phá dỡ cục bộ và các hạng mục cần kiểm soát rung động tại công trường.",
    highlights: [
      "Thiết bị chuyên dụng cho kết cấu cứng",
      "Phù hợp cải tạo / phá dỡ cục bộ",
      "Kiểm soát rung động tại công trường",
    ],
    image: PHOTOS.concrete,
  },
  {
    slug: "thu-mua-xac-nha-cu",
    title: "Thu mua xác nhà cũ",
    shortTitle: "Thu mua nhà cũ",
    summary: "Tiếp nhận nhu cầu thu mua, xử lý nhà cũ và vật tư thu hồi.",
    description:
      "Tiếp nhận thu mua xác nhà cũ, hỗ trợ tháo dỡ và xử lý vật tư thu hồi theo thỏa thuận minh bạch, giúp chủ đầu tư rút ngắn thời gian chuẩn bị mặt bằng mới.",
    highlights: [
      "Thu mua xác nhà cũ minh bạch",
      "Hỗ trợ tháo dỡ và xử lý vật tư",
      "Rút ngắn thời gian chuẩn bị mặt bằng",
    ],
    image: PHOTOS.scrapHouse,
  },
  {
    slug: "lap-dat-cong-ong-nuoc",
    title: "Thi công lắp đặt cống, ống nước",
    shortTitle: "Cống – ống nước",
    summary: "Thực hiện các hạng mục lắp đặt cống và đường ống nước.",
    description:
      "Thi công lắp đặt cống thoát nước và đường ống nước theo yêu cầu công trình. Đảm bảo độ dốc, mối nối và hoàn trả mặt bằng đúng kỹ thuật.",
    highlights: [
      "Lắp đặt cống thoát nước và ống nước",
      "Đảm bảo độ dốc và mối nối kỹ thuật",
      "Hoàn trả mặt bằng sau thi công",
    ],
    image: PHOTOS.waterPipe,
  },
  {
    slug: "thi-cong-lam-duong",
    title: "Thi công làm đường",
    shortTitle: "Làm đường",
    summary: "Thi công các hạng mục đường theo yêu cầu công trình.",
    description:
      "Nhận thi công các hạng mục đường nội bộ, đường bê tông và đường phục vụ công trình. Phạm vi, khối lượng và tiến độ được trao đổi, thống nhất trước khi triển khai.",
    highlights: [
      "Đường nội bộ / đường bê tông",
      "Thống nhất phạm vi và khối lượng trước",
      "Triển khai theo tiến độ đã chốt",
    ],
    image: PHOTOS.excavators,
  },
];

export const PRODUCTS: Product[] = [
  {
    slug: "xe-cuoc-ihi",
    title: "Xe cuốc IHI",
    summary: "Máy cuốc gọn, phù hợp công trình trong hẻm và mặt bằng hẹp.",
    description:
      "Xe cuốc IHI phục vụ đào móng, phá dỡ và san gạt tại công trình dân dụng, đặc biệt các mặt bằng hẹp, hẻm phố.",
    image: PHOTOS.demolition,
    category: "Máy công trình",
  },
  {
    slug: "xe-cuoc-komatsu",
    title: "Xe cuốc Komatsu",
    summary: "Máy công trình phục vụ thi công và phá dỡ.",
    description:
      "Xe cuốc Komatsu hỗ trợ các hạng mục thi công cơ giới, phá dỡ và san lấp theo nhu cầu từng công trình.",
    image: PHOTOS.komatsu,
    category: "Máy công trình",
  },
  {
    slug: "may-duc-pha",
    title: "Máy đục phá bê tông",
    summary: "Thiết bị đục phá kết cấu bê tông, đá tại công trường.",
    description:
      "Thiết bị đục phá bê tông gắn trên máy cuốc, hỗ trợ phá dỡ kết cấu cứng và chuẩn bị mặt bằng thi công.",
    image: PHOTOS.concrete,
    category: "Thiết bị",
  },
  {
    slug: "may-cuoc-cong-truong",
    title: "Máy cuốc công trường",
    summary: "Đội máy phục vụ san lấp, đào đắp và hạ tầng.",
    description:
      "Các dòng máy cuốc tại công trường Thiên Ân, sẵn sàng cho thuê và thi công theo hạng mục.",
    image: PHOTOS.excavators,
    category: "Máy công trình",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "dao-dat-san-gat-dia-hinh",
    title: "Đào đất – san gạt địa hình",
    location: "Công trường",
    summary: "Máy cuốc đào đất, đổ đất và san gạt theo địa hình thực tế.",
    description:
      "Hạng mục đào đất và san gạt trên hiện trường. Triển khai bằng máy cuốc, kiểm soát khối lượng đào đắp và hoàn thiện mặt bằng phục vụ các bước thi công tiếp theo.",
    image: PHOTOS.project1,
    poster: PHOTOS.videoPoster1,
    video: VIDEOS.project1,
    year: "2025",
  },
  {
    slug: "dao-mong-nha-pho",
    title: "Đào móng nhà phố",
    location: "Khu vực đô thị",
    summary: "Đào móng, chuẩn bị nền trong mặt bằng hẹp giữa các công trình liền kề.",
    description:
      "Thi công đào móng nhà phố tại khu vực đô thị: đào đất, xử lý hiện trường và hỗ trợ hạng mục nền móng trong không gian hạn chế giữa các nhà liền kề.",
    image: PHOTOS.project2,
    poster: PHOTOS.videoPoster2,
    video: VIDEOS.project2,
    year: "2025",
  },
  {
    slug: "duc-pha-be-tong-trong-hem",
    title: "Đục phá bê tông trong hẻm",
    location: "Khu vực đô thị",
    summary: "Máy cuốc gắn đầu đục phá bê tông tại mặt bằng hẹp.",
    description:
      "Hạng mục đục phá bê tông bằng máy cuốc mini trong hẻm / hành lang hẹp. Phù hợp cải tạo, phá dỡ cục bộ khi không gian thi công hạn chế.",
    image: PHOTOS.project3,
    poster: PHOTOS.videoPoster3,
    video: VIDEOS.project3,
    year: "2025",
  },
];

export const POSTS: Post[] = [
  {
    slug: "gioi-thieu-co-gioi-thien-an",
    title: "Giới thiệu Cơ Giới Thiên Ân – Xe cơ giới, máy công trình",
    excerpt:
      "Đơn vị thi công, phá dỡ và hỗ trợ hạ tầng theo nhu cầu công trình, với thông điệp “Vững nền móng – Dựng tương lai”.",
    body: `Cơ Giới Thiên Ân hoạt động trong lĩnh vực xe cơ giới và máy công trình, cung cấp các dịch vụ thi công, phá dỡ và hỗ trợ hạ tầng theo nhu cầu công trình.

Định hướng thương hiệu là xây dựng hình ảnh một đơn vị cơ giới mạnh mẽ, thực tế và đáng tin cậy. Máy móc, tinh thần trách nhiệm và sự chỉn chu trong từng hạng mục là trọng tâm truyền thông.

Thông điệp “Vững nền móng – Dựng tương lai” thể hiện tinh thần bắt đầu từ nền tảng chắc chắn, góp phần tạo nên những công trình và giá trị bền vững.

Danh mục dịch vụ gồm: thi công san lấp mặt bằng; cho thuê xe cuốc, máy công trình; đập phá nhà cửa, công trình cũ; đục phá bê tông; thu mua xác nhà cũ; thi công lắp đặt cống, ống nước; và thi công làm đường.

Phạm vi, khối lượng, tiến độ và phương án thi công sẽ được trao đổi, thống nhất trước khi triển khai. Hotline: 0969 273 010.`,
    image: PHOTOS.excavators,
    publishedAt: "2025-11-20",
  },
  {
    slug: "luu-y-khi-thue-may-cuoc",
    title: "Những lưu ý khi thuê xe cuốc cho công trình",
    excerpt:
      "Chọn đúng máy, kiểm tra bảo dưỡng và thỏa thuận ca máy giúp tiết kiệm chi phí thi công.",
    body: `Khi thuê xe cuốc, chủ đầu tư nên xác định rõ khối lượng đào đắp, điều kiện địa chất và không gian công trường để chọn máy phù hợp — đặc biệt với mặt bằng hẹp hoặc trong hẻm.

Nên yêu cầu đơn vị cho thuê cung cấp máy đã bảo dưỡng, vận hành viên có kinh nghiệm và cam kết thời gian giao máy. Việc thỏa thuận rõ đơn giá theo ca, nhiên liệu và thời gian chờ giúp kiểm soát chi phí.

Cơ Giới Thiên Ân hỗ trợ tư vấn cấu hình máy và triển khai đúng tiến độ cho các hạng mục san lấp, đào móng và phá dỡ.`,
    image: PHOTOS.site,
    publishedAt: "2025-11-10",
  },
  {
    slug: "pha-do-an-toan-cong-trinh-cu",
    title: "Phá dỡ công trình cũ an toàn và đúng tiến độ",
    excerpt:
      "Phương án phá dỡ cần kiểm soát kết cấu, an toàn lao động và vệ sinh môi trường xung quanh.",
    body: `Phá dỡ công trình cũ đòi hỏi khảo sát kết cấu, cắt điện nước và lập biện pháp thi công. Ưu tiên phá tuần tự, dùng máy phù hợp từng hạng mục và không gian hiện trường.

Kiểm soát bụi, tiếng ồn và hàng rào an toàn giúp giảm ảnh hưởng đến khu vực lân cận. Sau phá dỡ, thu dọn phế liệu và hoàn trả mặt bằng là bước bắt buộc trước khi bàn giao.

Cơ Giới Thiên Ân nhận đập phá nhà cửa – công trình cũ, đục phá bê tông kèm thu mua xác nhà cũ theo thỏa thuận.`,
    image: PHOTOS.demolition,
    publishedAt: "2025-09-15",
  },
];

export const STATS = [
  { value: "7+", label: "Nhóm dịch vụ" },
  { value: "24/7", label: "Tư vấn hotline" },
  { value: "100%", label: "Ảnh công trường thật" },
  { value: "On-site", label: "Máy sẵn sàng thi công" },
] as const;
