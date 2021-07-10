import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Carrousel from './Components/Carrousel/Carrousel.jsx';
import Catalog from './Components/Catalog/Catalog.jsx';
import NewsForm from "./Components/NewsForm/NewsForm.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Carrousel />
        <Catalog />
        <NewsForm />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
