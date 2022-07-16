import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story16/b1.jpg';

const CPStory16 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="James Logan Invitational Band Tournament"
      blurb="Santa Teresa’s Marching Band and Color Guard are the 2021 Western Band Association Class 2A North Champions! They performed “The Rainforest” at the James Logan Invitational Band Tournament, which can be seen on the YouTube channel SantaTeresaMusic! Awards they received included High Music, High Effect, High Visual, High Percussion, and High Color Guard."
      staff={["Mr.Sanchez"]}
      date="November 2021"
      
    
    images={[
        {
            alt: "band students",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory16