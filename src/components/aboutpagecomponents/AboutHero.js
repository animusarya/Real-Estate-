import React from 'react';

const AboutHero = () => (
  <React.Fragment>
    <div
      className="site-blocks-cover inner-page-cover overlay"
      style={{ backgroundImage: 'url(images/hero_bg_2.jpg)' }}
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-10">
            <h1 className="mb-2">About Homeland</h1>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default AboutHero;
