import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story21/img1.jpeg';

const CPStory21 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="STMUN in New York City"
      blurb="ST's MUN competed in NYC at this year's National High School Model United Nations. Representing the Republic of Korea, the team won the Award of Excellence, a 2nd place Award."
      staff={["Mr.Phipps"]}
      date="April 2022"
      
    
    images={[
        {
            alt: "MUN",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory21