import React from "react";
import {
  SimpleGrid,
  Text,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Box,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderBottom="8px"
            borderColor="teal.400"
            bg="white"
          >
            <CardHeader>
              <Flex>
                <Avatar src={task.img} mr="20px" />

                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Learn More
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Edit
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");

  return res.json();
};
