import React from "react";
import "./Home.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ImageBar3 from "../../images/ImageBar3.jpg";
import ImageBar4 from "../../images/ImageBar4.jpg";
import ImageBar5 from "../../images/ImageBar5.jpg";

function Home() {
  return (
    <div>
      <div className="ophomescreen">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            {/* <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} /> */}
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img
                src={ImageBar3}
                alt="Los Angeles"
                style={{ width: "100%" }}
              />
              {/*<div className="carousel-caption">*/}
              {/*    <h3>Los Angeles</h3>*/}
              {/*    <p>LA is always so much fun!</p>*/}
              {/*</div>*/}
            </div>
            <div className="item">
              <img src={ImageBar4} alt="Chicago" style={{ width: "100%" }} />
              {/*<div className="carousel-caption">*/}
              {/*    <h3>Chicago</h3>*/}
              {/*    <p>Thank you, Chicago!</p>*/}
              {/*</div>*/}
            </div>
            <div className="item">
              <img src={ImageBar5} alt="New York" style={{ width: "100%" }} />
              {/*<div className="carousel-caption">*/}
              {/*    <h3>New York</h3>*/}
              {/*    <p>We love the Big Apple!</p>*/}
              {/*</div>*/}
            </div>
          </div>
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            {/* <span className="glyphicon glyphicon-chevron-left" /> */}
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            {/* <span className="glyphicon glyphicon-chevron-right" /> */}
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* About Us */}
        <div className="card mb-3" style={{ maxWidth: "100%" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <svg
                className="bd-placeholder-img"
                width="100%"
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Image
                </text>
              </svg>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  It's a broader card with text below as a natural lead-in to
                  extra content. This content is a little longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="card mb-3" style={{ maxWidth: "100%", marginTop: "-9px" }}>
          <div className="row no-gutters">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  It's a broader card with text below as a natural lead-in to
                  extra content. This content is a little longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <svg
                className="bd-placeholder-img"
                width="97%"
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Placeholder: Image"
                preserveAspectRatio="xMidYMid slice"
                role="img"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                  Image
                </text>
              </svg>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      <Header />
    </div>
  );
}

export default Home;
