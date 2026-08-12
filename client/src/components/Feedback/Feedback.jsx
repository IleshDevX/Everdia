import { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { feedbackH1LG, feedbackReviewLG } from "../../constants/feedback";

import review1 from "../../assets/review1.jpg";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.jpg";

const reviewImages = {
    review1,
    review2,
    review3
};

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const total = feedbackH1LG.length;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const progressWidth = feedbackReviewLG[index][3];

    return (
        <section id="feedback" className='w-full h-dvh p-8 flex flex-col justify-center items-center bg-[#181717] relative overflow-hidden'>
            <div className='w-full max-w-6xl text-left'>
                <div className="flex justify-between items-center mb-4">
                    <p className='text-[.7rem] font-bold text-[#eae5dd] uppercase tracking-widest'>
                        Guest Testimonials
                    </p>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold glass-card px-3 py-1 rounded-full">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-[#f4efe7] ml-1">5.0 (Verified Stays)</span>
                    </div>
                </div>

                <div className="min-h-[220px]">
                    <h1 className='text-[#f4efe7] text-3xl md:text-6xl font-bold mt-4 mb-6 leading-tight transition-all duration-500'>
                        {feedbackH1LG[index].map((line, i) => (
                            <span key={i} className="block">
                                "{line}"
                            </span>
                        ))}
                    </h1>
                </div>

                <div className='flex items-center gap-4 mt-8'>
                    <img
                        src={reviewImages[feedbackReviewLG[index][2]]}
                        alt="Guest Avatar"
                        className='w-16 h-16 object-cover rounded-full border-2 border-[#b1a696]/40 shadow-xl'
                    />
                    <div>
                        <p className="text-[#f4efe7] text-base font-bold">
                            {feedbackReviewLG[index][0]}
                        </p>
                        <p className="text-[#aca192] text-xs font-medium">
                            {feedbackReviewLG[index][1]} • <span className="text-emerald-400">Verified Sanctuary Visitor</span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-12">
                    <div className="flex gap-2">
                        <button
                            onClick={handlePrev}
                            className='p-3 border border-[#aaa090]/40 bg-[#292725] hover:bg-[#b1a696] hover:text-[#181717] rounded-full transition-all duration-300 cursor-pointer'
                        >
                            <IoMdArrowBack className="text-xl" />
                        </button>

                        <button
                            onClick={handleNext}
                            className='p-3 border border-[#aaa090]/40 bg-[#292725] hover:bg-[#b1a696] hover:text-[#181717] rounded-full transition-all duration-300 cursor-pointer'
                        >
                            <IoMdArrowForward className="text-xl" />
                        </button>
                    </div>

                    <div className="relative z-9 w-70 h-[0.15rem] bg-[#4f4b48] rounded-full overflow-hidden">
                        <div
                            className="progress-line absolute z-10 bg-[#f4efe7] h-full top-0 left-0 transition-all duration-500"
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;