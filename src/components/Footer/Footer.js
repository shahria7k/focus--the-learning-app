import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import logo from "../../images/education.png";
import './Footer.css';
const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 border-top mt-5">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-4 mt-md-0 mt-3">
                        <div>
                            <Link to="/" className="text-dark nav-link d-flex justify-content-center align-items-center text-uppercase" style={{ fontSize: "3em" }}><img
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />{' '}
                                FOCUS </Link>
                            <p className="text-dark nav-link d-flex justify-content-center align-items-center w-75 text-uppercase">Your Learning partner</p>
                        </div>


                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-4 mb-md-0 mb-3 text-center">
                        <h5 className="text-uppercase">Navigate</h5>
                        <Nav className="justify-content-center">
                            <NavLink to='/home' className='nav-link'>Home</NavLink>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                            <NavLink to='/features' className='nav-link'>Features</NavLink>
                            <NavLink to='/courses' className='nav-link'>Courses</NavLink>


                        </Nav>
                    </div>

                    <div className="col-md-4 mb-md-0 mb-3 text-center">
                        <h5 className="text-uppercase">Social Links</h5>
                        <Nav className="justify-content-center">
                            <NavLink to='/home' className='nav-link text-dark'>Home</NavLink>
                            <NavLink to='/about' className='nav-link text-dark'>About</NavLink>
                            <NavLink to='/features' className='nav-link text-dark'>Features</NavLink>
                            <NavLink to='/courses' className='nav-link text-dark'>Courses</NavLink>
                        </Nav>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">Build with ♥ by SHAHRIAR JAMAN KHAN
            </div>

        </footer>

    );
};

export default Footer;