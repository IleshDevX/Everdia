import React from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "./ModalContext";

const MapModal = () => {
    const { isMapOpen, toggleMap } = useModal();

    if (!isMapOpen) return null;

    const locations = [
        {
            title: "Western Ghats Rainforest Reserve",
            state: "Karnataka / Kerala Border",
            access: "3.5 hrs from Mangalore Intl Airport",
            highlights: "Canopy Lodges, Waterfalls & Rare Orchid Trails",
        },
        {
            title: "Kabini Riverfront Bio-Zone",
            state: "Nagarhole National Park Corridor",
            access: "4 hrs from Bengaluru Airport",
            highlights: "Waterfront Villas, Leopard Safaris & Boat Treks",
        },
        {
            title: "Corbett Foothills Sanctuary",
            state: "Uttarakhand Reserve Region",
            access: "5 hrs from New Delhi via NH9",
            highlights: "Tiger Corridors, River Rafting & Forest Cabins",
        },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
            <div className="w-full max-w-4xl bg-[#181717] border border-[#b1a696]/30 rounded-3xl p-8 text-[#f4efe7] shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 border-b border-[#b1a696]/20">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-[#b1a696]">Sanctuary Locations</span>
                        <h2 className="text-3xl font-bold">India's Bio-Reserve Map</h2>
                    </div>
                    <button
                        onClick={toggleMap}
                        className="p-3 bg-[#292725] rounded-full hover:bg-[#b1a696] hover:text-[#181717] transition-all cursor-pointer"
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>

                {/* Simulated Map Graphic Container */}
                <div className="relative w-full h-64 bg-[#292725] rounded-2xl overflow-hidden border border-[#b1a696]/20 flex items-center justify-center p-6 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#b1a696_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="relative z-10">
                        <span className="text-4xl block mb-2">🗺️</span>
                        <h3 className="text-xl font-semibold">Everdia Protected Wildlife Corridors</h3>
                        <p className="text-xs text-[#b1a696] max-w-md mx-auto mt-1">
                            Easily accessible by highways & expressways with private helicopter heli-pads at Western Ghats & Kabini sanctuaries.
                        </p>
                    </div>
                </div>

                {/* Location Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {locations.map((loc, idx) => (
                        <div key={idx} className="p-5 bg-[#292725]/60 rounded-2xl border border-[#b1a696]/20 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-[#b1a696] uppercase">Zone 0{idx + 1}</span>
                                <h4 className="text-lg font-bold mt-1">{loc.title}</h4>
                                <p className="text-xs text-[#b1a696] mt-1">{loc.state}</p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-[#b1a696]/10 text-xs">
                                <p className="text-[#f4efe7] font-medium">🚗 {loc.access}</p>
                                <p className="text-[#b1a696] mt-1">🌿 {loc.highlights}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Action */}
                <div className="flex justify-between items-center pt-4 border-t border-[#b1a696]/20">
                    <p className="text-xs text-[#b1a696]">Need custom transfer arrangements? Contact our concierge.</p>
                    <button
                        onClick={toggleMap}
                        className="px-6 py-2 bg-[#f4efe7] text-[#181717] font-bold rounded-xl hover:bg-[#b1a696] transition-all cursor-pointer text-sm"
                    >
                        Got It
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MapModal;
