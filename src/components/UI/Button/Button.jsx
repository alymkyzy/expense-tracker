import styled from "styled-components";

const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick}>{props.title}</StyledButton>
    );
}

export default Button;

const StyledButton = styled.button`
    background: #4A026B;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    padding: 16px 18px;
    border-radius: 10px;

    &:hover {
        background: #600A87;
    }
    &:active {
        background: #520B73;
    }
`;