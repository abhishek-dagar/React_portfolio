import './App.css';
import { Banner, Footer, Navbar, Project, Skills } from './components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
