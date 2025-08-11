import React, { useState } from 'react';
import axios from 'axios';
import { useDepoimentos } from '../DepoimentosContext';

function EditDepoimento() {
  const [ids, setIds] = useState(["", "", ""]);
  const { dadosDepoimentos, setDadosDepoimentos } = useDepoimentos();

  const buscarDepoimento = async (index, id) => {
    if (!id) return;

    try {
      const response = await axios.get(`http://localhost:3000/depoimentos/${id}`);
      setDadosDepoimentos((prev) => {
        const novo = [...prev];
        novo[index] = response.data; // armazena no contexto
        return novo;
      });
    } catch {
      setDadosDepoimentos((prev) => {
        const novo = [...prev];
        novo[index] = { erro: "Não encontrado" };
        return novo;
      });
    }
  };

  const handleChange = (index, value) => {
    setIds((prev) => {
      const novo = [...prev];
      novo[index] = value;
      return novo;
    });
  };

  return (
    <div>
      <div className='EditC-header'>
        <h4>Editar depoimentos :</h4>
      </div>
      <div className='EditC'>
        {[0, 1, 2].map((i) => (
          <div className='EditC-containers' key={i}>
            <p>Depoimentos {i + 1}:</p>
            <div className='EditC-ID'>
              <h1>ID</h1>
              <span>Atual: {dadosDepoimentos[i]?.id || "—"}</span>
            </div>
            <div className='Input-depoimentos'>
              <input
                placeholder='Ex: 123456'
                value={ids[i]}
                onChange={(e) => handleChange(i, e.target.value)}
                onBlur={() => buscarDepoimento(i, ids[i])}
                onKeyDown={(e) => e.key === "Enter" && buscarDepoimento(i, ids[i])}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditDepoimento;
