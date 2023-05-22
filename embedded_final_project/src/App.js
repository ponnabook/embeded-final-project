import styled from 'styled-components'
import { Container } from './components/Font';
import NavBar from './components/NavBar';
import PlantRecommendCard from './components/PlantRecommendCard';
import StatusCard from './components/StatusCard';
import MembersName from './components/MembersName';
import Footer from './components/Footer';

import React, { useState, useEffect  } from 'react';
import Paho from "paho-mqtt";

const Format = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    margin: 0px;
`

const ContentFormat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 90px 0px 0px;
    gap: 30px;
`

function App() {
  const [temperature , setTemperature] = useState(0);
  const [airHumidity , setAirHumidity] = useState(0);
  const [lightIntensity , setLightIntensity] = useState(0);
  const [soilHumidity , setSoilHumidity] = useState(0);
  const [plant , setPlant] = useState("plantA");
  const client = new Paho.Client(
  "mqtt.netpie.io",
  Number(443),
  "5cc4306a-b583-419b-a26d-18bdb6609406"
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

  useEffect(() => {
    client.connect( {
      useSSL: true,
      userName : "AGbBVA3JhxCFf21kqcnJ2w3EVmQxcQNs",
      password : "Kl92JbumTOu8pCp2o6QlsoxgSdOitsvq",  
      onSuccess: () => { 
        console.log("Connected!");
        client.subscribe("@msg/temp");
        client.onMessageArrived = onMessage;
        client.publish("@msg/request", "r");
      },
      onFailure: () => {
        console.log("Failed to connect!"); 
      }
    });
  }, []);

  return (
    <Container className='plant' id='plant'>
      <Format>
        <NavBar></NavBar>
        <ContentFormat>
          <PlantRecommendCard plant={plant}></PlantRecommendCard>
          <StatusCard temperature={temperature} airHumidity={airHumidity} lightIntensity={lightIntensity} soilHumidity={soilHumidity}></StatusCard>
          <MembersName></MembersName>
        </ContentFormat>
        <Footer></Footer>
      </Format>
    </Container>
  );
}

export default App;
