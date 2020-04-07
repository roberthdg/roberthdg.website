import React from 'react';
import Layout from '../components/layout/Layout';
import About from '../components/content/About';
import { Helmet } from "react-helmet";

const AboutPage = () => (
    <>
    <Helmet>
      <title>Roberth Gómez | About</title>
    </Helmet>
    <Layout>
        <About/>
    </Layout>
    </>
)

export default AboutPage