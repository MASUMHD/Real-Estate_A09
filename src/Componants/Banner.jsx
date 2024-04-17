
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Banner = () => {
  return (
    
    <Swiper className='mt-10 rounded-3xl'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='h-[400px]' src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/2/8/1/CI_Halstead_History-of-Penthouses-6.jpg.rend.hgtvcom.1280.720.suffix/1518139442662.jpeg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-[400px] w-full' src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D" alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-[400px]' src="https://img.pikbest.com/wp/202408/swimming-pool-terrace-and-landscape-garden-in-exquisite-exterior-design-of-house-home-villa-3d-render_9761322.jpg!sw800" alt="" /></SwiperSlide>
      <SwiperSlide><img className='h-[400px]' src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" alt="" />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Banner;
