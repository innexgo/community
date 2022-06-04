
import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story22/img1.jpeg';

const CPStory22 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="STMUN at UC Berkeley Confrence"
      blurb="STMUN attended their first overnight field trip since covid-19 at UC Berkeley. At the conference, STMUN discussed global issues. Jenny Le received best delegate and Avani Kulkarni, Yucef Bouzina, and Ben Phipps received outstanding awards."
      staff={["Mr. Phipps"]}
      date="November 2021"
      
    
    images={[
        {
            alt: "the MUN students",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory22