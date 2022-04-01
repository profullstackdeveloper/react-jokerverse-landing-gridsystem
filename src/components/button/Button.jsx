import styled from 'styled-components';
import React from 'react';


const Container = styled.div`
    display: inline-block;
    max-width: 100%;
    padding: 14px 32px;
    overflow: hidden;
    font-family: "Roboto",sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    color: ${props => props.fontColor};
    text-align: center;
    text-overflow: ellipsis;
    letter-spacing: normal;
    white-space: nowrap;
    cursor: pointer;
    background-color: ${props => props.buttonColor};
    border: 0px solid ${props => props.buttonColor};
    border-radius: 999px;
    transition: all 0.2s ease;
    &:hover {
        background-color: ${props => props.hoverColor};
        border: 0px solid ${props => props.hoverColor};
    }
`

export default function Button ({content, fontColor='black', hoverColor="#D6BD9E", buttonColor="#D6BD9E", callback=() => {}}) {
    return (
        <Container fontColor={fontColor} buttonColor={buttonColor} hoverColor={hoverColor} onClick={() => callback()}>
            {content}
        </Container>
    )
}