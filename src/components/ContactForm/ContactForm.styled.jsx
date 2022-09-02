import styled from 'styled-components';

export const Form = styled.form`
width: 350px;
margin: 0 auto 20px auto;
box-sizing: border-box;
padding: 20px 30px;
border: 1px solid #ffffff;
display: flex;
flex-direction: column;
`;

export const Label = styled.label`
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid black;
transition: color 300ms ease-in-out;

:hover,
:focus-within {
    color: #ffffff;
}
`;

export const Input = styled.input`
background-color: transparent;
outline: none;
border: none;
height: 25px;
width: 190px;
font-family: inherit;
font-size: inherit;
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 5px;
background-color: #ffffff7f;
border-radius: 5px;
text-align: center;
text-transform: capitalize;
font-weight: bold;
transition: background-color 300ms ease-in-out;

:hover, :focus {
    background-color: #ffffff;
}
`;