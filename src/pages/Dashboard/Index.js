import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";
import SalesAnalytics from "./SalesAnalytics";
import SplineArea from "./SplineArea";
import EarningReports from "./EarningReports";
import Sources from "./Sources";
import RecentlyActivity from "./RecentlyActivity";
import RevenueByLocations from "./RevenueByLocations";
import ChatBox from "./ChatBox";
import LatestTransactions from "./LatestTransactions";
import Analytics from "./Analytics";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Geekonamy", link: "/" },
        { title: "Dashboard", link: "#" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Dashboard"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col xl={12}>
                <Row>
                  <MiniWidgets />
                </Row>
              </Col>
              <Col xl={8}>
                <RevenueAnalytics />
              </Col>
              <Col xl={4}>
                <SalesAnalytics />
              </Col>
              <Col xl={6}>
                <SplineArea />
              </Col>
              <Col xl={3}>
                <RecentlyActivity />
              </Col>
              <Col xl={3}>
                <Analytics />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
