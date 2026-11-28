import { PHOTOS, VIDEOS } from "./constants";

export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  summary: string;
  description: string;
  highlights: string[];
  image: string;
  /** Trang trụ cột SEO tại /dich-vu/[slug] */
  isPillar?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  intro?: string;
  scopes?: string[];
  equipment?: string[];
  costFactors?: string[];
  steps?: string[];
  faqs?: ServiceFaq[];
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

const SHARED_STEPS = [
  "Khảo sát hiện trường, ghi nhận địa chất và đường vào máy",
  "Báo giá theo phạm vi, khối lượng và phương án thi công",
  "Ký hợp đồng / thống nhất tiến độ và biện pháp an toàn",
  "Triển khai thi công, kiểm soát ảnh hưởng khu vực lân cận",
  "Nghiệm thu, thu dọn và bàn giao mặt bằng",
];

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
    isPillar: true,
    seoTitle: "San Lấp Mặt Bằng Trọn Gói – Khảo Sát Nhanh, Thi Công Đúng Cao Độ",
    seoDescription:
      "Dịch vụ san lấp mặt bằng tại TP.HCM, Bình Dương, Đồng Nai: san gạt, đắp đất theo cao độ, phục vụ nhà xưởng và hạ tầng. Khảo sát nhanh, báo giá rõ phạm vi.",
    intro:
      "Mặt bằng chưa đạt cao độ hoặc còn lồi lõm sẽ kéo dài tiến độ và đội chi phí các hạng mục sau. Cơ Giới Thiên Ân nhận san lấp mặt bằng tại TP.HCM, Bình Dương và Đồng Nai: từ nền nhà phố, nhà xưởng đến khu hạ tầng. Hẻm hẹp dùng máy mini; mặt bằng rộng bố trí máy công suất lớn. Sau khảo sát 30–60 phút (tùy khoảng cách), chúng tôi chốt phương án và báo giá theo phạm vi thực tế.",
    scopes: [
      "San gạt, tạo cao độ theo bản vẽ hoặc mốc hiện trường",
      "Đắp đất, san nền nhà xưởng và khu dân dụng",
      "Chuẩn bị mặt bằng trước khi làm đường hoặc hạ tầng",
      "Vận chuyển đất thừa / đất đắp theo thỏa thuận",
      "Hoàn thiện mặt bằng sẵn sàng bàn giao thi công tiếp",
    ],
    equipment: [
      "Xe cuốc / máy đào phù hợp mặt bằng hẹp hoặc công trường lớn",
      "Máy san gạt hỗ trợ tạo mặt phẳng theo cao độ",
      "Xe ben vận chuyển đất theo khối lượng công trình",
      "Đội vận hành viên hiện trường, phối hợp tiến độ với chủ thầu",
    ],
    costFactors: [
      "Địa chất và độ ẩm nền: đất yếu, sình hoặc nền cứng ảnh hưởng số ca máy",
      "Đường vào công trường: hẻm hẹp, hạn chế tải làm tăng thời gian vận chuyển",
      "Khối lượng san đắp và yêu cầu cao độ: quyết định máy và số ngày thi công",
    ],
    steps: SHARED_STEPS,
    faqs: [
      {
        question: "San lấp mặt bằng có làm theo cao độ bản vẽ không?",
        answer:
          "Có. Chúng tôi khảo sát mốc hiện trạng, đối chiếu bản vẽ (nếu có) rồi san gạt / đắp theo cao độ đã thống nhất trước khi thi công.",
      },
      {
        question: "Có nhận san lấp nhà xưởng tại Bình Dương, Đồng Nai không?",
        answer:
          "Có. Phạm vi phục vụ gồm TP.HCM, Bình Dương và Đồng Nai. Máy và xe ben bố trí theo quy mô mặt bằng thực tế.",
      },
      {
        question: "Đất thừa sau san lấp xử lý thế nào?",
        answer:
          "Có thể vận chuyển đổ đúng nơi quy định hoặc tận dụng đắp lại theo thỏa thuận trong báo giá. Chi phí vận chuyển tính riêng theo khoảng cách và khối lượng.",
      },
      {
        question: "Có xuất hóa đơn VAT không?",
        answer:
          "Xuất hóa đơn theo thỏa thuận hợp đồng. Liên hệ hotline để được hướng dẫn thủ tục trước khi triển khai.",
      },
    ],
  },
  {
    slug: "dao-mong-cong-trinh",
    title: "Đào móng công trình",
    shortTitle: "Đào móng",
    summary: "Đào móng nhà phố, móng băng – móng cọc và hố móng theo thiết kế.",
    description:
      "Thi công đào móng công trình dân dụng và nhà phố: đào đất hố móng, móng băng, hỗ trợ chuẩn bị nền trong mặt bằng hẹp hoặc liền kề.",
    highlights: [
      "Đào móng nhà phố, móng băng, hố móng",
      "Phù hợp mặt bằng hẹp / hẻm phố",
      "Kiểm soát an toàn nhà liền kề",
    ],
    image: PHOTOS.project2,
    isPillar: true,
    seoTitle: "Đào Móng Nhà & Công Trình – Xe Cuốc Mini, Báo Giá Sau Khảo Sát",
    seoDescription:
      "Thuê xe cuốc đào móng nhà phố, móng băng móng cọc tại TP.HCM, Bình Dương, Đồng Nai. Máy mini vào hẻm, khảo sát nhanh, thi công an toàn nhà liền kề.",
    intro:
      "Đào móng sai cao độ hoặc rung động mạnh dễ ảnh hưởng nhà liền kề — đặc biệt nhà phố Thủ Đức, Quận 12 và các khu hẻm nhỏ. Cơ Giới Thiên Ân triển khai đào móng bằng xe cuốc mini hoặc máy phù hợp tải trọng đường vào tại TP.HCM, Bình Dương, Đồng Nai. Khảo sát nhanh giúp chốt máy, biện pháp chống sạt và báo giá theo khối lượng thực tế.",
    scopes: [
      "Đào móng nhà phố, nhà liền kề",
      "Đào móng băng, móng đơn, hố móng theo thiết kế",
      "Đào đất chuẩn bị đài móng / đầu cọc (theo phạm vi thỏa thuận)",
      "Hỗ trợ đào hầm tự hoại, bể kỹ thuật trong mặt bằng hẹp",
      "Vận chuyển đất đào ra khỏi công trường khi có yêu cầu",
    ],
    equipment: [
      "Xe cuốc mini phục vụ hẻm và mặt bằng hẹp",
      "Máy đào công suất lớn cho hố móng sâu / khối lượng lớn",
      "Xe ben chở đất theo ca hoặc khoán khối lượng",
      "Đội vận hành có kinh nghiệm thi công nhà phố liền kề",
    ],
    costFactors: [
      "Chiều sâu và diện tích hố móng theo bản thiết kế",
      "Địa chất (đất cát, sét, nước ngầm) ảnh hưởng tốc độ đào",
      "Khả năng đưa máy vào hẻm và quãng đường đổ đất",
    ],
    steps: SHARED_STEPS,
    faqs: [
      {
        question: "Xe cuốc mini có vào được hẻm nhà phố không?",
        answer:
          "Với nhiều hẻm đô thị, chúng tôi bố trí máy mini phù hợp bề rộng đường vào. Cần khảo sát thực tế để chốt loại máy an toàn.",
      },
      {
        question: "Có đào móng ban đêm được không?",
        answer:
          "Có thể xem xét theo quy định địa phương và thỏa thuận với khu dân cư. Ưu tiên khung giờ hạn chế ảnh hưởng tiếng ồn.",
      },
      {
        question: "Đất đào có bao gồm vận chuyển không?",
        answer:
          "Báo giá tách rõ phần đào và phần vận chuyển đổ đất. Bạn có thể thuê riêng hoặc gói trọn theo thỏa thuận.",
      },
      {
        question: "Đơn giá đào đất hố móng tính thế nào?",
        answer:
          "Thường theo m³ hoặc theo ca máy, tùy địa chất và điều kiện đường vào. Chúng tôi chỉ chốt số sau khi khảo sát hiện trường.",
      },
    ],
  },
  {
    slug: "dap-pha-nha-cu",
    title: "Đập phá nhà cũ, công trình cũ",
    shortTitle: "Phá dỡ",
    summary: "Phá dỡ công trình cũ, có thể kèm thu mua xác nhà theo thỏa thuận.",
    description:
      "Nhận đập phá nhà cửa và công trình cũ theo phạm vi đã thống nhất. Kiểm soát an toàn, thu dọn hiện trường; hỗ trợ thu mua xác nhà cũ khi hai bên thỏa thuận.",
    highlights: [
      "Phá dỡ theo phạm vi đã thống nhất",
      "Kiểm soát an toàn hiện trường",
      "Có thể kèm thu mua xác nhà cũ",
    ],
    image: PHOTOS.demolition,
    isPillar: true,
    seoTitle: "Đập Phá Nhà Cũ Trọn Gói – An Toàn, Thu Dọn Mặt Bằng Nhanh",
    seoDescription:
      "Đập phá nhà cấp 4, tháo dỡ nhà xưởng cũ tại TP.HCM, Bình Dương, Đồng Nai. Có thể kèm thu mua xác nhà. Khảo sát nhanh, thi công kiểm soát an toàn lân cận.",
    intro:
      "Phá dỡ nhà cũ trong khu dân cư đòi hỏi kiểm soát bụi, tiếng ồn và kết cấu liền kề. Cơ Giới Thiên Ân nhận đập phá nhà cấp 4, nhà phố và tháo dỡ nhà xưởng tại TP.HCM, Bình Dương, Đồng Nai. Có thể kết hợp thu mua xác nhà cũ để rút ngắn thời gian bàn giao mặt bằng. Khảo sát trước giúp chốt phạm vi phá, hướng đổ xà bần và biện pháp an toàn.",
    scopes: [
      "Đập phá nhà cấp 4, nhà phố, công trình cũ",
      "Tháo dỡ nhà xưởng, kết cấu nhẹ / kết cấu bê tông theo hạng mục",
      "Thu dọn xà bần, hoàn trả mặt bằng sau phá dỡ",
      "Hỗ trợ thu mua xác nhà cũ và vật tư thu hồi (theo thỏa thuận)",
      "Phối hợp cắt điện nước và hàng rào an toàn hiện trường",
    ],
    equipment: [
      "Máy cuốc gắn đầu phá / gầu phù hợp từng hạng mục",
      "Máy đục phá bê tông khi gặp kết cấu cứng",
      "Xe ben vận chuyển phế liệu ra khỏi công trường",
      "Đội thi công có kinh nghiệm phá dỡ trong khu dân cư",
    ],
    costFactors: [
      "Loại kết cấu (gạch, bê tông, khung thép) và số tầng",
      "Mức độ liền kề nhà hàng xóm / không gian thi công",
      "Khối lượng phế liệu và khoảng cách bãi đổ",
    ],
    steps: SHARED_STEPS,
    faqs: [
      {
        question: "Có nhận đập phá nhà cấp 4 trọn gói không?",
        answer:
          "Có. Phạm vi phá, thu dọn và vận chuyển phế liệu được thống nhất trước. Báo giá sau khảo sát hiện trạng.",
      },
      {
        question: "Có thu mua xác nhà cũ kèm đập phá không?",
        answer:
          "Có thể kết hợp thu mua xác nhà / vật tư thu hồi theo thỏa thuận minh bạch, giúp giảm chi phí và thời gian chuẩn bị mặt bằng mới.",
      },
      {
        question: "Làm sao hạn chế ảnh hưởng nhà liền kề?",
        answer:
          "Khảo sát kết cấu, phá tuần tự, dùng máy phù hợp và bố trí hàng rào / biện pháp chống bụi theo điều kiện hiện trường.",
      },
      {
        question: "Thủ tục xin phép phá dỡ ai lo?",
        answer:
          "Chủ đầu tư chịu trách nhiệm giấy phép theo quy định địa phương. Chúng tôi hỗ trợ phương án thi công và tiến độ sau khi thủ tục sẵn sàng.",
      },
    ],
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
    isPillar: true,
    seoTitle: "Đục Phá Bê Tông Cơ Giới – Nền Nhà Xưởng, Đầu Cọc, Cải Tạo",
    seoDescription:
      "Thuê máy đục bê tông, đục phá nền nhà xưởng và đầu cọc tại TP.HCM, Bình Dương, Đồng Nai. Thiết bị gắn máy cuốc, kiểm soát rung động hiện trường.",
    intro:
      "Đục phá bê tông thủ công chậm và tốn nhân công, trong khi nhà xưởng hay cải tạo đô thị thường cần tiến độ gấp. Cơ Giới Thiên Ân dùng máy cuốc gắn đầu đục để phá nền, kết cấu cục bộ và hỗ trợ đục đầu cọc tại TP.HCM, Bình Dương, Đồng Nai — kể cả mặt bằng trong hẻm khi bố trí được máy mini.",
    scopes: [
      "Đục phá nền bê tông nhà xưởng, sân bãi",
      "Đục phá kết cấu bê tông cục bộ khi cải tạo",
      "Hỗ trợ đục đầu cọc / hạng mục bê tông cứng theo thỏa thuận",
      "Phá dỡ cục bộ kết hợp thu dọn phế liệu",
      "Thi công trong không gian hạn chế bằng máy phù hợp",
    ],
    equipment: [
      "Máy cuốc gắn đầu đục phá bê tông",
      "Xe cuốc mini cho mặt bằng hẹp / trong hẻm",
      "Xe ben vận chuyển phế liệu bê tông",
      "Vận hành viên kiểm soát lực đục và an toàn xung quanh",
    ],
    costFactors: [
      "Độ dày và mác bê tông cần phá",
      "Diện tích / khối lượng và khả năng tiếp cận máy",
      "Yêu cầu hạn chế rung động với công trình lân cận",
    ],
    steps: SHARED_STEPS,
    faqs: [
      {
        question: "Đục phá nền bê tông nhà xưởng mất bao lâu?",
        answer:
          "Tùy độ dày nền và diện tích. Sau khảo sát chúng tôi ước lượng số ca máy và tiến độ dự kiến trước khi thi công.",
      },
      {
        question: "Có đục được trong hẻm hẹp không?",
        answer:
          "Nếu đường vào đủ cho máy mini, có thể triển khai. Cần đo thực tế bề rộng hẻm và chiều cao dây điện.",
      },
      {
        question: "Có kiểm soát rung động không?",
        answer:
          "Chúng tôi chọn lực đục và trình tự phá phù hợp hiện trường, ưu tiên hạn chế ảnh hưởng nhà / máy móc xung quanh.",
      },
      {
        question: "Phế liệu bê tông có vận chuyển luôn không?",
        answer:
          "Có thể gói kèm vận chuyển đổ phế liệu hoặc thuê riêng theo thỏa thuận trong báo giá.",
      },
    ],
  },
  {
    slug: "lap-dat-cong-thoat-nuoc",
    title: "Thi công lắp đặt cống thoát nước",
    shortTitle: "Cống thoát nước",
    summary: "Đào rãnh, lắp đặt cống bi – cống hộp và hệ thống thoát nước hạ tầng.",
    description:
      "Thi công lắp đặt cống thoát nước và đường ống theo yêu cầu công trình. Đảm bảo độ dốc, mối nối và hoàn trả mặt bằng đúng kỹ thuật.",
    highlights: [
      "Đào rãnh lắp đặt ống / cống thoát nước",
      "Cống bi, cống hộp theo thiết kế",
      "Hoàn trả mặt bằng sau thi công",
    ],
    image: PHOTOS.waterPipe,
    isPillar: true,
    seoTitle: "Lắp Đặt Cống Thoát Nước – Đào Rãnh, Cống Bi, Cống Hộp",
    seoDescription:
      "Thi công hệ thống thoát nước hạ tầng tại TP.HCM, Bình Dương, Đồng Nai: đào rãnh, lắp cống bi – cống hộp, đảm bảo độ dốc và hoàn trả mặt bằng.",
    intro:
      "Hệ thống thoát nước sai độ dốc dễ ứ đọng và hư mặt đường sau mưa. Cơ Giới Thiên Ân nhận đào rãnh, lắp đặt cống thoát nước và ống hạ tầng tại TP.HCM, Bình Dương, Đồng Nai — từ đường nội bộ nhà xưởng đến hạng mục dân dụng. Máy đào kết hợp đội lắp đặt để giữ tiến độ và hoàn trả mặt bằng gọn.",
    scopes: [
      "Đào rãnh lắp đặt ống nước / cống thoát nước",
      "Lắp đặt cống bi, cống hộp theo thiết kế",
      "Thi công hệ thống thoát nước hạ tầng khu dân dụng, nhà xưởng",
      "Kiểm tra độ dốc, mối nối trước khi lấp",
      "Hoàn trả mặt bằng, đầm nền sau lắp đặt",
    ],
    equipment: [
      "Máy đào / xe cuốc đào rãnh theo chiều sâu thiết kế",
      "Thiết bị hỗ trợ đặt ống, cống tại hiện trường",
      "Xe ben vận chuyển đất đào và vật tư",
      "Đội thi công kiểm soát cao độ và an toàn hố đào",
    ],
    costFactors: [
      "Chiều dài tuyến, đường kính cống / ống",
      "Chiều sâu rãnh và điều kiện địa chất / nước ngầm",
      "Yêu cầu hoàn trả mặt đường hoặc nền sau thi công",
    ],
    steps: SHARED_STEPS,
    faqs: [
      {
        question: "Có nhận thi công cống bi, cống hộp không?",
        answer:
          "Có. Phạm vi đào rãnh, lắp đặt và hoàn trả được thống nhất theo bản vẽ hoặc khảo sát thực tế.",
      },
      {
        question: "Độ dốc thoát nước được kiểm soát thế nào?",
        answer:
          "Cao độ đáy rãnh và mối nối được kiểm tra trong quá trình lắp. Nghiệm thu trước khi lấp đất.",
      },
      {
        question: "Có làm hệ thống thoát nước nhà xưởng không?",
        answer:
          "Có. Phù hợp đường nội bộ, sân bãi và hạ tầng nhà xưởng tại các khu vực Bình Dương, Đồng Nai, TP.HCM.",
      },
      {
        question: "Sau lắp đặt có hoàn trả mặt bằng không?",
        answer:
          "Có. Lấp đất, đầm nền và hoàn trả mặt bằng theo thỏa thuận hợp đồng trước khi bàn giao.",
      },
    ],
  },
  {
    slug: "cho-thue-xe-co-gioi",
    title: "Cho thuê xe cơ giới",
    shortTitle: "Thuê máy",
    summary: "Cho thuê xe cuốc, máy công trình theo ca hoặc theo dự án.",
    description:
      "Cho thuê xe cuốc và máy công trình theo ca hoặc theo dự án. Máy được bảo dưỡng định kỳ, có thể kèm vận hành viên để đảm bảo tiến độ và an toàn hiện trường.",
    highlights: [
      "Thuê theo ca hoặc theo dự án",
      "Máy bảo dưỡng định kỳ",
      "Có thể kèm vận hành viên",
    ],
    image: PHOTOS.site,
    isPillar: true,
    seoTitle: "Cho Thuê Xe Cuốc & Máy Công Trình – Theo Ca, Theo Tháng",
    seoDescription:
      "Cho thuê xe đào mini trong hẻm, xe cuốc theo ca / theo tháng tại TP.HCM, Bình Dương, Đồng Nai. Máy bảo dưỡng, có thể kèm vận hành viên.",
    intro:
      "Thuê sai loại máy hoặc máy kém bảo dưỡng làm chậm tiến độ và đội chi phí nhiên liệu. Cơ Giới Thiên Ân cho thuê xe cuốc, máy công trình tại TP.HCM, Bình Dương, Đồng Nai — từ xe đào mini trong hẻm đến máy phục vụ san lấp, phá dỡ. Có thể thuê theo ca, theo ngày hoặc theo dự án, kèm vận hành viên khi cần.",
    scopes: [
      "Cho thuê xe cuốc / xe đào theo ca, theo ngày, theo tháng",
      "Xe đào mini phục vụ thi công trong hẻm, mặt bằng hẹp",
      "Máy phục vụ san lấp, đào móng, phá dỡ theo nhu cầu",
      "Kèm vận hành viên hoặc thuê máy khô (theo thỏa thuận)",
      "Tư vấn chọn máy phù hợp khối lượng và đường vào công trường",
    ],
    equipment: [
      "Xe cuốc / máy đào nhiều kích thước (mini đến máy công trường)",
      "Máy gắn đầu đục khi thuê kèm hạng mục phá bê tông",
      "Máy đã bảo dưỡng định kỳ trước khi giao",
      "Vận hành viên có kinh nghiệm hiện trường (khi thuê kèm người)",
    ],
    costFactors: [
      "Loại máy và thời gian thuê (ca / ngày / tháng)",
      "Có kèm vận hành viên, nhiên liệu hay không",
      "Khoảng cách vận chuyển máy đến công trường",
    ],
    steps: [
      "Tiếp nhận nhu cầu: hạng mục, mặt bằng, thời gian thuê",
      "Tư vấn loại máy và hình thức thuê phù hợp",
      "Báo giá và thống nhất điều kiện giao máy",
      "Vận chuyển máy đến hiện trường, bàn giao vận hành",
      "Theo dõi tiến độ thuê, thu hồi máy đúng hạn",
    ],
    faqs: [
      {
        question: "Thuê theo ca hay khoán trọn gói lợi hơn?",
        answer:
          "Ca máy phù hợp khối lượng nhỏ hoặc thời gian linh hoạt. Khoán / thuê theo dự án thường rõ chi phí hơn với hạng mục lớn. Chúng tôi tư vấn sau khi nắm khối lượng ước tính.",
      },
      {
        question: "Có cho thuê xe đào mini trong hẻm không?",
        answer:
          "Có. Nhiều công trình nhà phố cần máy mini. Cần cung cấp thông tin bề rộng đường vào để chọn máy phù hợp.",
      },
      {
        question: "Máy có kèm người vận hành không?",
        answer:
          "Có thể thuê kèm vận hành viên hoặc thuê máy theo thỏa thuận. Chi phí nhân công tách rõ trong báo giá.",
      },
      {
        question: "Phạm vi giao máy những đâu?",
        answer:
          "Ưu tiên TP.HCM, Bình Dương, Đồng Nai. Khoảng cách xa hơn sẽ tính chi phí vận chuyển máy riêng.",
      },
    ],
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

export const PILLAR_SLUGS = SERVICES.filter((s) => s.isPillar).map((s) => s.slug);

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

Danh mục dịch vụ gồm: thi công san lấp mặt bằng; đào móng công trình; cho thuê xe cơ giới; đập phá nhà cũ; đục phá bê tông; thu mua xác nhà cũ; lắp đặt cống thoát nước; và thi công làm đường.

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
  { value: "8+", label: "Nhóm dịch vụ" },
  { value: "24/7", label: "Tư vấn hotline" },
  { value: "100%", label: "Ảnh công trường thật" },
  { value: "On-site", label: "Máy sẵn sàng thi công" },
] as const;
