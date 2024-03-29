import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Test from "../../../images/tours/tours categories/beach/5.jpg";
import Test1 from "../../../images/tours/tours categories/beach/2.jpg";

function ToursCategoriesBeachBreak() {
  return (
    <>
    <Header/>
      <div className="container-sm " style={{paddingTop:"100px"}}>
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Beach Break</b>
            </h3>
            <p>
              Select Your Choice! {"  "}
              {/* <Link to="/tours">
                <button className="btn btn-sm btn-secondary">Back</button>
              </Link> */}
            </p>
          </div>
          {/* Photo Grid */}
          <div className="container-xl" style={{ marginTop: "70px" }}>
            {" "}
            <div className="rowop" style={{ marginBottom: "10px" }}>
              <div className="columnop ">
                {/* 1 */}
                <Link to="/tours-categories-beachbreak-shorttrip-01">
                  <div className="containerop">
                    <img
                      src={Test1}
                      style={{ width: "50%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Beach Break 01</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                  </div> */}
                  </div>
                </Link>
              </div>

              <div className="columnop">
                {/* 1 */}
                <Link to="/tours-categories-beachbreak-shorttrip-02">
                  <div className="containerop">
                    <img
                      src={Test}
                      style={{ width: "50%" }}
                      className="image"
                    />
                    <div className="top-left">
                      <div className="btn btn-lg btn-dark">
                        <h6>
                          <b>Beach Break 02</b>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="bottom-right">
                  </div> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToursCategoriesBeachBreak;
