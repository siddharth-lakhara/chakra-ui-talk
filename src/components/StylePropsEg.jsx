import { Button, Container } from "@chakra-ui/react";

export const StylePropsEg = () => (
  <Container mt={4}>
    <Button _hover={{ bg: "red.300" }} sx={{ bg: "green.200" }}>
      Hover over me
    </Button>
  </Container>
);
