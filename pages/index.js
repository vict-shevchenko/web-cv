import Head from 'next/head';
import profile from '../data/user';
import Layout from '../components/layout/Layout.js';
import Markdown from 'react-markdown'

export default () => (
  <div>
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Viktor Shevchenko About</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
    </Head>
    <Layout>
      <div className="about"><Markdown>{profile.about}</Markdown></div>
    </Layout>

    <style jsx>{`
			.about {
				max-width: 770px;
				margin: 0 auto;
      }
    `}</style>
  </div>
)
