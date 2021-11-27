import logo from "../../images/education.png";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useFirebase from '../Hooks/useFirebase';

const Header = () => {

    const { user, signOut } = useFirebase();
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container className="py-lg-2">
                    <Navbar.Brand>
                        <NavLink to='/home' className='nav-link text-black'>
                            <img
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />{' '}
                            FOCUS
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to='/home' className='nav-link'>Home</NavLink>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                            <NavLink to='/features' className='nav-link'>Features</NavLink>
                            <NavLink to='/courses' className='nav-link'>Courses</NavLink>


                        </Nav>
                        <Nav>
                            <NavLink to="/dashboard" className='nav-link'>Dashboard</NavLink>
                            <NavDropdown title={user ? user.displayName : "name"} id="collasible-nav-dropdown" menuVariant="light">
                                {/* <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                {user ? (<><NavLink to='/home' className='nav-link'>Home</NavLink>
                                    <NavLink to='/about' className='nav-link'>{user ? user.displayName : "name"}</NavLink>
                                    <NavLink to='/features' className='nav-link'>Features</NavLink></>) : ""}
                                <NavDropdown.Divider />
                                <NavLink to='/features' className='nav-link'>Features</NavLink>
                                {
                                    user ? <li className='nav-link' onClick={() => signOut()} >Logout</li> : <NavLink to='/Login' className='nav-link' >Login</NavLink>
                                }

                                {/* <NavDropdown.Item href="#action/3.4" onClick={() => handleLogIn(false)}>Logout</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
};

export default Header;