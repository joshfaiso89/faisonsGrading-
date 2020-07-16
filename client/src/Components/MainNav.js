import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container className="d-inline-flex p-2">
        <Row>
          <Col>
            {" "}
            <div>
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <div className="navbar-brand">
                      More than 40 years Grading
                    </div>
                  </div>
                  <ul className="nav navbar-nav-inline">
                    <li className="active">
                      <div
                        to="#"
                        style={{ marginRight: "30px", color: "white" }}
                      >
                        Gallary
                      </div>
                    </li>
                    <li className="active">
                      <div to="#" style={{ color: "white" }}>
                        Inquire
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
