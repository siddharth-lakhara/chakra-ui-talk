import { AspectRatio, Image } from "@chakra-ui/react";

export const AspectRatioEg = () => {
  return (
    <AspectRatio maxW="400px" ratio={1}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  );
};
