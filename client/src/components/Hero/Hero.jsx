import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import mobileHeroBg from "../../assets/hero-mobile.png";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

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
        <section id="hero" className="hero-section w-full md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20 overflow-hidden">
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

                <div className="p-4 md:p-6 flex flex-col md:justify-center relative z-20 h-full">
                    <div className="relative h-full flex flex-col justify-between pt-4 pb-6">
                        {/* Title - sharp, non-blurry drop shadow */}
                        <h1
                            className="text-[#f4efe7] text-start text-6xl md:text-9xl font-bold tracking-wider lg:absolute lg:left-2"
                            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.7)" }}
                        >
                            Everdia
                        </h1>

                        {/* Bottom Subtitle & Paragraph Container */}
                        <div className="w-full h-auto lg:absolute bottom-[8%] flex md:flex-row flex-col md:justify-between md:items-end gap-4 mt-auto">
                            {/* Subtitle - spacious line-height */}
                            <h2
                                className="text-start lg:mt-0 md:text-[#f4efe7] text-[#b1a696] text-2xl md:text-3xl font-bold md:tracking-wider leading-snug md:leading-8 flex flex-col gap-1.5"
                                style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.9)" }}
                            >
                                <span>Closer to Nature</span>
                                <span>Closer to Yourself</span>
                            </h2>

                            {/* Paragraph - clear font size & comfortable width */}
                            <p
                                className="md:max-w-xs w-full text-[#f4efe7] text-xs md:text-sm font-medium tracking-wide leading-relaxed md:text-right text-left"
                                style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.9)" }}
                            >
                                Spend unforgettable and remarkable time in India's pristine jungle sanctuaries with Everdia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
