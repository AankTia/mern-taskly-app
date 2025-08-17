import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  Text,
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../src/util.js";
import { useUser } from "../src/context/UserContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <Box p="3" maxW="lg" mx={"auto"}>
      <Heading
        as="h1"
        textAlign="center"
        fontSize={"3xl"}
        fontWeight={"semibold"}
        my={"7"}
      >
        Enter your credentials to sign in
      </Heading>

      <form onSubmit={handleSubmit(doSubmit)}>
        <Stack gap={4}>
          <FormControl isInvalid={errors.email}>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            isLoading={isSubmitting}
            loadingText="Signing in"
            textTransform={"uppercase"}
          >
            Sign In
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

const doSubmit = async (values) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (res.status === 200) {
      toast.success("Signed in successfully");
      updateUser(data);
      navigate("/profile");
    } else {
      toast.error(data.message || "Something went wrong");
    }
  } catch (error) {
    console.log(error);
    toast.error("An error occurred while signing in");
  }
};
