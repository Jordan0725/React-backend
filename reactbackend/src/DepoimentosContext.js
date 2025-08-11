import React, { createContext, useState, useContext } from 'react';

const DepoimentosContext = createContext();

export function DepoimentosProvider({ children }) {
  const [dadosDepoimentos, setDadosDepoimentos] = useState([null, null, null]);
  return (
    <DepoimentosContext.Provider value={{ dadosDepoimentos, setDadosDepoimentos }}>
      {children}
    </DepoimentosContext.Provider>
  );
}

export function useDepoimentos() {
  const ctx = useContext(DepoimentosContext);
  if (!ctx) throw new Error('useDepoimentos deve ser usado dentro de DepoimentosProvider');
  return ctx;
}