import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatsPage = () => {
    const [chats, setChats] = useState([]);
    const getChats = async () => {
        const { data } = await axios.get("/api/chats")
        setChats(data);
    }
    useEffect(() => {
        getChats();
    }, [])
    // useEffect(() => {
    //     getChats();
    // }, [chats])
    return (
        <div>
            {
                chats.map((chat) => {
                    return <div key={chat._id}>{chat.chatName}</div>
                })
            }

        </div>
    )
}

export default ChatsPage