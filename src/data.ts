import { Product, Solution, News, VideoClip } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'n30',
    name: 'FARNAV N30',
    tagline: 'COMPACT & POWERFUL',
    category: 'Máy GNSS RTK Rover',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUSu3AmLyV_8N2fBSOcwpz75vHg6_XeTD6UnXj33dQ6zNx7vzq5gs5V3iY_S789OEnl6yqK_z26Pk5D12pefG2rlBnRxjVsAJSTMk80Gksp0HiyfGPVd_qV3TJM5D6bM7gcZJl4slbHscv3vy7eDgCX2y3RL_B1wA6fAw4UW38FgFq1qUqyMVHzcWE4hC-QpadFQmnvt2JmSI9VyCNmXj6PATQUN65_qFjlNghfPSWDx31Lg3uZsSxCoKQKZVPJgFsqpxFNF26_2Pw',
    description: 'Thiết bị GNSS RTK nhỏ gọn, trọng lượng siêu nhẹ nhưng sở hữu hiệu năng mạnh mẽ. Được thiết kế tối ưu cho công tác đo đạc tại các khu vực địa hình hiểm trở, rừng rậm hoặc đô thị san sát, nơi có độ phủ sóng GPS yếu.',
    features: [
      'Cảm biến bù nghiêng IMU 60 độ không cần hiệu chuẩn, chống từ trường cực tốt.',
      'Trọng lượng siêu nhẹ chỉ 750g giúp kỹ sư di chuyển dễ dàng suốt ngày dài.',
      'Hỗ trợ công nghệ sạc nhanh Type-C tiện lợi qua sạc dự phòng.',
      'Sử dụng bo mạch chủ thông minh 1408 kênh thu nhận toàn bộ hệ vệ tinh.'
    ],
    specs: {
      channels: '1408 kênh (Thế hệ chip SoC mới nhất)',
      constellations: 'GPS, GLONASS, BeiDou, GALILEO, QZSS, SBAS, IRNSS',
      rtkAccuracy: 'Ngang: 8 mm + 1 ppm | Đứng: 15 mm + 1 ppm',
      staticAccuracy: 'Ngang: 2.5 mm + 0.5 ppm | Đứng: 5 mm + 0.5 ppm',
      battery: 'Pin Lithium-Ion tích hợp 6800 mAh, thời gian hoạt động lên tới 15 giờ',
      weight: '750g (đã bao gồm pin)',
      protection: 'IP68 chống nước, chống bụi tuyệt đối; chống va đập từ độ cao 2m xuống nền bê tông'
    }
  },
  {
    id: 'n50',
    name: 'FARNAV N50',
    tagline: 'PROFESSIONAL GRADE',
    category: 'Máy GNSS RTK Cao Cấp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxrU9-eCj0mSGzk8iVALymwSai6oTVVu0yW3pYVBsTnDyyZ_wWbnPod1XYYibb-qrd00RQ7yiovK-27_b0flSfggPXn5-y2AUHTBKloMI1B8QVe-4FQ6BR-YrejGjZ1g4YoMHgkArh1XowcMU5qu0nAXczBdTuR--xa0dNLBXsX_oYgTO0n8IxRdWuEzBdWdRAeYn88e_1FlkZQmmWEX84BdZMBCqOD4ztfgssvVi9_oIUeJG_n1jmiHgYfK96u_C8818tPAmtscim',
    description: 'Sự kết hợp hoàn hảo giữa độ chính xác tối ưu và công nghệ khảo sát hình ảnh đỉnh cao. Farnav N50 được trang bị camera HD phía dưới hỗ trợ định vị trực quan (Visual Stakeout), giúp định vị điểm cắm mốc ngay trên màn hình thực tế ảo một cách trực quan và nhanh chóng.',
    features: [
      'Visual Positioning & Stakeout: Camera HD hỗ trợ cắm mốc thực tế ảo AR cực kỳ nhanh chóng.',
      'Bù nghiêng thông minh IMU thế hệ 3 lên tới 60 độ duy trì độ chính xác cao.',
      'Màn hình hiển thị OLED độ tương phản cao, xem trực tiếp trạng thái vệ tinh, pin, kết nối.',
      'Thời lượng pin vượt trội lên đến 20 giờ làm việc liên tục.'
    ],
    specs: {
      channels: '1598 kênh siêu việt',
      constellations: 'GPS, GLONASS, BeiDou, GALILEO, QZSS, SBAS, IRNSS, MSS L-Band',
      rtkAccuracy: 'Ngang: 8 mm + 0.5 ppm | Đứng: 15 mm + 0.5 ppm',
      staticAccuracy: 'Ngang: 2.5 mm + 0.5 ppm | Đứng: 5 mm + 0.5 ppm',
      battery: 'Pin Lithium thông minh dung lượng lớn 10200 mAh, hoạt động liên tục 20 giờ',
      weight: '930g (bao gồm cả pin)',
      protection: 'IP68, tiêu chuẩn quân sự MIL-STD-810H, chịu va đập cực tốt'
    }
  },
  {
    id: 'nbase',
    name: 'FARNAV NBase',
    tagline: 'BASE STATION SYSTEM',
    category: 'Trạm Base GNSS Cố Định',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrJFICVcR-64fp1lVjowNy5xii2cXV-NGfA_ql18IfYxHHX9b9B9G3Y-Cex7BxK6o35_L8pxwQoFrUQWi6WRyHLinMAiT6PDZAPPqe_d99UVZhDSBYay-rd5jEbVmyktELDrGJwcJtAnpWUNU90h07IzgExS0oUoHBLTLCY6haiEDUATpoBX03jyJlN6FF2hh2u9grySyW3phPlvVLOPtHMNAf47PC0Q4oU9UNrP0y_gpL41qt5-l-AXp9NiDBkfaN_7rhzdMH2aOL',
    description: 'Giải pháp trạm Base phát sóng GNSS chuyên dụng với công suất phát Radio cực mạnh và độ ổn định bền bỉ vượt thời gian. Thiết kế tản nhiệt kim loại nguyên khối cao cấp giúp duy trì hoạt động liên tục 24/7 dưới mọi điều kiện thời tiết khắc nghiệt nhất.',
    features: [
      'Công suất phát Radio trong lớn (lên tới 5W) cho cự ly phát xa lên đến 15km không cần lặp sóng.',
      'Tích hợp Module mạng 4G LTE tốc độ cao truyền dữ liệu Cors ổn định vượt trội.',
      'Vỏ hợp kim magie chắc chắn, hệ thống tản nhiệt thông minh chống cháy nổ.',
      'Hỗ trợ cấu hình điều khiển từ xa qua giao diện Web UI thân thiện.'
    ],
    specs: {
      channels: '1408 kênh thu phát đa tần số',
      constellations: 'GPS, GLONASS, BeiDou, GALILEO, QZSS, SBAS',
      rtkAccuracy: 'Độ chính xác định vị Base cực cao (< 1mm)',
      staticAccuracy: 'Ngang: 2 mm + 0.5 ppm | Đứng: 4 mm + 0.5 ppm',
      battery: 'Hỗ trợ nguồn kép AC/DC và Pin trong dự phòng 13600 mAh hoạt động 12 tiếng liên tục',
      weight: '1.45 kg',
      protection: 'IP68 chống thấm nước ở độ sâu 1.5m trong vòng 2 giờ, tiêu chuẩn chịu bụi cao nhất'
    }
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'diachinh',
    title: 'Địa chính',
    description: 'Đo vẽ bản đồ chuẩn xác',
    detailDescription: 'Giải pháp đo đạc bản đồ địa chính kỹ thuật số đòi hỏi sự tỉ mỉ, độ chính xác tuyệt đối từng centimet và tốc độ xử lý nhanh. Farnav GNSS 4.0 cung cấp các phép đo RTK đạt chuẩn đất đai Việt Nam, giúp tối ưu hóa công tác đo đạc ruộng đất, cắm ranh mốc và lập hồ sơ địa chính.',
    icon: 'location_searching',
    benefits: [
      'Định vị nhanh chóng chỉ trong 2-3 giây sau khi bật máy.',
      'Bù nghiêng thông minh giúp tiếp cận các góc tường rào, gốc cây lớn dễ dàng.',
      'Đồng bộ hóa dữ liệu trực tiếp với phần mềm AutoCAD, MicroStation thông qua định dạng DXF, CSV.'
    ],
    recommendedDevices: ['Máy Rover FARNAV N50', 'Sổ tay điện tử điều khiển cầm tay', 'Trạm CORS quốc gia VNGEONET'],
    caseStudy: {
      title: 'Đo vẽ bản đồ đất nông nghiệp tại Lâm Đồng',
      location: 'Huyện Đức Trọng, Tỉnh Lâm Đồng',
      result: 'Hoàn thành đo vẽ ranh giới cho hơn 250 hộ dân trong vòng 4 ngày, giảm 60% thời gian so với sử dụng máy toàn đạc truyền thống.'
    }
  },
  {
    id: 'khaosat',
    title: 'Khảo sát',
    description: 'Địa hình đa dạng',
    detailDescription: 'Công tác khảo sát địa hình đồi núi dốc, sông ngòi, thung lũng sâu luôn là thách thức lớn đối với kỹ sư trắc địa. Khả năng bắt sóng vệ tinh siêu khỏe của Farnav GNSS 4.0 đảm bảo thiết bị luôn khóa định vị (Fix) ngay cả dưới tán cây rậm rạp hoặc khe vực dốc đứng.',
    icon: 'terrain',
    benefits: [
      'Hỗ trợ chế độ đo tĩnh (Static) độ chính xác cao để lập lưới khống chế hạng IV.',
      'Vỏ máy chống va đập tiêu chuẩn quân sự, bảo vệ tối ưu khi di chuyển ở địa hình hiểm trở.',
      'Bản đồ nền vệ tinh Google Maps hiển thị ngay trên sổ tay điện tử dễ theo dõi.'
    ],
    recommendedDevices: ['Máy Rover FARNAV N30', 'Trạm Base di động FARNAV NBase', 'Sào carbon siêu nhẹ'],
    caseStudy: {
      title: 'Khảo sát cao độ tuyến đường đèo sạt lở',
      location: 'Đèo Hải Vân, Đà Nẵng - Thừa Thiên Huế',
      result: 'Xây dựng bản đồ độ dốc và xác định 12 điểm sạt lở nguy hiểm với sai số cao độ dưới 1.5cm dưới thời tiết mưa sương mù dày đặc.'
    }
  },
  {
    id: 'xaydung',
    title: 'Xây dựng',
    description: 'Hạ tầng giao thông',
    detailDescription: 'Trong xây dựng đường cao tốc, cầu cống, khu công nghiệp và nhà xưởng, độ chuẩn xác của cốt nền và định vị tim trục quyết định chất lượng toàn công trình. Hệ thống GNSS Farnav giúp đội kỹ sư xây dựng cắm điểm thiết kế ra thực địa cực kỳ nhanh chóng và chính xác.',
    icon: 'foundation',
    benefits: [
      'Nhập bản thiết kế trực tiếp dạng CAD (.DWG, .DXF) lên sổ tay đo đạc.',
      'Chỉ dẫn cắm điểm bằng đồ họa 3D dễ hiểu cho cả công nhân lành nghề.',
      'Kiểm soát cao độ lu lèn cốt nền đường giao thông thời gian thực.'
    ],
    recommendedDevices: ['Máy Rover FARNAV N50 (Hỗ trợ Camera AR)', 'Trạm Base cố định NBase', 'Phần mềm Field Survey chuyên dụng'],
    caseStudy: {
      title: 'Định vị cắm mốc cầu dự án Cao tốc Bắc - Nam',
      location: 'Đoạn Diễn Châu - Bãi Vọt',
      result: 'Bàn giao mặt bằng thi công đúng tiến độ, định vị chính xác vị trí tim cọc khoan nhồi với sai số tuyệt đối dưới 1cm.'
    }
  },
  {
    id: 'nongnghiep',
    title: 'Nông nghiệp',
    description: 'Số hóa canh tác',
    detailDescription: 'Ứng dụng công nghệ GNSS RTK vào nông nghiệp thông minh giúp tối ưu hóa luống gieo trồng, tự động hóa máy cày, máy gặt và phun thuốc không người lái. Farnav cung cấp giải pháp trạm Base phát tín hiệu hiệu chỉnh sai số RTK siêu chính xác cho các nông trường quy mô lớn.',
    icon: 'agriculture',
    benefits: [
      'Định vị tự động dẫn đường máy cày đi đúng luống với sai số dưới 2.5cm.',
      'Tiết kiệm giống cây trồng, phân bón và thuốc bảo vệ thực vật lên tới 25%.',
      'Tích hợp bản đồ nông trại kỹ thuật số giúp lập kế hoạch thu hoạch chi tiết.'
    ],
    recommendedDevices: ['Trạm Base FARNAV NBase', 'Module định vị gắn trên máy kéo tự lái', 'Ứng dụng quản lý nông trại FARNAV SmartFarm'],
    caseStudy: {
      title: 'Số hóa canh tác mía đường công nghệ cao',
      location: 'Thị xã Ayun Pa, Gia Lai',
      result: 'Quy hoạch lại luống gieo trồng trên diện tích 500 héc-ta, nâng năng suất thu hoạch thêm 15% nhờ luống thẳng hàng chuẩn xác.'
    }
  }
];

