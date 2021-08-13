import { useEffect } from 'react';
import styled from 'styled-components';
import CardHospital from '../CardHospital/CardHospital';
import Loading from '../Loading/Loading';

const AvailableBedContainer = styled.div`
    // border: 1px solid red;
    margin-bottom: 100px;
    padding: 10px 30px;
`;

const AvailableBedTitle = styled.p`
    color: #1A1A1A;
    font-size: 18px;
    font-weight: 700;
`;

const HighlightedCity = styled.span`
    color: #2773E4;
`;

export default function AvailableBed(props){
    const { show, data, city, showLoading, setShowLoading } = props;
    
    useEffect(() => {
        setShowLoading(showLoading ? false : true);
    }, [data]);

    if(!show){
        return null;
    }

    const CardHospitalList = data.map((item, index) => {
        const { id, name, address, phone, bed_availability } = item;
        return <CardHospital key={index+1} id={id} rs={name} phone={phone} address={address} bed={bed_availability} />
    });

    return (
        <AvailableBedContainer id="availableBedContainer">
            <AvailableBedTitle>
                Available Bed on <HighlightedCity>{city.name}</HighlightedCity>
            </AvailableBedTitle>

            <Loading show={showLoading} />

            {!showLoading && 
                CardHospitalList
            }
        </AvailableBedContainer>
    )
}