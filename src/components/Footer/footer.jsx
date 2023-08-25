"use client";

import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { BiLinkAlt } from "react-icons/bi";

const Logo = (props) => {
  return (
    <Flex bg={"red"} rounded={"full"} padding={1}>
      <BiLinkAlt fontSize={27} color="white" />
    </Flex>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("blackAlpha.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container maxW="container.xl" overflow="hidden">
        <Stack direction={"row"} spacing={6} p={4}>
          <Logo />
          <Text color={"white"} lineHeight={2}>
            © mylink.ir. All rights reserved
          </Text>
          <SocialButton bg={""} label={"Twitter"} href={"#"} color={"red.900"}>
            <FaTwitter color={"red"} />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"} color={"red.900"}>
            <FaYoutube color={"red"} />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"} color={"red.900"}>
            <FaInstagram color={"red"} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
