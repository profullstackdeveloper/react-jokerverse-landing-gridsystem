import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
    height: 19px;
    width: 24px;
    cursor: pointer;
    @media (max-width: 920px) {
        display: inline-flex;
    }
`

const Bar1 = styled.div`
    width: 24px;
    height: 2px;
    background-color: #d9b153;
    transition: 0.4s;
    ${props => props.change ? `transform: rotate(45deg)` : 'transform: rotate(0deg)'};
    transform-origin: left center;
`

const Bar2 = styled.div`
    width: 24px;
    height: 2px;
    background-color: #d9b153;
    transition: 0.4s;
    opacity: ${props => props.change ? '0' : '1'};
`
const Bar3 = styled.div`
    width: 24px;
    height: 2px;
    background-color: #d9b153;
    transition: 0.4s;
    ${props => props.change ? `transform: rotate(-45deg)` : 'transform: rotate(0deg)'};
    transform-origin: left center;
`

export default function MenuButton ({callback=() => {}}) {
    const [change, setChange] = React.useState(false);
    const handleClick = () => {
        setChange(!change);
        callback();
    }
    return (
        <Container onClick={() => handleClick()}>
            <Bar1 change={change}></Bar1>
            <Bar2 change={change}></Bar2>
            <Bar3 change={change}></Bar3>
        </Container>
    )
}

