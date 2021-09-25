import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

const About = () => <Layout>
  <div id="images" className="container pt-5" >
    <Section id="about" name="About">
      <p>
        The Saintly Bark Out is a place for students and staff to be recognized for their actions that represent how to be a BeAST (Be A SainT).
        Our ST family do amazing things in the classroom, on campus and in the community and they should be recognized and showcased for these actions.
      </p>
      <p>
        ST will be having regular gift card drawings for students who are featured.
      </p>
    </Section>
    <Section id="faq" name="FAQ">
      <h5>Who can nominate someone?</h5>
      <p>Students, Teachers, Parents, Community members.</p>
      <h5>Who can be NOMINATED?</h5>
      <p>Students, Teachers.</p>
    </Section>
  </div>
</Layout>

export default About
