import { Container } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import { product } from "../utils/data";
import { getImageUrl } from "../utils/utils";
import { Link } from "react-router-dom";

function Fruits() {
    const fruitsProducts = product.filter(item => item.type === "Fruit");

    return (
        <>
            <h2>Fruits</h2>
            <Row className="py-3">

                {fruitsProducts.map((product) => (
                    <Col key={product.id} md={4} lg={3}>
                        <Link to={{ pathname: `/product-details/${product.id}`, state: { product: product } }} className='text-decoration-none'>
                            <Card className="mb-3">
                                <div className="d-block p-3">
                                    <div className="d-flex">
                                        <small className='w-50 text-start text-secondary'>{product.type}</small>
                                    </div>
                                    <img src={getImageUrl(product)} alt={product.imageId} srcSet="" className="w-100" />
                                    <div className="d-block text-start mb-3">
                                        <h4>₹{product.price}</h4>
                                        <h6>{product.name}</h6>
                                    </div>
                                    <button className='btn_white w-100'>Add to cart</button>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Fruits;
