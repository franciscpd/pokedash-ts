import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid="lg">
        <Link to="/">
          <Navbar.Brand>
            Pokedash
          </Navbar.Brand>
        </Link>
        <Form className="form-inline">
          <FormControl type="text" placeholder="Search" />
          <Button variant="success">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header