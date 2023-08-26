import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Container,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <Box py={12} bg={useColorModeValue("blackAlpha.900")}>
      <Container maxW="container.xl" overflow="hidden">
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl" color={"gray.200"}>
            مشاهده پلن ها
          </Heading>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="33" color={"white"}>
                برنزی
              </Text>
              <HStack justifyContent="center">
                <Text fontSize={"22"} fontWeight="900" color={"white"}>
                  149
                </Text>
                <Text fontSize="3xl" fontWeight="600" color={"white"}>
                  تومان
                </Text>
                <Text fontSize="3xl" color="red.500" fontWeight={"600"}>
                  / ماهانه
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.900" />
                  100 گیگ پهنای باند
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.900" />
                  15 روز زمان ذخیره سازی
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  سفارش دهید
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("red.700", "red.900")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.100", "gray.200")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  پیشنهاد ویژه
                </Text>
              </Box>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="33" color={"white"}>
                  نقره ایی
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize={"22"} fontWeight="900" color={"white"}>
                    149
                  </Text>
                  <Text fontSize="3xl" fontWeight="600" color={"white"}>
                    تومان
                  </Text>
                  <Text fontSize="3xl" color="red.500" fontWeight={"600"}>
                    / ماهانه
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <VStack
                  bg={useColorModeValue("gray.50", "gray.700")}
                  py={4}
                  borderBottomRadius={"xl"}
                >
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="red.900" />
                      100 گیگ پهنای باند
                    </ListItem>
                    <ListItem>
                      <ListIcon as={FaCheckCircle} color="red.900" />
                      15 روز زمان ذخیره سازی
                    </ListItem>
                  </List>
                </VStack>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="red">
                    سفارش دهید
                  </Button>
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="33" color={"white"}>
                طلایی
              </Text>
              <HStack justifyContent="center">
                <Text fontSize={"22"} fontWeight="900" color={"white"}>
                  149
                </Text>
                <Text fontSize="3xl" fontWeight="600" color={"white"}>
                  تومان
                </Text>
                <Text fontSize="3xl" color="red.500" fontWeight={"600"}>
                  / ماهانه
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.900" />
                  100 گیگ پهنای باند
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="red.900" />
                  15 روز زمان ذخیره سازی
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red" variant="outline">
                  سفارش دهید
                </Button>
              </Box>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Container>
    </Box>
  );
}
