import { useState } from 'react';
import { useEffect } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products, setProducts];

};

export default useProducts;
