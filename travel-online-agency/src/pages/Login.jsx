import {
  Flex,
  Box,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

const Login=()=> {
  const {isAuth, login}=useContext(AuthContext)
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")

  const handleSubmit=()=>{
    login(email,password)
  }
  if(isAuth){
return <Navigate to='/' />
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg=''>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg=''
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
           
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} placeholder='Enter email' onChange={(e)=> setEmail(e.target.value)} />
            
           
              <FormLabel>Password</FormLabel>
              <Input type="password"  value={password} placeholder='Enter password' onChange={(e)=> setPassword(e.target.value)}/>
          
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login
