import { Container, Row, Col } from "react-bootstrap";

function StatistikPengunjung(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-start">
          <Col
            className="text-white text-center"
            style={{
              margin: "35px 0px 0px 0px",
              width: "300px",
              flex: "0 0 300px",
            }}
          >
            <h3 style={{ whiteSpace: "nowrap" }}>
              Pengunjung
            </h3>

            <h3 style={{ margin: "-20px 0px 30px 0px" }}>
              ____
            </h3>

            <table
              style={{
                width: "300px",
                borderCollapse: "collapse",
                tableLayout: "fixed",
              }}
            >
              <tbody>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      width: "70%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Hari Ini
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      width: "30%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.hariini}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      width: "70%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Kemarin
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      width: "30%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.kemarin}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      width: "70%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Bulan Ini
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      width: "30%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.bulanini}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      width: "70%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Tahun Ini
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      width: "30%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.tahunini}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      width: "70%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Semua Waktu
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      width: "30%",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.semuawaktu}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StatistikPengunjung;