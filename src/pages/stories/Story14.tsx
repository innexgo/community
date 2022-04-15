import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story14/img1.jpg';

const CPStory14 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="Santa Teresa Badminton"
      blurb="A gathering of all badminton players bonding"
      students={["STHS Badmnton"]}
      date="March 21 2022"
      
    
    images={[
        {
          alt: "some ST badminton players",
          src: image1
        }
               
      ]}
      />
  </div>

</Layout>

export default CPStory14