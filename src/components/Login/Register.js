/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../images/login-pana.png';
import { Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../Hooks/useFirebase';




// const nextRoute= useParams()
const Register = () => {
    const history = useHistory();
    const [newUser, setNewUser] = useState({});
    const { signInUsingGoogle, signUpUsingPassword } = useFirebase();

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={loginImg} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 p-lg-5 p-md-3 p-2">
                    <Form className="mt-lg-5 pt-lg-5" onSubmit={(e) => { e.preventDefault(); signUpUsingPassword(newUser.email, newUser.password); }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" autoComplete="off" onBlur={(e) => {
                                const user = { ...newUser };
                                user.email = e.target.value;
                                setNewUser(user);
                            }} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" autoComplete="off" onBlur={(e) => {
                                const user = { ...newUser };
                                user.password = e.target.value;
                                setNewUser(user);
                            }} onLoad={(e) => e.target.value = "v"} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <button className="btn btn-primary" type="submit">Register</button>
                        <button className="btn btn-primary ms-4" onClick={(e) => { e.preventDefault(); signInUsingGoogle(); }}>Login with Google</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;