import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import  Menu from './components/header/Menu'
import MyForm from './components/formulaire/MyForm';
import AboutUs from './components/aboutUs/AboutUs';
;
function App() {
  return (
    <div className="App">
      < Menu />
      < AboutUs />
      < MyForm />
    </div>
  );
}

export default App;
