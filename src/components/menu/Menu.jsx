import styled, {keyframes} from 'styled-components';
import React from 'react';

const Animation = keyframes`
    from {
        opacity: 0;
        transform: scaleY(0);
        transform-origin: top;
    }
    to {
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top;
    }
`

const Container = styled.div`
    position: fixed;
    z-index: 100;
    top: 194px;
    left: 0px;
    width: calc(100vw - 43px);
    height: 242px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    opacity: 0;
    animation: ${Animation} 0.3s ease 1;
    animation-fill-mode: forwards;
`
const Button = styled.div`
    color: #d9b153;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        text-underline-offset: 7px;    
    }
`

export default function Menu ({isOpen}) {
    return (
        isOpen ? <Container>
            <Button>
                Home
            </Button>
            <Button>
                Buy Now!
            </Button>
            <Button>
                Mint
            </Button>
            <Button>
                Rules
            </Button>
            <Button>
                Roadmap
            </Button>
            <Button>
                Team
            </Button>
        </Container>
        : ''
    )
}