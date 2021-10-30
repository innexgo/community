import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';


export const Classroom = () =>
  <Section id="classroom" name="Classroom">
  </Section>

const ClassroomStory = () => <Layout>
  <div id="images" className="container pt-5" >
    <Classroom />
    
    <ul>
      <li><a href="/story11">Creative Dress out Day - October 2021</a></li>
    </ul>


  </div>
</Layout>

export default ClassroomStory
