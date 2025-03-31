import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import './styles.css'

const PortfolioNew = () => {
  const slides = [
    {
      id: 1,
      title: 'Page 1',
      content: 'Content for page 1'
    },
    {
      id: 2,
      title: 'Page 2',
      content: 'Content for page 2'
    },
    {
      id: 3,
      title: 'Page 3',
      content: 'Content for page 3'
    },
    {
      id: 4,
      title: 'Page 4',
      content: 'Content for page 4'
    }
  ];

  return (
    <div className="w-full py-12 bg-gray-100">
      <Swiper
        effect={'flip'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        flipEffect={{
          slideShadows: true,
          limitRotation: true
        }}
        pagination={true}
        modules={[EffectFlip, Pagination]}
        className="w-full py-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-[300px] h-[400px] rounded-md shadow-md">
            <div className="w-full h-full bg-white p-5 rounded-md flex flex-col justify-center items-center text-center shadow-inner border border-gray-200">
              <h2 className="mb-5 text-2xl text-gray-800">{slide.title}</h2>
              <p className="text-gray-600 text-base leading-relaxed">{slide.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioNew;
