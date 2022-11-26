import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, NavDropdown, Button, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component {

    render() {

        return (
            <Navbar bg="" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className='logo text-danger'><h3>Cafe Garden</h3></Navbar.Brand>
                    &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Navbar.Toggle aria-controls="navbarScroll" className="navbarscroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="m-auto ml-5 ml-lg-0 nav"
                            // style={{ maxHeight: '100px', color: 'lightpink' }}
                            navbarScroll
                        >
                            <Link to="/">   <Nav.Link href="#action1"><h3 className="linnktext text-danger">Home</h3></Nav.Link> </Link>
                            

                            <Link to="/menu" > 
                            <Dropdown>

                             <Dropdown.Toggle  className="bg-none text-lg  mt-1 linnktext text-danger text-danger " variant="outline-none"> 
                           <h3 className=''>  Menu</h3>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Link to="/coffee">  <NavDropdown.Item href="#Coffee.js">Coffee</NavDropdown.Item> </Link>
                                <Link to="/cakes">  <NavDropdown.Item href="#action/3.2">Cakes</NavDropdown.Item> </Link>
                                <Link to="/icecreams">  <NavDropdown.Item href="#action/3.3">Ice-Creams</NavDropdown.Item> </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            </Link>

                            <Link to="/gallery">   <Nav.Link href="#action2"><h3 className="linnktext text-danger">Gallery</h3></Nav.Link> </Link>
                            <Link to="/blogs">   <Nav.Link href="#action3"><h3 className="linnktext text-danger">Blogs</h3></Nav.Link> </Link>
                            <Link to="/about">   <Nav.Link href="#action4"><h3 className="linnktext text-danger">About</h3></Nav.Link> </Link>
                            <Link to="/contact">   <Nav.Link href="#action5"><h3 className="linnktext text-danger">Book A Table</h3></Nav.Link> </Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        )
    }
}
export default Header;