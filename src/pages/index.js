import React from 'react';
import Layout from '../components/layout/Layout';
import Home from '../components/content/Home';
import { Helmet } from "react-helmet";

const Index = () => (
    <>
    <Helmet>
      <title>Roberth Gómez | Home</title>
    </Helmet>
    <Layout>
        <Home/>
    </Layout>
    </>
)


export default Index