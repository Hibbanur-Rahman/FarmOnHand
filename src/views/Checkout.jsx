import { Link } from "react-router-dom";

function Checkout() {
    return (
        <>
            <div className="row">
                <div className="col-md-7">
                    <h1>Billing Address</h1>
                    <form
                        action="/add-billing-address"
                        method="post"
                    // onSubmit={}
                    >
                        <div className="row m-0 p-0">
                            <div className="mb-3 col-6 p-0">
                                <label htmlFor="first-name" className="form-label">
                                    First name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="first-name"
                                    placeholder="First name"
                                    name="firstname"
                                // value={}
                                // onChange={}
                                />
                            </div>
                            <div className="mb-3 col-6 pe-0">
                                <label htmlFor="last-name" className="form-label">
                                    Last name <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="last-name"
                                    placeholder="Last name"
                                    name="lastname"
                                // value={}
                                // onChange={}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="company-name" className="form-label">
                                Company name (optional)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="company-name"
                                placeholder="Company name"
                                name="companyname"
                            // value={}
                            // onChange={}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">
                                Country / Region <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="country"
                                placeholder="India"
                                name="country"
                                // value={}
                                // onChange={}
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="street-address" className="form-label">
                                Street address <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="street-address"
                                placeholder="House number and street name"
                                name="street"
                            // value={}
                            // onChange={}
                            />
                            <input
                                type="text"
                                className="form-control mt-3"
                                id="street-address"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                name="street1"
                            // value={}
                            // onChange={}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">
                                Town / City <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                placeholder="eg. Patna, Hyderabad"
                                name="city"
                            // value={}
                            // onChange={}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">
                                State <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                placeholder="eg. Bihar, Telangana"
                                name="state"
                            // value={}
                            // onChange={}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pincode" className="form-label">
                                PIN Code <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="pincode"
                                placeholder="eg. 847301"
                                name="pincode"
                            // value={}
                            // onChange={}
                            />
                        </div>
                        <div className="row m-0 p-0">
                            <div className="mb-3 col-6 p-0">
                                <label htmlFor="phone" className="form-label">
                                    Phone <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="eg. +91-9973152523"
                                    name="phone"
                                // value={}
                                // onChange={}
                                />
                            </div>
                            <div className="mb-3 col-6 pe-0">
                                <label htmlFor="email" className="form-label">
                                    Email address <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="eg. hibbanrahmanhyt@gmail.com"
                                    name="email"
                                // value={}
                                // onChange={}
                                />
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Cash on delivery
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Online payment
                                </label>
                            </div>
                        </div>

                        <div className="text-end">
                            <Link to='/order-details'>
                                <button className="btn_filled text-light mt-3" type="submit">
                                    Place order
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="col-md-5">
                    <div className="card border rounded">
                        <div className="d-block p-3 bg-body-secondary">
                            <h4>Product</h4>
                        </div>
                        <div className="card-body">
                            <h6>Product Name</h6>
                            <div className="d-flex">
                                <p className="w-50 text-start">Sub total</p>
                                <p className="w-50 text-end">₹50</p>
                            </div>
                            <div className="d-flex">
                                <p className="w-50 text-start">Total</p>
                                <p className="w-50 text-end">₹50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;