import { FaBehance, FaInstagram, FaDribbble } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section id="contact" className='w-full h-dvh px-6 mt-10 flex flex-col justify-between pb-10 overflow-hidden'>
            <div>
                <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10 uppercase tracking-widest'>
                    Interested in an amazing adventure?<br />Connect with Everdia
                </p>
                <div className="mt-4">
                    <MarqueeText />
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-start md:items-center text-xl md:text-2xl mt-10 gap-8'>
                <h3 className='text-[#b1a696] leading-relaxed max-w-xl'>
                    Everdia offers luxury eco-resorts nestled in serene Indian jungle landscapes. Experience nature with ultimate comfort.<br /><br />
                    If you would like to inquire about your sanctuary stay—{" "}
                    <a
                        href="mailto:stay@everdia.com"
                        className='text-[#f4efe7] hover:text-[#b1a696] underline cursor-pointer font-semibold transition-colors'
                    >
                        contact us.
                    </a>
                </h3>

                <div className='flex flex-col justify-center items-start md:items-end gap-2 text-base md:text-xl font-medium'>
                    <a href="#hero" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>01. Wilderness Sanctuary</a>
                    <a href="#welcome" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>02. About Everdia</a>
                    <a href="#choose" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>03. Signature Lodges</a>
                    <a href="#activities" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>04. Bio-Expeditions</a>
                    <a href="#feedback" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>05. Guest Feedback</a>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-[#b1a696]/20 gap-4">
                <div className="flex justify-center items-center gap-3">
                    {[
                        { icon: <FaBehance />, name: "Behance" },
                        { icon: <FaInstagram />, name: "Instagram" },
                        { icon: <CiLinkedin />, name: "LinkedIn" },
                        { icon: <FaDribbble />, name: "Dribbble" },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            aria-label={item.name}
                            className='border border-[#c4c1b9]/40 bg-[#292725] hover:bg-[#f4efe7] hover:text-[#181717] rounded-full p-3 text-[#f2ede5] transition-all duration-300 hover:scale-110 shadow-lg'
                        >
                            <span className="text-lg">{item.icon}</span>
                        </a>
                    ))}
                </div>

                <div>
                    <p className="text-[0.8rem] text-[#b1a696] text-right font-medium">
                        Meet Everdia—modern eco-lodges<br />
                        in India's pristine jungles.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;