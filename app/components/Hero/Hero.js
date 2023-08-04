// /* eslint-disable */
// import Link from "next/link"
// import './Hero.css';
// import Image from "next/image";

// const Hero = () => {
//     return (
//       <section className="hero container">
//       <Image
//       className="hero__img lazy loading"
//       src="/ProfileImage.jpg"
//       width={720}
//       height={480}
//       alt="Profile picture"
//     />
//       {/* <img className="hero__img" 
//       src="/hero.jpg" 
//       alt="Profile picture" /> */}
      
//       <h2 className="hero__subtitle">Hi, I'm Oscar 👋</h2>
//       <h1 className="hero__title">
//       WEB DESIGNER <br />
//         AND WEB APP DEVELOPER.
//         {/* WEBSITE <br />
//         AND WEBAPPLICATION DEVELOPER. */}
//         {/* FRONT-END <br />
//         WEB DEVELOPER. */}
//       </h1>
//       <p className="hero__description">
//         A passionate <strong>Frontend / Fullstack-Jamstack</strong> web
//         developer and <strong>UI/UX</strong>
//         enthusiast specialized in building stunning pixel-perfect interactive
//         websites/applications.
//       </p>
//       <a className="hero__btn btn" href="#">Reach out</a>
//     </section>
//     );
// }

// export default Hero;
//////////////////
import Image from "next/image";

const Hero = () => {
  return (
    // <section className="hero" id="home" aria-label="hero" style={{ backgroundImage: `url('./assets/images/hero-bg.jpg')` }}>
    <section className="hero" id="home" aria-label="hero" >
   
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle">Live Better With Us</p>
          <h2 className="h1 hero-title">Get All Services from One Place </h2>
          <p className="hero-text">
            Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit.
          </p>
          <a href="#" className="btn btn-primary">
            <span className="span">Get Started Today</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
        </div>
        <figure className="hero-banner">
          <Image src="/srv.png" width={800} height={800} loading="lazy" alt="hero image" className="w-100" />
          {/* <Image src="/emp.png" width={400} height={400} loading="lazy" aria-hidden="true" alt="Employee image" className="abs-img abs-img-1" />
            */}
           </figure>
      </div>
    </section>
  );
};

export default Hero;