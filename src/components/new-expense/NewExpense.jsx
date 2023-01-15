import { useState } from "react";
import styled from "styled-components";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/button/Button";


export const NewExpense = ({ onNewExpenseAdd }) => {
    const [showForm, setShowForm ] = useState(false);

    const showExpenseForm = () => {
        setShowForm((prevState) => {
            return !prevState;
        });
    }

    return (
        <StyledNewExpense>
            {showForm ? <ExpenseForm onShowForm={showExpenseForm} onNewExpenseAdd={onNewExpenseAdd}/> : <Button title="Добавить новый расход" onClick={showExpenseForm} />}
        </StyledNewExpense>
    );
}

const StyledNewExpense = styled.div`
    background: #AD9BE9;
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 26px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;