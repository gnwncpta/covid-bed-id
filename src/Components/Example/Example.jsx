import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ExampleContainer = styled.div`
    width: 20%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items; center;
    justify-content: center;

`;

export default function Example(props){
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('Effect Run');
    }, [count]);

    return (
        <ExampleContainer>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>Add Count</button>
        </ExampleContainer>
    );
}