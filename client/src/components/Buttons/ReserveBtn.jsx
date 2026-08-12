import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";
import { useModal } from "../Modal/ModalContext";

const ReserveBtn = () => {
    const { toggleReserve } = useModal();

    return (
        <div className="relative z-49">
            <button
                onClick={toggleReserve}
                className="absolute right-6 top-[2vw] bg-[#f4efe7] px-3 py-1 flex justify-end items-center rounded-4xl gap-2 cursor-pointer transition-all duration-300 hover:scale-105 shadow-xl group"
            >
                <div className="text-[#2a2725]">
                    <AnimateBtn btnName="Reserve" />
                </div>
                <MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-6 h-6 rounded-full p-1 transition-transform duration-300 group-hover:rotate-45" />
            </button>
        </div>
    );
};

export default ReserveBtn;