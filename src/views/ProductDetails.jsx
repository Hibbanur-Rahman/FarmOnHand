import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "../assets/styles/style-ProductDetails.css"

import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { product } from '../utils/data';

export default function ProductDetails() {
    const { productId } = useParams();
    const [productItem, setProductItem] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {


        // Find the product by its ID
        const foundProduct = product.find(item => item.id === parseInt(productId));
        if (foundProduct) {

            setProductItem(foundProduct);
        } else {
            // Handle case where product is not found
            console.log('Product not found');
        }
    }, [productId]); // Re-run effect when productId changes
    console.log(productItem)

    return (
        <>
            <Row>
                <Col lg={6}>
                    <div className=" border rounded mb-3">
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {productItem && (
                                <SwiperSlide>
                                    <img src={`./images/Featured_Product/${productItem.imageId}.png`} alt={productItem.imageId} className='w-100' />
                                </SwiperSlide>

                            )}
                        </Swiper>
                    </div>
                </Col>
                <Col lg={6}>
                    {productItem && (
                        <>
                            <h3>Whole Foods Market, Organic {productItem.name}</h3>
                            <Row>
                                <Col md={6}>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star-fill me-1"></i>
                                    <i className="bi bi-star me-1"></i>

                                </Col>

                                <Col md={6} className='text-md-end'>
                                    <i className="bi bi-whatsapp me-1"></i>
                                    <i className="bi bi-facebook me-1"></i>
                                    <i className="bi bi-instagram me-1"></i>
                                </Col>
                            </Row>
                            <hr />
                            <p className='text-secondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias ab aperiam ratione esse sequi iste adipisci. Debitis beatae temporibus neque amet sit eveniet aliquid nobis. Laboriosam vero sunt ipsam?
                            </p>
                            <h3>₹{productItem.price}</h3>

                            <div key='radio' className="mb-3">
                                <Form.Check
                                    inline
                                    label="500gm"
                                    name="group1"
                                    type='radio'
                                    id='radio1'
                                    required
                                />
                                <Form.Check
                                    inline
                                    label="1000gm"
                                    name="group1"
                                    type='radio'
                                    id='radio2'
                                    required
                                />
                            </div>
                            <Link to={{ pathname: `/cart/${productItem.id}`, state: { product: productItem } }} className='text-decoration-none'>
                                <button type="button" className='btn_filled'>Add to cart</button>
                            </Link>
                            <hr />

                            <p>Category : <span className='text-secondary'>{productItem.type}</span></p>

                            <div className="card_div d-block border rounded p-3">
                                <h6 className='primary_color ps-2'>Guaranteed Safe Checkout</h6>
                                <div className="d-flex">
                                    <img src="./images/visa.svg" alt="visa" />
                                </div>
                            </div>
                        </>
                    )}
                </Col>
            </Row>
        </>
    );
}
