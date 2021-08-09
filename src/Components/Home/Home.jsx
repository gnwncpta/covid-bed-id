import { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.section`
    width: 80%;
    margin: 30px auto;
`;

const FormContainer = styled.form`
    text-align: center;
    width: 500px;
    margin: auto;
`;

const OptionsContainer = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

const Label = styled.label`
    color: #636363;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Select = styled.select`
    color: #3E3E3E;
    font-weight: 400;
    padding: 14px 20px;
    box-sizing: border-box;
    border-radius: 13px;
    border: none;
    background-color: #EAEAEA;
`;

const FindBedroom = styled.button`
    margin-top: 25px;
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
    box-sizing: border-box;
    border-radius: 12px;
    border: none;
    color: white;
    background-color: #581DFF;
`;


export default function Home(props) {

    const [ provinsi, setProvinsi ] = useState([]);
    const [ kota, setKota ] = useState([{id: 0, name: "-- Select City --"}]);
    const [ provinsiID, setProvinsiID ] = useState('');
    const [ kotaID, setKotaID ] = useState('');

    useEffect(() => {

        (async function getProvinsi(){
            let data = fetch('https://rs-bed-covid-api.vercel.app/api/get-provinces')
                .then(response => response.json())
                .then(response => response)

            const { provinces } = await data;
            setProvinsi(provinces);
        })();

    }, []);


    const ProvinsiList = provinsi.map((item, index) => {
        const { id, name } = item;
        return <option key={index+1} value={id} >{name}</option>
    });

    async function provinsiHandler(e){
        let provinceID = e.target.value;
        setProvinsiID(e.target.value);
        let data = fetch(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${provinceID}`)
            .then(response => response.json())
            .then(response => response)

        const { cities } = await data;
        setKota(cities);
    }

    const KotaList = kota.map((item, index) => {
        const { id, name } = item;
        return <option key={index+1} value={id} >{name}</option>
    });

    function kotaHandler(e){
        const cityID = e.target.value;
        setKotaID(cityID);
    }

    function findHandler(){
        fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provinsiID}&cityid=${kotaID}&type=1`)
            .then(response => response.json())
            .then(response => console.log(response))
    }

    return (

        <HomeContainer>
            <FormContainer>
                <h1>Find Available Bed</h1>

                <OptionsContainer>
                    <Label htmlFor="provinsi">Provinsi</Label>
                    <Select name="provinsi" id="provinsi" onChange={provinsiHandler}>
                        {ProvinsiList}
                    </Select>
                </OptionsContainer>

                <OptionsContainer>
                    <Label htmlFor="kota">Kota</Label>
                    <Select name="kota" id="kota" onChange={kotaHandler}>
                        {KotaList}
                    </Select>
                </OptionsContainer>

                <FindBedroom onClick={findHandler}>Find Bedroom</FindBedroom>

            </FormContainer>
        </HomeContainer>
            
    );
}