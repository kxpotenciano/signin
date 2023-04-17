import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import SmartImage from './SmartImage.png'
import SingIn from './component/SingIn';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${SmartImage})` , height: `100vh`, width: `100vw`}}>
      <SingIn/> <br/>
      <Footer/>
    </div>
  );
}

export default App;
