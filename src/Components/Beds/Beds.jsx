import './Beds.css';
import styled from 'styled-components';
import Bed from '../Bed/Bed';

const BedsContainer = styled.section`
    width: 80%;
    border-radius: 15px;
    border: 1px solid #dfdfdf;
    position: absolute;
    top: 5vw;
    left: 10vw;

    background-color: white;
    box-shadow: 1px 5px 29px 0px rgba(0,0,0,0.23);
`;

const BedsChild = styled.div`
    width: 80%;
    margin: 50px auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CrossContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    color: #afafaf;
    border: 1px solid #afafaf;
`;

const BedsInfo = styled.div`
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
`;


export default function Beds(props){
    if(!props.show){
        return null;
    }

    const { city, hospitals, show, setShowBeds } = props;
    console.log(hospitals);

    const BedLists = hospitals.map((item, index) => {
        const { id, info, name, phone, address, bed_availability } = item;
        return <Bed key={index+1} rs={name} address={address} phone={phone} bedAmount={bed_availability} />
    });

    return (
        <BedsContainer className="BedsContainer">
            <BedsChild>
                <h1>Available Beds on {city}</h1>

                <CrossContainer onClick={() => setShowBeds(show ? false : true)}>X</CrossContainer>
            </BedsChild>

            <BedsInfo>
                {BedLists}
            </BedsInfo>
        </BedsContainer>  
    )
}