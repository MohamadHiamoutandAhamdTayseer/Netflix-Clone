// import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
export default function NavBar() {
    return (
        <>


            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Movie</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favlist">Favorait List</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

