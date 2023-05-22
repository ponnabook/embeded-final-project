import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    width: 100%;
`
const SensorInfoCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;

    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    width: 100%;
`

const SensorCard = styled.div`
    display: flex;
    align-items: center;
    padding: 24px;
    gap: 20px;
    width: 25%;
`

const SensorCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
    width: 100%;
`

const StatusCard = () => {

    return <Container className='status' id='status'>
        <h1>Status</h1>
        <SensorInfoCard>
            <SensorCard>
            <img src='temp.svg'></img>
                <SensorCardInfo>
                    <h2>Temperature</h2>
                    <h4>temp info</h4>
                </SensorCardInfo>
            </SensorCard>
            <SensorCard>
            <img src='humidity.svg'></img>
                <SensorCardInfo>
                    <h2>Air Humidity</h2>
                    <h4>humid info</h4>
                </SensorCardInfo>
            </SensorCard>
            <SensorCard>
            <img src='light.svg'></img>
                <SensorCardInfo>
                    <h2>Light intensity</h2>
                    <h4>light info</h4>
                </SensorCardInfo>
            </SensorCard>
            <SensorCard>
            <img src='soil-moisture.svg'></img>
                <SensorCardInfo>
                    <h2>Soil Humidity</h2>
                    <h4>soil humid info</h4>
                </SensorCardInfo>
            </SensorCard>
        </SensorInfoCard>
    </Container>
  };
  
export default StatusCard;