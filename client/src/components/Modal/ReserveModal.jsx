import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "./ModalContext";

const ReserveModal = () => {
    const { isReserveOpen, toggleReserve } = useModal();
    const [selectedLodge, setSelectedLodge] = useState("Rainforest Everdia");
    const [guests, setGuests] = useState(2);
    const [submitted, setSubmitted] = useState(false);

    if (!isReserveOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            toggleReserve();
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-md">
            <div className="w-full max-w-lg h-full bg-[#181717] border-l border-[#b1a696]/20 p-8 flex flex-col justify-between overflow-y-auto text-[#f4efe7] animate-slideLeft">
                {/* Top header */}
                <div className="flex justify-between items-center pb-6 border-b border-[#b1a696]/20">
                    <div>
                        <h2 className="text-2xl font-bold">Reserve Your Sanctuary</h2>
                        <p className="text-xs text-[#b1a696]">Everdia Eco-Resorts • India</p>
                    </div>
                    <button
                        onClick={toggleReserve}
                        className="p-3 bg-[#292725] rounded-full hover:bg-[#b1a696] hover:text-[#181717] transition-all cursor-pointer"
                    >
                        <IoMdClose className="text-xl" />
                    </button>
                </div>

                {submitted ? (
                    <div className="my-auto text-center p-8 bg-[#292725]/80 rounded-3xl border border-[#b1a696]/30">
                        <div className="text-4xl mb-4">🌿</div>
                        <h3 className="text-2xl font-bold text-[#f4efe7]">Reservation Request Sent!</h3>
                        <p className="text-sm text-[#b1a696] mt-2">
                            Our forest concierge will contact you within 2 hours to confirm your sanctuary booking for {selectedLodge}.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="my-auto flex flex-col gap-6">
                        {/* Lodge Selector */}
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-[#b1a696] mb-3">
                                Select Eco-Lodge
                            </label>
                            <div className="flex flex-col gap-2">
                                {[
                                    { name: "Rainforest Everdia", tag: "Western Ghats • Canopy View" },
                                    { name: "Corridor Lodge", tag: "Bandhavgarh • Tiger Path" },
                                    { name: "Wild River Villa", tag: "Kabini Reserve • Waterfront" },
                                ].map((lodge) => (
                                    <button
                                        type="button"
                                        key={lodge.name}
                                        onClick={() => setSelectedLodge(lodge.name)}
                                        className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                                            selectedLodge === lodge.name
                                                ? "bg-[#b1a696] text-[#181717] border-[#f4efe7]"
                                                : "bg-[#292725] text-[#f4efe7] border-[#b1a696]/20 hover:border-[#b1a696]"
                                        }`}
                                    >
                                        <div className="font-bold text-sm">{lodge.name}</div>
                                        <div className="text-xs opacity-75">{lodge.tag}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Guest Count */}
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-[#b1a696] mb-2">
                                Guests ({guests})
                            </label>
                            <div className="flex gap-3">
                                {[1, 2, 3, 4, 6].map((num) => (
                                    <button
                                        type="button"
                                        key={num}
                                        onClick={() => setGuests(num)}
                                        className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                                            guests === num
                                                ? "bg-[#f4efe7] text-[#181717] border-[#f4efe7]"
                                                : "bg-[#292725] border-[#b1a696]/20 text-[#b1a696]"
                                        }`}
                                    >
                                        {num} {num === 1 ? "Guest" : "Guests"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-[#b1a696] mb-1">
                                    Check-In
                                </label>
                                <input
                                    type="date"
                                    required
                                    className="w-full p-3 bg-[#292725] border border-[#b1a696]/20 rounded-xl text-sm text-[#f4efe7] focus:outline-none focus:border-[#b1a696]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-[#b1a696] mb-1">
                                    Check-Out
                                </label>
                                <input
                                    type="date"
                                    required
                                    className="w-full p-3 bg-[#292725] border border-[#b1a696]/20 rounded-xl text-sm text-[#f4efe7] focus:outline-none focus:border-[#b1a696]"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-[#f4efe7] text-[#181717] font-bold text-base rounded-2xl hover:bg-[#b1a696] transition-all cursor-pointer shadow-lg mt-4"
                        >
                            Request Reservation — {selectedLodge}
                        </button>
                    </form>
                )}

                {/* Bottom Note */}
                <div className="pt-4 border-t border-[#b1a696]/20 text-xs text-[#b1a696] text-center">
                    🔒 All bookings include complimentary wildlife safari passes & zero-carbon pledge.
                </div>
            </div>
        </div>
    );
};

export default ReserveModal;
