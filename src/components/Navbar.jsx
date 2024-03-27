import React from "react";
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Tasks List</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src="/img/user.jpg">
          <AvatarBadge width="1.3em" bg="cyan.500">
            <Text fontSize="xs" color="white">
              12
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>usamyharis@yahoo.com</Text>
        <Button colorScheme="teal" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
