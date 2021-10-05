import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import './Courses.css';
import Course from './Course/Course';
const Courses = (props) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON').then(res => res.json()).then(data => { setCourses(data); return data; }).then((data) => console.log(data));
    }, []);
    return (
        <section>
            <div className="course-part">
                <h2 style={{ fontSize: "3em" }} className="text-center">Find The Right <br />
                    Online <span className="text-warning">Course </span> For You</h2>
            </div>
            <div className="container">
                <Row xs={1} md={2} lg={3} className="g-5 mt-3">
                    {props.count > 0 ? courses.slice(0, props.count).map((course, index) => <Course course={course} key={course.key}></Course>) : courses.map((course, index) => <Course key={index} course={course}></Course>)}
                </Row>
            </div>
        </section>
    );
};

export default Courses;