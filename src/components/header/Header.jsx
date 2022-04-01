import React from 'react';
import styled from 'styled-components';
import MenuButton from '../button/MenuButton';
import Menu from '../menu/Menu';

const HeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: transparent;
    z-index: 100;
    transition: background-color 0.4s;
    @media (max-width: 920px) {
        background-color: black !important;
    }
`

const HeaderBox = styled.div`
    max-width: 1240px;
    width: 1240px;
    padding: 32px 16px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 920px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const LogoImage = styled.img`
    width: 66px;
    height: 66px;
    @media (max-width: 920px) {
        width: 112px;
        height: 112px;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 920px) {
        display: none;
    }
`
const ButtonContent = styled.div`
    margin-left: 64px;
    color: #d9b153;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        text-underline-offset: 7px;    
    }
`

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const setHeaderBackground = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById("header").style.backgroundColor = 'black';
        } else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
            document.getElementById("header").style.backgroundColor = 'transparent';
        }
    }
    window.addEventListener('scroll', setHeaderBackground);
    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <React.Fragment>
            <HeaderContainer id="header">
                <HeaderBox>
                    <LogoImage src="assets/images/logo/Logo.png"></LogoImage>
                    <ButtonContainer>
                        <Button>
                            <ButtonContent>Home</ButtonContent>
                            <ButtonContent>Buy Now!</ButtonContent>
                            <ButtonContent>Mint</ButtonContent>
                            <ButtonContent>Rules</ButtonContent>
                            <ButtonContent>Roadmap</ButtonContent>
                            <ButtonContent>Team</ButtonContent>
                        </Button>
                        <MenuButton callback={handleMenuOpen}></MenuButton>
                    </ButtonContainer>
                </HeaderBox>
            </HeaderContainer>
            <Menu isOpen={menuOpen}></Menu>
        </React.Fragment>
    )
}