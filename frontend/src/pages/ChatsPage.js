import { Box } from '@chakra-ui/react';
import ChatBox from '../components/ChatBox';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import { ChatState } from '../Context/ChatProvider';

const ChatsPage = () => {
    const { user } = ChatState()
    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />}
            <Box
                display="flex"
                justifyContent="space-between"
                w="100%"
                h="90vh"
                p="10px">
                {user && <MyChats />}
                {user && <ChatBox />}
            </Box>
        </div >
    )
}

export default ChatsPage