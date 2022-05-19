import React from 'react';
import './DetailsSubmit.css'
const DetailsSubmit = () => {
    return (
        <div className='detail-submit-section '>
            <div className=' container-lg d-flex flex-column flex-lg-row justify-content-between align-items-center p-5'>
                <div className='mb-3 mb-lg-0'>
                    <span className='fw-bold d-lg-inline-block d-block text-center text-lg-start'>Sign up to save!</span> <span>Get all the latest deals straight to your inbox</span>
                </div>
                <form className='detail-form'>
                    <input className='detail-email-field' type="email" name="email" placeholder='Your Email Address' />
                    <input className='detail-email-btn' type="submit" value="SignUp" />
                </form>
            </div>
        </div>
    );
};

export default DetailsSubmit;