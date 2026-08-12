import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../../assets/cap1-square.png";
import colimg2 from "../../assets/cap2-square.png";
import colimg3 from "../../assets/cap3-square.png";
import { useState } from "react";
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from "react-icons/hi";

const StickyCols = () => {
    const [reveal, setReveal] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
        textElements.forEach((element) => {
            const split = new SplitText(element, { type: "lines", linesClass: "line" });
            split.lines.forEach((line) => {
                line.innerHTML = `<span>${line.textContent}</span>`;
            });
        });

        ScrollTrigger.refresh();

        gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
        gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-cols",
                start: "top 20%",
                end: "+=90%",
                pin: true,
                scrub: 1,
            },
        });
        tl.add(() => setReveal(false));

        tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-2", { x: "0%", duration: 0.8 }, "<")
            .to(".col-3", { y: "0%", duration: 0.8 }, "<")
            .to(".col-img-1 img", { scale: 1, duration: 0.8 }, "<")
            .to(".col-img-2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
            }, "<")
            .to(".col-img-2 img", { scale: 1.6, duration: 0.8 }, "<");

        tl.add(() => setReveal(false));
        tl.add(() => setReveal(true));

        tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-3 .col-content-wrapper .line span", {
                yPercent: -125,
                duration: 0.8,
            }, "<");
        tl.to(".col-3", { x: "0%", duration: 0.8 }, "-=0.8")
            .to(".col-4", { y: "0%", duration: 0.8 }, "<")
            .to(".col-3 .col-content-wrapper-2 .line span", {
                yPercent: 0,
                delay: 0.4,
                duration: 0.8,
            }, "<");

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    });

    return (
        <section className="sticky-cols w-screen h-dvh overflow-hidden bg-[#181717] lg:mb-20 relative">
            {/* Audio Toggle Badge */}
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute top-6 right-8 z-30 glass-card px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-[#f4efe7] hover:border-[#f4efe7] transition-all cursor-pointer"
            >
                {isMuted ? <HiOutlineVolumeOff className="text-base text-[#b1a696]" /> : <HiOutlineVolumeUp className="text-base text-emerald-400 animate-pulse" />}
                <span>{isMuted ? "Canopy Audio Muted" : "Canopy Soundscape Playing"}</span>
            </button>

            <div className="sticky-cols-wrapper relative w-full h-screen">
                <div className="col col-1">
                    <div className="col-content">
                        <div className="col-content-wrapper border border-[#b1a696]/20 shadow-2xl">
                            <h1 className="text-2xl text-[#b1a696] font-bold leading-auto">Enjoy the view
                                <br />
                                through—the wide
                                <br />
                                panoramic glass
                                <br />
                                window
                            </h1>
                            <div className="col-content-para flex items-center gap-4 justify-between">
                                <div className="flex items-center gap-0 justify-center">
                                    <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">1</h3>
                                    <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3>
                                </div>
                                <p className={`text-[12px] font-medium ${!reveal ? "mr-6" : "mr-0"}`}>
                                    Get closer to India's jungle wilderness than ever before
                                    <br />
                                    and admire this pristine, breathtaking bio-reserve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col col-2">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper border border-[#b1a696]/20">
                            <img src={colimg1} alt="Rainforest Sanctuary" />
                        </div>
                    </div>
                    <div className="col col-img-2 p-2">
                        <div className="col-img-wrapper border border-[#b1a696]/20">
                            <img src={colimg2} alt="Corridor Lodge" />
                        </div>
                    </div>
                </div>

                <div className="col col-3">
                    <div className="col-content-wrapper border border-[#b1a696]/20 shadow-2xl">
                        <h1 className="text-2xl font-bold leading-auto">Enjoy the view
                            <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window
                        </h1>
                        <div className={`col-content-para flex items-center gap-4 justify-between ${reveal ? "ml-0" : "ml-6"}`}>
                            <div className="flex items-center gap-0 justify-center">
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">{reveal ? "3" : "2"}</h3>
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3>
                            </div>
                            <p className="text-[12px] font-medium">
                                Get closer to India's jungle wilderness than ever before
                                <br />
                                and admire this pristine, breathtaking bio-reserve.
                            </p>
                        </div>
                    </div>
                    <div className="col-content-wrapper-2 border border-[#b1a696]/20 shadow-2xl">
                        <h1 className="text-2xl font-bold leading-auto">Enjoy the view
                            <br />
                            through—the wide
                            <br />
                            panoramic glass
                            <br />
                            window
                        </h1>
                        <div className="col-content-para flex items-center gap-4 justify-between">
                            <div className="flex items-center gap-0 justify-center"></div>
                            <p className={`text-[12px] font-medium ${!reveal ? "mr-0" : "mr-6"}`}>
                                Get closer to India's jungle wilderness than ever before
                                <br />
                                and admire this pristine, breathtaking bio-reserve.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col col-4">
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper border border-[#b1a696]/20">
                            <img src={colimg1} alt="Wild River Sanctuary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StickyCols;