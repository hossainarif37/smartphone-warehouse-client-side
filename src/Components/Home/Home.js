import React from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import Banner from '../Banner/Banner'
import InventoryItem from '../InventoryItem/InventoryItem';

const Home = () => {
    const [products] = useProducts([]);
    console.log(products);

    return (
        <div>
            <Banner></Banner>
            <div className='container'>
                <h1 className='text-center my-5'>Inventory items</h1>
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