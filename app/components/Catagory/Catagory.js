import Link from "next/link"
//import './Banner.css';
//import './Catagory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintRoller, faBroom, faPeopleCarryBox, faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons'

import Image from "next/image";

const CategorySection = () => {
  return (
    <section id='services' className="section category" aria-label="category">
      <div className="container">
        <p className="section-subtitle">Service Categories</p>
        <h2 className="h2 section-title">Popular Service In your City</h2>
        <ul className="grid-list">
          <li>
            <div className="category-card">
              <div className="card-icon">
               
                <FontAwesomeIcon icon={faPaintRoller} />
              </div>
              <div>
                <h3 className="h3 card-title">
                  <a href="#">Home Painting</a>
                </h3>
                <span className="card-meta">Painters will come to
                 your home and paint according to your direction. </span>
              </div>
            </div>
          </li>
          <li>
              <div className="category-card">

                <div className="card-icon">
                  <FontAwesomeIcon icon={faBroom} />
                </div>
               <div>
                  <h3 className="h3 card-title">
                    <a href="#">Home Cleaning</a>
                  </h3>

                  <span className="card-meta">
                  Home Cleaners will be sent to
                 your home at your given address. </span>
                </div>
                 </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <FontAwesomeIcon icon={faPeopleCarryBox} />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Home Shifting</a>
                  </h3>

                  <span className="card-meta">
                 General Humans will be sent to
                 your home at your given address 
                 for moving your furnitures from 
                 one place to another. 
                 </span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
               <FontAwesomeIcon icon= {faHandsHoldingChild} />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Child Care</a>
                  </h3>

                  <span className="card-meta">
                    Nany or Female Persons will be sent 
                    to your home for your childs daycare. </span>

                </div>

              </div>
            </li>

              {/* <li>
              <div className="category-card">

                <div className="card-icon">
                  <ion-icon name="laptop-outline"></ion-icon>
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Web Development</a>
                  </h3>

                  <span className="card-meta">39 Course</span>
                </div>

              </div>
            </li>

          <li>
              <div className="category-card">

                <div className="card-icon">
                  <ion-icon name="thumbs-up-outline"></ion-icon>
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Lifestyle</a>
                  </h3>

                  <span className="card-meta">39 Course</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <ion-icon name="headset-outline"></ion-icon>
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Digital Marketing</a>
                  </h3>

                  <span className="card-meta">39 Course</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <ion-icon name="server-outline"></ion-icon>
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Data Sciences</a>
                  </h3>

                  <span className="card-meta">39 Course</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <ion-icon name="medkit-outline"></ion-icon>
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Health & Fitness</a>
                  </h3>

                  <span className="card-meta">39 Course</span>
                </div>

              </div>
            </li> */}
          {/* Add the rest of the list items for other categories */}
          {/* ... */}
        </ul>
      </div>
    </section>
  );
};

export default CategorySection;