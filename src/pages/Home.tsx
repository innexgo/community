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
        <div className="carousel-item active">
          <img src={CarouselImage1} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 1" />
        </div>
        <div className="carousel-item">
          <img src={CarouselImage2} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 2" />
        </div>
        <div className="carousel-item">
          <img src={CarouselImage3} className="d-block mx-auto" style={{ height: "50vh" }} alt="image 3" />
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
      The students at ST are have done some great things helping their school, neighbors, teachers, and fellow students.
      This website is meant to recognize their accomplishments and showcase the good work that people have done.
    </Section>
    <StoriesSection />
  </div>
</Layout>


export default Home;
