import {
  Box,
  Stack,
  Skeleton
} from '@chakra-ui/react'

export default function SingleTaskSkeleton() {
  return (
    <Box p="3" maxW="lg" mx="auto">
      <Stack gap="4">
        <Skeleton heigh="20px" my="10" />
        <Skeleton heigh="20px" />
        <Skeleton heigh="20px" />
        <Skeleton heigh="20px" />
      </Stack>
    </Box>
  );
}