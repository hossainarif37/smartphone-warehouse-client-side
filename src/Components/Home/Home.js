import React from 'react';
import Banner from '../Banner/Banner'
import Inventory from '../Inventory/Inventory';

const Home = () => {
    fetch('products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;