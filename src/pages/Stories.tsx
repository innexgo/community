import Layout from '../components/Layout';
import Section from '../components/Section';

export const StoriesSection = () =>
  <Section id="stories" name="Stories">
    
    <ul>
      <li><a href="/classroom">Classroom</a></li>
    </ul>
    
    <ul>
      <li><a href="/campus">Campus</a></li>
    </ul>

    <ul>
      <li><a href="/community">Community</a></li>
    </ul>
  </Section>

const Stories = () => <Layout>
  <div id="images" className="container pt-5" >
    <StoriesSection />
  </div>
</Layout>

export default Stories
