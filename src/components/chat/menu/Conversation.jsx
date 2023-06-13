import React, { useEffect, useState, useContext } from 'react'
import { getUsers } from '../../../service/api'
import { Box, Divider, styled } from '@mui/material'
import Conversion from './Conversion'
import { AccountContext } from '../../../context/AccoutProvider'

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin:0 0 0 70px;
    background-color:#e9edef;
    opacity:.6;
`
const Conversation = ({ text }) => {
    const [users, setUsers] = useState([])
    const { account, socket, setActiveUser } = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            let filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filterData)
        }
        fetchData();
    }, [text])

    useEffect(() => {

        socket.current.emit('addUser', account)

        socket.current.on('getUsers', users => {
            setActiveUser(users)
        })
    }, [account])
    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversion user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversation
