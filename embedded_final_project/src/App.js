import styled from 'styled-components'
import { Container } from './components/Font';
import NavBar from './components/NavBar';
import PlantRecommendCard from './components/PlantRecommendCard';
import StatusCard from './components/StatusCard';
import MembersName from './components/MembersName';
import Footer from './components/Footer';

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

  return (
    <Container className='plant' id='plant'>
      <Format>
        <NavBar></NavBar>
        <ContentFormat>
          <PlantRecommendCard></PlantRecommendCard>
          <StatusCard ></StatusCard>
          <MembersName></MembersName>
        </ContentFormat>
        <Footer></Footer>
      </Format>
    </Container>
  );
}

export default App;
