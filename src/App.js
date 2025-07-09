import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header.js';
import Perfil from './components/Perfil.js'
import List from './components/Lista.js'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Perfil/>
      <List/>


    </div>
  );
}

export default App;
