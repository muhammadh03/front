// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Hero Images
import bannerOne from "../../assets/banner/banner-1.jpg"
import bannerTwo from "../../assets/banner/banner-2.jpg"
import bannerThree from "../../assets/banner/banner-3.jpg"
import bannerFour from "../../assets/banner/banner-4.jpg"
import bannerFive from "../../assets/banner/banner-5.jpg"
import bannerSix from "../../assets/banner/banner-6.jpg"
import bannerSeven from "../../assets/banner/banner-7.jpg"


const Hero = () => {

    return (
        <div className='container max-auto relative'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bannerOne} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerTwo} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerThree} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerFour} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerFive} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerSix} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerSeven} alt="" className='w-[1350px] h-[6rem] md:h-[15rem] lg:h-[20rem]' />
                </SwiperSlide>

                <div className='flex items-center justify-between text-white'>
                    <button className='custom-prev absolute top-1/2 left-0 z-10 cursor-pointer'>
                        <IoIosArrowBack className='w-4 md:w-8 h-4 md:h-8' />
                    </button>
                    <button className='custom-next absolute top-1/2 right-0 z-10 cursor-pointer'>
                        <IoIosArrowForward className='w-4 md:w-8 h-4 md:h-8' />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

export default Hero;
