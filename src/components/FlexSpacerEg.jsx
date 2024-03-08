import {
  Flex,
  Center,
  Square,
  Text,
  Box,
  Spacer,
  Circle,
} from "@chakra-ui/react";

export const FlexSpacerEg = () => {
  return (
    <Flex color="white">
      <Center w="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Square bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Square>
      {/* <Circle bg="blue.500" size="150px">
        <Text>Box 2</Text>
      </Circle> */}
      {/* <Spacer /> */}
      <Box flex={1} minW="60px" bg="tomato">
        <Text>Box 3</Text>
      </Box>
    </Flex>
  );
};

// <div flex=1 />
