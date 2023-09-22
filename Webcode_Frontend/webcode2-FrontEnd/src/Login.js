import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const admin_formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.password) {
                error.password = "Please enter the password"
            }

            if (!values.email) {
                error.email = "Please enter the email"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                error.email = 'Invalid email address';
            }

            return error;
        },
        onSubmit: async (values) => {
            try {
                const admin_login = await axios.post("https://webcode2-backend.onrender.com/admin-login", values);
                window.localStorage.setItem("token", admin_login.data.token);
                navigate("/admin-dashboard");

            } catch (error) {
                console.log(error);
                alert("email/Password wrong")

            }
        }
    })
    const user_formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let error = {};

            if (!values.password) {
                error.password = "Please enter the password"
            }

            if (!values.email) {
                error.email = "Please enter the email"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                error.email = 'Invalid email address';
            }

            return error;
        },
        onSubmit: async (values) => {
            try {
                const user_login = await axios.post("https://webcode2-backend.onrender.com/user-login", values);
                window.localStorage.setItem("token", user_login.data.token);
                navigate("/user-dashboard");

            } catch (error) {
                console.log(error);
                alert("email/Password wrong")

            }
        }
    })
    return (
        <>
            <div class="container">

                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <span className='d-flex justify-content-center mt-5 text-gray-900'>
                                    <p className='h3 text-gray-900'>Welcome Back!</p>
                                </span>

                                <div class="row">
                                    {/* <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Admin Login</h1>
                                            </div>
                                            <form class="user" onSubmit={admin_formik.handleSubmit}>
                                                <div class="form-group">
                                                    <input name={"email"} value={admin_formik.values.email} onChange={admin_formik.handleChange} type={"email"} class="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email" />
                                                    <span className='ml-2'>{admin_formik.errors.email}</span>
                                                </div>
                                                <div class="form-group">
                                                    <input name={"password"} value={admin_formik.values.password} onChange={admin_formik.handleChange} type={"password"} class="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Enter Password" />
                                                    <span className='ml-2'>{admin_formik.errors.password}</span>
                                                </div>
                                                <div class="form-group">
                                                    {/* <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div> */}
                                                </div>
                                                <input type={"submit"} value={"Login"} class="btn btn-primary btn-user btn-block" />


                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                {/* <Link to={"admin-forgot-password"} class="small">Forgot Password?</Link> */}
                                            </div>
                                            <div class="text-center">
                                                <Link to={"admin-register"} class="small">Create an Admin Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">User Login</h1>
                                            </div>
                                            <form class="user" onSubmit={user_formik.handleSubmit}>
                                                <div class="form-group">
                                                    <input name={"email"} value={user_formik.values.email} onChange={user_formik.handleChange} type={"email"} class="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email" />
                                                    <span className='ml-2'>{user_formik.errors.email}</span>
                                                </div>
                                                <div class="form-group">
                                                    <input name={"password"} value={user_formik.values.password} onChange={user_formik.handleChange} type={"password"} class="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Enter Password" />
                                                    <span className='ml-2'>{user_formik.errors.password}</span>
                                                </div>
                                                <div class="form-group">
                                                    {/* <div class="custom-control custom-checkbox small">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                        <label class="custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div> */}
                                                </div>
                                                <input type={"submit"} value={"Login"} class="btn btn-primary btn-user btn-block" />


                                            </form>
                                            <hr />
                                            <div class="text-center">
                                                {/* <Link to={"user-forgot-password"} class="small">Forgot Password?</Link> */}
                                            </div>
                                            <div class="text-center">
                                                <Link to={"user-register"} class="small">Create an User Account!</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Login