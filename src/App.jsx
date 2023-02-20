import css from "./styles/App.module.scss"
import Header from './components/Header/Header';
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills"
function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
