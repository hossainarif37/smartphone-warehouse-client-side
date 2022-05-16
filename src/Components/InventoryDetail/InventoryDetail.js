import React from 'react';

const InventoryDetail = () => {
    return (
        <div>
            <>
                <div className="container">
                    <div className="text-center"><button className="btn btn-primary mt-5">Manage Inventories</button></div>
                    <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-xl-center justify-content-xxl-center">
                        <div className="card my-5" style={{ maxWidth: '1020px' }}>
                            <div className="btn-container">
                            </div>
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <img src='' className="img-fluid rounded-start w-100" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h2 className="card-title">Name</h2>
                                        <h6 className="card-subtitle my-2">Supplier: <span className="text-muted"></span></h6>
                                        <p className="card-text">Description</p>
                                        <h5 className="card-text">Price: </h5>
                                        <h5 className="card-text">Available: <button className='btn btn-danger'>Delivered</button></h5>
                                        <div className="btn-group my-2">
                                            <input type="number" className='form-control' required min="1" placeholder='Enter Quantity' />
                                            <button type='submit' className='btn btn-success px-2 btn-sm'>Update Quantity</button>
                                        </div>
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