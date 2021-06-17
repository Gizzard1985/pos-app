import React, { useState } from 'react'
import { Navbar, NavItem, Nav, Container, NavbarBrand, NavbarToggler, NavLink, Collapse } from "reactstrap"

const Header = () => {
    const [show, setShow] = useState(false)
    const handleToggle = () => setShow(!show)
    return (
        <Navbar color="success">
            <Container>
                <NavbarBrand> POINT OF SALES</NavbarBrand>
                <NavbarToggler onClick={handleToggle} />
                <Collapse isOpen={show}>
                    <Nav>
                        <NavItem>
                            <NavLink>
                                Dashbord
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                Add item
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
