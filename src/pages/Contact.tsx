import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import './contact.css';

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Contact Me</h2>
        <p>You can reach me at <a href="mailto:myemail@example.com">myemail@example.com</a>.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
