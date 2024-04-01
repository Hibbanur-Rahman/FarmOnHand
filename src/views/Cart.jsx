import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { product } from '../utils/data';


import { Row, Col, Card, CardBody } from 'react-bootstrap';
import "../App.css"

export default function Cart() {

    const { productId } = useParams();
    const [productItem, setProductItem] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        const foundProduct = product.find(item => item.id === parseInt(productId));
        if (foundProduct) {
            setProductItem(foundProduct);
        } else {
            console.log('Product not found');
        }
    }, [productId]);

    useEffect(() => {
        // Calculate total price based on productItem
        if (productItem) {
            setTotalPrice(productItem.price); // Assuming productItem has a quantity property
        }
    }, [productItem]);
    return (
        <>
            <Row>
                <Col lg="7" className='border rounded p-3'>
                    <Link to="/" className="text-body">
                        Continue
                        shopping
                    </Link>

                    <hr />

                    <div className='mb-3'>
                        <p className="mb-1">Shopping cart</p>
                        <p className="mb-0">You have 4 items in your cart</p>
                    </div>

                    {productItem && (
                        <Card className="mb-3">
                            <CardBody>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="border rounded me-2 p-2">
                                            <img
                                                src={`./images/Featured_Product/${productItem.imageId}.png`}
                                                className="rounded-3" width={"70px"}
                                                alt="Shopping item" />
                                        </div>
                                        {productItem.name}
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div style={{ width: "50px" }}>
                                            2
                                        </div>
                                        <div style={{ width: "80px" }}>
                                            ₹{productItem.price}
                                        </div>
                                        <Link to="#" className='text-decoration-none'>
                                            <i className="bi bi-trash-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    )}

                </Col>

                <Col lg="5">
                    <Card className="border rounded">
                        <CardBody>
                            <h5>Cart totals</h5>
                            <p>${totalPrice}</p>
                            <p>${totalPrice}</p>


                            <div className="text-center">
                                <button className='btn_filled'>
                                    Checkout
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}