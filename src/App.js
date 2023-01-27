import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
