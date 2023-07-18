import { Button, Heading, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  const hoverCard = e => {
    const cardImage = document.getElementById(`${title}-img`);
    cardImage.style.transition = "transform 1s";
    switch (e.type) {
      case "mouseenter":
      case "touchstart":
        cardImage.style.transform = "scale(1.2)";
        break
      case "mouseleave":
      case "touchend":
        cardImage.style.transform = "scale(1)";
        break
    }
  }

  return (
    <VStack
      align="flex-start"
      background="#ffffff"
      spacing={8}
      borderRadius="xl"
      color="black"
      id={`${title}-card`}
      h="full"
      w="full"
      _hover={{ cursor: "pointer", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      onMouseEnter={hoverCard}
      onMouseLeave={hoverCard}
      onTouchStart={hoverCard}
      onTouchEnd={hoverCard}
    >

      {/* <AspectRatio ratio={16 / 9} w="full"> */}
      <Box
        w="full"
        overflow="hidden"
        borderRadius="xl"
      >
        <Image
          id={title + "-" + "img"}
          src={imageSrc}
          alt={title}
          objectFit="cover"
        />
      </Box>
      {/* </AspectRatio> */}
      <VStack align="flex-start" spacing={4} ps={4} pe={8} pb={4}>
        <Heading
          size="md"
        >{title}</Heading>

        <Text color="gray.600">{description}</Text>

        <Button
          as={motion.button}
          rightIcon={<FontAwesomeIcon icon={faArrowRight} size="1x" />}
          iconSpacing={2}
          variant="ghost"
          whileHover={{ gap: "16px", transition: { type: "spring", bounce: 0.5 } }}
          whileTap={{ gap: "16px", transition: { type: "spring", bounce: 0.5 } }}
        >
          See more
        </Button>
      </VStack>
    </VStack>
  );
};

export default Card;
