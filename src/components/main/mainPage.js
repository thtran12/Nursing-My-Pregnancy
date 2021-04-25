import { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="additionalSpace">
            <Col>
              <h1>A Smoother Pregnancy</h1>
              <p>
                Nursing My Pregnancy helps ensure a smooth and safe pregnancy.
                Connect virtually and bring life.
              </p>
              <Button variant="outline-info">Get Started</Button>{" "}
            </Col>

            <Col>
              <img
                className="img-fluid"
                src="https://blush.design/api/download?shareUri=OWDmtEaf33GvJgIl&c=Bottom_0%7Eff4133-0.1%7E89c5cc-0.2%7Ef2f2f2_Hair_0%7Eb58143-0.1%7E4a312c-0.2%7E181658_Skin_0%7Eb28b67-0.1%7E915b3c-0.2%7Ed4a181_Top_0%7E43d26c-0.1%7Effa434-0.2%7E89c5cc&w=800&h=800&fm=png"
                alt="nurse and patient"
              />
            </Col>
          </Row>
        </Container>

        <div className="stickyFooter">
          <p>Made with ❤️ for Venus Hacks 2021</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
