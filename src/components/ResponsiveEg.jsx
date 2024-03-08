import { Box } from "@chakra-ui/react";

// These are the default breakpoints
// const breakpoints = {
//     base: "0em", // 0px
//     sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
//     md: "48em", // ~768px
//     lg: "62em", // ~992px
//     xl: "80em", // ~1280px
//     "2xl": "96em", // ~1536px
//   };

export const ResponsiveEg = () => (
  <Box bg="red.200" h={500} w={[300, null, null, 600, 800, 900]}>
    Responsive Box
  </Box>
);
