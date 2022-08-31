import React from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Row, Col, Card } from "reactstrap";
import { jobDetails } from "./jobData";
const Joblist = () => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "#" },
    { title: "Job Pool", link: "#" },
  ];

  // const [fetchingApi, setFetchingApi] = useState([]);
  // //fetching api call with useeffect with cleanup function

  // useEffect(() => {
  //   let fetchingapi = false;
  //   //here you will make an api call
  //   return () => {
  //     //useEffect unmounts
  //   };
  // }, []);

  return (
    <React.Fragment>
      <div className="page-navbar-title mb-5">
        <Breadcrumbs
          title="Job Pool"
          breadcrumbItems={breadcrumbItems}
          className="text-light"
        />
      </div>
      <div className="page-content">
        <Row>
          <Col className="col-12">
            <Card>
              <div className="container">
                <div className="row">
                  {jobDetails.map((item) => (
                    <div
                      className=" col-lg-4 col-xs-12 col-md-4  mt-4"
                      key={item.id}
                    >
                      <div className="card job-card">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between">
                            <p>{item.new}</p>
                            <p>{item.cardicon}</p>
                          </div>
                          <h1 className="card-title">{item.name}</h1>
                          <p>{item.published}</p>
                          <p>{item.location}</p>
                          <p>{item.venue}</p>
                          <p>{item.random}</p>
                          <div className="d-flex justify-content-between bg-light align-items-center p-2 ">
                            <p>{item.price}</p>
                            <p>{item.hundred}</p>
                            <p>{item.apply}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Joblist;
