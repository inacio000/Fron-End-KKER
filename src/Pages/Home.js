import '../App.css';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import NavBar from '../components/NavBar/NavBar';
import Section from '../components/Section/Section';
import SlideShow from '../components/Slide/Slide';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Section />
      <SlideShow />
      <Main 
        title= "Temos as melhores universidades na Rússia e na Polônia"
        src="../images/content-images/uni.jpg"
      />
      <Footer />
    </div>
  );
}

export default Home;
