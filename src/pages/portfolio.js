import React from 'react';
import Layout from '../components/layout/Layout';
import Portfolio from '../components/content/Portfolio';
import { Helmet } from "react-helmet";

const PortfolioPage = () => (
    <>
     <Helmet>
      <title>Roberth Gómez | Portfolio</title>
    </Helmet>
    <Layout>
        <Portfolio/>
    </Layout>
    </>
)

export default PortfolioPage