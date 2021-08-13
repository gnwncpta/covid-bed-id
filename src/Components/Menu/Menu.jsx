import styled from "styled-components"
import MenuCard from '../MenuCard/MenuCard';

const MenuContainer = styled.div`
    margin-top: 60px;
    height: fit-content;
    width: 100%;
    background-color: #f0f0f0;
`;

const Wrapper = styled.div`
    width: 550px;
    height: 100%;

    margin: auto;
    padding-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    box-sizing: border-box;
    
    background-color: white;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    border: 1px solid red;

    @media (max-width: 570px) {
        width: 100vw;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;



export default function Menu(props){

    return (
        <MenuContainer>
            <Wrapper>
                <MenuCard title="Home"/>
                <MenuCard title="Kontak Darurat"/>
                <MenuCard title="Tech Stack"/>
            </Wrapper>
        </MenuContainer>
    );
}