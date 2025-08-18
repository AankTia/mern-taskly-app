import { Link as RouterLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext.jsx";
import { API_BASE_URL } from "../util.js";
import {
  Box,
  Flex,
  Menu,
  // MenuList,
  MenuItem,
  Spacer,
  Link,
  Button,
  // Menu.Item,
  // Image
} from "@chakra-ui/react";

export default function NavBar() {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/signout`, {
        credentials: "include",
      });
      const message = await res.json();
      toast.success(message);
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
        mx="auto"
      >
        <Box p="2">
          <Link as={RouterLink} fontSize="lg" fontWeight="bold" to="/">
            Taskly
          </Link>
        </Box>
        <Spacer />
        <Box>
          {user ? (
            <Menu>
              <Button>
                <Image
                  boxSize="40px"
                  borderRadius="full"
                  src={user.avatar}
                  alt={user.username}
                />
              </Button>
              <Menu.List>
                <Menu.Item as={RouterLink} to="/profile">
                  Profile
                </Menu.Item>
                <Menu.Item as={RouterLink} to="/tasks">
                  Tasks
                </Menu.Item>
                <Menu.Item onClick={handleSignOut}>Sign Out</Menu.Item>
              </Menu.List>
            </Menu>
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
