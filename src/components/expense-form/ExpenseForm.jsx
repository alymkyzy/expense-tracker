import FormInput from "../UI/form-input/FormInput";
import Button from "../UI/button/Button";
import { useState } from "react";
import styled from "styled-components";

export const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    const cancelHandler = (event) => {
        event.preventDefault();
        props.onShowForm();
    }

    const titleInputChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const priceInputChangeHandler = (event) => {
        const value = event.target.value;
        if (value.charAt(0) !== "-") {
            setPrice(value);
        }
    }

    const dateInputChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const saveHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title,
            date,
            price,
        }

        props.onNewExpenseAdd(expenseData);

        setTitle("");
        setPrice("");
        setDate("");
    }

    let disabled = title.length > 0 &&
    price.length > 0 &&
    date.length > 0;


    return (
        <StyledFormContainer>
            <StyledForm>
                <FormInput
                id="name"
                labelName="Название"
                inputType="text"
                placeholder="Введите ..."
                value={title}
                onChange={titleInputChangeHandler}
                />
                <FormInput
                id="price"
                labelName="Сумма"
                inputType="number"
                placeholder="Введите ..."
                value={price}
                onChange={priceInputChangeHandler}
                />
                <FormInput
                id="date"
                labelName="Дата"
                inputType="date"
                onChange={dateInputChangeHandler}
                value={date}
                />
            </StyledForm>
            <StyledFormButton>
                <Button title="Отмена" onClick={cancelHandler}/>
                <Button title="Добавить расходы" onClick={saveHandler} disabled={!disabled}/>
            </StyledFormButton>
        </StyledFormContainer>

    );
}

const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    margin-bottom: 28px;
`;

const StyledFormButton = styled.div`
    display: flex;
    column-gap: 14px;
    justify-content: flex-end;
`;