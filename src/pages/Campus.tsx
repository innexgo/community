import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Section from '../components/Section';


export const Campus = () =>
  <Section id="campus" name="Campus">
     <ul>
      <li><a href="/story14">Santa Teresa Badminton- March 2022</a></li>
    </ul>
    <ul>
      <li><a href="/story13">STVSA's Beneath the Same Stars Culture Show - March 2022</a></li>
    </ul>
   
   <ul>
      <li><a href="/story12">Give me a few minutes - February 2022</a></li>
      </ul>
   <ul>
      <li><a href="/story10">Taking time for others - October 2021</a></li>
      </ul>
     
    <ul>
      <li><a href="/story9">Helping with the Saint Bernard Giphy - September 2021</a></li>
      </ul>
     <ul>
      <li><a href="/story8"> Responsibility at ST - September 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story7">More Responsibility at ST - September 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story6">Found lost iPhone - September 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story5">Free Mask Spacer - August 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story2">Saying Thank You - August 2021</a></li>
    </ul>
    <ul>
      <li><a href="/story1">Be A Saint Promotional Mural - June 2021</a></li>
    </ul>
  </Section>

const CampusStory = () => <Layout>
  <div id="images" className="container pt-5" >
    <Campus />
  </div>
</Layout>

export default CampusStory
