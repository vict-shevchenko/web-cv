import Markdown from 'react-markdown';
import Head from 'next/head';
import profile from '../data/user';
import Layout from '../components/layout//Layout.js';
import ResumeSection from '../components/layout/ResumeSection.js'
import Company from '../components/cv/Company.js';
import Project from '../components/cv/Project.js';
import Education from '../components/cv/Education.js';
import Certificate from '../components/cv/Certificate.js';
import Language from '../components/cv/Language.js';
import Indent from '../components/layout/Indent';

const CV = () => (
  <div>
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Viktor Shevchenko Resume</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
    </Head>
    <Layout>
      <h1>{profile.fullName}</h1>
      <ResumeSection title="Skills and Expertise">
        <Markdown>{profile.skills}</Markdown>
      </ResumeSection>

      <ResumeSection title="Experience">
        {profile.experience.map(company => <Company key={company.sys.id} {...company.fields}/>)}
      </ResumeSection>

      <ResumeSection title="Personal Projects">
        {profile.myProjects.map(project => <Project key={project.sys.id} {...project.fields}/>)}
      </ResumeSection>
      
      <ResumeSection title="Education">
        {profile.education.map(education => <Education key={education.sys.id} {...education.fields}/>)}
      </ResumeSection>

      <ResumeSection title="Certificates">
        {profile.certificates.map(certificate => <Certificate key={certificate.sys.id} {...certificate.fields}/>)}
      </ResumeSection>

      <ResumeSection title="Languages">
        <div>
          {profile.languages.map(language => <Language key={language.sys.id} {...language.fields}/>)}
        </div>
      </ResumeSection>
    </Layout>
  </div>
)

export default CV;
