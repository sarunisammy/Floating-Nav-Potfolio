import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import AVTR1 from "../../Assets/avatar1.jpg";
import AVTR2 from "../../Assets/avatar2.jpg";
import AVTR3 from "../../Assets/avatar3.jpg";
import AVTR4 from "../../Assets/avatar4.jpg";
import { Pagination } from "swiper";

//swipers styles
import "swiper/css";
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Tony Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget rutrum est. Duis nec congue quam, a feugiat felis. Aenean id semper lectus. Aliquam nec sodales sapien, et faucibus arcu.",
  },
  {
    avatar: AVTR2,
    name: "Sammy serilo",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget rutrum est. Duis nec congue quam, a feugiat felis. Aenean id semper lectus. Aliquam nec sodales sapien, et faucibus arcu.",
  },
  {
    avatar: AVTR3,
    name: "Sevo Leto",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget rutrum est. Duis nec congue quam, a feugiat felis. Aenean id semper lectus. Aliquam nec sodales sapien, et faucibus arcu.",
  },
  {
    avatar: AVTR4,
    name: "Ammy lem",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget rutrum est. Duis nec congue quam, a feugiat felis. Aenean id semper lectus. Aliquam nec sodales sapien, et faucibus arcu.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container">
        {/* install swiper modules */}
        {/* modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1} */}
    
      {/* pagination={{ clickable: true }} */}
      
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
