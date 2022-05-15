import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner'
import InventoryItem from '../InventoryItem/InventoryItem';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='container'>
                <h1>Welcome to Inventory items</h1>
                <div className='row row-cols-1 row-cols-lg-3 g-4'>

                    {
                        products.slice(0, 6).map(product => <InventoryItem key={product._id} product={product}></InventoryItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;