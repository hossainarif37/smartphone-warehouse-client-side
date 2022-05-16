import React from 'react';

const InventoryItem = ({ product }) => {
    const { name, price, supplier, img, description } = product;
    return (
        <div>

            <div className='col'>
                <div className="card">
                    <img src={img} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{name.slice(0, 18)}</h3>
                        <h5>Supplier: {supplier}</h5>
                        <h5>Price: {price}</h5>
                        <p className="card-text">{description.slice(0, 118)}...</p>
                        <button className="btn btn-primary">Update QTY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;