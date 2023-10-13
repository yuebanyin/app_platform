import { useEffect } from 'react';
// import { SwiperSlide } from 'swiper/react';

// import  Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import 'swiper/css';
// import './index.scss';

import { Img } from '../img';

export function MySwiperComponent(props: any) {
  const { bannerList } = props;

  useEffect(() => {
    const mySwiper = new Swiper('.mySwiper', {
      effect: 'slide',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1.4,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      initialSlide: 2,
      autoplay: {
        delay: 3000, // 设置轮播间隔时间，单位为毫秒
        disableOnInteraction: false, // 用户操作后是否停止自动轮播
      },
      loop: true, // 最后一张和第一张无缝衔接
    });
    return () => {
      mySwiper.destroy(); // 销毁Swiper实例，避免内存泄漏
    };
  }, []);

  return (
    <div className='swiper mySwiper w-1344'>
      <div className='swiper-wrapper'>
        {bannerList.map((item) => (
          <div key={item.id} className='swiper-slide h-494'>
            <Img src={item.url} key={item.id} className='h-494' />
          </div>
        ))}
      </div>
      <div className='swiper-pagination' />
    </div>
  );
}
