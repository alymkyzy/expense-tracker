import styled from "styled-components";


const FormInput = ({ id, labelName, inputType, placeholder, ...rest }) => {
    return (
        <StyledFormInput>
            <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
            <StyledInput
            id={id}
            type={inputType}
            placeholder={placeholder || "..."}
            {...rest}/>
        </StyledFormInput>
    );
}

export default FormInput;

const StyledFormInput = styled.div`
    display: flex;
    flex-direction: column;
    color: #111111;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    border: none;
`;

const StyledLabel = styled.label`
    margin-bottom: 8px;
`;

const StyledInput = styled.input`
    outline: none;
    border: none;
    width: 340px;
    border-radius: 8px;
    padding: 9px 18px;

    &:focus {
        border: 1px solid #3F3F3F;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;