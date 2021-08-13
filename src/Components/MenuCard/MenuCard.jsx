import styled from 'styled-components';
import HomeIcon from '../../assets/home-icon.svg';

const Card = styled.div`
    cursor: pointer;
    width: 150px;
    height: 180px;
    margin: 10px 10px;
    background-color: white;
    border: 1px solid #D6D6D6;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 130px;
    }
`;

const CardIconContainer = styled.div`
    width: fit-content;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    
`;

const CardIcon = styled.div`
    width: 40px;
    height: 40px;
    
    box-sizing: border-box;
    background-image: url('${HomeIcon}');
    background-size: cover;

    position: absolute;
`;

const CardIconBg = styled.div`
    opacity: .2;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #2773E4;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90px;
        height: 90px;
    }
`;

const CardTitle = styled.h3`
    margin: 0;
    width: 100px;
    color: #111;
    font-size: 14px;
    text-align: center;
`;

export default function MenuCard(props){

    const cardHandler = () => {
        alert('You clicked Card!');
    }

    return (
        <Card onClick={cardHandler}>
            <CardIconContainer>
                <CardIcon></CardIcon>
                <CardIconBg></CardIconBg>
            </CardIconContainer>
            <CardTitle>{props.title}</CardTitle>
        </Card>
    )
}