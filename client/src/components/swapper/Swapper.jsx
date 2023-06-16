import { BsLightningCharge } from 'react-icons/bs';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './swapper.scss'

import { Keyboard, Navigation} from "swiper";

const Swapper = () => {

    return (
        <>
        <Swiper
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            // grabCursor={true}
            navigation={true}
            
            modules={[Keyboard, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src="https://thumbs.dfs.ivi.ru/storage33/contents/f/c/3a2ba53cb2a9b16b82d3ae2e207de7.jpg/1216x370/?q=85" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://thumbs.dfs.ivi.ru/storage2/contents/2/d/ed4a91e9710fe8a93bd405424c66bb.jpg/1216x370/?q=85" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://thumbs.dfs.ivi.ru/storage2/contents/1/9/01fbe7f049afa39c4cc9b76de9647a.jpg/1216x370/?q=60" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://thumbs.dfs.ivi.ru/storage33/contents/d/1/76845a5b9d42b833da496d55485131.jpg/1216x370/?q=60" alt="img"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://thumbs.dfs.ivi.ru/storage2/contents/2/d/ed4a91e9710fe8a93bd405424c66bb.jpg/1216x370/?q=85" alt="img"/>
            </SwiperSlide>
        </Swiper>
        <div className="subscription">
            <div className="subscription__text">
                <BsLightningCharge className='icon'/>
                <p>30 дней подписки бесплатно</p>
            </div>
        </div>
    </>
    )
};

export default Swapper;