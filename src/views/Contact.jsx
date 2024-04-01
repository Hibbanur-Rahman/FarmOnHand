import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function Contact() {

    return (
        <>

            <Row>
                <Col md={7}>
                    <div className="rounded p-3 bg-body-tertiary">
                        <h2>Contact Us</h2>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="Message" rows={3} />
                            </Form.Group>
                        </Form>
                    </div>
                </Col>
                <Col md={5}>
                </Col>
            </Row>

        </>
    );
}

