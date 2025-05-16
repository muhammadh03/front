// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Brands SVG's
import Nokia from "../../assets/brands/nokia.svg";
import Samsung from "../../assets/brands/samsung.svg";
import Vivo from "../../assets/brands/vivo.svg";
import Huawei from "../../assets/brands/huawei.svg";
import Oppo from "../../assets/brands/oppo.svg";
import Sony from "../../assets/brands/sony.svg";
import Intel from "../../assets/brands/intel.svg";
import Lenovo from "../../assets/brands/lenovo.svg";
import Hp from "../../assets/brands/hp.svg";
import Dell from "../../assets/brands/dell.svg";
import Acer from "../../assets/brands/acer.svg";
import Asus from "../../assets/brands/asus.svg";
import Rog from "../../assets/brands/republicofgamers.svg";
import Msi from "../../assets/brands/msi.svg";
import Toshiba from "../../assets/brands/toshiba.svg";
import Apple from "../../assets/brands/apple.svg";
import Jbl from "../../assets/brands/jbl.svg";
import Amd from "../../assets/brands/amd.svg";
import Bmd from "../../assets/brands/blackmagicdesign.svg";
import Kodak from "../../assets/brands/kodak.svg";
import Nikon from "../../assets/brands/nikon.svg";
// import Canon from "../../assets/brands/canon.svg";
import Epson from "../../assets/brands/epson.svg";
import Playstation from "../../assets/brands/playstation.svg";

const brandDetails = [
    {
        title: "nokia",
        image: Nokia
    },
    {
        title: "samsung",
        image: Samsung
    },
    {
        title: "vivo",
        image: Vivo
    },
    {
        title: "huawei",
        image: Huawei
    },
    {
        title: "oppo",
        image: Oppo
    },
    {
        title: "sony",
        image: Sony
    },
    {
        title: "intel",
        image: Intel
    },
    {
        title: "lenovo",
        image: Lenovo
    },
    {
        title: "hp",
        image: Hp
    },
    {
        title: "dell",
        image: Dell
    },
    {
        title: "acer",
        image: Acer
    },
    {
        title: "asus",
        image: Asus
    },
    {
        title: "republicofgamers",
        image: Rog
    },
    {
        title: "msi",
        image: Msi
    },
    {
        title: "toshiba",
        image: Toshiba
    },
    {
        title: "apple",
        image: Apple
    },
    {
        title: "jbl",
        image: Jbl
    },
    {
        title: "amd",
        image: Amd
    },
    {
        title: "blackmagicdesign",
        image: Bmd
    },
    {
        title: "kodak",
        image: Kodak
    },
    {
        title: "nikon",
        image: Nikon
    },
    // {
    //     title: "canon",
    //     image: Canon
    // },
    {
        title: "epson",
        image: Epson
    },
    {
        title: "playstation",
        image: Playstation
    },
]


const Brands = () => {
    return (
        <div className='bg-yellow-400/95'>
            <div className='container mx-auto'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    modules={[Navigation, Autoplay]}
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
                    {brandDetails.map(({ title, image }) => (
                        <SwiperSlide key={title}>
                            <div className='flex items-center justify-center'>
                                <img src={image} alt={title} className='brand' />
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                        <img src={Nokia} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Vivo} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Oppo} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Sony} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Intel} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Lenovo} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Hp} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Dell} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Acer} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Asus} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Rog} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Msi} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Toshiba} alt="nokia_logo" className='brand' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Apple} alt="nokia_logo" className='brand' />
                    </SwiperSlide> */}

                    {/* <div className='flex items-center justify-between text-white'>
                        <button className='custom-prev absolute top-1/2 left-0 z-10'>
                            <IoIosArrowBack className='w-8 h-8' />
                        </button>
                        <button className='custom-next absolute top-1/2 right-0 z-10'>
                            <IoIosArrowForward className='w-8 h-8' />
                        </button>
                    </div> */}
                </Swiper>
            </div>
        </div>
    )
}

export default Brands;
