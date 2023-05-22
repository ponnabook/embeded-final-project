import React, { useState,  useRef, useContext   } from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components'

const Bar = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-around;
    padding: 30px 0px 0px;
    width: 100%;

    object-fit: fill;

    background: #FFFFFF;
    
`
const Tabs = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 0px 50px;
    width: 1180px;
`

const BottomBorder = styled.div`
    height: 1px;
    width: 100%;
    object-fit: fill;

    background: #F9FAFB;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`
const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
`

const SubLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const LinkText = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0px 16px;
    text-decoration: none;

    ${SubLink}:hover &{
        color: #4F46E5; // <Thing> when hovered
    }

`
const LinkBottomBorder = styled.div`
    background: #4F46E5;
    height: 2px;
    width : 100%;
    display: flex;
    order: 1;
    align-self: stretch;
    visibility: hidden;

    ${SubLink}:hover &{
        visibility: visible;
    }
`

const NavBar = ({ onClick }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return <Bar>
        <Tabs>
            <LinksContainer>
                <SubLink>
                    <Link to="plant" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><LinkText>Recommend Plant</LinkText></Link>              
                    <LinkBottomBorder></LinkBottomBorder>
                </SubLink>
                <SubLink>
                <Link to="status" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><LinkText>Status</LinkText></Link>  
                    <LinkBottomBorder></LinkBottomBorder>
                </SubLink>
                <SubLink>
                <Link to="member" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><LinkText>Team Members</LinkText></Link>  
                    <LinkBottomBorder></LinkBottomBorder>
                </SubLink>
            </LinksContainer>
        </Tabs>
        <BottomBorder></BottomBorder>
    </Bar>
  };
  
export default NavBar;
  