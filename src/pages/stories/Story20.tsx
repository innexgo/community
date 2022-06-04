import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story20/mmd.jpg';

const CPStory20 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="Mini Mesa Day"
      blurb="It was a mock mesa day to prepare for the Mesa Day"
      students={["Abhiram M, Lam N, Ryan"]}
      date="January 2022"
      
    
    images={[
        {
            alt: "some students presenting for MESA Tank at mini MESA day",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory20