import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story19/cypat.jpg';

const CPStory19 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="AFA CyberPatriot Competition"
      blurb="ST has 4 Cyber Patriot teams, and they get together every Saturday morning to learn the materials themselves because we do not have a Cybersecurity class in ST. 

      The competition consists of 3 virtual images, each of a different operating system, that must all be made more secure through various system alterations and security techniques. There is also a networking portion of the competition where a network of secure data transfers and internet connections must be made to successfully complete the challenge.
      
      Please congratulate them when you see them.  These are some dedicated students!!!"
      students={["Team 1: Henry C, Giwin V, Ramon K, Julie N, Navneeth S, Team 2:Maheswari B, Ryan H, Jacob K, Andrew K, Aaron M, Team 3: Eric C, Rayirth D, Keen D, Vikram N, Shashhank S, Team 4: Rushil D, Kasey D, Mohid F, Niklesh G, Yagnesh V"]}
      date="November 2021"
      
    
    images={[
        {
            alt: "the cyberpattriot club",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory19