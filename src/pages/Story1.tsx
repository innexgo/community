import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

import image from '../assets/story1/IMG_0724.jpg';

const title = "Be A Saint Promotional Mural"
const blurb = "These students dedicated a week of their summer to volunteer and paint our first Be A Saint promotional Mural.  They worked together to design and execute this project.  We look forward to commissioning other mural projects across the ST campus to promote Be A Saint: Respect, Achieve, Can-do Attitude"
const students = "Henry B, Aneesha B, Nophar S, Celine V, Kaylee O"


type CarouselImage = {
  alt: string,
  src: string,
}

type CarouselProps = {
  images: CarouselImage[]
}

const Carousel = (props: CarouselProps) =>
  <div id="carouselExampleControls" className="carousel slide border border-primary" data-bs-ride="carousel">
    <div className="carousel-inner bg-secondary" style={{ height: "50vh" }}>{
      props.images.map((img, i) =>
        <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
          <img src={img.src} className="d-block mx-auto" style={{ height: "50vh" }} alt={img.alt} />
        </div>
      )
    }</div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>




const Story1 = () => <Layout>
  <div id="images" className="container pt-5" >
    <Carousel images={[
      {
          alt: "Students painting the mural",
          src: image
      }
    ]}
    />
    <Section id="story" name={title}>
      <p>{blurb}</p>
      <h5>Students</h5>
      <p>{students}</p>
    </Section>
  </div>
</Layout>

export default Story1
