import './Navigation.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';
import Logo from '../../assets/Logo.svg';
import HomeIcon from '../../assets/home-icon.svg';
import MenuIcon from '../../assets/menu-icon.svg';

const LogoImage = styled.div`
    width: calc(225px / 2);
    height:calc(75px / 2);
    background-size: cover;
    background-image: url(${Logo});
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

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100vw;
    }
`;

const Wrapper = styled.div`
    width: 40%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding: 0 30px;
        box-sizing: border-box;
    }
`;

const BottomContainer = styled.div`
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
    width: 30px;
    height: 30px;
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
    return (
        <Router>
            <NavigationContainer>

                <TopContainer>
                    <Wrapper>
                        <LogoImage />
                    </Wrapper>
                </TopContainer>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>

                <BottomContainer>
                    <Wrapper>
                        <Button>
                            <HomeIc></HomeIc>
                            <Title>Home</Title>
                        </Button>
                        <Button>
                            <MenuIc></MenuIc>
                            <Title>Menu</Title>
                        </Button>
                    </Wrapper>
                </BottomContainer>

            </NavigationContainer>


                
        </Router>
    )
}