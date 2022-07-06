import React,{Component} from "react";
import { Navbar, Nav, Container  } from 'react-bootstrap';
import {Route} from 'react-router-dom'
import OurTeam from "../OurTeam/OurTeam";
import './Navigation.css';

class Navigation extends Component {           
    render(){
        return(
            <Navbar expand="lg" className='cont'>
                <Container className='cont'>
                    <Navbar.Brand href="#home">
                        <img className='navbar-logo' src = "/assets/logo.png" alt=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navitems">
                    <Nav className="me-auto">
                        
                        <Nav.Link href="#action1" ><h5 className="eachitem">HOME</h5></Nav.Link>
                        <Nav.Link href="#action2"><h5 className="eachitem">LEISTUNGEN</h5></Nav.Link>
                        <Nav.Link href="#action1"><h5 className="eachitem">SHOP</h5></Nav.Link>
                        <Nav.Link href="#" ><h5 className="eachitem">TEAM</h5></Nav.Link>
                        <Nav.Link href="#action1"><h5 className="eachitem">KONTAKT</h5></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation