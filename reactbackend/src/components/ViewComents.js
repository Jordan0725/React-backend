import React from 'react';
import { useDepoimentos } from '../DepoimentosContext';

function ViewComents() {
  const { dadosDepoimentos } = useDepoimentos();

  return (
    <div>
      <div className='ViewC'>
        {[0, 1, 2].map((i) => {
          const dep = dadosDepoimentos[i];
          return (
            <div className='ViewC-containers' key={i}>
              <div className='ViewC-message'>
                <p>
                  {dep?.mensagem
                    ? `“${dep.mensagem}”`
                    : "Nenhum depoimento carregado."}
                </p>
              </div>
              <div className='ViewC-name'>
                {dep?.nome_usuario
                  ? `${dep.nome_usuario}, ${dep.empresa || ''}`
                  : "—"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewComents;
