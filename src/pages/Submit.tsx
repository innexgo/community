
import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

const Submit = () => <Layout>
  <div id="images" className="container pt-5" >
    <Section id="submit" name="Submit">
      <p>
        Do you have a positive story about Santa Teresa students you'd like to share with us?
      </p>
      <p>
        Submit your story on this Google Form to help us include it!
      </p>
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdSyi_ftBZstEZzLsJhIKu9IiMw-SF1aoqSutMUyBEW9yWnmw/viewform?usp=sf_link">
          Google Form submission link
        </a>
      </p>
    </Section>
  </div>
</Layout>

export default Submit
