import './Home.css';
import 'tailwindcss/tailwind.css';
import KontakIcon from '../../assets/KontakIcon.svg';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Image
import Hospital from '../../assets/image-hospital.png';

// Components
import EmptyCard from '../EmptyCard/EmptyCard';
import AvailableBed from '../AvailableBed/AvailableBed';
import EmergencyContact from '../EmergencyContact/EmergencyContact';
import ProvinsiDropdown from './ProvinsiDropdown/ProvinsiDropdown';
import KotaDropdown from './KotaDropdown/KotaDropdown';
import PilihProvinsi from './PilihProvinsi/PilihProvinsi';
import PilihKota from './PilihKota/PilihKota';

const HomeContainer = styled.div`
    margin-top: 60px;
    margin-bottom: 80px;
    height: fit-content;
    width: 100%;
    background-color: #f0f0f0;
    border: 1px solid red;

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

const EmergencyLeftButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-betweeen;
`;

const EmergencyTypography = styled.div`
    margin-left: 20px;
`;

const EmergencyContactIconWrapper = styled.div`
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
`;

const EmergencyContactIcon = styled.img`
    z-index: 1;
    width: 20px;
    height: 20px;
    background-size: cover;
    position: absolute
`;

const EmergencyContactBg = styled.div`
    width: inherit;
    height: inherit;
    border-radius: 50px;
    opacity: .15;
    background-color: rgb(39, 115, 228);
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
    font-size: 26px;
    font-weight: 700;
    line-height: 35px;
    margin-top: 15px;
`;

const CariRumahSakit = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    padding: 0px 30px;
    padding-top: 5px;
    padding-bottom: 80px;
    // border: 1px solid red;

    background-color: white;

    position: relative;
`;

const CariRumahSakitTitle = styled.p`
    margin: 15px 0;
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

    const [ showProvinsiDropdown, setShowProvinsiDropdown ] = useState(false);
    const [ showKotaDropdown, setShowKotaDropdown ] = useState(false);
    const [ pilihProvinsi, setPilihProvinsi ] = useState('Pilih Provinsi');
    const [ pilihKota, setPilihKota ] = useState('Pilih Kota');


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
                console.log(cities);
                setKotaCollection(cities);
            })();
        }
    }, [selectedProvinsi]);

    const ButtonEvent = (element) => {
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

    const HomeEvent = () => {
        if(showProvinsiDropdown){
            setShowProvinsiDropdown(false);
        }

        if(showKotaDropdown){
            setShowKotaDropdown(false);
        }
    }

    return (

        <HomeContainer show={showHome} onClick={HomeEvent}>
            <Wrapper className="wrapper">

                <HospitalContainer className="hospitalContainer">
                    <HospitalTitle>Cari Ketersediaan<br></br>Tempat Tidur di Rumah Sakit.<br></br></HospitalTitle>
                </HospitalContainer>

                <EmergencyContactButton onClick={() => props.setEmergency(true)}>
                    <EmergencyLeftButton>
                        <EmergencyContactIconWrapper>
                            <EmergencyContactIcon src={KontakIcon}/>
                            <EmergencyContactBg></EmergencyContactBg>
                        </EmergencyContactIconWrapper>

                        <EmergencyTypography>
                            <EmergencyContactText>Kontak Darurat</EmergencyContactText>
                            <EmergencyContactText desc>Situs dan Kontak penting terkait COVID-19</EmergencyContactText>
                        </EmergencyTypography>
                    </EmergencyLeftButton>

                    <EmergencyContactArrow></EmergencyContactArrow>
                </EmergencyContactButton>

                <CariRumahSakit>
                    <CariRumahSakitTitle>
                        Cari Rumah Sakit Terdekat
                    </CariRumahSakitTitle>

                    <div className="relative">
                        <PilihProvinsi
                            pilihProvinsi={pilihProvinsi}
                            showProvinsiDropdown={showProvinsiDropdown}
                            setShowProvinsiDropdown={setShowProvinsiDropdown}
                            />
                        
                        <ProvinsiDropdown 
                            show={showProvinsiDropdown}
                            dataCity={provinsiCollection} 
                            setPilihProvinsi={setPilihProvinsi}
                            setSelectedProvinsi={setSelectedProvinsi} 
                            setShowProvinsiDropdown={setShowProvinsiDropdown}
                        />
                    </div>

                    <div className="relative">
                        <PilihKota
                            pilihKota={pilihKota}
                            showKotaDropdown={showKotaDropdown}
                            setShowKotaDropdown={setShowKotaDropdown}
                        />

                        <KotaDropdown
                            show={showKotaDropdown}
                            dataCity={kotaCollection}
                            setPilihKota={setPilihKota}
                            setSelectedKota={setSelectedKota}
                            setShowKotaDropdown={setShowKotaDropdown}
                        />
                    </div>



                    {/* <Select name="provinsi" id="provinsi" onChange={(e) => setSelectedKota(e.target.value)}>
                        <option value="none" defaultValue>Pilih Kota</option>
                        {KotaList}
                    </Select> */}

                    <FindBtn onClick={ButtonEvent}>Find Hospital</FindBtn>
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