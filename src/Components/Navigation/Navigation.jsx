import './Navigation.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';

const NavigationContainer = styled.section`
    width: 80%;
    padding: 10px 0;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    color: #111;
    font-weight: 700;
`;

export default function Navigation(props){
    return (
        <Router>
            <NavigationContainer>
                <Logo>Covid Bed ID</Logo>

                <nav>
                    <Link to="/" className="navi">
                        Home
                    </Link>
                </nav>

                <Link to="/tech-stack" className="navi techstack"> Tech Stack </Link>
            </NavigationContainer>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
        </Router>
    )
}