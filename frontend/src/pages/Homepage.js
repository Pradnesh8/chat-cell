import React from 'react'
import { Box, Container } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
const Homepage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                fontSize={"4xl"}
                fontFamily={"Raleway"}
                bg={"white"}
                p={"4"}
                w={"xl"}
                display={"flex"}
                justifyContent={"center"}
                m={"2"}
                rounded={'md'}
                color="messenger.600"
            >
                Chat Cell
            </Box>
            <Box
                fontFamily={"Raleway"}
                bg={"white"}
                p={"4"}
                w={"xl"}
                display={"flex"}
                justifyContent={"center"}
                m={"2"}
                rounded={'md'}
            >
                <Tabs isFitted variant='enclosed-colored' colorScheme={"messenger"}>
                    <TabList mb='1em' width={"xl"} pr="1" pl="1">
                        <Tab px={"0"}>Login</Tab>
                        <Tab px={"0"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container >
    )
}

export default Homepage