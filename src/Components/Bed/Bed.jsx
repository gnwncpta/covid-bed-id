import styled from 'styled-components';

const BedContainer = styled.div`
    position: relative;
    width: 360px;
    height: 200px;
    margin: 20px 20px;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 1px 5px 29px 0px rgba(0,0,0,0.23);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BedTitle = styled.h1`
    font-size: 18px;
    font-weight: 600;
    // margin-bottom: 60px;
`;

const PhoneNumber = styled.p`
    color: #581DFF;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

const Address = styled.p`
    color: #C9C9C9;
    font-size: 12px;
    margin: 0;
`;

const Information = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AddressInfo = styled.div`
    height: fit-content;
    width: 70%;
`;

const BedAvailable = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 15px 0 15px 0;
    padding: 8px 15px;
    background-color: #581DFF;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BedAmount = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 22px;
    color: white;
`;

const BedDesc = styled.p`
    margin: 0;
    font-weight: 300;
    font-size: 10px;
    color: white;
`;

export default function Bed(props){
    const { rs, phone, address, bedAmount } = props;

    return (
        <BedContainer>
            <BedTitle>{rs}</BedTitle>

            <Information>
                <AddressInfo>
                    <PhoneNumber>{phone == null ? "-" : phone}</PhoneNumber>
                    <Address>{address}</Address>
                </AddressInfo>

                <BedAvailable>
                    <BedAmount>{bedAmount}</BedAmount>
                    <BedDesc>Bed Available</BedDesc>
                </BedAvailable>
            </Information>
        </BedContainer>
    )
}