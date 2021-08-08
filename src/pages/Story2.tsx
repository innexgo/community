import Layout from '../components/Layout';
import Story from '../components/Story';

const Story2 = () => <Layout>
  <div id="images" className="container pt-5" >
    <Story
      title="Saying thank you"
      blurb={`More than 90% of the students said "Thank you" when they received their schedule.`}
      date="August 2-3"
    />
  </div>
</Layout>

export default Story2
