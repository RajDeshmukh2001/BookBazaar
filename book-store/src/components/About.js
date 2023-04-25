import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <p className="first">
          <span>BookBazaar works to connect readers with independent booksellers all over the world.</span>
          ‍ We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.

          Every purchase on the site financially supports independent bookstores. Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.
        </p>
        <p>
          Our mission is simple: To help local, independent bookstores thrive in the age of ecommerce.
          Certified as a B Corp, BookBazaar puts this mission and the public good above financial interests, giving over 80% of our profit margin to independent bookstores. In 2022, B-Labs announced we were "best for the world": in the top 5% of all B-Corps.
          It is written in our governance documents that we will never sell the company to Amazon or any major U.S. retailer.
          As a Climate Neutral company, we are committed to operating sustainably.
        </p>
        <p className="third">
          B Corp Certification is a designation that a business is meeting high standards of verified performance, accountability, and transparency on factors from employee benefits and charitable giving to supply chain practices and input materials.
        </p>
        <p>
          BookBazaar began as an idea to help support bookstores and their communities as more and more people are buying their books online. We saw an opportunity to create an alternative to Amazon for socially-conscious online shoppers. Amazon sells over 60% of all books in the US and is growing. That shift threatens the future of bookstores and will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books. We had a better idea — give readers the convenience of online shopping while supporting independent bookstores at the same time.
        </p>
      </div>
        <div className="footer-element">
          <Footer />
        </div>
    </>
  )
}

export default About;