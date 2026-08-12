import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isReserveOpen, setIsReserveOpen] = useState(false);
    const [isMapOpen, setIsMapOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleReserve = () => setIsReserveOpen(prev => !prev);
    const toggleMap = () => setIsMapOpen(prev => !prev);

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsReserveOpen(false);
        setIsMapOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isMenuOpen,
                toggleMenu,
                isReserveOpen,
                toggleReserve,
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
