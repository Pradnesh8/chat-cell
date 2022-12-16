import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const showHandler = () => setShow(!show);
    const toast = useToast();
    const history = useHistory();
    const loginHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: 'Please enter all fields',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
            setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { data } = await axios.post("/api/user/login", { email, password }, config);
            toast({
                title: 'Login Successful',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            history.push("/chats");
        } catch (error) {
            toast({
                title: 'Error Occured!',
                description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'bottom'
            });
            setLoading(false);
        }
    }
    return (
        <VStack spacing="5px">
            <FormControl isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <InputRightElement width="4rem">
                        <Button size="sm" onClick={showHandler}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>

                </InputGroup>
            </FormControl>
            <Button width={"100%"} colorScheme="messenger" onClick={loginHandler} style={{ marginTop: "1rem" }}>
                Login
            </Button>
            <Button width={"100%"} variant="solid" colorScheme="red" onClick={() => {
                setEmail("test2@gmail.com");
                setPassword("123456");
            }} style={{ marginTop: "0.5rem" }}>
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}

export default Login