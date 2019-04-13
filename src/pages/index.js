import React from 'react';

import Layout from '../components/Layout';
import HomeHero from '../components/Homepagecomponents/HomeHero';
import Search from '../components/Homepagecomponents/Serach';
import Cards from '../components/Homepagecomponents/Cards';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HomeHero />
        <Search />
        <Cards />
      </Layout>
    );
  }
}
