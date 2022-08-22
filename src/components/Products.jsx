import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productsSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (loading) {
        return <h1>Cargando...</h1>;
    }
    return (
        <>
            {products.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.img} alt={prod.name} width="100px" />
                    <h3>{prod.name}</h3>
                </div>
            ))}
        </>
    );
};

export default Products;
