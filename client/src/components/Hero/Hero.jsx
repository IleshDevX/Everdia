import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import mobileHeroBg from "../../assets/hero-mobile.png";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });

    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        }
    }, [isMobHero]);

    return (
        <section id="hero" className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20 relative">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <div className="responsive-mobile">
                    {/* Background image (down layer) */}
                    <div className="hero-img absolute inset-0 bg-[url('./assets/cap1.png')] bg-no-repeat bg-cover bg-center z-0 md:block hidden" />

                    {/* Mobile image fallback */}
                    <div className="block lg:hidden mt-6 mb-6">
                        <img
                            src={mobileHeroBg}
                            alt="mobile bg"
                            className="w-full rounded-[2rem] object-cover shadow-[0_-25px_45px_-10px_rgba(255,0,0,0.15)]"
                        />
                    </div>

                    {/* Smoke video (upper layer) */}
                    <video
                        src={smoke}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-50 mix-blend-hard-light md:top-0 top-[5%] h-[90%] rounded-[2rem] md:px-0"
                    ></video>
                </div>

                {/* Hero Overlay Content */}
                <div className="p-6 relative z-20 flex flex-col justify-between h-full">
                    {/* Top Status Widget */}
                    <div className="flex justify-between items-center w-full pt-4 px-2">
                        <div className="glass-card px-4 py-2 rounded-full flex items-center gap-3 border border-white/20 text-xs font-semibold text-[#f4efe7]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Western Ghats Reserve</span>
                            <span className="opacity-40">|</span>
                            <span>24°C</span>
                            <span className="opacity-40">|</span>
                            <span>AQI 99 Pristine</span>
                        </div>
                    </div>

                    {/* Title & Subtext Container */}
                    <div className="relative pb-10">
                        <h1
                            className="text-[#f4efe7] text-start text-6xl md:text-9xl font-bold tracking-wider"
                            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
                        >
                            Everdia
                        </h1>

                        <div className="w-full h-auto mt-4 flex md:flex-row flex-col md:justify-between md:items-end gap-4">
                            <h2
                                className="text-start md:text-[#f4efe7] text-[#b1a696] text-2xl md:text-3xl font-bold md:tracking-wider leading-6 flex flex-col gap-1"
                                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                            >
                                <span>Closer to Nature —</span>
                                <span>Closer to Yourself</span>
                            </h2>

                            <div className="flex flex-col items-start md:items-end gap-3 md:w-[35%] w-[80%]">
                                <p
                                    className="text-[#f4efe7] text-[0.75rem] font-medium tracking-wide md:text-end text-justify leading-relaxed"
                                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
                                >
                                    Spend unforgettable and remarkable time in India's pristine jungle sanctuaries with—Everdia.
                                </p>
                                <a
                                    href="#welcome"
                                    className="glass-card px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-[#f4efe7] hover:bg-[#f4efe7] hover:text-[#181717] transition-all duration-300 group"
                                >
                                    <span>Explore Sanctuaries</span>
                                    <FiArrowDown className="transition-transform group-hover:translate-y-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
