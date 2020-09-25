import React from 'react';
import web from '../src/image/img7.jpg';
import Common from './Common';
const About = () =>{
  return(<><Common 
    name="Welcome to About Page"
    imgsrc={web}
    visit="/contact"
    btname="Contact Now"/>
 </>);
};
export default About;