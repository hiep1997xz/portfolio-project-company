import { images } from "@/assets/image-bases";

export const projects: any = [
  {
    title: 'Vtruyện',
    description:
      'Nền tảng đọc truyện tranh trực tuyến với hơn 10,000+ tác phẩm. Tích hợp tính năng đọc offline, bookmark và theo dõi truyện yêu thích. Hỗ trợ đa nền tảng với giao diện thân thiện.',
    image: images.image1,
    tags: ['React', 'Node.js', 'MongoDB'],
    features: ['Đọc offline', 'Bookmark', 'Theo dõi truyện', 'Tìm kiếm nâng cao'],
    stats: '10,000+ tác phẩm, 50,000+ người dùng hàng tháng',
    domain: 'Entertainment',
    languages: ['Tiếng Việt', 'English']
  },
  {
    title: 'Family Voice',
    description:
      'Ứng dụng kết nối gia đình qua tin nhắn thoại và hình ảnh. Tích hợp album ảnh gia đình, chia sẻ khoảnh khắc và tạo nhật ký chung. Bảo mật cao với xác thực hai lớp.',
    image: images.image2,
    tags: ['React', 'Firebase', 'Cloud Storage'],
    features: ['Chat nhóm', 'Album ảnh', 'Nhật ký', 'Thông báo'],
    stats: '20,000+ gia đình đang sử dụng',
    domain: 'Social',
    languages: ['Tiếng Việt', 'English', '日本語']
  },
  {
    title: 'Movies VMS',
    description:
      'Hệ thống quản lý rạp chiếu phim hiện đại với tính năng đặt vé trực tuyến, quản lý suất chiếu và thống kê doanh thu. Tích hợp thanh toán điện tử và hệ thống khuyến mãi.',
    image: images.image3,
    tags: ['Vue', 'MongoDB', 'Express'],
    features: ['Đặt vé online', 'Quản lý suất chiếu', 'Báo cáo doanh thu'],
    stats: 'Phục vụ 5 cụm rạp lớn',
    domain: 'Entertainment',
    languages: ['Tiếng Việt', 'English', '한국어']
  },
  {
    title: 'IniStory',
    description:
      'Nền tảng sáng tạo và chia sẻ truyện tương tác. Người dùng có thể tạo các câu chuyện với nhiều nhánh kết thúc khác nhau. Hỗ trợ tích hợp hình ảnh và âm thanh.',
    image: images.image5,
    tags: ['Vue', 'MongoDB', 'AWS'],
    features: ['Tạo truyện tương tác', 'Thư viện media', 'Thống kê tương tác'],
    stats: '1,000+ tác giả hoạt động',
    domain: 'Education',
    languages: ['Tiếng Việt', 'English', '日本語', '한국어']
  },
  {
    title: 'IniStory App',
    description:
      'Ứng dụng di động cho nền tảng IniStory với trải nghiệm đọc truyện mượt mà trên thiết bị di động. Hỗ trợ đọc offline và đồng bộ dữ liệu đa thiết bị.',
    image: images.image6,
    tags: ['Vue Native', 'MongoDB', 'React Native'],
    features: ['Đọc offline', 'Đồng bộ đa thiết bị', 'Tùy chỉnh giao diện'],
    stats: '100,000+ lượt tải về',
    domain: 'Education',
    languages: ['Tiếng Việt', 'English', '日本語', '한국어']
  }
];
