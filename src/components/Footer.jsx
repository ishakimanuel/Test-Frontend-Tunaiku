import React from 'react';
import Logo from '../img/logo.png';
import Facebook from '../img/icon-facebook.png';
import Instagram from '../img/icon-instagram.png';
import Twitter from '../img/icon-twitter.png';
import Youtube from '../img/icon-youtube.png';

const socialImgSrc = [
  { img: Facebook, alt: 'facebook' },
  { img: Instagram, alt: 'instagram' },
  { img: Twitter, alt: 'twitter' },
  { img: Youtube, alt: 'youtube' }
];

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__top grid">
          <div className="logo">
            <img src={Logo} alt="Footer Logo" />
          </div>
          <nav className="nav nav__footer">
            <ul className="menu">
              <li>
                <a href="">Menu 1</a>
              </li>
              <li>
                <a href="">Menu 2</a>
              </li>
              <li>
                <a href="">Menu 3</a>
              </li>
              <li>
                <a href="">Menu 4</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__mid grid">
          <div className="mid__desc">
            <p>
              magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
              nostrum exercitationem ullam corporis
            </p>
          </div>
          <div className="mid__social">
            {socialImgSrc.map(src => {
              return (
                <a href="" key={src.alt}>
                  <img src={src.img} alt={src.alt} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer__bottom">
          <p>magnam aliquam quaerat voluptatem. Ut enim</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
