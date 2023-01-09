import "./ExpenseItem.css";

export const ExpenseItem = ({ title, date, price }) => {
    return (
        <div className="expense-item">
            <p className="date">{date.toString()}</p>
            <p>{title}</p>
            <p className="price">{price}</p>
        </div>
    );
}