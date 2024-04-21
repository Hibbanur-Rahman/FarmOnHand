import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function OrderDetails() {
    return (

        <>
            <p className="p-3 bg-body-secondary">Thank you, your order has been received.</p>
            <div className="row">
                <div className="col-md-3"><p>Order Number: <b>#9048503</b></p></div>
                <div className="col-md-3"><p>Date: <b>25-12-2023</b></p></div>
                <div className="col-md-3"><p>Total: <b>₹889</b></p></div>
                <div className="col-md-3"><p>Payment Method: <b>Online</b></p></div>
            </div>
            <h1 className="mb-3">Order Details</h1>

            <div className="d-flex p-3 bg-body-secondary ">
                <h5 className="w-50 text-start">Product</h5>
                <h5 className="w-50 text-end">Total</h5>
            </div>
            <div className="d-flex p-3">
                <p className="w-50 text-start">Product Name</p>
                <p className="w-50 text-end">Price</p>
            </div>
            <div className="d-flex p-3">
                <p className="w-50 text-start">Sub total</p>
                <p className="w-50 text-end">sub total</p>
            </div>
            <div className="d-flex p-3">
                <p className="w-50 text-start">Payment method</p>
                <p className="w-50 text-end">Online</p>
            </div>
            <div className="d-flex p-3">
                <p className="w-50 text-start">Total</p>
                <p className="w-50 text-end">total</p>
            </div>
            <div className="card">
                <div className="card-body">
                    <p className="m-0 p-0">billingAddressDetails.companyname</p>
                    <p className="m-0 p-0">
                        billingAddressDetails.firstname
                        billingAddressDetails.lastname
                    </p>
                    <p className="m-0 p-0">billingAddressDetails.street</p>
                    <p className="m-0 p-0">billingAddressDetails.street1</p>
                    <p className="m-0 p-0">
                        billingAddressDetails.city billingAddressDetails.pincode
                    </p>
                    <p className="m-0 p-0">billingAddressDetails.state</p>
                </div>
            </div>
        </>
    )
}

export default OrderDetails;