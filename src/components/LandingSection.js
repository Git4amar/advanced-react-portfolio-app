import React from "react";
import { Avatar, Heading, Text, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { motion } from "framer-motion";

const avatarUserArray = [48, 47, 45, 44, 43, 38, 32, 31, 27, 26, 10, 9, 5, 1]
const greeting = "Hello, I am Jane!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const greetingSentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1
    }
  },
}

const headingSentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 3,
      staggerChildren: 0.1,
    }
  },
}

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
      id="landing-section"
    >
      <motion.div
        animate={{ transform: "rotateY(0deg)" }}
        initial={{ transform: "rotateY(180deg)" }}
        transition={{ type: "spring", bounce: 0.4, delay: 2.5, duration: 1 }}
      >
        <Avatar
          as={motion.span}
          size={{ base: "2xl", sm: "xl", md: "2xl" }}
          src={
            "https://i.pravatar.cc/150?img="
            +
            avatarUserArray[Math.floor(Math.random() * (avatarUserArray.length))]
          }
          name="Jane"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
      </motion.div>
      <Text
        as={motion.p}
        fontWeight="semibold"
        _hover={{ cursor: "none" }}
        variants={greetingSentence}
        initial="hidden"
        animate="visible"
      >
        {
          greeting.split("").map((char, index) => {
            return (
              <motion.span
                key={char + "-" + index}
                variants={letter}
                onMouseEnter={e => {
                  e.target.parentNode.previousSibling.firstChild.style.transition = "transform 0.5s";
                  e.target.parentNode.previousSibling.firstChild.style.transform = "rotateY(180deg)";
                }}
                onMouseLeave={e => { e.target.parentNode.previousSibling.firstChild.style.transform = "rotateY(0deg)" }}
                onTap={e => {
                  const currentRotation = e.target.parentNode.previousSibling.firstChild.style.transform;
                  e.target.parentNode.previousSibling.firstChild.style.transition = "transform 0.5s";
                  e.target.parentNode.previousSibling.firstChild.style.transform = currentRotation === "rotateY(180deg)"
                    ? "rotateY(0deg)"
                    : "rotateY(180deg)";
                }}
              >
                {char}
              </motion.span>
            )
          })
        }
      </Text>
      <Box
        pt={{ base: 8, sm: 2, md: 8 }}
        m={0}
      >
        {/* <Heading id="heading2" >{bio2}</Heading> */}
        {/* <Heading id="heading1" >{bio1}</Heading> */}
        <Heading
          as={motion.h1}
          variants={headingSentence}
          initial="hidden"
          animate="visible"
          fontWeight="bold"
          align="center"
        >{
            bio1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter} >
                  {char}
                </motion.span>
              )
            })
          }
          <br />
          {
            bio2.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              )
            })
          }
        </Heading>
      </Box>
    </FullScreenSection >
  )
};

export default LandingSection;
