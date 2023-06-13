import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccoutProvider'
import { Box, styled } from '@mui/material';
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded';
import { Chat as MessageIcon } from '@mui/icons-material'
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height:44px;
    background-color:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;

`

const Wrapper = styled(Box)`
    margin-left:auto;
    display:flex;
    & > *{
        margin-left:2px;
        padding:10px;
        color:#000;
    }
  
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
})
const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true)
    }
    return (
        <>
            <Component>
                <Image src={account.picture} alt="" onClick={() => toggleDrawer()} />
                <Wrapper>
                    <DonutLargeRoundedIcon />
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header
