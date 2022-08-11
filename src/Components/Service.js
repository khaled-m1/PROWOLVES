import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

export default function StatsGridWithImage() {
  return (
    <Box bg={useColorModeValue('#051831', 'dark')} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={useColorModeValue(
            'linear(to-r, #051831 10%, transparent)',
            'linear(to-r, dark 10%, transparent)'
          )}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={2}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 10, md: 10, xl: 20 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}
              >
                خدماتنا
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                نطمح لتطوير الأعمال الابداعية
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                نحب ما نفعل وهذا ما يجعلنا متميزين في صناعة اعمالنا وتقديم
                خدماتنا
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map(stat => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '🎬 إدارة الانتاج',
    content: (
      <>
        ندير ونشرف ونصنع كل من <StatsText>أفلام ، إعلانات ، تغطيات</StatsText>
      </>
    ),
  },
  {
    title: '🎬 كتابة المحتوى',
    content: (
      <>
        نكتب <StatsText>محتوى ابداعي ، سيناريو</StatsText>
      </>
    ),
  },
  {
    title: '🎬 إدارة تصوير',
    content: (
      <>
        نهتم بكل التفاصيل العملية حتى{' '}
        <StatsText>المعدات و طاقم العمل محترف</StatsText>
      </>
    ),
  },
  {
    title: '🎬 مـونـتــــــــــــاج',
    content: (
      <>
        نعطي كل لون حقة بكل شغف نسوي <StatsText>تحرير و تلوين</StatsText>
      </>
    ),
  },
];
