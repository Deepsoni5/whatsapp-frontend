import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';

const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 5px 24px;
    color:#4A4A4A;
`
const MenuMain = styled(Menu)`
margin-top:15px;
`

const HeaderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null)

    const handleClose = () => {
        setOpen(null)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    return (
        <div>
            <MoreVert onClick={handleClick} />
            <MenuMain
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>

            </MenuMain>
        </div>
    )
}

export default HeaderMenu
