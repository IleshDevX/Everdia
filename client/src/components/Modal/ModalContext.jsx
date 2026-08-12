import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleMap = () => setIsMapOpen(prev => !prev);

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsMapOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isMenuOpen,
                toggleMenu,
                isMapOpen,
                toggleMap,
                closeAll,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
