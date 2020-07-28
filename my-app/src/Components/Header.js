import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "../Pages/Home";
import Add from "../Pages/Add";
import Account from "../Pages/Account";
import Switch from "react-bootstrap/Switch";
import Logo from "./Logo";
import './headerStyle.css';
import cartVisibility from "../Cart/cartChecker";
class Header extends Component {
    render() {


        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <Logo/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className="mr-auto">
                                    <Nav.Link href="/"> Home </Nav.Link>
                                    <Nav.Link href="/add-cart"> Add Item </Nav.Link>
                                    <Nav.Link href="/account"> Account </Nav.Link>
                                </Nav>

                                <div className="cartButtonBox">
                                    <input type="checkbox" name='' className="cartButton" id="checkBoxID" onClick={cartVisibility}/>
                                </div>
                            </Navbar.Collapse>

                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/add-cart" component={Add}/>
                        <Route exact path="/account" component={Account}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default Header;
