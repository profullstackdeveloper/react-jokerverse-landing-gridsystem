import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    width: 100%;
    min-width: 100%;
`

const FooterBox = styled.div`
    display: grid;
    grid-template-rows: repeat(5, minmax(64px, auto));
    grid-template-columns: calc(100vw / 2 - 1600px / 2) 1fr repeat(12, minmax(0, calc(1224px / 12))) 1fr calc(100vw / 2 - 1600px / 2);
    background-color: black;
    @media (max-width: 920px) {
        display: flex;
        flex-direction: column;
        grid-gap: 0;
        padding: 22px 16px 40px 16px;
    }
`

const ContactTitle = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 1/8/2/10;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    overflow: hidden;
    text-align: center;
`

const WordContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-wrap: break-word;
    white-space: break-spaces;
    outline: none;
    color: white;
    font-family: "Abel", sans-serif;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    & p {
        font-family: "Roboto",sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.55;
        color: black;
        text-decoration: none;
        text-transform: none;
        letter-spacing: normal;
        margin: 0px;
        
    }

    @media (max-width: 920px) {
        & p {
            margin-bottom: 32px;
        }
        & p:last-child {
            margin-bottom: 0px;
        }
        margin-bottom: 16px;
    }
`

const SocialTitle = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 2/4/3/7;
    align-items: center;
    justify-content: center;
    padding: 0px;
    overflow: hidden;
    text-align: center;
`
const ContactInfo = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 3/8/5/10;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    overflow: hidden;
    text-align: center;
`
const SocialInfo = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 4/3/5/8;
    align-items: center;
    justify-content: center;
    padding: 0px;
    overflow: hidden;
`
const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    max-height: 100%;
`
const SocialIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    color: #cecece;
    transition: color .2s ease;
    padding: 10px;
    & svg {
        width: 63px;
        height: 63px;
    }
`

const LogoContainer = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    grid-area: 2/12/5/14;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Logo = styled.img`
    width: 204px;
    height: 204px;
`
export default function Footer() {
    return (
        <Container>
            <FooterBox>
                <ContactTitle>
                    <WordContainer>
                        <strong>Reach Us:</strong>
                    </WordContainer>
                </ContactTitle>
                <ContactInfo>
                    <WordContainer>
                        <p className='body'>
                            <a target="_self" href="mailto:Dev@jokerverse.com" style={{ color: 'white !important' }}>Dev@jokerverse.com</a>
                        </p>
                        <p className='body'>
                            <a target="_self" href="mailto:NFT@jokerverse.com">NFT@jokerverse.com</a>
                        </p>
                        <p className='body'>
                            <a target="_self" href="mailto:art@jokerverse.com">art@jokerverse.com</a>
                        </p>
                    </WordContainer>
                </ContactInfo>
                <SocialTitle>
                    <WordContainer>
                        <strong>Social Networks: </strong>
                    </WordContainer>
                </SocialTitle>
                <SocialInfo>
                    <SocialIcons>
                        <SocialIcon href='https://www.instagram.com/'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z" fill="currentColor"></path></svg>
                        </SocialIcon>
                        <SocialIcon href='https://twitter.com/'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.5331 7.11165C21.5483 7.32484 21.5483 7.53807 21.5483 7.75126C21.5483 14.2538 16.5991 21.7462 7.55333 21.7462C4.7665 21.7462 2.17768 20.9391 0 19.5381C0.395955 19.5838 0.776628 19.599 1.18782 19.599C3.48728 19.599 5.60407 18.8224 7.29444 17.4975C5.13199 17.4518 3.31979 16.0356 2.69542 14.0863C3.00001 14.132 3.30456 14.1624 3.62439 14.1624C4.066 14.1624 4.50766 14.1015 4.9188 13.9949C2.66499 13.538 0.974582 11.5584 0.974582 9.1675V9.10661C1.62938 9.47209 2.39087 9.70052 3.19792 9.73094C1.87304 8.84767 1.00505 7.34007 1.00505 5.63447C1.00505 4.72078 1.24866 3.88321 1.67508 3.15224C4.09642 6.13702 7.73605 8.08623 11.8172 8.29946C11.7411 7.93398 11.6954 7.55331 11.6954 7.17259C11.6954 4.46189 13.8883 2.25378 16.6142 2.25378C18.0304 2.25378 19.3096 2.84769 20.2081 3.80709C21.3198 3.5939 22.3858 3.18271 23.33 2.61927C22.9644 3.76143 22.1878 4.72082 21.1675 5.32992C22.1574 5.22337 23.1168 4.9492 24 4.56853C23.3301 5.54311 22.4924 6.4111 21.5331 7.11165Z" fill="currentColor"></path></svg>
                        </SocialIcon>
                        <SocialIcon href='https://discord.gg/6RTjKSkw'>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="discord-brands"><path d="M15.432 11.4c0 .732-.54 1.332-1.224 1.332-.672 0-1.224-.6-1.224-1.332 0-.732.54-1.332 1.224-1.332.684 0 1.224.6 1.224 1.332Zm-5.604-1.332c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332ZM22.5 2.472V24c-3.023-2.672-2.056-1.787-5.568-5.052l.636 2.22H3.96a2.466 2.466 0 0 1-2.46-2.472V2.472A2.466 2.466 0 0 1 3.96 0h16.08a2.466 2.466 0 0 1 2.46 2.472Zm-3.42 11.376c0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-2.85-1.562-6.199-1.563-8.964-.348-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416.177.124.468.284.492.3 2.025 1.134 4.903 1.506 7.488.42.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972 2.652-.084 3.672-1.824 3.672-1.824Z" fill="currentColor"></path></svg>
                        </SocialIcon>
                        <SocialIcon href='https://t.me/JokerVerseNFT'>
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="telegram-brands"><path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0Zm5.893 8.221-1.969 9.28c-.145.659-.537.818-1.084.509l-3-2.212-1.447 1.394c-.16.16-.295.295-.604.295l.213-3.053 5.56-5.023c.241-.213-.054-.334-.373-.12l-6.871 4.325-2.962-.924c-.643-.203-.658-.644.136-.953l11.57-4.462c.536-.193 1.006.131.831.944Z" fill="currentColor"></path></svg>
                        </SocialIcon>
                    </SocialIcons>
                </SocialInfo>
                <LogoContainer>
                    <Logo src="assets/images/logo/largeLogo.png"></Logo>  
                </LogoContainer>
            </FooterBox>
        </Container>
    )
}