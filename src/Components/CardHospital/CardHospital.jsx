import styled from 'styled-components';

const CardHospitalContainer = styled.div`
    height: fit-content;
    padding: 10px 20px;
    margin-top: 50px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #D6D6D6;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // z-index: -1;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 85vw;
    }
`;

const CardTitle = styled.h1`
    color: #111;
    font-size: 20px;
`;

const CardPhoneHighlighted = styled.span`
    padding: 5px 15px;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: rgba(143, 255, 115, .5);
`;

const CardPhoneNumber = styled.p`
    color: #111;
    font-size: 14px;
    z-index: -1;
`;

const CardAddress = styled.p`
    width: 320px;
    color: #7D7D7D;
    font-size: 14px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 150px;
    }
`;

const CardBed = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px 20px;
    box-sizing: border-box;
    border-radius: 10px 0 10px 0;
    background-color: #2773E4;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 480px) {
        padding: 5px 10px;
    }
`;

const CardBedAmount = styled.p`
    color: white;
    font-size: 28px;
    font-weight: 600;
    margin: 0;
`;

const CardBedDesc = styled.p`
    color: white;
    font-size: 12px;
    margin: 0;
`;

export default function CardHospital(props){
    return (
        <CardHospitalContainer data-id={props.id}>
            <CardTitle>{props.rs}</CardTitle>
            <div>
                <CardPhoneNumber><CardPhoneHighlighted>{props.phone}</CardPhoneHighlighted></CardPhoneNumber>
                <CardAddress>{props.address}</CardAddress>
                <CardBed>
                    <CardBedAmount>{props.bed}</CardBedAmount>
                    <CardBedDesc>Available Bed</CardBedDesc>
                </CardBed>
            </div>
        </CardHospitalContainer>
    )
}