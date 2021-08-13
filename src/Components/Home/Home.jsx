import './Home.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Image
import Hospital from '../../assets/image-hospital.png';

// Components
import EmptyCard from '../EmptyCard/EmptyCard';
import AvailableBed from '../AvailableBed/AvailableBed';
import EmergencyContact from '../EmergencyContact/EmergencyContact';

const HomeContainer = styled.div`
    margin-top: 60px;
    height: fit-content;
    width: 100%;
    background-color: #f0f0f0;
    // border: 1px solid red;

    display: ${props => props.show ? "block" : "none"};
`;

const Wrapper = styled.div`
    width: 550px;
    height: 100%;
    margin: auto;
    padding-bottom: 60px;
    background-color: white;
    // border: 1px solid red;

    @media (max-width: 570px) {
        width: 100%;
    }
`;

const EmergencyContactButton = styled.div`
    padding: 30px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const EmergencyContactIcon = styled.div`
    width: 40px;
    height: 40px;
    opacity: .4;
    border-radius: 50px;
    background-color: #2773E4;
`;

const EmergencyContactText = styled.p`
    margin: 0;
    color: ${props => props.desc ? "grey" : "#111"};
    font-size: ${props => props.desc ? "12px" : "18px"};
    font-weight: ${props => props.desc ? "400" : "700"};

    @media (min-width: 320px) and (max-width: 480px) { 
        width: 200px;
    }
`;

const EmergencyContactArrow = styled.div`
    width: 10px;
    height: 10px;
    border-top: 3px solid #2773E4;
    border-right: 3px solid #2773E4;
    border-radius: 2px;

    transform: rotate(45deg);

    @media (min-width: 320px) and (max-width: 480px) {
        width: 7px;
        height: 7px;
    }
`;

const HospitalContainer = styled.div`
    padding: 10px 30px;
    box-sizing: border-box;
    height: 300px;
    background-image: url('${Hospital}');
    background-size: cover;

    // border: 1px solid red;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100vw;
    }
`;

const HospitalTitle = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
`;

const CariRumahSakit = styled.div`
    width: fit-content;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 0px 30px;
    padding-top: 5px;
    padding-bottom: 90px;
    // border: 1px solid red;

    background-color: white;
`;

const CariRumahSakitTitle = styled.p`
    color: #1A1A1A;
    font-size: 18px;
    font-weight: 700;
    // border: 1px solid red;
`;

const Select = styled.select`
    width: 100%;
    margin: 9px 0;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid #D6D6D6;
    color: #9A9A9A;
    background-color: white;

    &:focus {
        outline: none;
    }
`;

const FindBtn = styled.button`
    cursor: pointer;
    margin-top: 9px;
    padding: 12px 0;
    width: 100%;
    border: 1px solid #2773E4;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    background-color: #2773E4;
`;


export default function Home(props) {

    const [ showHome, setShowHome ] = useState(true);

    const [ provinsiCollection, setProvinsiCollection ] = useState([]);
    const [ selectedProvinsi, setSelectedProvinsi ] = useState('none');

    const [ kotaCollection, setKotaCollection ] = useState([]);
    const [ selectedKota, setSelectedKota ] = useState('none');

    const [ hospitalCollection, setHospitalCollection ] = useState([]);

    const [ showAvailableBed, setShowAvailabeBed ] = useState(false);
    const [ showEmptyCard, setShowEmptyCard ] = useState(true);
    const [ showLoading, setShowLoading ] = useState(false);   
    
    const [ cityName, setCityName ] = useState('');


    useEffect(() => {
        (async function getProvinsi(){
            let result = fetch('https://rs-bed-covid-api.vercel.app/api/get-provinces')
                .then(response => response.json())
                .then(response => response)

            const { provinces } = await result;
            setProvinsiCollection(provinces);

        })();
    }, []);

    const ProvinsiList = provinsiCollection.map((item, index) => {
        const { id, name } = item;
        return <option key={index+1} value={id}>{name}</option>
    });

    const KotaList = kotaCollection.map((item, index) => {
        const { id, name } = item;
        return <option key={index+1} value={id}>{name}</option>
    });

    useEffect(() => {
        if(selectedProvinsi !== "none"){
            (async function getCity(){
                let city = fetch(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${selectedProvinsi}`)
                    .then(response => response.json())
                    .then(response => response)

                const { cities } = await city;
                setKotaCollection(cities);
            })();
        }
    }, [selectedProvinsi]);

    const buttonEvent = (element) => {
        // console.log(kotaCollection);

        
        if(selectedProvinsi !== "none" && selectedKota !== "none"){
            const city = kotaCollection.filter(item => selectedKota === item.id)[0];
            setCityName(city);

            (async function getHospital(){
                let hospital = fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${selectedProvinsi}&cityid=${selectedKota}&type=1`)
                    .then(response => response.json())
                    .then(response => response)

                const { hospitals } = await hospital;
                setHospitalCollection(hospitals);
            })();

            setShowAvailabeBed(true);
            setShowEmptyCard(false);
            setShowLoading(true);
        } else {
            // setCityName('---');
            setShowAvailabeBed(false);
            setShowEmptyCard(true);
            return alert('Please insert the Province / City!');
        }
    }


    return (

        <HomeContainer show={showHome}>
            <Wrapper className="wrapper">
                <HospitalContainer className="hospitalContainer">
                    <HospitalTitle>Find Available<br></br>
                    Bed in Hospitals<br></br>
                    Near You.</HospitalTitle>
                </HospitalContainer>

                <EmergencyContactButton onClick={() => props.setEmergency(true)}>
                    <EmergencyContactIcon></EmergencyContactIcon>

                    <div className="typography">
                        <EmergencyContactText>Kontak Darurat</EmergencyContactText>
                        <EmergencyContactText desc>Situs dan Kontak penting terkait COVID-19</EmergencyContactText>
                    </div>

                    <EmergencyContactArrow></EmergencyContactArrow>
                </EmergencyContactButton>

                <CariRumahSakit>
                    <CariRumahSakitTitle>
                        Cari Rumah Sakit Terdekat
                    </CariRumahSakitTitle>

                    <Select name="provinsi" id="provinsi" onChange={(e) => setSelectedProvinsi(e.target.value)}>
                        <option value="none" defaultValue>Pilih Provinsi</option>
                        {ProvinsiList}
                    </Select>

                    <Select name="provinsi" id="provinsi" onChange={(e) => setSelectedKota(e.target.value)}>
                        <option value="none" defaultValue>Pilih Kota</option>
                        {KotaList}
                    </Select>

                    <FindBtn onClick={buttonEvent}>Find Hospital</FindBtn>
                </CariRumahSakit>

                <EmptyCard show={showEmptyCard} />

                <AvailableBed 
                    show={showAvailableBed}
                    city={cityName}
                    data={hospitalCollection}
                    showLoading={showLoading}
                    setShowLoading={setShowLoading}
                />
                
            </Wrapper>
        </HomeContainer>
    );
}