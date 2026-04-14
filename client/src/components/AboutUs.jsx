import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              HealthBooker is a smart and user-friendly doctor appointment booking system
  designed to simplify healthcare access. Our platform allows patients to easily
  find doctors, check availability, and book appointments without any hassle.
  We aim to reduce waiting time, improve communication, and provide a smooth
  scheduling experience for both patients and healthcare providers.

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
