import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "./ReviewSwiperStyles.css";

export default function Reviews(props) {
  return (
    <div className='swiper-encloser'>
      <h1>{props.heading}</h1>
      <p><strong>scroll sideways</strong></p>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          780: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 4,
          }
        }}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="swiper-wraper"
      >
        <SwiperSlide className='slide'>
          <div className="wrapper">
            <img src={props.image1} alt="" />
          </div>
          <h3>{props.name1}</h3>
          <p>
            <i className="fa-solid fa-quote-left"></i>{props.text1}
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <a href="/">See more <i className="fa-solid fa-arrow-right"></i></a>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="wrapper">
            <img src={props.image2} alt="" />
          </div>
          <h3>{props.name1}</h3>
          <p>
            <i className="fa-solid fa-quote-left"></i>{props.text1}
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <a href="/">See more <i className="fa-solid fa-arrow-right"></i></a>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="wrapper">
            <img src={props.image3} alt="" />
          </div>
          <h3>{props.name1}</h3>
          <p>
            <i className="fa-solid fa-quote-left"></i>{props.text1}
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <a href="/">See more <i className="fa-solid fa-arrow-right"></i></a>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="wrapper">
            <img src={props.image4} alt="" />
          </div>
          <h3>{props.name1}</h3>
          <p>
            <i className="fa-solid fa-quote-left"></i>{props.text1}
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <a href="/">See more <i className="fa-solid fa-arrow-right"></i></a>
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <div className="wrapper">
            <img src={props.image5} alt="" />
          </div>
          <h3>{props.name1}</h3>
          <p>
            <i className="fa-solid fa-quote-left"></i>{props.text1}
            <i className="fa-solid fa-quote-right"></i>
          </p>
          <a href="/">See more <i className="fa-solid fa-arrow-right"></i></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
