import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';


export const Community = () =>
  <Section id="community" name="Community">
    <ul>
      <li><a href="/story15">Silicon Valley Regionals - April 2022</a></li>
    </ul>
    <ul>
      <li><a href="/story18">WBA Independece Show - Nov 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story17">WBA Mountain House Show - Oct 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story16">James Logan Invitational Band Tournament - Nov 2021</a></li>
    </ul>
    
    <ul>
      <li><a href="/story3">Michelle T's Bay Area Bird Experience app - August 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story4">Kids saved from overheating car - September 2021</a></li>
    </ul>
  </Section>

const CommunityStory = () => <Layout>
  <div id="images" className="container pt-5" >
    <Community />
  </div>
</Layout>

export default CommunityStory

