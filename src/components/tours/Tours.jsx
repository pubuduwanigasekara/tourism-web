import React from "react";
import "./Tours.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import BeachBreak  from "../../images/tours/Beach break .jpg";
import RoyaleSeylon  from "../../images/tours/Royale seylon.jpg";
import ShortTrips  from "../../images/tours/Short trips.jpg";
import DiscoveryTour  from "../../images/tours/Discovery tour.jpg";
import ExclusiveTour  from "../../images/tours/Exclusive tour.jpg";


function Tours() {
  return (
    <div>
      <Header />
      <div className="container-sm ">
        <div>
          {/* Header */}
          <div className="headerop">
            <h3>
              <b>Tours</b>
            </h3>
            <p>Select Your Your!</p>
          </div>
          {/* Photo Grid */}
          <div className="container-xl" style={{ marginTop: "70px" }}>
            {" "}
            <div className="rowop" style={{marginBottom:"10px"}}>
              <div className="columnop ">
                {/* 1 */}
                <div className="containerop">
                  <img
                    src={BeachBreak}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Beach Break</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 2 */}
                <div className="containerop">
                  <img
                    src={ExclusiveTour}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Exclusive Tour</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </div>

              <div className="columnop">
                {/* 1 */}
                <div className="containerop">
                  <img
                    src={ShortTrips}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Short Trips</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 2 */}
                <div className="containerop">
                  <img
                    src={DiscoveryTour}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>Discovery Tour</b>
                      </h6>
                    </button>
                  </div>
                </div>

                {/* 3 */}
                <div className="containerop">
                  <img
                    src={RoyaleSeylon}
                    style={{ width: "100%" }}
                    className="image"
                  />
                  <div class="bottom-right">
                    <button className="btn btn-dark btn-sm">
                      <h6>
                        <b>RoyaleSeylon</b>
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tours;
