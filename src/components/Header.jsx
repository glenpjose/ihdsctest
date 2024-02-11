import React from 'react'


import logo from "../assets/images/real-estate-house.png"
import { MDBCol } from 'mdb-react-ui-kit';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

function Header() {
  return (
    <>
    


      
      <Navbar style={{backgroundColor:"rgb(235, 237, 238)",height:'60px'}}>
        <Container>
        <Navbar.Brand className='ms-2'>
        <img
          src={logo}
          width="120px"
          alt="Logo"
        />
        </Navbar.Brand>
        <MDBCol fluid className='text-center fs-5'>XYZ SYSTEMS LLP.</MDBCol>
       
       
      
        </Container>

    </Navbar>


    </>
  )
}

export default Header

