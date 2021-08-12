import styled from "styled-components";

const EmptyCardContainer = styled.div`
    height: fit-content;
    padding: 50px 20px;
    margin-top: 50px;
    margin: auto;
    box-sizing: border-box;
    background-color: white;
    border-radius: 10px;
    border: 1px dashed #D6D6D6;

    position: relative;
    display: flex;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 85vw;
    }
`;

const Title = styled.p`
    color: #D7D7D7;
`

export default function EmptyCard(props){
    if(!props.show){
        return null;
    }

    return (
        <EmptyCardContainer>
            <Title>Belum ada Data RS</Title>
        </EmptyCardContainer>
    )
}