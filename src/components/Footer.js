import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, NavDropdown, Button, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

 class Footer extends Component {
 
  render() {
    return (
      <>
        <div className="contaiiner-fluid ">
          <footer className="footer">
            <div className="row">
            <div className="col-6">
             
             <h5 className="footer-h">Quick Links</h5>
             <Navbar.Toggle aria-controls="navbarScroll" className="navbarscroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="m-auto ml-5 ml-lg-0 nav"
                            // style={{ maxHeight: '100px', color: 'lightpink' }}
                            navbarScroll
                        >
                            <a href="/">   <Nav.Link href="#action1"><h3 className="linnktext text-danger">Home</h3></Nav.Link> </a>
                            

                            <a href="/menu" > 
                            <Dropdown>

                             <Dropdown.Toggle  className="bg-none text-lg  mt-1 linnktext text-danger text-danger " variant="outline-none"> 
                           <h3 className=''>  Menu</h3>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <a href="/coffee">  <NavDropdown.Item href="#Coffee.js">Coffee</NavDropdown.Item> </a>
                                <a href="/cakes">  <NavDropdown.Item href="#action/3.2">Cakes</NavDropdown.Item> </a>
                                <a href="/icecreams">  <NavDropdown.Item href="#action/3.3">Ice-Creams</NavDropdown.Item> </a>
                                </Dropdown.Menu>
                            </Dropdown>
                          </a>

                            <a href="/gallery">   <Nav.Link href="#action2"><h3 className="linnktext text-danger">Gallery</h3></Nav.Link> </a>
                            <a href="/blogs">   <Nav.Link href="#action3"><h3 className="linnktext text-danger">Blogs</h3></Nav.Link> </a>
                            <a href="/about">   <Nav.Link href="#action4"><h3 className="linnktext text-danger">About</h3></Nav.Link> </a>
                            <a href="/contact">   <Nav.Link href="#action5"><h3 className="linnktext text-danger">Book A Table</h3></Nav.Link> </a>

                        </Nav>

                    </Navbar.Collapse>


            
         </div>

              <div className="col-6">
             
                  <h5 className="footer-h">Contact Us</h5>
                  <p className='text'>Mob no-123-456-7890
                    <p>Location - xyz,New Delhi</p>
                  </p>

                 
              </div>
            </div>


          </footer>
        </div>
        


      </>
    )
  }
}
export default Footer;