import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      className="text-black"
      style={{
        height: "65px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Container
        fluid
        style={{
          width: "85%",
          margin: "0 auto",
          padding: 0,
        }}
      >
        <Nav className="w-100 justify-content-between">
          <Nav.Link style={navStyle}>Home</Nav.Link>
          <Nav.Link style={navStyle}>Profil ▽</Nav.Link>
          <Nav.Link style={navStyle}>Bidang ▽</Nav.Link>
          <Nav.Link style={navStyle}>Layanan ▽</Nav.Link>
          <Nav.Link style={navStyle}>PPID ▽</Nav.Link>
          <Nav.Link style={navStyle}>Berita ▽</Nav.Link>
          <Nav.Link style={navStyle}>Informasi Publik ▽</Nav.Link>
          <Nav.Link style={navStyle}>Festival Anggaran ▽</Nav.Link>
          <Nav.Link style={navStyle}>SITANA ▽</Nav.Link>
          <Nav.Link style={navStyle}>KSM ▽</Nav.Link>
          <Nav.Link style={navStyle}>Galeri ▽</Nav.Link>
          <Nav.Link style={navStyle}>Download</Nav.Link>
          <Nav.Link style={navStyle}>Kontak Kami</Nav.Link>
          <Nav.Link style={navStyle}>Produk Hukum</Nav.Link>
          <Nav.Link style={navStyle}>SIPPN</Nav.Link>
          <Nav.Link style={navStyle}>Agenda Kegiatan</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

const navStyle = {
  color: "black",
  fontWeight: "bold",
};

export default NavigationBar;