import Layout from '../components/Layout';
import Story from '../components/Story';

import image from '../assets/story1/IMG_0724.jpg';

const Story1 = () => <Layout>
  <div id="images" className="container pt-5" >
    <Story
      title="Be A Saint Promotional Mural"
      blurb="These students dedicated a week of their summer to volunteer and paint our first Be A Saint promotional Mural.  They worked together to design and execute this project.  We look forward to commissioning other mural projects across the ST campus to promote Be A Saint: Respect, Achieve, Can-do Attitude"
      students={["Henry B", "Aneesha B", "Nophar S", "Celine V", "Kaylee O"]}
      date="June 2021"
      images={[
        {
          alt: "Students painting the mural",
          src: image
        }
      ]}
    />
  </div>
</Layout>

export default Story1
