import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';

const ManageItems = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/additems')
    }
    console.log(products);
    return (
        <div>
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
                                <td className='text-end'><button className='btn btn-danger'>x</button></td>
                            </tr>
                        </tbody>)
                    }
                </Table>

            </div>
        </div>
    );
};

export default ManageItems;