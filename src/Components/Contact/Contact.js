import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='text-center px-3'>
            <div className='mt-5' style={{ height: '400px' }}>
                <h1 className='mb-5'>SmartPhone Warehouse</h1>
                <p><i className="fa-solid fa-location-dot"></i> Level-4, 34, Uttara, Dhaka</p>
                <p><Link className='text-dark' to=''><i className="fa-solid fa-envelope"></i> official: web@smartphone-warehouse.com</Link></p>
                <p><i className="fa-solid fa-phone"></i> Helpline : 01322000000 , 01322000000 , 01322000000</p>
                <p>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
            </div>
        </div>
    );
};

export default Contact;