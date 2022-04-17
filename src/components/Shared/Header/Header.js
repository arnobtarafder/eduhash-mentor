import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
      signOut(auth);
    }


  return (
    <Navbar sticky="top" expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={30} src="https://cdn-icons-png.flaticon.com/128/987/987748.png?ga=GA1.1.208812877.1649674070" type="image/x-icon" alt="" /> <span className='ps-3 pe-4 text-secondary'>EduHash-Mentor</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-dark' href="/home#experts">Blogs</Nav.Link>
            <Nav.Link  className='text-dark' href="/home#services">Services</Nav.Link>

            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/robert" target="_blank">Bangla</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/john" target="_blank">Math</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/kiron0" target="_blank">English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            <Nav.Item>
              {
                user ?
                  <Link to='/checkout' className='nav-link'>
                    {user.displayName}
                    <img className='ml-3 ms-3' src={user.photoURL ? auth.user.photoURL : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"} width="35px" alt="" />
                  </Link>
                  :
                  <Link to='/login' className='nav-link pt-3 pe-4 fw-bolder'>Login</Link>
              }
            </Nav.Item>

            <Nav.Item>

              {
                user ?
                  <Link to='/' className='nav-link'>
                    <button onClick={handleSignOut}
                      className='btn btn-danger btn-rounded'
                    >
                      Log Out
                    </button>
                  </Link>
                  :
                  <Link to='/registration' className='nav-link'>
                    <button
                      className='btn btn-danger rounded-pill'
                    >
                      Registration
                    </button>
                  </Link>
              }

            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;


// className='navbar-nav align-items-center'
<Nav>

  <Nav.Item>
    {
      auth.user ?
        <Link to='/checkout' className='nav-link'>
          {auth.user.displayName}
          <img className='ml-3' src={auth.user.photoURL ? auth.user.photoURL : "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"} width="35px" alt="" />
        </Link>
        :
        <Link to='/login' className='nav-link'>Login</Link>
    }
  </Nav.Item>

  <Nav.Item>
    {
      auth.user ?
        <Link to='/' className='nav-link'>
          <button onClick={() => { auth.signOut() }}
            className='btn btn-danger btn-rounded'
          >
            Log Out
          </button>
        </Link>
        :
        <Link to='/registration' className='nav-link'>
          <button
            className='btn btn-danger btn-rounded'
          >
            Registration
          </button>
        </Link>
    }
  </Nav.Item>
</Nav>