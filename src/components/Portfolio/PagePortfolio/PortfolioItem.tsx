import { images } from '@/assets/image-bases';
import { IconAllow, IconAWS, IconMongoDB, IconNextJs, IconPythod } from '@/assets/svgs/icon';
import Image from 'next/image';
import React from 'react';

const PortfolioItem = React.forwardRef((props: any, ref: any) => {
  const { project } = props;

  const switchPage = () => {
    switch (project.title) {
      case 'Vtruyện':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-[url('/imgs/img_4.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative z-10 flex flex-col w-full h-full">
              <div className="flex w-full h-full p-8">
                <div className="w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-4 text-[#ffa23b]">{project.title}</h2>
                  <p className="text-[16px] mb-4">{project.description}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <IconAllow width={16} height={20} />
                      <p className="text-lg font-bold text-[#ffa23b]">Thị trường</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <p>
                        <span className="font-bold">Đối tượng người dùng:</span> Người yêu thích
                        truyện tranh từ 12 - 35 tuổi.
                      </p>
                      <p>
                        <span className="font-bold">Thị trường mục tiêu:</span> Việt Nam, Nhật Bản,
                        Hàn Quốc, Mỹ.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <IconAllow width={16} height={20} />
                      <p className="text-lg font-bold text-[#ffa23b]">Tính năng chính</p>
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <p>
                        <span className="font-bold">Đọc offline:</span> Người dùng có thể tải truyện
                        về và đọc mà không cần kết nối Internet.
                      </p>
                      <p>
                        <span className="font-bold">Bookmark:</span> Lưu lại vị trí đọc và tiếp tục
                        từ chương đã dừng.
                      </p>
                      <p>
                        <span className="font-bold">Theo dõi truyện: </span> Nhận thông báo khi có
                        chương mới.
                      </p>
                      <p>
                        <span className="font-bold">Tìm kiếm nâng cao:</span> Lọc truyện theo thể
                        loại, tác giả, năm xuất bản.
                      </p>
                      <p>
                        <span className="font-bold">Dark mode:</span> Tối ưu trải nghiệm đọc vào ban
                        đêm.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-16">
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <IconAllow width={16} height={20} />
                        <p className="text-lg font-bold text-[#ffa23b]">Công nghệ cốt lõi</p>
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        <p className="font-bold">AI gợi ý truyện theo sở thích</p>
                        <p className="font-bold">AI tạo truyện tranh Anime</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <IconAllow width={16} height={20} />
                        <p className="text-lg font-bold text-[#ffa23b]">Ngôn ngữ</p>
                      </div>

                      <div className="flex gap-8 ml-4">
                        <IconNextJs width={32} height={32} />
                        <IconPythod width={32} height={32} />
                        <IconAWS width={32} height={32} />
                        <IconMongoDB width={32} height={32} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute right-20 top-1/2 -translate-y-1/2">
                    <div className="relative">
                      <Image
                        src={images.image1}
                        alt="Vtruyen 1"
                        className="w-[400px] h-[250px] object-cover shadow-lg top-44 z-30 relative -right-16 "
                      />
                      <Image
                        src={images.image1}
                        alt="Vtruyen 2"
                        className="w-[350px] h-[220px] object-cover shadow-lg absolute top-0 right-2 z-20 transform"
                      />
                      <Image
                        src={images.image1}
                        alt="Vtruyen 3"
                        className="w-[320px] h-[200px] object-cover shadow-lg absolute -top-44 -right-16 z-10 transform "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Family Voice':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-[url('/imgs/img_5.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative z-10 flex flex-col w-full h-full">
              <div className="w-[90%] h-full p-8 justify-center flex flex-col">
                <h2 className="text-4xl font-bold mb-4 text-[#ffa23b]">{project.title}</h2>
                <p className="text-[16px] mb-8">{project.description}</p>
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex items-center gap-2">
                    <IconAllow width={16} height={20} />
                    <p className="text-lg font-bold text-[#ffa23b]">Ngôn ngữ</p>
                  </div>

                  <div className="flex gap-8 ml-4">
                    <IconNextJs width={32} height={32} />
                    <IconAWS width={32} height={32} />
                    <IconMongoDB width={32} height={32} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-[450px] h-[300px] bg-[#ffa23b] p-2 flex flex-col justify-between">
                    <div className="text-white">
                      <p className="text-lg font-bold text-white">Thị trường</p>
                      <p>
                        <span className="font-bold">Đối tượng người dùng:</span> Người dùng từ 16
                        trở lên.
                      </p>
                      <p>
                        <span className="font-bold">Thị trường mục tiêu:</span> Việt Nam, Nhật Bản,
                        Hàn Quốc, Mỹ.
                      </p>
                    </div>
                    <div>
                      <Image src={images.image2} alt="Family Voice" />
                    </div>
                  </div>
                  <div className="w-[450px] h-[300px] bg-[#ffa23b] p-2 flex flex-col justify-between">
                    <div className="text-white">
                      <p className="text-lg font-bold ">Tính năng chính</p>
                      <p>- Video call</p>
                      <p>- Quản lý lịch sử cuộc gọi</p>
                    </div>
                    <div>
                      <Image src={images.image2} alt="Family Voice" />
                    </div>
                  </div>
                  <div className="w-[450px] h-[300px] bg-[#ffa23b] p-2 flex flex-col justify-between">
                    <div className="text-white">
                      <p className="text-lg font-bold ">Công nghệ cốt lõi</p>
                      <p>- AI check khuôn mặt</p>
                      <p>- AI check khuôn mặt</p>
                    </div>
                    <div>
                      <Image src={images.image2} alt="Family Voice" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Movies VMS':
        return (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-[url('/imgs/img_4.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative z-10 flex flex-col w-full h-full">
              <div className="flex w-full h-full p-8">
                <div className="w-1/2 flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-4 text-[#ffa23b]">{project.title}</h2>
                  <p className="text-[16px] mb-4">{project.description}</p>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <IconAllow width={16} height={20} />
                      <p className="text-lg font-bold text-[#ffa23b]">Thị trường</p>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <p>
                        <span className="font-bold">Đối tượng người dùng:</span> Người yêu thích
                        truyện tranh từ 12 - 35 tuổi.
                      </p>
                      <p>
                        <span className="font-bold">Thị trường mục tiêu:</span> Việt Nam, Nhật Bản,
                        Hàn Quốc, Mỹ.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <IconAllow width={16} height={20} />
                      <p className="text-lg font-bold text-[#ffa23b]">Tính năng chính</p>
                    </div>

                    <div className="flex flex-col gap-2 ml-4">
                      <p>
                        <span className="font-bold">Đọc offline:</span> Người dùng có thể tải truyện
                        về và đọc mà không cần kết nối Internet.
                      </p>
                      <p>
                        <span className="font-bold">Bookmark:</span> Lưu lại vị trí đọc và tiếp tục
                        từ chương đã dừng.
                      </p>
                      <p>
                        <span className="font-bold">Theo dõi truyện: </span> Nhận thông báo khi có
                        chương mới.
                      </p>
                      <p>
                        <span className="font-bold">Tìm kiếm nâng cao:</span> Lọc truyện theo thể
                        loại, tác giả, năm xuất bản.
                      </p>
                      <p>
                        <span className="font-bold">Dark mode:</span> Tối ưu trải nghiệm đọc vào ban
                        đêm.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-16">
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <IconAllow width={16} height={20} />
                        <p className="text-lg font-bold text-[#ffa23b]">Công nghệ cốt lõi</p>
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        <p className="font-bold">AI gợi ý truyện theo sở thích</p>
                        <p className="font-bold">AI tạo truyện tranh Anime</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <IconAllow width={16} height={20} />
                        <p className="text-lg font-bold text-[#ffa23b]">Ngôn ngữ</p>
                      </div>

                      <div className="flex gap-8 ml-4">
                        <IconNextJs width={32} height={32} />
                        <IconPythod width={32} height={32} />
                        <IconAWS width={32} height={32} />
                        <IconMongoDB width={32} height={32} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 relative flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="relative">
                      <Image 
                        src={images.image1}
                        alt="Laptop mockup"
                        className="w-[450px] h-[350px] object-cover relative z-10 left-10 rounded-xl"
                      />
                      <Image
                        src={images.movisApp} 
                        alt="Mobile mockup"
                        className="w-[200px] h-[300px] object-cover top-16 -left-10 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.1)] absolute bottom-[50px] z-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return;
    }
  };

  return (
    <div className="relative w-full h-full" ref={ref}>
      <div className="w-full h-full">
        <div className="relative w-full h-full">{switchPage()}</div>
      </div>
    </div>
  );
});

export default PortfolioItem;
PortfolioItem.displayName = 'PortfolioItem';
