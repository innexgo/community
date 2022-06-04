//
import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story17/band1.jpg';

const CPStory17 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="WBA Mountain House Show"
      blurb="Santa Teresa’s Marching Band and Color Guard partook in the WBA Mountain House show. They received first place in Class 2A and were ranked 3rd overall in the show! Their outstanding performance can be seen on the YouTube channel SantaTeresaMusic! Awards they received included High General Effect, High Music, High Visual, High Color Guard, and High Percussion"
      staff={["Mr.Sanchez"]}
      date="October 2021"
      
    
    images={[
        {
            alt: "band students",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory17