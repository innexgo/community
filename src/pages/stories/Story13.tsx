import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image from '../../assets/story13/vsa.jpg';

const CPStory13 = () => <Layout>
  <div id="images" className="container pt-5" >
    <Story
      title="STVSA's Beneath the Same Stars Culture Show"
      blurb="After a year apart, we reunite to celebrate unity and stargaze together under one sky. Overcoming the COVID-19 pandemic, STVSA presents the 13th annual culture show, Beneath the Same Stars!"
      students={["STHS VSA"]}
      date="March 12 2022"
      
    
    images={[
        {
          alt: "VSA group picture",
          src: image
        }
      ]}
      />
  </div>
</Layout>

export default CPStory13