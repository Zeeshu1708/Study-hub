import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={['5','9']} color={'white'} >
        <Stack direction={["column","row"]}>

            <VStack alignItems={'stretch'} minH={'40'} px={['4','8']} color={'white'} w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe to get updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                Study Hub
                </Heading>
                <Text>@ All reghts are reserved</Text>
            </VStack>
            <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>
                Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'blank'} href="https://youtube.com">Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'blank'} href="https://linkedin.com">Linkedin</a>
                </Button>
                <Button variant={'link'} colorScheme={'white'}>
                    <a target={'blank'} href="https://github.com">GitHub</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
