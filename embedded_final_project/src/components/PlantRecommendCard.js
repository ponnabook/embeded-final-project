import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
`

const Photo = styled.img`
    width: 380px;
    height: 380px;
    object-fit: contain;
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
    width: 95%;
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

const PlantRecommendCard = (props) => {
    var img = 'plant.svg';
    var scienceName = 'no data';
    var aboutInfo = 'no data';
    var tempInfo = 'no data';
    var airHumidInfo = 'no data';
    var lightIntInfo = 'no data';
    var soilHumidInfo = 'no data';
    if(props.plant == 'Chestnut'){
        img = 'chestnut.jpeg';
        scienceName = 'Castanea dentata';
        aboutInfo = 'The chestnuts are the deciduous trees and shrubs in the genus Castanea, in the beech family Fagaceae. They are native to temperate regions of the Northern Hemisphere.';
        tempInfo = '< 25';
        airHumidInfo = '< 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Garlic'){
        img = 'garlic.jpeg';
        scienceName = 'Allium sativum';
        aboutInfo = 'Garlic (Allium sativum) is an extremely popular garden plant because of its use for flavoring dishes, as well as its ease of care and growth. It is traditionally planted in autumn and harvested in mid-summer.';
        tempInfo = '< 25';
        airHumidInfo = '< 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Camomile'){
        img = 'camomile.png';
        scienceName = 'Matricaria chamomilla';
        aboutInfo = 'A popular herb with a distinctive aroma. A blue essential oil can be extracted from the flowers for use in the cosmetic industry. It is also used as a flavoring or aromatic agent for foods, beverages, and all kinds of household chemicals.';
        tempInfo = '< 25';
        airHumidInfo = '< 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Sedge'){
        img = 'sedge.jpeg';
        scienceName = 'Cyperus papyrus';
        aboutInfo = 'An aquatic flowering plant that’s originally from Africa. It was used by the ancient Egyptians to make papyrus, one of the earliest kinds of paper. For thousands of years, people have tied the stems together to build boats. Nowadays, it’s often used ornamentally.';
        tempInfo = '< 25';
        airHumidInfo = '< 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Kiwi'){
        img = 'kiwi.jpeg';
        scienceName = 'Actinidia chinensis';
        aboutInfo = 'A woody deciduous vine that can grow to be 6 m long. It grows in thickets, ravines and on slopes. It is considered invasive in North Carolina. The edible fruit has a smooth bronze skin with green or yellow flesh.';
        tempInfo = '< 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Bamboo'){
        img = 'bamboo.jpeg';
        scienceName = 'Bambusa vulgaris';
        aboutInfo = 'The most common and easily recognized species of bamboo. It forms loose clumps and is easily spread by dividing the clumps or through rhizomes. This variety of bamboo is often planted for light construction, such as huts, boats, crafts, musical instruments, and even furniture.';
        tempInfo = '< 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Maple'){
        img = 'maple.png';
        scienceName = 'Acer saccharinum';
        aboutInfo = 'One of the most common deciduous trees in the United States and southeast Canada. It is a 15 to 25 m tall, fast-growing, sun-loving tree. Its leaves have deeper angular notches between the five lobes than many other maple species.';
        tempInfo = '< 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Onion'){
        img = 'onion.png';
        scienceName = 'Allium cepa';
        aboutInfo = 'An onion species commonly known for its ubiquitous culinary applications. The onion is toxic to a variety of animals. Aside from its many culinary uses, the onion is often used to teach students how to use a microscope because its cells are very large and easy to visualize.';
        tempInfo = '< 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Verbena'){
        img = 'verbena.png';
        scienceName = 'Verbena rigida';
        aboutInfo = 'This wildflower grows erect in a shrub that flowers in summer and fall in South America and the southeastern United States. In non-native regions, slender vervain is occasionally considered invasive, and roots easily in disturbed soils.';
        tempInfo = '>= 25';
        airHumidInfo = '< 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Wasabi'){
        img = 'wasabi.png';
        scienceName = 'Sabia japonica';
        aboutInfo = 'A woody climber. Its natural habitat includes forests and roadsides in southern China and Japan. It flowers in late winter and produces fruit in the spring. Mature branches are covered with short spines that may be a nuisance.';
        tempInfo = '>= 25';
        airHumidInfo = '< 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Aloe'){
        img = 'aloe.png';
        scienceName = 'Aloe vera';
        aboutInfo = 'An evergreen succulent species native to the Arabian Peninsula. The thick leaves are filled with gooey flesh that stores water for survival in its native desert territories. Aloe vera has become a popular houseplant and is also incorporated into a wide range of cosmetics and skin-care products.';
        tempInfo = '>= 25';
        airHumidInfo = '< 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Butterfly pea'){
        img = 'butterfly-pea.jpeg';
        scienceName = 'Clitoria ternatea';
        aboutInfo = 'Revered as holy flowers in India and are utilized in everyday puja rituals. The flowers of this vine are shaped like human female genitals, hence the Latin name. This plant’s pods and leaves are eaten as vegetables, while the flowers are used as an organic food dye and in Ayurvedic medicine in Southeast Asia.';
        tempInfo = '>= 25';
        airHumidInfo = '< 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Peanut'){
        img = 'peanut.png';
        scienceName = 'Arachis hypogaea';
        aboutInfo = 'An annual that can grow from 46 to 61 cm tall. It is a legume crop grown mostly for its edible seeds. Golden yellow flowers bloom in spring and seed begins to develop after flowers fade. The peanut pods grow underground.';
        tempInfo = '>= 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Mimosa'){
        img = 'mimosa.png';
        scienceName = 'Mimosa albida';
        aboutInfo = 'Known for their attractive foliage and flowers. The genus Mimosa albida is modeled after the Greek word "mimos" which translates to mime and references the way the leaves fold up when disturbed. The seed pods can germinate in undesirable locations, causing them to be invasive in some areas.';
        tempInfo = '>= 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '< 50';
        soilHumidInfo = '>= 50';
    }else if(props.plant == 'Red Sandalwood'){
        img = 'red-sandalwood.jpg';
        scienceName = 'Adenanthera pavonina';
        aboutInfo = 'A deciduous tree with many uses. The leaves are used as a forage crop for grazing animals. However, this tree forms dense clusters and crowds out native vegetation, leading it to be classed as an aggressive weed in countries like Jamaica, Cuba, and many Pacific islands.';
        tempInfo = '>= 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '< 50';
    }else if(props.plant == 'Pineapple'){
        img = 'pineapple.png';
        scienceName = 'Ananas comosus';
        aboutInfo = 'A short plant that is native to the tropics. Its fruit has a high nutritional value. Peeling off the prickly fruit skin reveals a sweet, aromatic, golden-yellow pulp that is very popular.';
        tempInfo = '>= 25';
        airHumidInfo = '>= 50';
        lightIntInfo = '>= 50';
        soilHumidInfo = '>= 50';
    }

    return <Container>
        <h1>Recommended Plant</h1>
        <InfoContainer>
            <Photo src={img}></Photo>
            <InfoCard>
                <NameInfo>
                    <h1>{props.plant}</h1>
                    <h2>{scienceName}</h2>
                </NameInfo>
                <AboutAndEnviInfo>
                    <AboutInfo>
                        <h2>About</h2>
                        <h3>{aboutInfo}</h3>
                    </AboutInfo>
                    <EnviInfo>
                        <EnviSubInfo>
                            <h2>Temperature</h2>
                            <h3>{tempInfo} °C</h3>
                        </EnviSubInfo>
                        <EnviSubInfo>
                            <h2>Air Humidity</h2>
                            <h3>{airHumidInfo} %</h3>
                        </EnviSubInfo>
                        <EnviSubInfo>
                            <h2>Light intensity</h2>
                            <h3>{lightIntInfo} Lux</h3>
                        </EnviSubInfo>
                        <EnviSubInfo>
                            <h2>Soil Humidity</h2>
                            <h3>{soilHumidInfo} %</h3>
                        </EnviSubInfo>
                    </EnviInfo>
                </AboutAndEnviInfo>
            </InfoCard>
        </InfoContainer>
    </Container>
  };
  
export default PlantRecommendCard;