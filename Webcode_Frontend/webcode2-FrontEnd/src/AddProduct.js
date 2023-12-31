import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function AddProduct() {
    const [isLoading, setLoading] = useState(false);
    const navigation = useNavigate();
    const MyFormik = useFormik({
        initialValues: {
            name: "",
            vendor: "",
            price: "",
            selling_price: "",
            product_added_on: "",
            img: ""

        },
        validate: (values) => {
            let errors = {}

            if (!values.name) {
                errors.name = "Please enter the product name"

            }
            if (!values.vendor) {
                errors.vendor = "Please enter vendor name"

            }
            if (!values.price) {
                errors.price = "Please enter the price"
            }
            if (!values.selling_price) {
                errors.selling_price = "Please enter the selling price"

            }
            if (!values.product_added_on) {
                errors.product_added_on = "Please select the date ( Today date )"

            }
            if (!values.img) {
                errors.img = "Please enter the product image URL "

            }


            return errors;

        },
        onSubmit: async (value) => {

            try {
                setLoading(true)
                await axios.post("https://webcode2-backend.onrender.com/add-product", value,{
                    headers: {
                      authorization: `${window.localStorage.getItem("token")}`,
                    },
                  });
                navigation("/admin-dashboard")
            } catch (error) {
                console.log(error)
            }

        }
    });

    return (
        <div className="container mt-5">
            <form onSubmit={MyFormik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <label>Product Name</label>
                        <input
                            name="name"
                            value={MyFormik.values.name}
                            onChange={MyFormik.handleChange}
                            type="text"
                            className={`form-control ${MyFormik.errors.name ? "is-invalid" : ""}`}

                        />
                        <span style={{ color: "crimson" }}>{MyFormik.errors.name}</span>
                    </div>

                    <div className="col-lg-6">
                        <label>Vendor</label>
                        <input
                            name="vendor"
                            value={MyFormik.values.vendor}
                            onChange={MyFormik.handleChange}
                            type="text"
                            className={`form-control ${MyFormik.errors.vendor ? "is-invalid" : ""}`}
                        />
                        <span style={{ color: "crimson" }}>{MyFormik.errors.vendor}</span>
                    </div>

                    <div className="col-lg-4 mt-3">
                        <label>Price in INR</label>
                        <input
                            name="price"
                            value={MyFormik.values.price}
                            onChange={MyFormik.handleChange}
                            type="number"
                            className={`form-control ${MyFormik.errors.price ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.price}</span>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <label>Selling Price in INR</label>
                        <input
                            name="selling_price"
                            value={MyFormik.values.selling_price}
                            onChange={MyFormik.handleChange}
                            type="number"
                            className={`form-control ${MyFormik.errors.selling_price ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.selling_price}</span>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <label>Product Added On</label>
                        <input
                            name="product_added_on"
                            value={MyFormik.values.product_added_on}
                            onChange={MyFormik.handleChange}
                            type="date"
                            className={`form-control ${MyFormik.errors.product_added_on ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.product_added_on}</span>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <label>Image URL</label>
                        <input
                            name="img"
                            value={MyFormik.values.img}
                            onChange={MyFormik.handleChange}
                            type="url"
                            className={`form-control ${MyFormik.errors.img ? "is-invalid" : ""}`}
                        />

                        <span style={{ color: "crimson" }}>{MyFormik.errors.img}</span>
                    </div>

                </div>
                <div className='row'>
                    <div className="col-lg-12 mt-2">
                        <input type={"submit"} value={isLoading ? "Adding..." : "Add Product"} className="btn btn-dark mt-2" disabled={isLoading} />
                    </div>

                </div>
            </form>

        </div>
    )
}

export default AddProduct