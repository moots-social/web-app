// import { createContext, useState, useContext } from 'react';

// const ModalContextNot = createContext();

// export const useModalNot = () => useContext(ModalContextNot);

// export const ModalProviderNot = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const abrirModalNot = () => {
//     setIsOpen(true);
//   };

//   const fecharModalNot = () => {
//     setIsOpen(false);
//   };

//   return (
//     <ModalContext.Provider value={{ isOpen, abrirModal, fecharModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };


import { createContext, useState, useContext } from 'react';

// Criando o contexto com o nome correto
const ModalContextNot = createContext();

// Hook para usar o contexto
export const useModalNot = () => useContext(ModalContextNot);

// Provedor do contexto
export const ModalProviderNot = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para abrir a modal
  const abrirModalNot = () => {
    setIsOpen(true);
  };

  // Função para fechar a modal
  const fecharModalNot = () => {
    setIsOpen(false);
  };


    return (
    // Usando o nome correto para o Provider
    <ModalContextNot.Provider value={{ isOpen, abrirModalNot, fecharModalNot }}>
        {children}
    </ModalContextNot.Provider>
    );
};
