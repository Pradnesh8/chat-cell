import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const showHandler = () => setShow(!show);
    const loginHandler = () => { }
    return (
        <VStack spacing="5px">
            <FormControl isRequired>
                <FormLabel>
                    Email
                </FormLabel>
                <Input placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
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
        </VStack>
    )
}

export default Login