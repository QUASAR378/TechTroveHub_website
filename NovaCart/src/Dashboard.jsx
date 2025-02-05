import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    // Navigate based on the option selected
    switch (option) {
      case 'Stories':
        navigate('/stories');
        break;
      case 'Products':
        navigate('/products');
        break;
      case 'Related':
        navigate('/related');
        break;
      case 'About':
        navigate('/about');
        break;
      case 'Footer':
        navigate('/contact'); // Assuming you want to navigate to a contact page
        break;
      default:
        console.log(option);
    }
    setDropdownOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.dropdownContainer}>
        <button onClick={toggleDropdown} style={styles.dropdownToggle}>
          Menu
        </button>
        {isDropdownOpen && (
          <div style={styles.dropdownMenu}>
            <div onClick={() => handleOptionClick('Home')} style={styles.dropdownItem}>
              Home
            </div>
            <div onClick={() => handleOptionClick('Sign In')} style={styles.dropdownItem}>
              Sign In
            </div>
            <div onClick={() => handleOptionClick('Stories')} style={styles.dropdownItem}>
              Stories
            </div>
            <div onClick={() => handleOptionClick('Products')} style={styles.dropdownItem}>
              Products
            </div>
            <div onClick={() => handleOptionClick('Related')} style={styles.dropdownItem}>
              Related
            </div>
            <div onClick={() => handleOptionClick('About')} style={styles.dropdownItem}>
              About us
            </div>
            <div onClick={() => handleOptionClick('Footer')} style={styles.dropdownItem}>
              Get in Touch
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20vh',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s ease',
  },
  title: {
    fontSize: '2rem',
    margin: '20px 0',
    color: '#333',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownToggle: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#063970',
    color: '#FFFFFF',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  dropdownItem: {
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

export default Dashboard;