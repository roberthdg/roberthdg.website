import React from 'react';
import Layout from '../components/layout/Layout';
import Contact from '../components/content/Contact';
import { Helmet } from "react-helmet";

const ContactPage = () => (
    <>
    <Helmet>
      <title>Roberth Gómez | Contact</title>
    </Helmet>
    <Layout>
        <Contact/>
    </Layout>
    </>
)

export default ContactPage