/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./about.css";

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello, My name is
          <br /> <span className='info-name'> Gerelee </span>.
          <br />I am IT student.
        </div>
        <div className='about-photo'>
          <img 
          src= {require("../../../assets/Coding-amico.png")}
          className='picture'
          />
        </div>
      </div>
    </div>
  )
}

export default About

