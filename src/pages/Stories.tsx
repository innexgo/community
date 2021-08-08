
import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

export const StoriesSection = () =>
  <Section id="stories" name="Stories">
    <ul>
      <li><Link to="/story1">Be A Saint Promotional Mural</Link></li>
      <li><Link to="/story2">Saying Thank You</Link></li>
    </ul>
  </Section>

const Stories = () => <Layout>
  <div id="images" className="container pt-5" >
    <StoriesSection />
  </div>
</Layout>

export default Stories
