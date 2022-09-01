import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppState, setSearch } from "../../store";

function Header() {
  const search = useSelector<AppState>((state) => state.search) as string
  const dispatch = useDispatch()

  return (
    <Navbar bg="primary" variant="dark" fixed="top">
      <Container fluid="lg">
        <Link to="/">
          <Navbar.Brand>
            Pokedash
          </Navbar.Brand>
        </Link>
        <Form className="form-inline">
          <FormControl type="text" placeholder="Search" value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
          <Button variant="success">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header