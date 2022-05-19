import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const InventoryItem = ({ product }) => {
    const { name, price, supplier, img, description, _id, quantity } = product;
    const navigate = useNavigate();
    const handleUpdate = () => {
        navigate(`/inventory/${_id}`)
    }
    return (
        <div>

            <div className='col'>
                <div className="card">
                    <img src={img} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{name.slice(0, 18)}</h3>
                        {
                            supplier ? <h5>Supplier: {supplier}</h5> : <h5>Supplier: Secret Supplier</h5>
                        }
                        <h5>Price: {price}</h5>
                        <h6>Available: {quantity}</h6>
                        <p className="card-text">{description.slice(0, 68)}...</p>
                        <button onClick={handleUpdate} className="btn btn-primary " id='inventory-btn'>Update QTY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;