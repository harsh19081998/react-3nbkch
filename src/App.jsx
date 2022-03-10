import React from 'react';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Services from './components/Services/services';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
