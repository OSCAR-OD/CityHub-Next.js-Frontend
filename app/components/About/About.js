/* eslint-disable */
import Link from "next/link"
//import './About.css';
import Image from "next/image";
const About = () => {
    return (
      // <section className="section cta" aria-label="workshop" style={{ backgroundImage: url('./assets/images/cta-bg.png') }}>
      <section className="section cta" id='about' aria-label="workshop" >
     
      <div className="container">
      <figure className="cta-banner">
      <Image
               src="/company.jpg"
               width={580}
               height={380}
               loading="lazy"
               alt="cta banner"
               className="img-cover"
             />
      </figure>
      <div className="cta-content">
      <p className="section-subtitle">About Us</p>

      <h2 className="h2 section-title">CityHub</h2>

      <p className="section-text">
      At CityHub, we are dedicated to 
      delivering top-notch services tailored to meet your 
      unique requirements. Specifically for your city, 
      workers have been divided into different teams 
      to meet the demand. To exceed your expectations 
      and empower you to achieve your goals we are 
      working everyday.
  </p>

      <a href="#" className="btn btn-secondary">
        <span className="span">Check Details</span>
        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </div>
  </div>
</section>
    );
}

export default About;