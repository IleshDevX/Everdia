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
        <section id="welcome" className="welcome-section w-full min-h-[120vh] text-[#2A2725] md:px-8 px-6 py-16 flex flex-col justify-between overflow-hidden">
            {/* GSAP Text Reveal Title - Full Width Wide Justified Lines */}
            <div className="flex flex-col gap-2 my-auto w-full">
                <div className="w-full md:w-[98%] md:text-[52px] lg:text-[62px] xl:text-[68px] text-[30px] welcome-line md:pt-16 leading-[1.15]">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.015em] tracking-[0.015em] w-full">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.015em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Landscape Images + Clean Subtext */}
            <div className="flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-20 mt-10 gap-8 w-full border-t border-[#b1a696]/20 pt-8">
                {/* Landscape Images */}
                <div className="flex flex-row justify-start items-center gap-4">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border border-[#b1a696]/20">
                        <img
                            src={w1}
                            alt="Western Ghats Sanctuary"
                            className="w-52 sm:w-64 md:w-72 h-36 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-3 left-4 glass-card px-3 py-1 rounded-full text-[10px] text-[#f4efe7] font-semibold tracking-wider">
                            🌲 Western Ghats
                        </span>
                    </div>

                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl border border-[#b1a696]/20">
                        <img
                            src={w2}
                            alt="Tiger Bio-Zone Sanctuary"
                            className="w-52 sm:w-64 md:w-72 h-36 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-3 left-4 glass-card px-3 py-1 rounded-full text-[10px] text-[#f4efe7] font-semibold tracking-wider">
                            🐅 Tiger Bio-Zone
                        </span>
                    </div>
                </div>

                {/* Clean Subtext */}
                <div className="md:w-1/2 w-full md:mt-0 mt-6">
                    <p className="md:text-[2rem] text-[1.4rem] text-[#b1a696] md:leading-[1.15] md:pr-6 font-normal leading-[28px] tracking-[-0.2px]">
                        <span>A place where you can be with yourself and your loved ones.</span><br />
                        <span>A place where you can experience unforgettable jungle expeditions.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Welcome;