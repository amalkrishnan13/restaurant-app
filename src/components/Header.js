import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/hhRcQhf2/logo.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            Restaurant App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
