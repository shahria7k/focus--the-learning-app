import React, { useContext } from 'react';
import loginImg from '../../images/login-pana.png';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../App';
// const nextRoute= useParams()
const Login = () => {
    const { handleLogIn } = useContext(AuthContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={loginImg} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 p-lg-5 p-md-3 p-2">
                    <Form className="mt-lg-5 pt-lg-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Link to="/dashboard" className="btn btn-primary" onClick={() => handleLogIn(true)}>Login</Link>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;