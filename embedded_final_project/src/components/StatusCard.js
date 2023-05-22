import Paho from "paho-mqtt";
import React, { useState, useEffect  } from 'react';
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

const Divider = styled.div`
    width: 2px;
    height: 104px;
    background: #F9FAFB;
`

const StatusCard = () => {

    const [temperature , setTemperature] = useState(0);
    const [airHumidity , setAirHumidity] = useState(0);
    const [lightIntensity , setLightIntensity] = useState(0);
    const [soilHumidity , setSoilHumidity] = useState(0);
    const [plant , setPlant] = useState("plantA");
    const client = new Paho.Client(
    "mqtt.netpie.io",
    Number(443),
    "76e628dd-b356-4761-87d6-5dadccb403a3"
    );

    function onMessage(message) {
        var data = JSON.parse(message.payloadString);
        var t = data.data.temperature;
        var a = data.data.airHumidity;
        var l = data.data.lightIntensity;
        var s = data.data.soilHumidity;
        setTemperature(t);
        setAirHumidity(a)
        setLightIntensity(l);
        setSoilHumidity(s);
        if(t < 25 && a < 50 && l < 50 && s < 50) {setPlant("Chestnut");}
        else if(t < 25 && a < 50 && l < 50 && s >= 50) {setPlant("Garlic");}
        else if(t < 25 && a < 50 && l >= 50 && s < 50) {setPlant("Camomile");}
        else if(t < 25 && a < 50 && l >= 50 && s >= 50) {setPlant("Sedge");}
        else if(t < 25 && a >= 50 && l < 50 && s < 50) {setPlant("Kiwi");}
        else if(t < 25 && a >= 50 && l < 50 && s >= 50) {setPlant("Bamboo");}
        else if(t < 25 && a >= 50 && l >= 50 && s < 50) {setPlant("Maple");}
        else if(t < 25 && a >= 50 && l >= 50 && s >= 50) {setPlant("Onion");}
        else if(t >= 25 && a < 50 && l < 50 && s < 50) {setPlant("Verbena");}
        else if(t >= 25 && a < 50 && l < 50 && s >= 50) {setPlant("Wasabi");}
        else if(t >= 25 && a < 50 && l >= 50 && s < 50) {setPlant("Aloe");}
        else if(t >= 25 && a < 50 && l >= 50 && s >= 50) {setPlant("Butterfly pea");}
        else if(t >= 25 && a >= 50 && l < 50 && s < 50) {setPlant("Peanut");}
        else if(t >= 25 && a >= 50 && l < 50 && s >= 50) {setPlant("Mimosa");}
        else if(t >= 25 && a >= 50 && l >= 50 && s < 50) {setPlant("Red Sandalwood");}
        else {setPlant("Pineapple");}
      }
    
    //   useEffect(() => {
    //     client.connect( {
    //       useSSL: true,
    //       userName : "kWS2iDRUVGjwQ2dNpxHqa6YEGUMHzJjE",
    //       password : "HN_2h5$TMMjjrPWp2tSYS3tGw$TDbVoX",  
    //       onSuccess: () => { 
    //         console.log("Connected!");
    //         client.subscribe("@msg/temp");
    //         client.onMessageArrived = onMessage;
    //         client.publish("@msg/request", "r");
    //       },
    //       onFailure: () => {
    //         console.log("Failed to connect!"); 
    //       }
    //     });
    //   }, [])

    return <Container className='status' id='status'>
        <h1>Status</h1>
        <SensorInfoCard>
            <SensorCard>
            <img src='temp.svg'></img>
                <SensorCardInfo>
                    <h2>Temperature</h2>
                    <h4>{temperature}</h4>
                </SensorCardInfo>
            </SensorCard>
            <Divider></Divider>
            <SensorCard>
            <img src='humidity.svg'></img>
                <SensorCardInfo>
                    <h2>Air Humidity</h2>
                    <h4>{airHumidity}</h4>
                </SensorCardInfo>
            </SensorCard>
            <Divider></Divider>
            <SensorCard>
            <img src='light.svg'></img>
                <SensorCardInfo>
                    <h2>Light intensity</h2>
                    <h4>{lightIntensity}</h4>
                </SensorCardInfo>
            </SensorCard>
            <Divider></Divider>
            <SensorCard>
            <img src='soil-moisture.svg'></img>
                <SensorCardInfo>
                    <h2>Soil Humidity</h2>
                    <h4>{soilHumidity}</h4>
                </SensorCardInfo>
            </SensorCard>
        </SensorInfoCard>
    </Container>
  };
  
export default StatusCard;