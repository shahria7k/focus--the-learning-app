/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../images/login-pana.png';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';


// const nextRoute= useParams()
const LoginWithPhone = () => {
    const [newUser, setNewUser] = useState(null);
    const { signInUsingOTP } = useFirebase();
    const handleSubmit = () => {
        signInUsingOTP("+88", newUser.number, "recaptcha-container");
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={loginImg} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 p-lg-5 p-md-3 p-2">
                    <Form className="mt-lg-5 pt-lg-5" onSubmit={(e) => { e.preventDefault(); }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Number" autoComplete="off" onBlur={(e) => {
                                const user = {};
                                user.number = e.target.value;
                                setNewUser(user);
                            }} required />
                            <Form.Text className="text-muted">
                                We'll never share your number with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">

                            <div id="recaptcha-container"></div>
                        </Form.Group>
                        <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>Sign Up</button>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginWithPhone;