import React from 'react';

const OurCompany = () => (
  <React.Fragment>
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <img src="images/about.jpg" alt="Image" className="img-fluid" />
          </div>
          <div
            className="col-md-5 ml-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="site-section-title">
              <h2>Our Company</h2>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in
              cum odio.
            </p>
            <p>
              Illum repudiandae ratione facere explicabo. Consequatur dolor
              optio iusto, quos autem voluptate ea? Sunt laudantium fugiat,
              mollitia voluptate? Modi blanditiis veniam nesciunt architecto
              odit voluptatum tempore impedit magnam itaque natus!
            </p>
            <p>
              <a
                href="#"
                className="btn btn-outline-primary rounded-0 py-2 px-5"
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default OurCompany;
