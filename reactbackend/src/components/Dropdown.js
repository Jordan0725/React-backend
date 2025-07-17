import Dropdown from 'react-bootstrap/Dropdown';
import Bars from '../Images/Menuheader.png';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='MenuHeader'>
        <img src={Bars}/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='OpcoesMenu'>
        <Dropdown.Item href="#sobre">Sobre Nós</Dropdown.Item>
        <Dropdown.Item href="#servicos">Serviços</Dropdown.Item>
        <Dropdown.Item href="#cases">Cases</Dropdown.Item>
        <Dropdown.Item href="#metodo">Método VCR</Dropdown.Item>
        <Dropdown.Item href="#depoimentos">Depoimentos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;