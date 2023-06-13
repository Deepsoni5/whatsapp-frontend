import { Box, Divider, Typography, styled } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../../constants/data'

const Component = styled(Box)`
    backgrond-color:#f8f9fa;
    padding:30px 0;
    text-align:center;
    height:100vh;
`
const Container = styled(Box)`
  
    padding:0 200px;
  
`

const Image = styled('img')({
    width: 400,
    marginTop: 100
})

const Title = styled(Typography)`
    font-size:32px;
    margin:25px 0 10px 0;
    font-family:inherit;
    font-weight:300;
    color:#41525d;
    `
const SubTitle = styled(Typography)`
    font-size:14px;
   
    font-family:inherit;
    font-weight:400;
    color:#667781;
`

const StyledDivider = styled(Divider)`
    margin:40px 0;
    opacity:0.4;
`
const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="emptychatimage" srcset="" />
                <Title>Whatapp Web</Title>
                <SubTitle>Now Send And Receive Message Without Keeping Your Phone Online.</SubTitle>
                <SubTitle> Use Whatsapp on Upto 4 Linked Device and 1 Phone At The Same Time.
                </SubTitle>
                <StyledDivider />


            </Container>
        </Component>
    )
}

export default EmptyChat
