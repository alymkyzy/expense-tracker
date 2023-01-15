import styled from "styled-components";

export const ExpenseFilter = ({ value, onChange }) => {
    return (
        <StyledExpenseFilter>
            <StyledExpenseFilterControl>
                <label htmlFor="years">Фильтровать список</label>
                <StyledExpenseFilterSelect name="years" value={value} onChange={onChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </StyledExpenseFilterSelect>
            </StyledExpenseFilterControl>
        </StyledExpenseFilter>
    )
}

const StyledExpenseFilter = styled.div`
    margin-bottom: 18px;
`;

const StyledExpenseFilterControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 16px;
    font-weight: 600;
`;

const StyledExpenseFilterSelect = styled.select`
    padding: 12px 20px;
    font-weight: 600;
    color: #222222;
    font-size: 16px;
    border-radius: 6px;
`;