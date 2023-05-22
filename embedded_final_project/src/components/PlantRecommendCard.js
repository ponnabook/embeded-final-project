import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`

const Photo = styled.div`
    width: 380px;
    height: 380px;
`

const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    background: #FFFFFF;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

    flex: none;
    order: 1;
    flex-grow: 0;
    width: 780px;
`
const NameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 16px;
    gap: 4px;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;
`

const AboutAndEnviInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 16px;
    width: 100%;
`

const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0px;
    gap: 4px;
    width: 100%;
`

const EnviInfo = styled.div`
    display: flex;
    padding: 0px;
    width: 85%;
    justify-content: space-between;
`

const EnviSubInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 0px;
    gap: 4px;
`

const PlantRecommendCard = () => {
    return <Container>
        <h1>Recommended Plant</h1>
        <InfoContainer>
            <Photo></Photo>
            <InfoCard>
                <NameInfo>
                    <h1>Plant's name</h1>
                    <h2>scientific name</h2>
                </NameInfo>
                <AboutAndEnviInfo>
                    <AboutInfo>
                        <h2>About</h2>
                        <h3>about info</h3>
                    </AboutInfo>
                    <EnviInfo>
                        <EnviSubInfo>
                            <h2>Temperature</h2>
                            <h3>temp info</h3>
                        </EnviSubInfo>
                        <EnviSubInfo>
                            <h2>Air Humidity</h2>
                            <h3>air humid info</h3>
                        </EnviSubInfo>
                        <EnviSubInfo>
                            <h2>Light intensity</h2>
                            <h3>light int info</h3>
                        </EnviSubInfo>
                        <EnviSubInfo>
                            <h2>Soil Humidity</h2>
                            <h3>soil humid info</h3>
                        </EnviSubInfo>
                    </EnviInfo>
                </AboutAndEnviInfo>
            </InfoCard>
        </InfoContainer>
    </Container>
  };
  
export default PlantRecommendCard;