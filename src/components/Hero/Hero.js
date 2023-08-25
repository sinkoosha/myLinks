"use client";

import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaDownload, FaSpotify, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import torrent from "../../../public/torrent.png";
export default function SplitScreen() {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      pt={10}
      bg={useColorModeValue("blackAlpha.900")}
    >
      <Container maxW="container.xl" overflow="hidden">
        <Flex
          p={8}
          flex={1}
          align={"center"}
          justify={"center"}
          flexDir={{ base: "column", md: "row" }}
        >
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: 40, md: 35, lg: 48 }}>
              <Text
                as={"span"}
                fontWeight={"800"}
                color={"red"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),

                  left: 0,
                }}
              >
                مای لینکز
              </Text>
              <br />{" "}
              <Text
                color={"white"}
                as={"span"}
                fontSize={22}
                lineHeight={1}
                letterSpacing={0.2}
              >
                تخصصی ترین سیستم مستقیم کننده لینک در ایران
              </Text>{" "}
            </Heading>

            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button rounded={"full"} colorScheme={"red"}>
                رایگان شروع کنید
              </Button>
              <Button rounded={"full"}>مشاهده پلن ها</Button>
            </Stack>
          </Stack>

          <Flex
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mt={{ base: 10, md: "0" }}
          >
            <Heading fontSize={{ base: "25px", md: "20px", lg: "22px" }}>
              <Text as={"span"} fontWeight={"600"} color={"white"}>
                سایت های پشتیبانی شده
              </Text>
            </Heading>
            <Flex
              gap={5}
              mt={{ base: 5, md: 10 }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack bg={"red"} p={2} rounded={"2xl"}>
                <FaYoutube color="white" fontSize={25} />
              </Stack>
              <Stack bg={"green"} rounded={"2xl"} p={2}>
                <Image
                  src={torrent}
                  alt={torrent}
                  style={{
                    width: "26px",
                  }}
                />
              </Stack>
              <Stack bg={"orange.400"} p={2} rounded={"2xl"}>
                <FaDownload color="white" fontSize={25} />
              </Stack>
              <Stack bg={"green.500"} p={2} rounded={"2xl"}>
                <FaSpotify color="white" fontSize={25} />
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Stack>
  );
}
