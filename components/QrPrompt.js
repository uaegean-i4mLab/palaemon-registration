import { Table, Container, Row, Col, Button } from "react-bootstrap";
import { getPath } from "../utils/pathHelper";

const QrPrompt = (props) => {
  let index = 0;
  const permissions = props.permissions.map((permission) => {
    index++;
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{permission}</td>
      </tr>
    );
  });

  let thePrompt =
    " Scan the QR code with your Jolocom Wallet to access the service";
  if (props.prompt) {
    thePrompt = props.prompt;
  }

  let pairingRequest = (
    <Container style={{ marginTop: "3rem" }}>
      <Row className="box-fill-v">
        <Col>
          <Container>
            <Row>
              <Col>
                <p id="uPortMessage" style={{ textAlign: "center" }}>
                  {thePrompt}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  className="img-fluid"
                  style={{ display: "block", margin: "auto", maxHeight:"21rem" }}
                  src={props.qrData}
                />
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              Do not have the Jolocom app yet? Download it form your prefered
              app store
            </Row>
            <Row>
              <Col>
                <a
                  href="https://apps.apple.com/us/app/jolocom-smartwallet/id1223869062"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    className="img-fluid"
                    style={{ display: "block", margin: "auto" }}
                    src={
                      props.baseUrl
                        ? `${props.baseUrl}app-store.png`
                        : "/app-store.png"
                    }
                  />
                </a>
              </Col>
              <Col>
                <a
                  href="https://play.google.com/store/apps/details?id=com.jolocomwallet&hl=el&gl=US"
                  target="_blank"
                  className="w-inline-block"
                >
                  <img
                    className="img-fluid"
                    style={{ display: "block", margin: "auto" }}
                    src={
                      props.baseUrl
                        ? `${props.baseUrl}play-store.png`
                        : "/play-store.png"
                    }
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="border-left border-primary">
          <Container>
            <Row>
              <p id="uPortMessage">{props.message}</p>
            </Row>
            <Row>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Requested Permission</th>
                  </tr>
                </thead>
                <tbody>{permissions}</tbody>
              </Table>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );

  let vcOfferRequest = (
    <Container style={{ marginTop: "3rem" }}>
      <Row className="box-fill-v">
        <Col>
          <Container>
            <Row>
              <Col>
                <p id="uPortMessage" style={{ textAlign: "center" }}>
                  {thePrompt}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  className="img-fluid"
                  style={{
                    display: "block",
                    margin: "auto",
                    maxHeight: "30rem",
                  }}
                  src={props.qrData}
                />
              </Col>
            </Row>
            <Row style={{ textAlign: "center", display: "block", marginBottom:"1rem"}}>
              Do not have the Jolocom app yet? Download it form your prefered
              app store
            </Row>
            <Row>
              <Container>
                <Row>
                  <Col></Col>
                  <Col>
                    <a
                      href="https://apps.apple.com/us/app/jolocom-smartwallet/id1223869062"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        className="img-fluid"
                        style={{ display: "block", margin: "auto" }}
                        src={
                          props.baseUrl
                            ? `${props.baseUrl}app-store.png`
                            : "/app-store.png"
                        }
                      />
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.jolocomwallet&hl=el&gl=US"
                      target="_blank"
                      className="w-inline-block"
                    >
                      <img
                        className="img-fluid"
                        style={{ display: "block", margin: "auto" }}
                        src={
                          props.baseUrl
                            ? `${props.baseUrl}play-store.png`
                            : "/play-store.png"
                        }
                      />
                    </a>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );

  if (!props.isVCOffer) {
    return pairingRequest;
  } else {
    return vcOfferRequest;
  }
};

export default QrPrompt;
