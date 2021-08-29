import './Navigation.css';
import X from '../../assets/X.svg';
import Hamburger from '../../assets/Menu.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import EmergencyContact from '../EmergencyContact/EmergencyContact';
import Logo from '../../assets/Logo.svg';
import HomeIcon from '../../assets/HomeBlue.svg';
import MenuIcon from '../../assets/menu-icon.svg';

const LogoImage = styled.div`
    width: calc(225px / 2);
    height:calc(75px / 2);
    background-size: cover;
    background-image: url(${Logo});
    cursor: pointer;
`;

const MenuButton = styled.div`
    width: 32px;
    height: 32px;
    padding: 6px;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.highlighted ? "#2F82FF" : "transparent"};

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
        background-color: #2F82FF;
    }
`;

const MenuButtonIcon = styled.img`
    width: 18px;
`;

const NavigationContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;  
    
    overflow-x: hidden;
`;

const TopContainer = styled.div`
    position: fixed;
    top: 0;

    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;

    background-color: #2773E4;
    z-index: 9;

    // border: 1px solid red;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100vw;
    }
`;

const Wrapper = styled.div`
    width: 550px;
    margin: auto;
    padding: ${props => props.top ? "0 30px" : "0"};
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: ${props => props.top ? "space-between" : "space-around"};

    // border: 1px solid red;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;
    }
`;

const BottomContainer = styled.div`
    z-index: 3;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #D6D6D6;

    background-color: white;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100vw;
    }
`;

const Button = styled.button`
    cursor: pointer;

    width: 70px;
    height: fit-content;
    border: none;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
`;

const HomeIc = styled.div`
    margin-top: 10px;
    width: 40px;
    height: 40px;
    background-image: url('${HomeIcon}');
    background-size: cover;
`;

const MenuIc = styled.div`
    margin-top: 10px;
    width: 30px;
    height: 30px;
    background-image: url('${MenuIcon}');
    background-size: cover;
`;

const Title = styled.p`
    color: #38A0FF;
    font-size: 12px;
`;


export default function Navigation(props){

    const [ emergency, setEmergency ] = useState(false);
    const [ menu, setMenu ] = useState(false);

    const TopContainerHandler = () => {
        alert('Blue Nav Clicked.');
    }

    const LogoEvent = () => {
        <Redirect to="/" />
    }

    return (
        <Router>
            <NavigationContainer>

                <TopContainer>
                    <Wrapper top>
                        <Link to="/" >
                            <LogoImage />
                        </Link>

                        <MenuButton highlighted={menu} onClick={() => setMenu(menu ? false : true)}>
                            <img src={menu ? X : Hamburger} width="30px" />
                        </MenuButton>
                    </Wrapper>
                </TopContainer>

                <Switch>

                    <Route exact path="/">
                        <MenuNavigation show={menu} setEmergency={setEmergency} setMenu={setMenu} />
                        {emergency ? <Redirect to="/emergency-contact" /> : <Home setEmergency={setEmergency} />}
                    </Route>

                    <Route path="/menu">
                        <Menu />
                    </Route>

                    <Route path="/emergency-contact">
                        <MenuNavigation show={menu} setMenu={setMenu} />
                        <EmergencyContact/>
                    </Route>
                </Switch>

                <BottomContainer>
                    <Wrapper bottom>
                        <Button onClick={() => setEmergency(false)}>
                            <Link to="/" className="goto">
                                <HomeIc></HomeIc>
                                <Title>Home</Title>
                            </Link>
                        </Button>
                        <Button>
                            <Link to="/menu" className="goto">
                                <MenuIc></MenuIc>
                                <Title>Menu</Title>
                            </Link>
                        </Button>
                    </Wrapper>
                </BottomContainer>

            </NavigationContainer>


                
        </Router>
    )
}