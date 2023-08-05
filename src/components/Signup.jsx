import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'110vh'} p={'16'}>
    <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} marginTop={'0.5'}> 
        <Heading>STUDY HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>

        <Input placeholder={'Email'} type={"email"} required focusBorderColor={'purple.500'}></Input>
        <Input placeholder={'Name'} type={"text"} required focusBorderColor={'purple.500'}></Input>
        <Input placeholder={'Password'} type={"password"} required focusBorderColor={'purple.500'}></Input>
        <Input placeholder={'Confirm Password'} type={"password"} required focusBorderColor={'purple.500'}></Input>

        <Button variant={'link'} alignSelf={'flex-end'}>
        <Link to={'/forgetpassword'}>Forget Password?</Link>
        </Button>
        <Button colorScheme={'purple'} type={'submit'}>Sing Up</Button>

        <Text textAlign={'right'}>
        Existing User?{' '}
        <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/login'}>Log In</Link>
        </Button></Text>
        
        </VStack>
    </form>
    </Container>
  )
}

export default Signup
