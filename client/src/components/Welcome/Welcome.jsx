import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1.png";
import w2 from "../../assets/welcome-2.png";

const Welcome = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });
    });

    return (
        <section id="welcome" className="welcome-section w-full h-[120vh] text-[#2A2725] md:px-7 px-6">
            <div className="flex flex-col gap-2 tracking-[-4] leading-2">
                <div className="w-full md:w-[86%] md:text-[64px] text-[34px] welcome-line md:pt-20">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em]">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-20 mt-10">
                {/* Images with Glass Badges */}
                <div className="flex flex-row justify-center items-center gap-4 relative">
                    <div className="relative group">
                        <img src={w1} alt="Welcome Sanctuary" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44 shadow-2xl transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-3 py-1 rounded-full text-[10px] text-[#f4efe7] font-semibold tracking-wider whitespace-nowrap">
                            🌲 Western Ghats
                        </span>
                    </div>
                    <div className="relative group">
                        <img src={w2} alt="Welcome Sanctuary" className="md:rounded-[8rem] rounded-[9rem] md:w-56 w-44 shadow-2xl transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-3 py-1 rounded-full text-[10px] text-[#f4efe7] font-semibold tracking-wider whitespace-nowrap">
                            🐅 Tiger Bio-Zone
                        </span>
                    </div>
                </div>

                {/* Subtext */}
                <div className="md:w-1/2 w-full md:mt-0 mt-10">
                    <p className="md:text-[2rem] text-[1.4rem] text-[#b1a696] md:leading-[1.1] md:pr-24 font-normal leading-[26px] tracking-[-0.2px]">
                        <span>A place where you can be with yourself and your loved ones.</span><br />
                        <span>A place where you can experience unforgettable jungle expeditions.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;