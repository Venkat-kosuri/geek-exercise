import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

//Import Charts
import ReactApexChart from "react-apexcharts";
import "./dashboard.scss";

class SalesAnalytics extends Component {
  state = {
    series: [42, 26],
    options: {
      labels: ["Female", "Male"],
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ["#5664d2", "#1cbb8c"],
    },
  };
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="float-end">
              <select className="form-select form-select-sm">
                <option defaultValue>Apr</option>
                <option value="1">Mar</option>
                <option value="2">Feb</option>
                <option value="3">Jan</option>
              </select>
            </div>
            <h4 className="card-title mb-4">Patients By Gender</h4>

            <div id="donut-chart" className="apex-charts">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height="212"
              />
            </div>

            <Row>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-primary font-size-10 me-1"></i>{" "}
                    Female
                  </p>
                  <h5>42 %</h5>
                </div>
              </Col>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-success font-size-10 me-1"></i>{" "}
                    Male
                  </p>
                  <h5>26 %</h5>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default SalesAnalytics;