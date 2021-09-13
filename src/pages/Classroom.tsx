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
  </div>
</Layout>

export default ClassroomStory
