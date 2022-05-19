import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProducts/useProducts';
import Banner from '../Banner/Banner'
import DetailsSubmit from '../DetailsSubmit/DetailsSubmit';
import InventoryItem from '../InventoryItem/InventoryItem';
import mobileWarehouse from '../../Images/mobile-warehouse.jpg'

const Home = () => {
    const [products] = useProducts([]);
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

            <section className='py-5 px-3 px-lg-5 text-center' >
                <h1 className='fw-bold mb-4' style={{ color: '#333' }}>The Warehouse</h1>
                <p style={{ color: '#666' }}>Get great deals every day at The Warehouse. Shop online and browse through our massive range of products, with great deals on Fashion, Homewares, Toys, and so much more. With such a huge range of products available online or in-store, we are sure to have everything you need at the lowest prices. Whether you are looking to pick up plates, pots, or other homeware, rock the latest fashions, or are even just buying toys for the kids or the kids at heart, The Warehouse will have what you need. We are New Zealand’s biggest one-stop-shop for great products at low prices. Look no further than The Warehouse: where everyone gets a bargain! You can also use our App.</p>
            </section>
            <DetailsSubmit></DetailsSubmit>
        </div>
    );
};

export default Home;