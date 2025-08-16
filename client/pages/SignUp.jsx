import {
  Text,
  Box,
  Flex,
  Heading,
  Stack,
  Input,
  Button,
} from "@chakra-ui/react";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";
import { API_BASE_URL } from "../src/util";

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const doSubmit = async values => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Sign Up successful! You are now logged in.');
      } else {
        toast.error(data.message || 'Failed to create account');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <Box p='3' mxW='lg' mx='auto'>
      <Heading
        as='h1'
        textAlign='center'
        fontSize='3xl'
        fontWeight='semibold'
        my='7'
      >
        Create an Account
      </Heading>

      <form onSubmit={handleSubmit(doSubmit)}>
        <Stack gap='4'>
          <FormControl isInvalid={errors.username}>
            <Input
              id='username'
              type="text"
              placeholder='Username'
              {...register('username', { required: 'Username is required' })}
            />
            <FormErrorMessage>
              {errors.username?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <Input
              id='email'
              type="email"
              placeholder='Email'
              {...register('email', { required: 'Email is required' })}
            />
            <FormErrorMessage>
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <Input
              id='password'
              type="password"
              placeholder='Password'
              {...register('password', { required: 'Password is required' })}
            />
            <FormErrorMessage>
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            colorScheme='blue'
            type='submit'
            isLoading={isSubmitting}
            textTransform='uppercase'
          >
            Sign Up
          </Button>
        </Stack>
      </form>

      <Flex gap='2' mt='5'>
        <Text>Have an account?</Text>
        <Link to='/signin'>
          <Text as='span' color='blue.400'>
            Sign In
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
