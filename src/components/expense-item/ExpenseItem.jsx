import styled from "styled-components";

export const ExpenseItem = ({ title, date, price }) => {
    return (
        <StyledExpenseItem>
            <StyledDate>{date.toString()}</StyledDate>
            <p>{title}</p>
            <StyledPrice>{price}</StyledPrice>
        </StyledExpenseItem>
    );
}

const StyledExpenseItem = styled.div`
    background: #4B4B4B;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;

    padding: 12px 16px;

    display: flex;
    column-gap: 14px;
    align-items: center;
`;

const StyledDate = styled.p`
    background: #2A2A2A;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    text-align: center;
    padding: 15px 5px;
    width: 80px;
    height: 80px;
`;

const StyledPrice = styled.p`
    background: #40005D;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    font-size: 20px;

    padding: 10px 18px;
    margin-left: auto;
`;