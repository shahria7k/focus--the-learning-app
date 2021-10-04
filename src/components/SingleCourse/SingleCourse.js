import React from 'react';
import { useParams } from 'react-router';
const SingleCourse = () => {
    const { courseID } = useParams();
    console.log(courseID);
    return (
        <div>

        </div>
    );
};

export default SingleCourse;