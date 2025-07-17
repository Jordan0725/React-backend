import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header.js';
import Perfil from './components/Perfil.js'
import List from './components/Lista.js'
import EditD from './components/EditDepoimento.js'
import VSicon from './components/IconeVisu.js'
import ViewComents from './components/ViewComents.js'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Perfil/>
      <List/>
      <EditD/>
      <VSicon/>
      <ViewComents/>


    </div>
  );
}

export default App;
