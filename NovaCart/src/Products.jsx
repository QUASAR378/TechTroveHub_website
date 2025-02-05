import React from 'react';

// Inline styles for the Products component
const styles = {
    productsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    productCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    productCardTitle: {
        fontSize: '1.5em',
        color: '#333',
    },
    price: {
        fontSize: '1.2em',
        color: '#e67e22',
        margin: '10px 0',
    },
    specsList: {
        listStyleType: 'none',
        padding: 0,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        fontSize: '2em',
        margin: '20px 0',
        color: '#333',
    },
};

const products = [
    {
        id: 1,
        name: 'Mountain Bike',
        price: '$450',
        specs: {
            type: 'Mountain',
            color: 'Red',
            gears: '21-speed',
        },
    },
    {
        id: 2,
        name: 'Road Bike',
        price: '$550',
        specs: {
            type: 'Road',
            color: 'Blue',
            gears: '18-speed',
        },
    },
    {
        id: 3,
        name: 'Hybrid Bike',
        price: '$500',
        specs: {
            type: 'Hybrid',
            color: 'Green',
            gears: '24-speed',
        },
    },
    {
        id: 4,
        name: 'Cruiser Bike',
        price: '$350',
        specs: {
            type: 'Cruiser',
            color: 'Pink',
            gears: 'Single-speed',
        },
    },
];

const Products = () => {
    return (
        <div style={styles.productsContainer}>
            <h1 style={styles.header}>Products</h1> {/* Added Header */}
            {products.map(product => (
                <div key={product.id} style={styles.productCard}>
                    <h2 style={styles.productCardTitle}>{product.name}</h2>
                    <p style={styles.price}>{product.price}</p>
                    <ul style={styles.specsList}>
                        <li>Type: {product.specs.type}</li>
                        <li>Color: {product.specs.color}</li>
                        <li>Gears: {product.specs.gears}</li>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Products;