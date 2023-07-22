import { AbsoluteCenter, Circle, CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const ButtonToTop = () => {

    const [scrollYProgress, setScrollYProgress] = React.useState(0.1);

    const buttonIcon = document.getElementById("button-to-top-icon");

    const handleScroll = () => {
        const scrollHeight = (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollYProgress(progress === 0 ? 0.1 : progress);
        buttonIcon.classList.remove("fa-bounce");
    };

    const handleHover = e => {
        switch (e.type) {
            case "mouseenter":
            case "touchstart":
                scrollYProgress > 20 && buttonIcon.classList.add("fa-bounce");
                break;
            case "mouseleave":
            case "touchend":
                buttonIcon.classList.remove("fa-bounce");
                break;
        };
    };

    const handleClick = e => {
        if (scrollYProgress > 20) {
            const scrollToSection = window.location.hash.includes("contact-me")
                ? "projects-section"
                : "landing-section";
            document.getElementById(scrollToSection).scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Link to={window.location.hash.includes("contact-me") ? "/projects" : "/"} >
                <CircularProgress
                    as={motion.div}
                    position={{ base: "fixed", lg: "fixed" }}
                    right={{ base: 8, lg: 16 }}
                    bottom={{ base: 16 }}
                    whileHover={scrollYProgress > 20 ? { scale: 0.8, cursor: "pointer" } : { scale: 1, cursor: "not-allowed" }}
                    whileTap={scrollYProgress > 20 ? { scale: 0.8 } : { scale: 1, cursor: "not-allowed" }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    onTouchStart={handleHover}
                    onTouchEnd={handleHover}
                    size={{ base: "64px", lg: "128px" }}
                    color="#512DA8DA"
                    capIsRound
                    thickness="8px"
                    value={scrollYProgress}
                    zIndex="docked"
                    onClick={handleClick}
                >
                    <CircularProgressLabel zIndex={5}>
                        <FontAwesomeIcon id="button-to-top-icon" icon={faArrowTurnUp} size="2x" color="#512DA8" />
                    </CircularProgressLabel>
                    <AbsoluteCenter zIndex={-2}>
                        <Circle position="relative" size={{ base: "64px", lg: "128px" }} bg="#FFFFFFBA" />
                    </AbsoluteCenter>
                </CircularProgress >
            </Link>
        </>
    )
}

export default ButtonToTop;