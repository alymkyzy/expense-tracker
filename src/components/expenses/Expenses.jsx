import { ExpenseItem } from "../expense-item/ExpenseItem";
import "./Expenses.css"

export const Expenses = ({ expenses }) => {
    return (
        <ul className="list-expenses">
            {expenses.map((el) => {
                return (
                <ExpenseItem
                    key = {el.title}
                    title = {el.title}
                    price = {el.price}
                    date = {el.date}
                />
                )
            })}
        </ul>
    );
}

// 1: 06 pause