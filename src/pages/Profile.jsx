import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="teal" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "teal.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "teal.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: usamyharis@yahoo.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Chat: You have 12 unread messages
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Star: You have 10 starred items
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="cyan.400" />
              Task: Completed task 1
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="cyan.400" />
              Task: Completed task 2
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Warning: Task 3 is overdue
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="cyan.400" />
              Task: Completed task 4
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Warning: Task 5 is overdue
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="cyan.400" />
              Task: Completed task 6
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
