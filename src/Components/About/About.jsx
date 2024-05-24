import React from 'react'
// import { Link } from "react-router-dom";

// imports components
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import Services from "../Services/Services"
import story from "../../assets/img/jpeg/l1.jpg";
import Mission from "../../assets/img/jpeg/details-3.jpeg";
import team from "../../assets/img/jpeg/team.jpg";
function About() {
  return (
    <>
    <Hero hero="abouthero">
        <Banner title="About Us">
          
        </Banner>
      </Hero>
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={story} alt="Our Story" />
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
            Our journey began with a simple idea: to create a space where guests can feel at home while experiencing the luxury and comfort of a high-end hotel. Over the years, we have evolved, but our commitment to exceptional hospitality and creating memorable experiences has remained the same.

From our humble beginnings, we have grown into a premier destination, renowned for our attention to detail, personalized service, and unique atmosphere. Our passion for excellence drives us to continually improve and innovate, ensuring that each guest enjoys a stay that exceeds their expectations.

We take pride in our rich history, built on a foundation of hard work, dedication, and a genuine love for hospitality. Our story is one of growth, resilience, and an unwavering commitment to making every stay a memorable one.


            </p>
          </div>
        </div>
        <div className="about-container reverse">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
            At Beach Resort, our mission is to provide an unparalleled hospitality experience that exceeds our guests' expectations. We aim to create a welcoming environment where comfort, luxury, and personalized service come together to offer a memorable stay.

Our commitment is to:

Exceptional Service: Delivering outstanding service through attention to detail and a passion for hospitality. Our team is dedicated to ensuring that every guest feels valued and cared for.
Comfort and Luxury: Offering the highest standards of comfort and luxury. From our elegantly designed rooms to our state-of-the-art amenities, we strive to provide an atmosphere of relaxation and indulgence.
Sustainability: Promoting sustainable practices to preserve the environment for future generations. We implement eco-friendly initiatives and continually seek ways to reduce our carbon footprint.
Community Engagement: Supporting and engaging with the local community. We believe in giving back and actively participate in local events, charities, and initiatives.
            </p>
          </div>
          <div className="about-image">
            <img src={Mission} alt="Our Mission" />
          </div>
        </div>
        <div className="about-container">
          <div className="about-image">
            <img src={team} alt="Our Team" />
          </div>
          <div className="about-content">
            <h2>Our Team</h2>
            <p>
            our team is the heart and soul of our hospitality experience. We are a diverse group of dedicated professionals who share a common passion for delivering exceptional service and creating unforgettable memories for our guests.

Meet Our Team:

Leadership: Our leadership team brings together decades of experience in the hospitality industry. Their vision and guidance drive our commitment to excellence and innovation. They lead by example, fostering a culture of respect, integrity, and continuous improvement.

Front Desk and Concierge: Our front desk and concierge team are the friendly faces that greet you upon arrival. They are dedicated to ensuring a smooth and enjoyable stay, providing personalized recommendations and assistance to make your visit as pleasant as possible.

Housekeeping: Our housekeeping team takes pride in maintaining the highest standards of cleanliness and comfort. 



            </p>
          </div>
        </div>
      </section>
      <Services/>
    </>
  )
}

export default About
