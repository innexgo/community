import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story22/img1.jpeg';

const CPStory23 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="C/o 22 grad"
      blurb="ST seniors graduated"
      students={["Abhiram M, Lam N, Ryan"]}
      date="June 3 2022"
      
    
    images={[
        {
            alt: "graduation",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory23