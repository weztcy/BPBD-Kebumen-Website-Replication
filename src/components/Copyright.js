import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Copyright() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container
        style={{
          width: "100%",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <Navbar.Brand
          style={{
            fontSize: "14px",
            margin: 0,
          }}
        >
          © 2024 - Yohanes Dimas Pratama - A11.2021.13254
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Copyright;