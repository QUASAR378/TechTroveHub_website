import React from 'react';

// Inline styles for the Related component
const styles = {
    relatedContainer: {
        margin: '20px 0',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
    },
    relatedTitle: {
        textAlign: 'center',
        fontSize: '1.8em',
        color: '#333',
        marginBottom: '15px',
    },
    relatedItemsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    relatedCard: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        width: '180px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    relatedCardTitle: {
        fontSize: '1.4em',
        color: '#333',
    },
    relatedPrice: {
        fontSize: '1.1em',
        color: '#e67e22',
        margin: '10px 0',
    },
};

const relatedProducts = [
    {
        id: 1,
        name: 'Electra Townie Go! 7D',
        price: '$1,799',
    },
    {
        id: 2,
        name: 'Trek FX 3 Disc',
        price: '$849',
    },
    {
        id: 3,
        name: 'Giant Escape 3',
        price: '$530',
    },
    {
        id: 4,
        name: 'Specialized Sirrus',
        price: '$1,150',
    },
];

const Related = () => {
    return (
        <div style={styles.relatedContainer}>
            <h2 style={styles.relatedTitle}>Related Products</h2>
            <div style={styles.relatedItemsContainer}>
                {relatedProducts.map(product => (
                    <div key={product.id} style={styles.relatedCard}>
                        <h3 style={styles.relatedCardTitle}>{product.name}</h3>
                        <p style={styles.relatedPrice}>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Related;