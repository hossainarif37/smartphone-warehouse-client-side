import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/manage?id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    const newItems = items.filter(pd => pd.id !== id);
                    setItems(newItems)
                }
            })

    }
    return (
        <div className='py-5'>
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
                    {
                        items.map(pd => <tbody>
                            <tr>
                                <td>{pd.name}</td>
                                <td>{pd.price}</td>
                                <td>{pd.quantity}</td>
                                <td className='text-end'><button onClick={() => { handleDelete(pd._id) }} className='btn btn-danger'>x</button></td>
                            </tr>
                        </tbody>
                        )
                    }
                </Table>

            </div>
        </div>
    );
};

export default MyItems;