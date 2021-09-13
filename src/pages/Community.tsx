import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';


export const Community = () =>
  <Section id="community" name="Community">
    <ul>
      <li><a href="/story3">Michelle T's Bay Area Bird Experience app - August 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story4">Helping Children Locked in a Car - August 2021</a></li>
    </ul>
  </Section>

const CommunityStory = () => <Layout>
  <div id="images" className="container pt-5" >
    <Community />
  </div>
</Layout>

export default CommunityStory

