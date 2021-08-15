import Layout from '../components/Layout';
import Section from '../components/Section';

export const StoriesSection = () =>
  <Section id="stories" name="Stories">
    <ul>
      <li><a href="/story1">Be A Saint Promotional Mural</a></li>
      <li><a href="/story2">Saying Thank You</a></li>
    </ul>
  </Section>

const Stories = () => <Layout>
  <div id="images" className="container pt-5" >
    <StoriesSection />
  </div>
</Layout>

export default Stories
