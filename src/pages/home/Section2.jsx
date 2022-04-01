import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    z-index: 14;
    display: grid;
    grid-area: 1/1/-1/-1;
    grid-template-rows: repeat(12, minmax(48px, auto));
    grid-template-columns: calc(100vw / 2 - 1600px / 2) 1fr repeat(12, minmax(0,calc(1224px / 12))) 1fr calc(100vw / 2 - 1600px / 2);
    grid-auto-rows: 48px;
    row-gap: 16px;
    column-gap: 24px;
    width: 100%;
    padding: 16px 0px;
    margin: 0 auto;
    color: white;
    @media (max-width: 920px) {
        display: flex;
        flex-direction: column;
        grid-gap: 0;
        width: calc(100% - 53px);
        padding: 21px 16px 56px 16px;
    }
`
const CollectionTitle = styled.div`
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    grid-area: ${props => props.position};
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;
    text-align: center;
`

const TextBox = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-wrap: break-word;
    white-space: break-spaces;
    outline: none;
    font-family: 'Abel', sans-serif;
    font-size: 48px;
`
const CardContainer = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    grid-area: ${props => props.position};
    overflow: hidden;
`
const CardPanel = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 0px;
`

const CardBox = styled.div`
    position: relative;
    padding-top: 100%;
    cursor: zoom-in;
`

const NFTCardContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
`

const NFTCardImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    object-fit: cover;
`

const NFTCard = ({ imgUrl }) => {
    return (
        <CardBox>
            <NFTCardContainer>
                <NFTCardImage src={imgUrl}></NFTCardImage>
            </NFTCardContainer>
        </CardBox>
    )
}

export default function Section2() {
    const goldenSkullNFTs = [
        "assets/images/nfts/goldenSkullNFTS/Spade - Ace.png",
        "assets/images/nfts/goldenSkullNFTS/Diamond - King.png",
        "assets/images/nfts/goldenSkullNFTS/Club - Jack.png"
    ]
    const bronzeSkullNFTs = [
        'assets/images/nfts/bronzeSkullNFTS/Diamond - 5.avif',
        'assets/images/nfts/bronzeSkullNFTS/Club - Ace.avif',
        'assets/images/nfts/bronzeSkullNFTS/Spade - King.webp'
    ]
    const silverSkullNFTs = [
        'assets/images/nfts/silverSkullNFTS/QD.avif',
        'assets/images/nfts/silverSkullNFTS/KD.avif',
        'assets/images/nfts/silverSkullNFTS/10D.avif'
    ]
    return (
        <Container>
            <CollectionTitle position={'1/6/2/12'}>
                <TextBox>
                    <span style={{ color: '#F6C23B' }}>Golden</span>
                    <span style={{ color: 'white' }}> Skull NFTs</span>
                </TextBox>
            </CollectionTitle>
            <CardContainer position={'2/3/9/15'}>
                <CardPanel>
                    {
                        goldenSkullNFTs.map((nft, index) => {
                            return (
                                <NFTCard imgUrl={nft} key={index + 'goldenskull'}></NFTCard>
                            )
                        })
                    }
                </CardPanel>
            </CardContainer>
            <CollectionTitle position={'9/6/10/12'}>
                <TextBox>
                    <span style={{ color: 'white' }}>Silver Skull NFTs</span>
                </TextBox>
            </CollectionTitle>
            <CardContainer position={'10/3/17/15'}>
                <CardPanel>
                    {
                        silverSkullNFTs.map((nft, index) => {
                            return (
                                <NFTCard imgUrl={nft} key={index + 'goldenskull'}></NFTCard>
                            )
                        })
                    }
                </CardPanel>
            </CardContainer>
            <CollectionTitle position={'17/6/18/12'}>
                <TextBox>
                    <span style={{ color: '#F6C23B' }}>Bronze</span>
                    <span style={{ color: 'white' }}> Skull NFTs</span>
                </TextBox>
            </CollectionTitle>
            <CardContainer position={'18/3/25/15'}>
                <CardPanel>
                    {
                        bronzeSkullNFTs.map((nft, index) => {
                            return (
                                <NFTCard imgUrl={nft} key={index + 'goldenskull'}></NFTCard>
                            )
                        })
                    }
                </CardPanel>
            </CardContainer>
        </Container>
    )
}