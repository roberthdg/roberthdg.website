import React from 'react';
import Layout from '../components/layout/Layout';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";

const Content = () => (
    <>
    <Helmet>
      <title>Roberth Gómez | Page not found</title>
    </Helmet>
    <Layout>
        <div className='notFound'>
            <Typography variant='h3' style={{ fontFamily: "'Nunito', sans-serif", fontWeight: '700'}}>
                <span style={{color:'rgb(3,127,255)'}}>404</span> page not found
            </Typography>
        </div>
    </Layout>

    <style jsx>{`
        .notFound {
        padding-top: 2em;
        padding-right: 1em;
        width:90vw;
        height:70vh;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        }
    }
    `}</style>
    </>
)


export default Content