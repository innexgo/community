import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';

import CarouselImage1 from '../assets/carousel/1.jpg';
import CarouselImage2 from '../assets/carousel/2.jpg';
import CarouselImage3 from '../assets/carousel/3.jpg';

const Home = () =>
  <Layout>
    <div id="intro" className="container" >
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{height: "50vh"}}>
          <div className="carousel-item active">
            <img src={CarouselImage1} className="d-block w-100" alt="image 1" />
          </div>
          <div className="carousel-item">
            <img src={CarouselImage2} className="d-block w-100" alt="image 2" />
          </div>
          <div className="carousel-item">
            <img src={CarouselImage3} className="d-block w-100" alt="image 3" />
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
    </div>
    <div id="blurb" className="container">
      <Section id="about" name="About">
      The students at ST are great.
      </Section>
      <Section id="innexgo" name="Innexgo">
        <p>
          In 2018 I helped create Innexgo, an open source student attendance system. Innexgo uses RFID stickers to automatically take
          attendance without wasting student or teacher time and provides data analysis tools for converting raw attendance data to useful
          graphs and statistics.
        </p>
        <p>
          <a href="https://innexgo.com">Company Website</a>
          <br />
          <a href="https://github.com/innexgo">Source Code</a>
        </p>
      </Section>
      <Section id="achernar" name="Achernar">
        <h5>Goals</h5>
        Achernar is a <b><i>Work In Progress</i></b> programming language focusing on:
        <ul>
          <li>
            <b>Minimalism</b>: Achernar strives to be <i>orthogonal</i>.
            Language features are simple to understand, independent, and highly composable.
            As such, minimalism is both possible and ergonomic.
          </li>
          <li><b>Versatility</b>: Achernar does not lock the user into any particular framework and is highly unopinionated.
            Use Achernar compiled or interpreted. It can be easily dropped into any existing project without dragging in any dependencies.
          </li>
          <li><b>Safe</b>: Achernar is designed with type safety in mind. It is strongly typed and offers additional Ada
            style contract programming.
          </li>
        </ul>
        <h5>Current Status</h5>
        <p>
          I am currently about 50% through writing the first compiler in C that will compile Achernar code.
          The compiler uses its own custom standard library called <code>comlib</code> that will evolve into Achernar's standard library.
        </p>
        <h5>Additional Information</h5>
        <p>
          <Link to="https://github.com/pimpale/achernar">Achernar Source Code</Link>
          <br />
          <Link to="/achernar">More Info</Link>
        </p>
      </Section>
      <br />
    </div>
  </Layout>


export default Home;
