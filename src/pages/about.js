import React from 'react';

import Layout from '../components/Layout';
import AboutHero from '../components/aboutpagecomponents/AboutHero';
import OurCompany from '../components/aboutpagecomponents/OurCompany';

const about = () => (
  <React.Fragment>
    <Layout>
      <AboutHero />
      <OurCompany />
    </Layout>
  </React.Fragment>
);

export default about;
