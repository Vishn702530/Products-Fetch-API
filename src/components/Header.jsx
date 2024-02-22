import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
          <i class="fa-solid fa-cart-shopping"></i>{' '}
            Product List
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header