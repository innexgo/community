import Layout from '../../components/Layout';
import Story from '../../components/Story';

import image from '../../assets/story4/story4.jpg';

const CMStory4 = () => <Layout>
  <div id="images" className="container pt-5" >
    <Story
      title="Kids saved from overheating car"
      blurb="These staff members demonstrated their CAN-DO ATTITUDE when they discovered a woman who had accidentally locked her kids and keys in the car.  The temperature was 90+ so they had to act fast.  The team had the where-with-all to cover the car with shade and keep the kids calm while they found a hammer to smash the window, saving them from the heat. "
      staff={["Mr. O'Brien", "Mr. Papin", "Ms. Plemel", "Mr. Oxtot", "Mr. Pham"]}
      date="September 2021"
      images={[
        {
          alt: "Breaking a car window",
          src: image
        }
      ]}
    />
  </div>
</Layout>

export default CMStory4
