import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importe o Bootstrap CSS
import { Button, Navbar, Form, FormControl } from "react-bootstrap"; // Importe componentes do Bootstrap

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Meu Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Pesquisar"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Pesquisar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
