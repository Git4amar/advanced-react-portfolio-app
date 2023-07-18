import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Center, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const navItems = [
  {
    name: "Projects",
    url: "/projects",
    data: "projects"
  },
  {
    name: "Contact Me",
    url: "/contact-me",
    data: "contactme"
  }
]

const Header = () => {

  const handleClick = (anchor) => {
    // anchor.preventDefault();
    anchor = anchor.target.parentNode.dataset.toSection;
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerBox = useRef(null);
  const prevScrollPosition = useRef(0)

  const handleScroll = () => {
    headerBox.current.style.transition = "transform 0.3s ease-in-out 0s";
    if (window.scrollY - prevScrollPosition.current > 0) {
      headerBox.current.style.transform = "translate(0px, -200px)";
    }
    else {
      headerBox.current.style.transform = "translate(0px, 0px)";
    }
    prevScrollPosition.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <Box
      ref={headerBox}
      position="fixed"
      top={0}
      left={0}
      right={0}
      // translateY={0}
      // transitionProperty="transform"
      // transitionDuration=".3s"
      // transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="sticky"
      // border="2px" borderColor="red"
      w="100vw"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          px={{ base: 0, sm: 8, md: 16 }}
          // py={4}
          justifyContent="space-between"
          alignItems="center"
        // border="2px" borderColor="white"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <Stack direction="row" spacing={0}>
              {socials.map(item => {
                return (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    style={{
                      overflow: "hidden",
                      width: 64,
                      height: 64,
                      position: "relative",
                    }}
                  >
                    <motion.div
                      style={{
                        display: "flex",
                        position: "absolute",
                        flexDirection: "column",
                        width: "100%",
                        top: 0,
                      }}
                      whileHover={{ top: "-100%" }}
                      whileTap={{ top: "-100%" }}
                    >
                      <Stack py={4} >
                        <FontAwesomeIcon icon={item.icon} size="2x" style={{ padding: 0, margin: 0 }} />
                      </Stack>
                      <Stack py={4} bg="#ffffff" borderRadius="24px 8px 16px 0" >
                        <FontAwesomeIcon icon={item.icon} size="2x" color="#512DA8" />
                      </Stack>
                    </motion.div>
                  </a>
                );
              })}
            </Stack>
          </nav>
          <nav>
            {/* Add links to Projects and Contact me section */}
            {/* <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick} data-to-section="projects" >Projects</a>
              <a href="/#contact-me" onClick={handleClick} data-to-section="contactme" >Contact Me</a>
            </HStack> */}
            <Stack direction="row" spacing={0}>
              {navItems.map(item => {
                return (
                  <Link
                    key={item.url}
                    href={item.url}
                    to={item.url}
                    data-to-section={item.data}
                    onClick={handleClick}
                    style={{
                      overflow: "hidden",
                      width: 116,
                      height: 64,
                      position: "relative",
                    }}
                  >
                    <motion.div
                      style={{
                        display: "flex",
                        position: "absolute",
                        flexDirection: "column",
                        top: 0,
                        width: "100%",
                      }}
                      whileHover={{ top: "-100%" }}
                      whileTap={{ top: "-100%" }}
                    >
                      <Center h={16} zIndex={-1} fontWeight="semibold" >{item.name}</Center>
                      <Center h={16} zIndex={-1} bg="#ffffff" borderRadius="24px 8px 16px 0" color="#512DA8" fontWeight="semibold" >{item.name}</Center>
                    </motion.div>
                  </Link>
                );
              })}
            </Stack>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
};
export default Header;
