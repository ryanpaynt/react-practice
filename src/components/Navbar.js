import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  nav: {
    background: 'green',
    color: 'white',
    justifyContent: 'flex-end',
    display: 'flex'
  }
}

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.nav} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
