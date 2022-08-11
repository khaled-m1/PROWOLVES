import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>فريق العمل</Heading>
          <Text>نجتهد بما نحب لنقدم الاختلاف</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 20, lg: 20 }}
          justify="center"
        >
          <Testimonial>
            <TestimonialAvatar
              src={'https://avatars.dicebear.com/api/adventurer/:bottts.svg'}
              name={'ولاء'}
              title={'مدير عام - منتج'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={'https://avatars.dicebear.com/api/adventurer/:human.svg'}
              name={'عماد'}
              title={'كاتب - مخرج'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={'https://avatars.dicebear.com/api/adventurer/:male.svg'}
              name={'طارق'}
              title={'مدير تصوير وإضاءة'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={'https://avatars.dicebear.com/api/adventurer/:seed.svg'}
              name={'خالد'}
              title={'منتج مونتاج'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
