import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import PreloaderII from "../components/Preloader/PreloaderII";
import Logo from "../components/Buttons/Logo";
import Footer from "../components/Footer/Footer";
import FooterTitle from "../components/Footer/FooterTitle";
import { ModalProvider } from "../components/Modal/ModalContext";
import MenuModal from "../components/Modal/MenuModal";
import MapModal from "../components/Modal/MapModal";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const MainLayout = () => {
    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });
    });

    return (
        <ModalProvider>
            <PreloaderII />
            <Logo />
            <Navbar />
            <MenuModal />
            <MapModal />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Outlet />
                        <Footer />
                        <FooterTitle />
                    </main>
                </div>
            </div>
        </ModalProvider>
    );
};

export default MainLayout;