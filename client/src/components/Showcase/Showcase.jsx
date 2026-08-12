import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import acImg1 from "../../assets/activities-1.png";
import acImg2 from "../../assets/activities-2.png";
import acImg3 from "../../assets/activities-3.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Showcase = () => {
    const containerRef = useRef(null);
    const imgConRef = useRef(null);

    useGSAP(() => {
        if (!imgConRef.current || !containerRef.current) return;

        const totalWidth =
            imgConRef.current.scrollWidth - containerRef.current.offsetWidth;

        gsap.to(imgConRef.current, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "-10% 10%",
                end: () => `+=${totalWidth}`,
                scrub: true,
                pin: true,
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className='relative w-full h-dvh overflow-hidden bg-[#181717]'
        >
            <div
                ref={imgConRef}
                className="absolute top-0 left-0 h-full flex items-center justify-start gap-4 p-4 overflow-hidden"
            >
                {/* Image 1 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden group">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#f4efe7] z-20">
                        <div>
                            <span className="glass-card px-3 py-1 rounded-full text-[10px] text-[#b1a696] font-bold uppercase tracking-wider mb-2 inline-block">
                                🐅 Certified Ranger Guided
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold">Dawn Tiger<br /> Safaris</h1>
                        </div>
                        <p className="border border-[#b1a696]/40 bg-[#292725]/80 backdrop-blur-md rounded-3xl px-3 py-1 text-center text-[0.75rem] font-medium text-[#f4efe7]">
                            Easy • 3-5 Hours
                        </p>
                    </div>
                    <img
                        src={acImg1}
                        alt="Dawn Tiger Safari"
                        className="image-item w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-end z-20">
                        <div className="glass-card p-4 rounded-2xl max-w-md">
                            <p className="text-[0.7rem] font-medium text-[#f4efe7] leading-relaxed">
                                Track majestic Bengal tigers, Asian elephants, and rare flora on a guided dawn safari through India's protected bio-corridors.
                            </p>
                            <div className="flex gap-2 mt-2 text-[10px] text-[#b1a696]">
                                <span>Includes: Binoculars</span> • <span>Open Jeep Transfer</span> • <span>Morning Tea</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <p className="text-[#f4efe7] border border-white/20 bg-[#292725]/90 rounded-3xl px-[1vw] py-1 text-center text-[0.7rem] font-bold">01</p>
                            <p className="text-[#4e484e] border border-white/10 rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden group">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#f4efe7] z-20">
                        <div>
                            <span className="glass-card px-3 py-1 rounded-full text-[10px] text-[#b1a696] font-bold uppercase tracking-wider mb-2 inline-block">
                                🌿 Botanical Expedition
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold">Canopy &<br /> River Treks</h1>
                        </div>
                        <p className="border border-[#b1a696]/40 bg-[#292725]/80 backdrop-blur-md rounded-3xl px-3 py-1 text-center text-[0.75rem] font-medium text-[#f4efe7]">
                            Medium • 8-12 Hours
                        </p>
                    </div>
                    <img
                        src={acImg2}
                        alt="Canopy Trek"
                        className="image-item w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-end z-20">
                        <div className="glass-card p-4 rounded-2xl max-w-md">
                            <p className="text-[0.7rem] font-medium text-[#f4efe7] leading-relaxed">
                                Guided hikes through ancient Western Ghats rainforests, crossing bamboo bridges and crystal-clear mountain streams.
                            </p>
                            <div className="flex gap-2 mt-2 text-[10px] text-[#b1a696]">
                                <span>Includes: Trek Pole</span> • <span>Packed Eco-Lunch</span> • <span>Safety Gear</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <p className="text-[#f4efe7] border border-white/20 bg-[#292725]/90 rounded-3xl px-[1vw] py-1 text-center text-[0.7rem] font-bold">02</p>
                            <p className="text-[#4e484e] border border-white/10 rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="relative flex-shrink-0 w-[80vw] h-full overflow-hidden group">
                    <div className="w-[77vw] absolute top-10 left-5 flex justify-between items-start text-[#f4efe7] z-20">
                        <div>
                            <span className="glass-card px-3 py-1 rounded-full text-[10px] text-[#b1a696] font-bold uppercase tracking-wider mb-2 inline-block">
                                🌌 Nocturnal Wildlife Special
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold">Night Bio-<br /> Expeditions</h1>
                        </div>
                        <p className="border border-[#b1a696]/40 bg-[#292725]/80 backdrop-blur-md rounded-3xl px-3 py-1 text-center text-[0.75rem] font-medium text-[#f4efe7]">
                            Hard • Overnight
                        </p>
                    </div>
                    <img
                        src={acImg3}
                        alt="Night Expedition"
                        className="image-item w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="w-[77vw] absolute bottom-10 left-5 flex justify-between items-end z-20">
                        <div className="glass-card p-4 rounded-2xl max-w-md">
                            <p className="text-[0.7rem] font-medium text-[#f4efe7] leading-relaxed">
                                Discover nocturnal flora, bio-luminescent fungi, and deep forest sounds under expert ranger guidance.
                            </p>
                            <div className="flex gap-2 mt-2 text-[10px] text-[#b1a696]">
                                <span>Includes: UV Flashlights</span> • <span>Expert Naturalist</span> • <span>Midnight Base Camp</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-1">
                            <p className="text-[#f4efe7] border border-white/20 bg-[#292725]/90 rounded-3xl px-[1vw] py-1 text-center text-[0.7rem] font-bold">03</p>
                            <p className="text-[#4e484e] border border-white/10 rounded-3xl px-[1vw] py-1 text-center text-[0.7rem]">03</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;