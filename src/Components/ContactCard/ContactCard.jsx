import styled from "styled-components";

const ContactCardContainer = styled.div`
    padding: 15px;
    // margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #D6D6D6;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContactCardName = styled.p`
    color: #757575;
    font-size: 14px;
    font-weight: 500;
    margin: 0;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const ContactCardDesc = styled.p`
    color: #111;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    margin-top: 5px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`;

const ContactCardButton = styled.a`
    display: inline-bloock;
    text-decoration: none;
    text-align: center;

    cursor: pointer;
    // width: 100%;
    margin-top: 25px;
    padding: 7px 30px;

    border: none;
    border-radius: 50px;

    font-weight: 500;
    color: white;
    background-color: #2773E4;

    @media (min-width: 320px) and (max-width: 480px) {
        padding: 7px 15px;
        font-size: 10px;
    }
`;

export default function ContactCard(props){
    return (
        <ContactCardContainer>
            <ContactCardName>{props.name}</ContactCardName>
            <ContactCardDesc>{props.desc}</ContactCardDesc>
            <ContactCardButton href={props.link} targe="_blank">Cek Sekarang</ContactCardButton>
        </ContactCardContainer>
    )
}