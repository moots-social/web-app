import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idPost, setIdPost] = useState(null);

  const abrirModal = (postId) => {
    setIdPost(postId);
    setIsOpen(true);
  };

  const fecharModal = () => {
    setIsOpen(false);
    setIdPost(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, idPost, abrirModal, fecharModal }}>
      {children}
    </ModalContext.Provider>
  );
};
