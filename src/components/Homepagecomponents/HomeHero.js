import React from 'react';

const HomeHero = () => (
  <React.Fragment>
    <div className="slide-one-item home-slider owl-carousel">
      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: 'url(images/hero_bg_1.jpg)' }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <span className="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">
                For Rent
              </span>
              <h1 className="mb-2">871 Crenshaw Blvd</h1>
              <p className="mb-5">
                <strong className="h2 text-success font-weight-bold">
                  $2,250,500
                </strong>
              </p>
              <p>
                <a
                  href="#"
                  className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2"
                >
                  See Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-blocks-cover overlay"
        style={{ backgroundImage: 'url( images/hero_bg_2.jpg )' }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-10">
              <span className="d-inline-block bg-danger text-white px-3 mb-3 property-offer-type rounded">
                For Sale
              </span>
              <h1 className="mb-2">625 S. Berendo St</h1>
              <p className="mb-5">
                <strong className="h2 text-success font-weight-bold">
                  $1,000,500
                </strong>
              </p>
              <p>
                <a
                  href="#"
                  className="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2"
                >
                  See Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default HomeHero;
