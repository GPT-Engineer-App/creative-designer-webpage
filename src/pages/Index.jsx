import { Container, VStack, HStack, Box, Text, Heading, Button, IconButton, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={textColor}>
      <IconButton aria-label="Toggle Color Mode" icon={colorModeIcon} onClick={toggleColorMode} alignSelf="flex-end" m={4} />
      <VStack spacing={8} align="center">
        <Box boxSize="150px" borderRadius="full" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxNjkxNDQwMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Designer Portrait" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Creative Designer & Developer
        </Text>
        <Text fontSize="md" textAlign="center" maxW="lg">
          Passionate about creating beautiful and functional user experiences. Skilled in graphic design, web development, and branding.
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} as="a" href="https://www.linkedin.com" target="_blank" />
          <IconButton aria-label="GitHub" icon={<FaGithub />} as="a" href="https://www.github.com" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} as="a" href="https://www.twitter.com" target="_blank" />
        </HStack>
        <Button colorScheme="teal" size="lg">
          Contact Me
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
