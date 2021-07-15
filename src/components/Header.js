import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {

  background: 'red',
  fontSize: '100px',

}

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles} className="header">
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
