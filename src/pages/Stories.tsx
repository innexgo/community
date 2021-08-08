
import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

const About = () => <Layout>
  <div id="images" className="container pt-5" >
    <Section id="stories" name="Stories">
      <ul>
        <li><Link to="/story1">Be A Saint Promotional Mural</Link></li>
      </ul>
    </Section>
  </div>
</Layout>

export default About
