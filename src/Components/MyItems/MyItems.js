import React from 'react';
import { Table } from 'react-bootstrap';

const MyItems = () => {
    return (
        <div>
            <h2 className='text-center border-bottom pb-2 my-3'>My Items</h2>
            <div className="container">
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

export default MyItems;