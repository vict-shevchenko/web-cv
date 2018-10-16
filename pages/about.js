import Head from 'next/head';
import profile from '../data/user';
import Layout from '../components/layout/Layout.js';
import ReactMarkdown from 'react-markdown';

export default () => (
  <div>
    <Head>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>Viktor Shevchenko About</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
    </Head>
    <Layout>
      <div><ReactMarkdown source={profile.about}> </ReactMarkdown></div>
    </Layout>
  
  </div>
)
