import './Home.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import animatedLoading from '../../assets/loading-animated-white.svg';

// Image
import Hospital from '../../assets/image-hospital.png';

// Components
import Container from '../Styling/Container';
import Beds from '../Beds/Beds';

// API
import getHospital from './getHospital';
import getCities from './getCities';
import { isSelector } from 'postcss-selector-parser';

const HomeContainer = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: #D6D6D6;
    // border: 1px solid red;
`;

const Wrapper = styled.div`
    width: 550px;
    margin: auto;
    background-color: white;
`;

const HospitalContainer = styled.div`
    padding: 10px 30px;
    box-sizing: border-box;
    width: 100%;
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
    width: 92%;
    margin-top: 50px;
    padding: 0 20px;
    // border: 1px solid red;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 57%;
    }
`;

const CariRumahSakitTitle = styled.p`
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 700;
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
    margin-top: 9px;
    padding: 12px 0;
    width: 100%;
    border: 1px solid #2773E4;
    border-radius: 10px;
    font-weight: 600;
    color: white;
    background-color: #2773E4;
`;


export default function Home(props) {

    return (

        <HomeContainer>
            <Wrapper className="wrapper">
                <HospitalContainer className="hospitalContainer">
                    <HospitalTitle>Find Available<br></br>
                    Bed in Hospitals<br></br>
                    Near You.</HospitalTitle>
                </HospitalContainer>

                <CariRumahSakit>
                    <CariRumahSakitTitle>
                        Cari Rumah Sakit Terdekat
                    </CariRumahSakitTitle>

                    <Select name="provinsi" id="provinsi">
                        <option value="Select Here">Pilih Provinsi</option>
                    </Select>

                    <Select name="provinsi" id="provinsi">
                        <option value="Select Here">Pilih Kota</option>
                    </Select>

                    <FindBtn>Find Hospital</FindBtn>
                </CariRumahSakit>
            </Wrapper>
        </HomeContainer>
    );
}