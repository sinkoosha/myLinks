"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { BiLinkAlt } from "react-icons/bi";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("blackAlpha.800")}
        color={useColorModeValue("gray.100", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 14 }}
        align={"center"}
        borderBottom={1}
      >
        <Flex bgColor={"red"} p={2} rounded={"full"}>
          <BiLinkAlt fontSize={20} />
        </Flex>

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={"white"} />
              ) : (
                <HamburgerIcon w={5} h={5} color={"white"} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Flex display={{ base: "none", md: "flex" }} ml={10} p={3}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={500}
            variant={"link"}
            href={"#"}
            colorScheme={"red"}
          >
            ورود
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            colorScheme={"red"}
            href={"#"}
          >
            ثبت نام
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity bgColor={"blackAlpha.800"}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                colorScheme={"blue"}
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Flex
      flexDirection={"column"}
      bgColor={"blackAlpha.800"}
      display={{ md: "none" }}
      justify={"center"}
      alignItems={"center"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Flex>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      onClick={children && onToggle}
      border={"1px"}
      _hover={{
        bgColor: "blackAlpha.900",
      }}
    >
      <Box
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        color={"gray.200"}
        m={1}
        p={3}
        _hover={{
          bgColor: "blackAlpha.900",
        }}
      >
        {label}
      </Box>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "خانه",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "خدمات",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "پشتیبانی از سایت ها ",
    href: "#",
  },
  {
    label: "تماس با ما",
    href: "#",
  },
];
