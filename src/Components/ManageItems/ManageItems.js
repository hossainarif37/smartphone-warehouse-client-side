import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItems = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://smarthphone-warehouse-37.herokuapp.com/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/additems')
    }

    const handleDelete = (id) => {
        fetch(`https://smarthphone-warehouse-37.herokuapp.com/manage?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    const newProduct = products.filter(pd => pd.id !== id);
                    setProducts(newProduct)
                }
            })

    }
    return (
        <div className='py-5'>
            <h2 className='text-center border-bottom pb-2 my-3'>Manage Inventories</h2>
            <div className='container'>
                <div className="text-center btn-lg">
                    <button onClick={handleNavigate} className='btn btn-success'>Add New Item</button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        products.map(pd => <tbody>
                            <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td>{pd.quantity}</td>
                                <td className='text-end'><button onClick={() => { handleDelete(pd._id) }} className='btn btn-danger'>x</button></td>
                            </tr>
                        </tbody>)
                    }
                </Table>

            </div>
        </div>
    );
};

export default ManageItems;