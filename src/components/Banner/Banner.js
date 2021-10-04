import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from "../../images/Knowledge-pana.png";
import appimage from "../../images/app-pana.png";
import teacher from '../../images/teacher.png';
const Banner = () => {
    return (
        <section className='bg-light'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 p-3 d-flex flex-column align-items-lg-start align-items-center justify-content-center">
                                <p className="text-warning"><strong>Learn & Achieve</strong>
                                </p>
                                <h1 style={{ fontSize: '3em' }}>Find the right Online <br /> tutor for you.</h1>
                                <div className="my-4">
                                    <p><b>Access more then 100K online courses</b></p>
                                    <button type="button" className="btn btn-outline-secondary me-3">Join Today</button>
                                    <button type="button" className="btn btn-outline-secondary">Explore Courses</button>
                                </div>
                            </div>
                            <div className="col-lg-6"><img src={teacher} alt="" className="img-fluid" /></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 p-3 d-flex flex-column align-items-lg-start align-items-center justify-content-center">
                                <p className="text-warning"><strong>Upskill yourself.</strong>
                                </p>
                                <h1 style={{ fontSize: '3em' }}>Achieve Your <br />
                                    Goals With Focus</h1>
                                <div className="my-4">
                                    <p><b>Download the app</b></p>

                                    <button type="button" className="btn btn-outline-secondary me-3">Android</button>
                                    <button type="button" className="btn btn-outline-secondary">iOS</button>
                                </div>
                            </div>
                            <div className="col-lg-6"><img src={appimage} alt="" className="img-fluid" /></div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 p-3 d-flex flex-column align-items-lg-start align-items-center justify-content-center">
                                <p className="text-warning"><strong>Learn the latest skills</strong>
                                </p>
                                <h1 style={{ fontSize: '3em' }}>Online Courses
                                    <br />
                                    For Anyone, Anywhere</h1>
                                <div className="my-4">
                                    <p><b>you've got our assistance and help</b></p>
                                    <button type="button" className="btn btn-outline-secondary me-3">Contact Us</button>
                                    <button type="button" className="btn btn-outline-secondary">Learn more</button>
                                </div>
                            </div>
                            <div className="col-lg-6"><img src={image} alt="" className="img-fluid" /></div>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </section>
    );
};

export default Banner;