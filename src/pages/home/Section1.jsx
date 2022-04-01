import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button/Button';

const Container = styled.div`
    position: relative;
    z-index: 14;
    display: grid;
    grid-area: 1/1/-1/-1;
    grid-template-rows: repeat(8, 64px);
    grid-template-columns: calc(100vw / 2 - 1600px / 2 ) 1fr repeat(12, minmax(0, calc(1224px / 12))) 1fr calc(100vw / 2 - 1600px / 2);
    grid-auto-rows: 64px;
    row-gap: 0px;
    column-gap: 0px;
    width: 100%;
    padding: 100px 0px 100px 0px;
    margin: 0 auto;
    @media (max-width: 920px) {
        display: flex;
        flex-direction: column;
        grid-gap: 0;
        grid-template-rows: repeat(8, minmax(64px, auto));
        width: auto;
        padding: 11px 16px 64px 16px;
    }
`
const PlatformLogo = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 1/5/6/8;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 920px) {
        width: 100%;
        margin: 0 0 16px 0;
        grid-area: auto;
        grid-column: 3/-3;
        max-width: 100%;
    }
`
const PlatformLogoBox = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
`

const MintButtonContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: ${props => props.position};
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 920px) {
        margin: 0 0 16px 0;
    }
`
const TextContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 8/3/9/11;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    text-align: center;
    @media (max-width: 920px) {
        margin: 0 0 16px 0;
    }
`

const TextBox = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-wrap: break-word;
    white-space: break-spaces;
    outline: none;
    color: white;
    font-family: "Abel", sans-serif;
    font-size: 48px;
    @media (max-width: 920px) {
        font-size: 32px;
    }
`
const PlatformLogoImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    object-fit: contain;
    top: 0px;
    left: 0px;
    border-radius: 0.5%;
    @media (max-width: 920px) {
        object-fit: cover;
        height: auto;
        position: static;
    }
`

export default function Section1 () {
    return (
        <Container>
            <PlatformLogo>
                <PlatformLogoBox>
                    <PlatformLogoImage src="assets/images/archer/archer.jpg"></PlatformLogoImage>
                </PlatformLogoBox>
            </PlatformLogo>
            <MintButtonContainer position={'6/5/7/7'}>
                <Button content={'Airdrop'} buttonColor='#A48468' fontColor='white' hoverColor='#B89F89'></Button>
            </MintButtonContainer>

            <MintButtonContainer position={'6/3/7/5'}>
                <Button content={'Mint'} hoverColor='#CBB9A9'></Button>
            </MintButtonContainer>
            
            <MintButtonContainer position={'6/7/7/9'}>
                <Button content={'OpenSea'} buttonColor='#00B3C9' hoverColor='#00717B' fontColor='white'></Button>
            </MintButtonContainer>
            <TextContainer>
                <TextBox>
                    <strong>Our Beautiful pre-sales NFTs</strong>
                </TextBox>
            </TextContainer>
        </Container>
    )
}