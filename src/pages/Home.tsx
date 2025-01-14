import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import './home.css';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to My Portfolio</h2>
        <p>Here you can find all my GitHub projects and more.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
