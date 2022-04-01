import React from 'react';
import styled from 'styled-components';
import Section1 from './Section1';
import Section2 from './Section2';

const Section1Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    width: 100%;
    min-width: 100%;
    padding-top: 130px;
    @media (max-width: 920px) {
        padding-top: 194px;
    }
`
const BackgroundBox = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    background-color: black;
    transition: background-color .3s ease-in-out,height 1ms linear 999s;
`
const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

`

const Section2Container = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 100%;
    width: 100%;
    min-width: 100%;
    padding-top: 0px;
    margin-top: 0px;
    background-color: black;
`

export default function HomePage () {
    return (
        <React.Fragment>
            <Section1Container>
                <BackgroundBox>
                    <BackgroundImage src="assets/images/backgrounds/background.jpg"></BackgroundImage>
                </BackgroundBox>
                <Section1></Section1>
            </Section1Container>
            <Section2Container>
                <Section2></Section2>
            </Section2Container>
        </React.Fragment>
    )
}