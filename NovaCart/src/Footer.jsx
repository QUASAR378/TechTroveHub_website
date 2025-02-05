import React from 'react';

// Inline styles for Footer component
const styles = {
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '20px',
        backgroundColor: '#333',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        flexWrap: 'wrap',
    },
    footerSection: {
        flex: '1 1 200px',
        margin: '10px',
    },
    footerTitle: {
        fontSize: '1.5em',
        marginBottom: '10px',
        textDecoration: 'underline',
    },
    footerText: {
        fontSize: '1em',
        lineHeight: '1.5',
    },
    socialMediaLinks: {
        display: 'flex',
        gap: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
};

const Footer = () => {
    return (
        <footer style={styles.footerContainer}>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>Contact Us</h3>
                <p style={styles.footerText}>Email: info@company.com</p>
                <p style={styles.footerText}>Phone: +1 (123) 456-7890</p>
            </div>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>Location</h3>
                <p style={styles.footerText}>123 Bicycle Lane</p>
                <p style={styles.footerText}>Cycling City, CX 12345</p>
            </div>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>Our Collaborators</h3>
                <p style={styles.footerText}>- Local Cycling Club</p>
                <p style={styles.footerText}>- Eco-Friendly Bikes Inc.</p>
            </div>
            <div style={styles.footerSection}>
                <h3 style={styles.footerTitle}>Follow Us</h3>
                <div style={styles.socialMediaLinks}>
                    <a 
                        href="https://x.com" 
                        style={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        X
                    </a>
                    <a 
                        href="https://whatsapp.com" 
                        style={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        WhatsApp
                    </a>
                    <a 
                        href="https://linkedin.com" 
                        style={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    <a 
                        href="https://instagram.com" 
                        style={styles.link} 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;