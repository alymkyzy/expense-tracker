import { useState } from "react";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { Chart } from "../chart/Chart";
import "./Expenses.css"

export const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const yearChangeHandler = (event) => {
        setSelectedYear(event.target.value);
    }

    const filteredItems = expenses.filter((el) => {
        const stringifiedYear = new Date(el.date).getFullYear().toString();
        return stringifiedYear === selectedYear;
    });

    return (
        <ul className="list-expenses">
            <ExpenseFilter value={selectedYear} onChange={yearChangeHandler}/>
            <Chart items={filteredItems}/>
            {filteredItems.map((el) => {
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