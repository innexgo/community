import Layout from '../components/Layout';
import Story from '../components/Story';

import image from '../assets/story3/story3.jpg';

const Story3 = () => <Layout>
  <div id="images" className="container pt-5" >
    <Story
      title="Michelle T's Bay Area Bird
      Experience app"
      blurb="Michelle T. wrote this beautiful app (available in App Store). She designed and programmed the app; she took all photos and sound recordings; and she wrote all poems and stories in this app. This is an excellent example of inter-disciplinary projects."
      students={["Michelle T"]}
      date="August 2021"
      images={[
        {
          alt: "A screenshot from Michelle T's app",
          src: image
        }
      ]}
    />
  </div>
</Layout>

export default Story3
