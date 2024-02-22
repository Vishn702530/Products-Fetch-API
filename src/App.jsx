
import './App.css';
import Apifetch from './components/Apifetch';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Apifetch/>
      <Footer/>

    </div>
  );
}

export default App;
