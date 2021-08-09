import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

const About = () => <Layout>
  <div id="images" className="container pt-5" >
    <Section id="about" name="About">
      <p>
        The students at ST have done some great things helping their school, neighbors, teachers, and fellow students.
        This website is meant to recognize their accomplishments and showcase the good work that people have done.
      </p>
      <p>
        This website was created with the help of the CS students at ST and Carole Ng.
      </p>
    </Section>
  </div>
</Layout>

export default About
