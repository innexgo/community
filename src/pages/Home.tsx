import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';
import { StoriesSection } from '../pages/Stories';

import CarouselImage1 from '../assets/carousel/1.jpg';
import CarouselImage2 from '../assets/carousel/2.jpg';
import CarouselImage3 from '../assets/carousel/3.jpg';

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
    </Section>
    <StoriesSection />
  </div>
</Layout>


export default Home;
