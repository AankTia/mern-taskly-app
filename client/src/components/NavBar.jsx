import { Link as RouterLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext.jsx";
import { API_BASE_URL } from "../util.js";
import { Box, Flex, Menu, Spacer, Link, Button, Image, Text, Portal } from "@chakra-ui/react";

export default function NavBar() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/signout`, {
        credentials: "include",
      });
      const data = await res.json();
      toast.success(data.message);
      updateUser(null);
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Box as="nav" bg="red.50">
      <Flex
        minWidth="max-content"
        alignItems="center"
        p="12px"
        maxW="7xl"
        m="0 auto"
      >
        <Box p="2">
          <Link as={RouterLink} fontSize="lg" fontWeight="bold" to="/">
            Taskly
          </Link>
        </Box>

        <Spacer />

        <Box>
          {user ? (
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                  <Image
                    boxSize="40px"
                    borderRadius="full"
                    src={user.avatar}
                    alt={user.username}
                  />
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="profile">Profile</Menu.Item>
                    <Menu.Item value="new-file">Tasks.</Menu.Item>
                    <Menu.Item onClick={handleSignOut}>Sign Out</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          ) : (
            <Link as={RouterLink} to="/signin">
              Sign In
            </Link>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
