import React from "react";

import Dialog from "@mui/material/Dialog";
import { Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useContext } from "react";
import { AccountContext } from "../../context/AccoutProvider";
import { addUser } from "../../service/api";


const Component = styled(Box)`
display:flex;
`
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0  50px'
})

const Title = styled(Typography)`
    font-size:26px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px;
`
const Container = styled(Box)`
    padding:56px 0px 56px 56px;
`

const StyledList = styled(List)`
    & > li {
        padding:0;
        margin-top:15px;
        font-size:18px;
        line-height:28px;
        color:#4a4a4a;
    }
`
const dialogStyle = {
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
};
const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext)
    const onLoginSuccess = async (res) => {
        const decode = jwt_decode(res.credential)
        setAccount(decode)
        await addUser(decode)
    }
    const onLoginError = (res) => {
        console.log('Login Failed', res)
    }
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>To Use Whatsapp On Your Computer</Title>
                    <StyledList>
                        <ListItem>1.Open Whatsapp On Your Phone</ListItem>
                        <ListItem>2.Open Menu Settings and Select Whatsapp Web</ListItem>
                        <ListItem>3.Point Your Phone To This Screen to Capture the Code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCode src={qrCodeImage} alt="QR Code" srcset="" />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
