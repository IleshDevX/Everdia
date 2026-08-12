import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { chooseLinesLG, chooseLinesSM } from "../../constants/welcome";

const Choose = () => {
    const [activePill, setActivePill] = useState(0);
    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });
    const chooseLines = isMobD ? chooseLinesSM : chooseLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".choose-title-clip");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 75%",
                end: "bottom 100%",
                scrub: true,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        if (!isMobD) {
            tl.fromTo(
                ".title-part",
                { height: "10vh" },
                { height: `${isMobD ? "22vh" : "50vh"}`, ease: "none" }
            );
        }

        tl.to(
            lines,
            {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            },
            "<"
        );

        if (!isMobD) {
            tl.from(".choose-sec", {
                yPercent: 100,
                duration: 1,
            }, "<");
        }
    });

    const pills = [
        "Sustainable",
        "Nature—Care",
        "Bio-Corridor",
        "Conservation",
        "Canopy Living",
        "Glassed-in"
    ];

    return (
        <section id="choose" className="choose-section w-full h-dvh p-8 pt-10">
            <p className='text-[.7rem] text-[#eae5dd] choose-subtitle'>Discover Indian Bio-Reserves & Eco-Stays</p>
            <div className="lg:mt-10 mt-7 title-part origin-bottom ">
                {
                    chooseLines.map((line, index) => (
                        <h1 key={index} className={`choose-heading text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter choose-title`}>
                            <span className={`choose-title-break ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}<span className={`choose-title-clip ${index == 1 ? "lg:pb-3 pb-2" : ""}`}>{line}</span></span>
                        </h1>
                    ))
                }
            </div>
            <div className="choose-sec w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-0">
                <div className='lg:w-1/2 w-full text-[#b1a696] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-8 lg:pr-16'>
                    <p>You can choose one of three signature Everdia forest lodges in our sanctuary. Each lodge provides zero-footprint luxury immersed in India's richest bio-diverse landscapes. Choose the sanctuary you like best.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className="lg:w-[40%] w-[70%]">
                        <p className="text-[.7rem] text-[#eae5dd]">All Everdia lodges are built based on the same rules:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-6">
                        {pills.map((pill, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActivePill(idx)}
                                className={`lg:text-[1.8rem] text-sm px-[20px] py-[4px] rounded-full border transition-all duration-300 cursor-pointer ${
                                    activePill === idx
                                        ? "bg-[#f4efe7] text-[#181717] border-[#f4efe7] shadow-lg scale-105"
                                        : "border-[#b1a696] text-[#b1a696] hover:border-[#f4efe7] hover:text-[#f4efe7]"
                                }`}
                            >
                                {pill}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;