import Layout from '../components/Layout';
import Section from '../components/Section';

export const StoriesSection = () =>
  <Section id="stories" name="Stories">
    <h5>Classroom</h5>
    <ul>
      <li><a href="/story2">Saying Thank You</a></li>
    </ul>
    <h5>Campus</h5>
    <ul>
      <li><a href="/story1">Be A Saint Promotional Mural</a></li>
    </ul>
    <h5>Community</h5>
    <ul>
      <li><a href="/story3">Michelle T's Bay Area Bird Experience app</a></li>
    </ul>
  </Section>

const Stories = () => <Layout>
  <div id="images" className="container pt-5" >
    <StoriesSection />
  </div>
</Layout>

export default Stories
