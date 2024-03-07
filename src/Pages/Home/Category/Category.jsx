import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section className=''>
            <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}>

            </SectionTitle>


            <Swiper
                slidesPerView={4}
                


                pagination={{
                    clickable: true,

                }}
                modules={[Pagination]}
                className="mySwiper mb-24 "
            >
                <SwiperSlide >
                    <img src={slide1} className='' alt="" />
                    <h3 className=' text-center -ml-20 text-3xl font-bold italic py-5 -mt-24 text-white '>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className=' text-center -ml-20 text-3xl font-bold italic py-5 -mt-24 text-white '>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className=' text-center -ml-20 text-3xl font-bold italic py-5  -mt-24 text-white '>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className=' text-center -ml-20 text-3xl font-bold italic py-5  -mt-24 text-white '>Desert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className=' text-center -ml-20 text-3xl font-bold italic py-5 -mt-24 text-white '>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;