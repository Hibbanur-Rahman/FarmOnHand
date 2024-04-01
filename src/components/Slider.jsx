import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { product } from '../utils/data';
import { getImageUrl } from '../utils/utils';
import { Container, Card } from 'react-bootstrap';
import 'swiper/css';
import "../assets/styles/style-Slider.css"
import "../App.css"
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper mb-3"
      >
        {product.map((productItem, index) => (
          <SwiperSlide key={index}>
            <Link to={{ pathname: `/product-details/${productItem.id}`, state: { product: productItem } }} className='text-decoration-none'>
              <Card>
                <div className="d-block p-3">
                  <div className="d-flex">
                    <small className='w-50 text-start text-secondary'>{productItem.type}</small>
                  </div>
                  <img src={getImageUrl(productItem)} alt={productItem.imageId} srcSet="" />
                  <div className="d-block text-start mb-3">
                    <h4>₹{productItem.price}</h4>
                    <h6>{productItem.name}</h6>
                  </div>
                  <button className='btn_white w-100'>Add to cart</button>
                </div>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
