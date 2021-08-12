import LoadingBlue from '../../assets/loading-blue.svg';
import styled from 'styled-components';

const LoadingContainer = styled.div`
    padding: 30px 0;
    margin: 40px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Loading(props){
    if(!props.show){
        return null;
    }
    
    return (
        <LoadingContainer>
            <img src={LoadingBlue} alt="Loading" width="50px" height="50px"/>
        </LoadingContainer>
    )
}