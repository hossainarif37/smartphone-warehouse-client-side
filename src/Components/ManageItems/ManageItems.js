import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts/useProducts';

const ManageItems = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='text-center border-bottom pb-2 my-3'>Manage Inventories</h2>
            <div className='container'>
                <div className="text-center btn-lg">
                    <button className='btn btn-success'>Add New Item</button>
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
                    <tbody>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className='text-end'><button className='btn btn-danger'>x</button></td>
                        </tr>

                    </tbody>
                </Table>

            </div>
        </div>
    );
};

export default ManageItems;