import React from 'react';

// Inline styles for the AboutUs component
const styles = {
    aboutContainer: {
        margin: '20px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    aboutTitle: {
        textAlign: 'center',
        fontSize: '2em',
        color: '#333',
        marginBottom: '15px',
    },
    aboutText: {
        fontSize: '1.1em',
        color: '#555',
        lineHeight: '1.6',
    },
};

const AboutUs = () => {
    return (
        <div style={styles.aboutContainer}>
            <h2 style={styles.aboutTitle}>About Us</h2>
            <p style={styles.aboutText}>
                Welcome to our company! We are passionate about providing 
                high-quality bicycles and cycling accessories to enthusiasts 
                around the world. Our commitment to excellence is reflected 
                in our product offerings, which are designed with 
                both performance and comfort in mind.
            </p>
            <p style={styles.aboutText}>
                Our mission is to inspire a love for cycling and promote 
                a healthy lifestyle for people of all ages. We believe that 
                cycling is not just a mode of transportation, but a way to 
                connect with nature and enjoy the outdoors.
            </p>
            <p style={styles.aboutText}>
                At our core, we value integrity, innovation, and community. 
                We strive to foster an inclusive environment and support 
                initiatives that promote cycling as a sustainable mode of 
                transport.
            </p>
            <p style={styles.aboutText}>
                Thank you for choosing us as your cycling partner. We look 
                forward to being part of your cycling journey!
            </p>
        </div>
    );
};

export default AboutUs;