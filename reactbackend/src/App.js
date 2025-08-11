import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Header.js';
import Perfil from './components/Perfil.js'
import List from './components/Lista.js'
import EditD from './components/EditDepoimento.js'
import VSicon from './components/IconeVisu.js'
import ViewComents from './components/ViewComents.js'
import { DepoimentosProvider } from './DepoimentosContext';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Perfil/>
      <List/>
      <VSicon/>
      <DepoimentosProvider>
      <EditD/>
      <ViewComents/>
      </DepoimentosProvider>

    </div>
  );
}

export default App;
