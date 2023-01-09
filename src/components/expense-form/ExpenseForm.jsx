import FormInput from "../UI/form-input/FormInput";
import Button from "../UI/Button/Button";
import "./ExpenseForm.css";
import { useState } from "react";

export const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [date, setDate] = useState(null);

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
        // console.log(expenseData)
    }



    return (
        <div className="form-container">
            <form className="form-inputs">
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
                />
            </form>
            <div className="form-buttons">
                <Button title="Отмена" onClick={cancelHandler}/>
                <Button title="Добавить расходы" onClick={saveHandler} />
            </div>
        </div>

    )
}

