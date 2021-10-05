import React from 'react';
import "./About.css";
const About = () => {
    return (
        <div>
            <div className="about-part">
                <h2 style={{ fontSize: "3em" }} className="text-center">About</h2>
                <h2 style={{ fontSize: "3em" }} className="text-center"><span className="text-warning">Focuse</span></h2>
            </div>
            <div className="container text-center p-5">
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <h4 style={{ fontSize: '2em' }} className="text-lg-start mt-lg-5">Achieve Your
                            Goals <br /> With Focus</h4>
                        <hr />
                        <div className="text-start  mt-3  pe-5 me-5">
                            <p >Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                            <p>✔ Upskill your organization.</p>
                            <p>✔ Access more then 100K online courses.</p>
                            <p>✔ Learn the latest skills</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-flex justify-content-lg-end">
                        <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" className="img-fluid" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;