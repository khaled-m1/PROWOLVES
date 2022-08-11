import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'} height={['100%', '650px']}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
          color={'gray.500'}
        >
          اتحدنا بكل شغف لتكوين علامة فارقة في{' '}
          <Text as={'span'} color={useColorModeValue('#07234C', '#fff')}>
            سوق الانتاج
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          ونطمح لتطوير الأعمال الابداعية بطريقة جذابة وسلسة
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'10'}
            width={['60vw', '20vw']}
            px={6}
            color="#fff"
            bg={'#07234C'}
            _hover={{ bg: '#ACB5C2' }}
          >
            <Link href="https://wa.me/+966593299270" isExternal>
              تــواصــل معــنا
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