export const NEWS: News[] = [
  {
    id: 'vietbuild2024',
    title: 'FARNAV tham gia triển lãm VIETBUILD 2024 tại TP.HCM',
    date: '20/05/2024',
    summary: 'Chúng tôi tự hào giới thiệu dải sản phẩm GNSS 4.0 mới nhất tại triển lãm ngành xây dựng lớn nhất Việt Nam. Thu hút hàng ngàn lượt khách tham quan và quan tâm đến giải pháp định vị chính xác cao.',
    author: 'Nguyễn Văn Nam - Trưởng ban Truyền thông',
    readTime: '5 phút đọc',
    content: [
      'Từ ngày 15/05 đến 19/05/2024, thương hiệu thiết bị đo đạc GNSS hàng đầu FARNAV đã chính thức góp mặt tại Triển lãm Quốc tế VIETBUILD 2024 tổ chức tại Trung tâm Hội chợ Triển lãm Sài Gòn (SECC), Quận 7, TP. Hồ Chí Minh.',
      'Sự kiện lần này quy tụ hơn 2000 gian hàng từ các doanh nghiệp trong và ngoài nước thuộc lĩnh vực Xây dựng, Vật liệu xây dựng và Công nghệ kỹ thuật cao. Gian hàng của FARNAV đặt tại vị trí trung tâm sảnh A1 đã nhanh chóng thu hút sự chú ý của hàng ngàn lượt khách tham quan ngay từ ngày đầu mở cửa.',
      'Tâm điểm của gian hàng là sự ra mắt chính thức của bộ đôi máy Rover GNSS RTK cao cấp: FARNAV N30 siêu gọn nhẹ và FARNAV N50 tích hợp camera khảo sát thực tế ảo (Visual AR). Đây là những dòng sản phẩm chiến lược ứng dụng công nghệ định vị GNSS 4.0 tiên tiến nhất hiện nay, giúp đem lại độ chính xác centimet-level tức thời trong các môi trường khó khăn nhất.',
      'Đặc biệt, khách tham quan có cơ hội trải nghiệm trực tiếp tính năng "Visual Stakeout - Chỉ dẫn cắm mốc trực quan bằng camera" trên máy FARNAV N50. Khách hàng chỉ cần nhìn vào màn hình sổ tay cầm tay, camera phía dưới máy sẽ hiển thị hình ảnh thực tế của mặt đất cùng một mũi tên AR 3D chỉ chính xác điểm cần cắm mốc. Công nghệ này giúp tăng tốc độ cắm mốc lên gấp 3 lần so với phương pháp nghe tiếng "bíp" truyền thống.',
      'Kết thúc triển lãm, FARNAV đã ký kết biên bản ghi nhớ hợp tác chiến lược với hơn 15 đối tác là các tổng công ty xây dựng công trình giao thông, công ty khảo sát đo đạc bản đồ uy tín hàng đầu miền Nam. Đây là cột mốc khẳng định sự tin dùng ngày càng lớn của giới chuyên môn đối với công nghệ định vị thông minh của FARNAV tại thị trường Việt Nam.'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYB3T9-xnfEv1hrUp0e1EIf8W9z3SS2YbYdL5kEMsOvZ8MnELLh4vvGVT7cjt_CLV-AKWxAMm80z2hJH5uQ11rX9uAFBg0aIAqAo_elfEY014J0aREskAPrIXPi2VXWJzqH1RIdksBlMVNKu5Y5u1j76_0qj9xPEZJSntF6rhAHNhSgeJE0ZtfcgNpqAJhz21Qer7e3nNLfFA22xpxtxtDu59gPw_ja_aIRKeOUG-xLjYMIS9I5h3DHYfrrrX7eOC2pV_tQHk6liDq'
  },
  {
    id: 'smartconstruction',
    title: 'Ứng dụng GNSS 4.0 trong xây dựng thông minh 2024',
    date: '18/05/2024',
    summary: 'Các giải pháp công nghệ mới giúp rút ngắn 30% thời gian thi công và tăng độ chính xác trong công tác trắc địa công trình xây dựng hiện đại.',
    author: 'TS. Trần Quốc Hùng - Viện KHCN Xây dựng',
    readTime: '4 phút đọc',
    content: [
      'Xu thế chuyển đổi số và phát triển đô thị thông minh đang đặt ra những yêu cầu khắt khe hơn về tiến độ cũng như độ chuẩn xác của các công trình hạ tầng giao thông lớn. Trong đó, công tác trắc địa - đo đạc đóng vai trò như "người mở đường" cho mọi hoạt động san lấp, xây dựng phía sau.',
      'Trước đây, việc khảo sát trắc địa phụ thuộc rất nhiều vào máy toàn đạc điện tử. Phương pháp này đòi hỏi phải có ít nhất 2 người (1 người đứng máy, 1 người đi gương) và tầm nhìn giữa hai điểm phải hoàn toàn thông thoáng. Trong điều kiện thời tiết khắc nghiệt hoặc địa hình đồi dốc phức tạp, năng suất lao động giảm mạnh.',
      'Sự ra đời của công nghệ GNSS RTK 4.0, tiêu biểu là dòng sản phẩm của FARNAV, đã cách mạng hóa hoàn toàn quy trình này. Kỹ sư đo đạc giờ đây có thể làm việc hoàn toàn độc lập (đo đơn) chỉ với một chiếc máy Rover gọn nhẹ gắn trên sào carbon. Nhờ sử dụng thuật toán RTK thế hệ mới kết hợp thu nhận tín hiệu đa tần số từ tất cả các hệ vệ tinh toàn cầu (GPS, BeiDou, GLONASS, Galileo), máy đạt trạng thái khóa định vị sai số milimet chỉ trong vài giây.',
      'Theo thống kê thực tế tại các công trường thi công cao tốc lớn tại Việt Nam, việc chuyển đổi sang sử dụng máy GNSS RTK của FARNAV giúp rút ngắn đến 30% thời gian cắm mốc giải phóng mặt bằng và định vị cốt đường. Kỹ sư không còn phải mất thời gian thông tuyến tầm nhìn hay chuyển trạm máy toàn đạc nhiều lần.',
      'Bên cạnh đó, việc kết hợp GNSS RTK với thiết bị bay không người lái (UAV) RTK và công nghệ quét laser 3D LiDAR tạo nên một giải pháp khảo sát số hóa toàn diện. Bản đồ số 3D của công trường được xây dựng chính xác đến từng centimet, giúp ban quản lý dự án có cái nhìn trực quan, giám sát chặt chẽ khối lượng đào đắp và kiểm soát chất lượng thi công theo thời gian thực.'
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz8tryIncyIE45ByEXOyoKsQuRxTr9RSElT8A1qxFCTO7nzXE6HBsPVjYHYX3tS0qB5OvHN4bKPc850UXOp_gGpV6WKeMQz-b5o2KnGK_LpEeYvVAdH9brRdDN5NUoIGutF0OICUMtCkOl7tCLW48oMShDXBQv7wkSZxKC9YfeeoBi6ouoaJkJ-3CSG_I4MpG3lo8lYFydxyW7fCxOf1j_fwXBg8NjsRmY3bk4n_Vn8YFT31ZdtlcRb8soZWsz9lZUs3m_TiHj7gNi'
  }
];

export const VIDEOS: VideoClip[] = [
  {
    id: 'intro_n50',
    title: 'Giới thiệu FARNAV N50 - Đỉnh cao công nghệ GNSS',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoC7eg6TGHYcS4Opml4khO-Y1qeQRKAB45CMOltd2sQCZHdCvuA9w29OMnpW8trEM3HSfMTJI3fphXfTt7W9-SrqI6svWS7bt_QUNEkabQK9XHOax15s6NSbBaiHObmFBcbtrVZ7gufX8QbVKSZxpdhmfv_XJymQwfFfDOTiRNsjnNrWUjXOv21bJmnicpvRJsQJMZOhgLfWsF0MUNJP_dE4PCY7gVOyfWsVjEtT6n6uRWhsgCynxJQoj0GPVbQZ0V6cBDhKpkwP2M',
    duration: '02:45',
    subtitleList: [
      { time: 0, text: 'Chào mừng các bạn đến với video giới thiệu dòng sản phẩm cao cấp FARNAV N50.' },
      { time: 5, text: 'FARNAV N50 tự hào là đỉnh cao công nghệ GNSS 4.0 hiện nay trên thị trường Việt Nam.' },
      { time: 11, text: 'Được trang bị camera HD sắc nét phía dưới phục vụ công tác định vị trực quan.' },
      { time: 17, text: 'Tính năng cắm mốc thực tế ảo AR giúp tăng tốc độ đo đạc lên gấp 3 lần.' },
      { time: 24, text: 'Cảm biến bù nghiêng IMU thế hệ mới lên tới 60 độ cực kỳ chính xác.' },
      { time: 30, text: 'Dù đo đạc tại các góc khuất, chân tường rào hay gốc cây lớn.' },
      { time: 36, text: 'Độ chính xác centimet vẫn luôn được đảm bảo tuyệt đối ổn định.' },
      { time: 42, text: 'FARNAV N50 - Sự lựa chọn hoàn hảo cho kỹ sư trắc địa chuyên nghiệp.' }
    ]
  },
  {
    id: 'tutorial_n30',
    title: 'Hướng dẫn sử dụng nhanh FARNAV N30',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKJN0er6ItizMmCoxrQgPNvTMxkj5t79SsraUAt0RkVCxmyia4n4JHjEvDNov42xWn9t3EoclQ2nkDiC1GRmauhKjUUJBCvDNRQST_BbRq1_E3lJ9dO0XBeb4m3slstVv2nrV_ttAMFNMEjzH5kcka_5pv3fbtF3iVxLHnlJKZsfPNmbBP9YLr6IAWXoWNL123ftq7jDBKe2gNtuAFyjh6lDbpT4SiJ-Mwt6Tb26913__AUXpyN-bNZm4mJGm9CVfC0xgPZqDSYkcJ',
    duration: '01:50',
    subtitleList: [
      { time: 0, text: 'Hướng dẫn bật nguồn và kết nối máy Rover nhỏ gọn FARNAV N30.' },
      { time: 4, text: 'Bước 1: Nhấn giữ nút nguồn trong 3 giây cho đến khi đèn tín hiệu phát sáng.' },
      { time: 9, text: 'Bước 2: Mở phần mềm Field Survey trên sổ tay cầm tay và quét bluetooth.' },
      { time: 15, text: 'Bước 3: Chọn thiết bị FARNAV N30 và thiết lập kết nối RTK qua trạm CORS.' },
      { time: 21, text: 'Đèn tín hiệu vệ tinh nhấp nháy xanh lá biểu thị máy đã Fix thành công.' },
      { time: 27, text: 'Bây giờ bạn đã sẵn sàng bắt đầu đo đạc khảo sát địa hình cực nhanh.' }
    ]
  },
  {
    id: 'workflow_cadastral',
    title: 'Quy trình đo đạc địa chính hiện đại',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvv3t2RsrzeE79l93vfj4KNj07AuT_eXY3ZV--LtRptNvgzw_ReLHFeTiM45WC93dBSv_PYu-kKaZbtPqJPqrcrkPlBzXn6PYXLStIn4HTc5FNk_aBmjqp3zt9ynddOknXkj7CbPvGAqHHNpnpe7tU-jSq7AXTL9BHYwLhWqhKDinvodyK523uELs1fuy-JYoJeX2viJ4nR-jTQ_RV1H4xMky2JeqhOvmITOw20YZP7MjY_N-W4eJT1TfQqbpVzl36FoS8ZWzVyuC9',
    duration: '03:15',
    subtitleList: [
      { time: 0, text: 'Khám phá quy trình đo vẽ bản đồ địa chính kỹ thuật số khép kín.' },
      { time: 5, text: 'Sử dụng hệ thống máy thu GNSS chuyên dụng giúp lập ranh giới thửa đất.' },
      { time: 11, text: 'Dữ liệu đo được lưu tự động trên lưu trữ đám mây của sổ tay.' },
      { time: 16, text: 'Xuất trực tiếp file CSV hoặc DXF để nạp thẳng vào AutoCAD vẽ bản đồ.' },
      { time: 22, text: 'Nâng cao năng suất làm việc của chi nhánh văn phòng đăng ký đất đai.' }
    ]
  },
  {
    id: 'customer_interview',
    title: 'Phỏng vấn khách hàng tiêu biểu 2024',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEsR7bPubf_RjDbqPTc55dT-ir9_9eSEYwrJZBLwVe_36p4MfeYhXFOPap75bYiQ3C-EXMiU4gNyB6JrJ1p5mma-QC9ROzaDvsXwh_YaBsf8x0JlpIZPJYQ7DCaYDXpQVluZzMVXxnNnyGKLwhrrb2MgBY1XjNl_jGNjOneISnNXJWrPqQHk79wEhUx53kPPv9su2XDJUOjSXhDctN2_7r51ZySpMPxvGL2aOWcT2-nUx14YcYltRU3SnrIq-VTDwUVIy61hWkIalW',
    duration: '02:10',
    subtitleList: [
      { time: 0, text: 'Lắng nghe phản hồi thực tế từ các kỹ sư trưởng của dự án hạ tầng lớn.' },
      { time: 6, text: '"Chúng tôi sử dụng 10 máy FARNAV Rover cho công trình cầu đường tại miền Trung."' },
      { time: 12, text: '"Trải qua 6 tháng mưa bão, thiết bị vẫn làm việc ổn định, pin cực trâu."' },
      { time: 18, text: '"Khả năng hỗ trợ kỹ thuật 24/7 của đội ngũ FARNAV Việt Nam là một điểm cộng lớn."' }
    ]
  },
  {
    id: 'nbase_power',
    title: 'Khám phá sức mạnh trạm NBase',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb5YoAqBMlOR9PuJ69AH89VR_YAo69ccD8HlD-LFhskapPBoFD2y1nx4-KVd3BEvHLTGn5-013SXj78cH7h4_-0DbzZ8rW7rcNsiidXTIxKROPq7skAqIAxghV7exJQHnissAaKjYGqOv3ZFhm8O2s68ZcmYU8jupUtC4MOjv80cNQwdI_jULx5UDdxTj-2oPcLBk0KvQqJVRAzDhHSQEwg_w0rMIocn9Kxbs8kYwMHEWqqAcJbkFOPOQ-hc2c1Dwk1XUvt60ScKpd',
    duration: '03:00',
    subtitleList: [
      { time: 0, text: 'Tổng quan về trạm phát sóng Base Station công suất cao FARNAV NBase.' },
      { time: 6, text: 'Sở hữu bộ phát Radio trong lên tới 5W, cho phép Rover nhận tín hiệu xa 15km.' },
      { time: 12, text: 'Thiết kế kim loại nguyên khối chống rung động, tản nhiệt hoàn hảo.' },
      { time: 18, text: 'Giúp duy trì lưới định vị vững chắc cho toàn bộ đại công trình xây dựng.' }
    ]
  }
];
