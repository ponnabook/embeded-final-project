import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 160px;

    background: #F9FAFB;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 40px;
    width: 1180px;
    height: 100%;
`
const LineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 40px;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`

const Footer = () => {
    return <Container>
        <InfoContainer>
            <LineContainer>
                <SubContainer>
                <h6>Recommended Plant</h6>
                <h6>Status</h6>
                <h6>Team Members</h6>
                </SubContainer>
                <SubContainer>
                <h6>Pun</h6>
                <h6>Book</h6>
                <h6>Faye</h6>
                </SubContainer>
            </LineContainer>
            <LineContainer>
                <SubContainer>
                <img src='plant.svg'></img>
                <img src='embedded.svg'></img>
                <img src='code.svg'></img>
                </SubContainer>
                <h6>©2023 Embed-Lab. Project for Embed-Lab.</h6>
            </LineContainer>
        </InfoContainer>
    </Container>
  };
  
export default Footer;