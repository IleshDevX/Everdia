import React from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "./ModalContext";

const MenuModal = () => {
    const { isMenuOpen, toggleMenu } = useModal();

    if (!isMenuOpen) return null;

    const navLinks = [
        { label: "01. Wilderness Sanctuary", href: "#hero" },
        { label: "02. About Everdia", href: "#welcome" },
        { label: "03. Signature Lodges", href: "#choose" },
        { label: "04. Bio-Reserve Expeditions", href: "#activities" },
        { label: "05. Sanctuary Map & Location", href: "#map" },
        { label: "06. Guest Testimonials", href: "#feedback" },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between p-8 bg-[#181717]/95 backdrop-blur-2xl text-[#f4efe7] transition-all duration-500 animate-fadeIn">
            {/* Header */}
            <div className="flex justify-between items-center w-full pb-6 border-b border-[#b1a696]/20">
                <span className="text-2xl font-bold tracking-wider text-[#b1a696]">Everdia • India</span>
                <button
                    onClick={toggleMenu}
                    className="p-3 bg-[#2a2725] rounded-full text-[#f4efe7] hover:bg-[#b1a696] hover:text-[#181717] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-sm font-medium pr-1">Close</span>
                    <IoMdClose className="text-xl" />
                </button>
            </div>

            {/* Menu Body */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto max-w-6xl w-full mx-auto">
                <div className="flex flex-col gap-4 justify-center">
                    <p className="text-xs uppercase tracking-widest text-[#b1a696]">Navigation</p>
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-2xl md:text-4xl font-semibold hover:text-[#b1a696] hover:translate-x-3 transition-all duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center gap-6 p-6 rounded-3xl bg-[#292725]/60 border border-[#b1a696]/20">
                    <p className="text-xs uppercase tracking-widest text-[#b1a696]">Ecological Pledge</p>
                    <h3 className="text-xl font-bold leading-snug">
                        100% Zero-Carbon Eco-Lodges Built in Harmony with India's Wild Canopies
                    </h3>
                    <p className="text-sm text-[#b1a696]">
                        Located in the Western Ghats & Central India tiger corridors, Everdia provides sustainable luxury surrounded by bio-diversity.
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#b1a696]/20 text-center">
                        <div>
                            <span className="block text-xl font-bold">500+</span>
                            <span className="text-[10px] text-[#b1a696]">Protected Species</span>
                        </div>
                        <div>
                            <span className="block text-xl font-bold">100%</span>
                            <span className="text-[10px] text-[#b1a696]">Solar Powered</span>
                        </div>
                        <div>
                            <span className="block text-xl font-bold">0%</span>
                            <span className="text-[10px] text-[#b1a696]">Plastic Waste</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full pt-6 border-t border-[#b1a696]/20 text-xs text-[#b1a696]">
                <p>© 2026 Everdia India Bio-Reserves. All rights reserved.</p>
                <div className="flex gap-6 mt-2 md:mt-0">
                    <a href="#" className="hover:text-[#f4efe7]">Instagram</a>
                    <a href="#" className="hover:text-[#f4efe7]">LinkedIn</a>
                    <a href="#" className="hover:text-[#f4efe7]">Behance</a>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;
