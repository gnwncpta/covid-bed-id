import styled from "styled-components";
import ExternalLink from '../../assets/external-link.svg';

const ServiceContentContainer = styled.div`
    margin-top: 10px;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 10px;

    color: #111;
    background-color: #f5fbff;

    
`;

const ServiceContentItem = styled.a`
    display: inline-block;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: ${props => props.bottom ? "none" : "1px solid #D6D6D6"};
`;

const ServiceContentText = styled.a`
    display: inline-block;

    width: 100%;
    color: #111;

    font-size: 14px;
    
    margin: 0;
    padding: 15px 0;
    box-sizing: border-box;

    text-decoration: none;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
    }
`;

const ServiceContentExternal = styled.img`
    width: 18px;
    height: 18px;
    border: none;
    color: white;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 15px;
    }
`;

export default function ServiceContent(props){
    if(!props.show){
        return null;
    }

    const ServiceContentItemList = props.data.map((item, index) => {
        const { link, title } = item;

        if(index === props.data.length - 1){
            return <ServiceContentItem bottom href={link} target="_blank">
                        <ServiceContentText>{title}</ServiceContentText>
                        <ServiceContentExternal src={ExternalLink}></ServiceContentExternal>
                    </ServiceContentItem>
        }

        return <ServiceContentItem href={link} target="_blank">
                    <ServiceContentText>{title}</ServiceContentText>
                    <ServiceContentExternal src={ExternalLink}></ServiceContentExternal>
                </ServiceContentItem>
    })

    return (
        <ServiceContentContainer>

            {ServiceContentItemList}

        </ServiceContentContainer>
    )
}