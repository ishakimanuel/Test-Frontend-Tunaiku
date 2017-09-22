import React from 'react';
import HeroImage from '../img/section-1-image01.png';
const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero__content">
          <h1 className="headline">
            Lorem ipsum dolor sit amet, consectetur adipi scingelit, sed do{' '}
          </h1>
          <p className="hero__desc">
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <div className="hero__img--phone">
            <img src={HeroImage} alt="Front End" />
          </div>
          <div className="hero__btn">
            <a href="" className="btn">
              For More Information
            </a>
          </div>
        </div>
        <div className="hero__img">
          <img src={HeroImage} alt="Front End" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
