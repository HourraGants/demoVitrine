import './theme.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Works from './components/Works';
import Footer from './components/Footer';
import Process from './components/Process';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="hero"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="process"><Process /></section>
        <section id="works"><Works /></section>
        <section id="pricing"><Pricing /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App;
