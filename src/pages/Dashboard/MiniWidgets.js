import React, { Component } from "react";
import { Col, Card, CardBody } from "reactstrap";
import { GiBed } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { RiInboxFill } from "react-icons/ri";
class MiniWidgets extends Component {
  render() {
    return (
      <React.Fragment>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <GiBed></GiBed>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">3256</h4>
                  <p className="text-truncate font-size-14 mb-2">
                    Total Patients
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <FiUsers></FiUsers>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">395</h4>
                  <p className="text-truncate font-size-14 mb-2">
                    Available Staff
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <RiInboxFill></RiInboxFill>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">$2536</h4>
                  <p className="text-truncate font-size-14 mb-2">
                    Avg Treat Cost
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <AiFillCar></AiFillCar>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">38</h4>
                  <p className="text-truncate font-size-14 mb-2">
                    Available Cars
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default MiniWidgets;
