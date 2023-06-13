import { Box } from '@mui/material'

import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccoutProvider'
import { getConversation } from '../../../service/api'

//main page
const ChatBox = () => {
    const { person, account } = useContext(AccountContext)
    const [conversation, setConversation] = useState({})
    useEffect(() => {
        const getConversationDetail = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub })
            setConversation(data)
        }
        getConversationDetail();
    }, [person.sub])
    return (
        <Box style={{ height: '75%' }}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox
