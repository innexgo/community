import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story18/band181.jpg';

const CPStory18 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="WBA Independence Show"
      blurb="Santa Teresa’s Marching Band and Color Guard attended the WBA Independence Show. Through their performance, they received the first place award in Class 2A! They received the awards High General Effect, High Music, High Visual, High Color Guard, High Percussion."
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

export default CPStory18