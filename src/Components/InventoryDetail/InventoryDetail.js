import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetail = () => {
    const [product, setProduct] = useState({});
    const { name, supplier, img, description, price, quantity } = product;

    const { id } = useParams();
    useEffect(() => {


        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/manage')
    }

    const handleDelivery = (delivery) => {


        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ quantity, delivery }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setProduct(product.quantity = product.quantity - 1);
                }
                else {
                    console.log('Something went wrong');
                }
            });

    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const updateInput = parseInt(e.target.update.value);
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ quantity, updateInput }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {

                if (data) {
                    setProduct(product.quantity = product.quantity + 1);
                    toast.success('Updated Successful')
                }
                else {
                    console.log('Something went wrong');
                }
            });
        e.target.reset();
    }

    return (
        <div>
            <>
                <div className="container">
                    <div className="text-center"><button onClick={handleNavigate} className="btn btn-primary mt-5">Manage Inventories</button></div>
                    <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-xl-center justify-content-xxl-center">
                        <div className="card my-5" style={{ maxWidth: '1020px' }}>
                            <div className="btn-container">
                            </div>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <img src={img} className="img-fluid rounded-start w-100" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h2 className="card-title">{name}</h2>
                                        <h6 className="card-subtitle my-2">Supplier: {supplier}<span className="text-muted"></span></h6>
                                        <p className="card-text">Description: {description?.slice(0, 65)}...</p>
                                        <h5 className="card-text">Price: {price}</h5>
                                        <h5 className="card-text">Available: {quantity} <button onClick={() => { handleDelivery('delivered') }} className='btn btn-danger'>Delivered</button></h5>
                                        <form onSubmit={handleUpdate} className="btn-group my-2">
                                            <input name='update' type="number" className='form-control' required min="1" placeholder='Enter Quantity' />
                                            <button type='submit' className='btn btn-success px-2 btn-sm'>Update Quantity</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default InventoryDetail;