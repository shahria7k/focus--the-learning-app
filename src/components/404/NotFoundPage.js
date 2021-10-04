import React from 'react';
import errorImg from '../../images/error.gif';
const NotFoundPage = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center p-5 flex-column">
            <img src={errorImg} alt="" className="img-fluid mt-5" />
            <p style={{ fontSize: '3em' }} className='text-center'><b>The requested URL was not found on this server.</b></p>
        </div>
    );
};

export default NotFoundPage;