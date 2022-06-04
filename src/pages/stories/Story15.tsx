import Layout from '../../components/Layout';
import Story from '../../components/Story';
import image1 from '../../assets/story15/img1.jpg';

const CPStory15 = () => <Layout>
  
  <div id="images" className="container pt-5" >
    <Story
      title="Silicon Valley Regionals"
      blurb="Santa Teresa's Robotics team, Team 2643 Dark Matter, were seeded 22 out of 59 teams after qualifying matches and were chosen 1st on the 8th alliance to make it into quarterfinals. SVR is a 3 day competition, and the team worked hard the entire time in the stands and pits to make this robot work."
      students={["Team 2643 Dark Matter"]}
      date="April 10 2022"
      
    
    images={[
        {
            alt: "some ST badminton players",
            src: image1      
        }    
      ]}
      />
  </div>

</Layout>

export default CPStory15