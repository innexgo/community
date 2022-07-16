import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';
import { StoriesSection } from '../pages/Stories';

import CarouselImage1 from '../assets/carousel/1.jpg';
import CarouselImage2 from '../assets/carousel/2.jpg';
import CarouselImage3 from '../assets/carousel/3.jpg';
import CarouselImage4 from '../assets/carousel/4.jpg';
import CarouselImage5 from '../assets/carousel/5.jpg';
import CarouselImage6 from '../assets/carousel/6.jpg';
import CarouselImage7 from '../assets/carousel/7.jpg';
import CarouselImage8 from '../assets/carousel/8.jpg';
import CarouselImage9 from '../assets/carousel/9.jpg';
import CarouselImage10 from '../assets/carousel/10.jpg';
import CarouselImage11 from '../assets/carousel/11.jpg';
import CarouselImage12 from '../assets/carousel/12.jpeg';
import CarouselImage13 from '../assets/carousel/13.jpeg';

const Home = () => <Layout>
  <div id="images" className="container pt-5" >
    <div id="carouselExampleControls" className="carousel slide border border-primary" data-bs-ride="carousel">
      <div className="carousel-inner bg-secondary" style={{ height: "50vh" }}>
        {/* If you want to add a new image to the carousel, make sure to add a new CarouselImage and add a link to the story */}
        <div className="carousel-item active">
          <a href="/story1">
            <img src={CarouselImage1} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 1" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story1">
            <img src={CarouselImage2} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 2" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story1">
            <img src={CarouselImage3} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 3" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story13">
            <img src={CarouselImage4} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>


        <div className="carousel-item">
          <a href="/story14">
            <img src={CarouselImage5} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>

        <div className="carousel-item">
          <a href="/story15">
            <img src={CarouselImage6} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>

        <div className="carousel-item">
          <a href="/story16">
            <img src={CarouselImage7} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story17">
            <img src={CarouselImage8} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story18">
            <img src={CarouselImage9} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story19">
            <img src={CarouselImage10} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story20">
            <img src={CarouselImage11} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story21">
            <img src={CarouselImage12} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>
        <div className="carousel-item">
          <a href="/story22">
            <img src={CarouselImage13} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 4" />
          </a>
        </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <Section id="about" name="About">
      The Saintly Bark Out is a place for students and staff to be recognized for their actions that represent how to be a BeAST (Be A SainT).
      Our ST family do amazing things in the classroom, on campus and in the community and they should be recognized and showcased for these actions.
      <p>ST will be having regular gift card drawings for students who are featured.</p>
    </Section>
    
    <StoriesSection />
  </div>
</Layout>


export default Home;
