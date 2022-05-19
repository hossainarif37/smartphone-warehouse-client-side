import React from 'react';
import './Help.css'

const Help = () => {
    return (
        <div>
            <form className='help-center-form container'>
                <h1 className='text-center mt-5'>What can we help you with?</h1>
                <div className='search-box'>
                    <input className='help-input-field' type="search" name="search" placeholder='Search Help Center' />
                    <button className='search-btn'><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>

        </div>
    );
};

export default Help;