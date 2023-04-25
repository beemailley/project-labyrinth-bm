import styled from 'styled-components';

export const Button = styled.button`
    width: ${(props) => props.buttonWidth || '200px'};
    border-radius: 12px;
    background-color: ${(props) => props.buttonColor || 'white'};
    border: ${(props) => props.buttonBorder || '2px solid black'};
    color: ${(props) => props.buttonText || 'black'};
    margin: 10px 0;
    opacity: .8;
    line-height: 1.5rem;
    font-size: 18px;

    &:hover {
    opacity: 1;
    }
`
