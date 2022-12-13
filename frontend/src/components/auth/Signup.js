import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [show, setShow] = useState(false);
    const showHandler = () => setShow(!show);
    const picHandler = (pic) => { }
    const signupHandler = () => { }
    return (
        <VStack spacing="5px">
            <FormControl isRequired>
                <FormLabel>
                    Name
                </FormLabel>
                <Input placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
            </FormControl>
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
            <FormControl isRequired>
                <FormLabel>
                    Password
                </FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder='Re-enter your password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4rem">
                        <Button size="sm" onClick={showHandler}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>
                    Picture
                </FormLabel>
                <Input type="file" p="1.5" accept='image/*' onChange={(e) => picHandler(e.target.files[0])} />
            </FormControl>

            <Button width={"100%"} colorScheme="messenger" onClick={signupHandler} style={{ marginTop: "1rem" }}>
                Sign up
            </Button>
        </VStack>
    )
}

export default Signup