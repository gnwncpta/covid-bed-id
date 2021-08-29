import House from '../../assets/House.svg';
import KontakIconBlack from '../../assets/KontakIconBlack.svg';
import styled from 'styled-components';

const MenuNavigationContainer = styled.div`
    position: absolute;
    z-index: 2;
    margin-top: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
`;

const Wrapper = styled.div`
    width: 550px;
    height: 100vh;
    padding: 6px;
    margin-bottom: 80px;
    background-color: white;
    border: 1px solid red;

    // border: 1px solid #ededed;
`;

const Navigasi = styled.a`
    cursor: pointer;
    color: #111;
    display: flex;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    border-radius: 10px;
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;
    margin: 5px;

    &:hover {
        background-color: #fafafa;
    }
`;

const NavigasiIcon = styled.img`
    width: 26px;
    margin-right: 15px;
`;

export default function MenuNavigation(props){

    if(!props.show){
        return null;
    }

    return (
        <MenuNavigationContainer>
            <Wrapper>
                <Navigasi href="#beranda">
                    <NavigasiIcon src={House} alt="House Icon" /> Beranda
                </Navigasi>

                <Navigasi onClick={() => { 
                    props.setEmergency(true); 
                    props.setMenu(false); 
                }}>
                    <NavigasiIcon src={KontakIconBlack} alt="Kontak Icon" /> Kontak Darurat
                </Navigasi>
            </Wrapper>
        </MenuNavigationContainer>
    );

}