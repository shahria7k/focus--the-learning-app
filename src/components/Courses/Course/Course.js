import React from 'react';
import { Col, Card, Row, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Course = (props) => {
    const { course } = props;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={course.picture} />
                <Card.Body>
                    <Card.Title> {course.title}</Card.Title>
                    <Row xs={2}>
                        <Col><b>By: </b><Card.Title> {course.tutor}</Card.Title></Col>
                        <Col className="text-end"><Card.Title>⭐ {course.rating}/5{`(${parseInt(Math.random() * (100 - 1) + 1)})`}</Card.Title></Col>
                    </Row>

                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-dark" size="sm" className="me-2"  >Enroll</Button>
                        <Link className="me-2" to={`/courses/${course.key}`}><Button variant="outline-dark" size="sm" >Learn More</Button></Link>

                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;