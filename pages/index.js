import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
import profile from '../data/user';
import Layout from '../components/Layout.js';
import Company from '../components/Company.js';
import Project from '../components/Project.js';
import Education from '../components/Education.js';
import Certificate from '../components/Certificate.js';
import Language from '../components/Language.js';
import Indent from '../components/Indent';

const Index = () => (
  <div>
    <Head>
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>Viktor Shevchenko Resume</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />
    </Head>
    <Layout>
      <h1>{profile.fullName}</h1>
      <h2>Skills and Expertise</h2>
      <Indent>
        <ReactMarkdown source={profile.skills}> </ReactMarkdown>
      </Indent>
      <h2>Experience</h2>
      <Indent>
        {profile.experience.map(company => <Company key={company.sys.id} {...company.fields}/>)}
      </Indent>
      <h2>Personal Projects</h2>
      <Indent>
        {profile.myProjects.map(project => <Project key={project.sys.id} {...project.fields}/>)}
      </Indent>
      <h2>Education</h2>
      <Indent>
        {profile.education.map(education => <Education key={education.sys.id} {...education.fields}/>)}
      </Indent>
      <h2>Certificates</h2>
      <Indent>
        {profile.certificates.map(certificate => <Certificate key={certificate.sys.id} {...certificate.fields}/>)}
      </Indent>
      <h2>Languages</h2>
      <Indent>
        {profile.languages.map(language => <Language key={language.sys.id} {...language.fields}/>)}
      </Indent>
      
    </Layout>
  </div>
)

export default Index
