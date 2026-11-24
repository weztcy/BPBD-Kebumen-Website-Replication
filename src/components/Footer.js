import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IdentitasWeb from "./IdentitasWeb";
import StatistikPengunjung from "./StatistikPengunjung";
import KontakKami from "./KontakKami";
import Copyright from "./Copyright";

function Footer() {
  return (
    <Container fluid className="p-0">
      <div
        style={{
          backgroundColor: "#1C1F2E",
          height: "350px",
          width: "100%",
        }}
      >
        <Container
          style={{
            width: "60%",
            margin: "0 auto",
            paddingTop: "15px",
          }}
        >
          <Row className="justify-content-center align-items-start">
            <Col className="d-flex justify-content-center">
              <IdentitasWeb />
            </Col>

            <Col className="d-flex justify-content-center">
              <KontakKami />
            </Col>

            <Col className="d-flex justify-content-center">
              <StatistikPengunjung
                hariini="175"
                kemarin="615"
                bulanini="5179"
                tahunini="55981"
                semuawaktu="386886"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container
        style={{
          width: "40%",
          margin: "0 auto",
        }}
      >
        <Copyright />
      </Container>
    </Container>
  );
}

export default Footer;