import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';

export default function JoinOurTeam() {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            نجهز اعمالنا بشكل
            <br /> رهيب 😎
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              &
            </Text>{' '}
            SOON
          </Heading>
        </Stack>
      </Container>
    </Box>
  );
}
