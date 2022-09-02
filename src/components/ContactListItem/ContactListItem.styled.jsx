import styled from 'styled-components';

export const ContactItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;

:first-child {
    border-top: 1px solid black;
}
`;

export const ContactWrapper = styled.span`
width: 160px;
`;

export const DeleteButton = styled.button`
width: 30px;
height: 30px;
transition: color 300ms ease-in-out;

:hover, :focus {
    color: #ffffff;
}
`;