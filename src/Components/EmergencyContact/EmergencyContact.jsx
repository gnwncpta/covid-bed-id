import { useState } from 'react';
import styled from "styled-components";
import ContactCard from "../ContactCard/ContactCard";
import ServiceContent from './ServiceContent';

const EmergencyContactContainer = styled.div`
    margin-top: 60px;
    height: fit-content;
    width: 100%;
    background-color: #f0f0f0;
`;

const Wrapper = styled.div`
    width: 550px;
    height: 100%;

    margin: auto;
    // padding-left: 30px;
    // padding-right: 30px;
    padding-bottom: 90px;
    box-sizing: border-box;

    // background-color: white;
    // border: 1px solid red;

    @media only screen and (max-width: 635px) {
        width: 100vw;
    }
`;

const Header = styled.div`
    width: 550px;
    padding: 20px 20px;
    box-sizing: border-box;

    background-color: white;

    @media only screen and (max-width: 635px) {
        width: 100vw;
    }
`;

const Title = styled.h1`
    color: #111;
    font-size: 26px;
`;

const Desc = styled.p`
    width: fit-content;
    color: grey;
    font-size: 14px;

    // @media (min-width: 320px) and (max-width: 480px) {
    //     width: 310px;
    // }
`;

const CardsContainer = styled.div`
    width: 550px;
    padding: 20px 20px;
    box-sizing: border-box;
    display: grid;
    gap: 25px;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);

    background-color: white;

    // border: 1px solid red;

    @media only screen and (max-width: 635px) {
        width: 100vw;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        grid-template-columns: repeat(2, auto);
        gap: 10px;
    }
`;

const PenyediaFaskes = styled.div`
    width: 100%;
    padding: 30px 20px;
    box-sizing: border-box;
    text-align: center;

    background-color: white;
`;

const PenyediaFaskesText = styled.h3`
    color: #111;
    font-size: 15px;
    font-weight: 600;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px;
    }
`;

const PenyediaFaskesButton = styled.a`
    display: inline-block;
    width: 100%;

    margin-top: 20px;
    padding: 10px 20px;
    box-sizing: border-box;

    border: none;
    border-radius: 50px;

    font-size: 14px;
    font-weight: 600;

    color: #2773E4;
    background-color: #c2eaff;

    text-decoration: none;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 13px;
    }
`;

const Hotline = styled.p`
    color: grey;
    margin-top: 20px;
    font-size: 12px;
`

const Service = styled.div`
    width: 550px;
    margin-top: 10px;
    padding: 20px 20px;
    box-sizing: border-box;

    background-color: white;

    @media only screen and (max-width: 635px) {
        width: 100vw;
    }
`;

const ServiceHeader = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ServiceTitle = styled.p`
    color: #111;
    font-size: 16px;
    font-weight: 600;
`;

const ServiceArrow = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 15px;
    border-top: 3px solid #2773E4;
    border-right: 3px solid #2773E4;
    border-radius: 2px;

    transform: ${props => props.top ? "rotate(-45deg)" : "rotate(135deg)"};

    @media (min-width: 320px) and (max-width: 480px) {
        width: 7px;
        height: 7px;
    }
`;

export default function EmergencyContact(props){
    const [ showServiceContent1, setShowServiceContent1 ] = useState(false);
    const [ showServiceContent2, setShowServiceContent2 ] = useState(false);

    const data1 = [
        {link: "https://covid19.go.id/faskesvaksin", title: "Klik informasi lokasi vaksin di situs resmi pemerintah di sini."},
        {link: "https://vaksincovid.carrd.co", title: "Klik database layanan vaksin di Yuk Vaksin"},
        {link: "https:/instagram.com/infovaksincovid_19", title: "Follow dan lihat instagram story @infolokasivaksincovid_19"}
    ];
    
    const data2 = [
        {link: "https://oksigen.carrd.co", title: "Klik untuk lihat database oksigen di Info Oksigen"},
        {link: "https:/instagram.com/sejutates", title: "Follow instagram @sejutates untuk dapat info peminjaman oksigen (khusus Jabodetabek)"}
    ]

    return (
        <EmergencyContactContainer>
            <Wrapper>

                <Header>
                    <Title>Kontak Penting Terkait COVID-19</Title>
                    <Desc>Kumpulan informasi situs dan kontak penting terkait fasilitas serta alat kesehatan untuk COVID-19 di level nasional.</Desc>
                </Header>

                <CardsContainer>
                    <ContactCard name="Farma Plus" desc="Situs Ketersediaan Obat di Daerahmu" link="https://yankes.kemkes.go.id/app/siranap/"/>
                    <ContactCard name="SINARAP V3.0" desc="Situs Sistem Informasi Rawat Inap" link="https://farmaplus.kemkes.go.id/"/>
                    <ContactCard name="Lentera Svarga" desc="Situs Layanan Krematorium, Mobil Jenazah, Peti Mati" link="https://lenterasvarga.carrd.co/"/>
                    <ContactCard name="Info Oxygen" desc="Informasi Tabung Oksigen di Daerahmu" link="https://oksigen.carrd.co/"/>
                </CardsContainer>

                <PenyediaFaskes>
                    <PenyediaFaskesText>Cari kontak penyedia faskes secara detail perprovinsi se-indonesia</PenyediaFaskesText>
                    <PenyediaFaskesButton href="tel:119">Hubungi 119 ext. 9</PenyediaFaskesButton>
                    <Hotline>Hotline Kementrian Kesehatan</Hotline>
                </PenyediaFaskes>

                <Service>
                    <ServiceHeader onClick={() => setShowServiceContent1(showServiceContent1 ? false : true)}>
                        <ServiceTitle>Mau vaksin COVID-19?</ServiceTitle>
                        <ServiceArrow top={showServiceContent1}></ServiceArrow>
                    </ServiceHeader>

                    <ServiceContent show={showServiceContent1} data={data1}/>

                    <ServiceHeader onClick={() => setShowServiceContent2(showServiceContent2 ? false : true)}>
                        <ServiceTitle>Oksigen Untuk Pasien COVID?</ServiceTitle>
                        <ServiceArrow top={showServiceContent2}></ServiceArrow>
                    </ServiceHeader>

                    <ServiceContent show={showServiceContent2} data={data2}/>
                </Service>

            </Wrapper>
        </EmergencyContactContainer>

        
    )
}