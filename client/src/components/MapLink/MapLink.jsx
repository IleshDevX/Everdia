import { useState } from "react";
import ClickIndicator from "./ClickIndicator";
import { useModal } from "../Modal/ModalContext";

const MapLink = () => {
    const [active, setActive] = useState(false);
    const { toggleMap } = useModal();

    return (
        <section id="map" className="w-full h-[90vh] bg-[#181717] flex flex-col justify-center items-center text-center relative px-4 overflow-hidden">
            <div>
                <p className="text-[0.7rem] font-bold text-[#a79c8d] choose-subtitle uppercase tracking-widest">
                    Closer Than You Think
                </p>

                <h1 className="text-[5vw] leading-15 tracking-tight mt-5 text-[#f4efe7]">
                    Our Everdia sanctuaries are nestled<br />
                    in India's prime bio-reserves with<br />
                </h1>
            </div>

            <ClickIndicator active={active} />

            <button
                onClick={toggleMap}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                className="text-[#b1a696] text-[5vw] underline hover:text-[#f4efe7] cursor-pointer transition-colors duration-300 group inline-flex items-center gap-3 mt-2"
            >
                <span>easy access by road.</span>
                <span className="text-2xl no-underline opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all">📍 (View Map)</span>
            </button>
        </section>
    );
};

export default MapLink;