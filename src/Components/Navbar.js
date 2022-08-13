import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import MainLogo from '../img/LogoPro.png';
import WhiteLogo from '../img/LogoProWhite.png';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px={4} mt={3}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
          <Box>
            <Image
              width={['35vw', '15vw']}
              src={useColorModeValue(MainLogo, WhiteLogo)}
              alt="LOGO"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
