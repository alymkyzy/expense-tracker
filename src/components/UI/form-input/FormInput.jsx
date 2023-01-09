import "./FormInput.css";


const FormInput = ({ id, labelName, inputType, placeholder, ...rest }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{labelName}</label>
            <input
            id={id}
            type={inputType}
            placeholder={placeholder || "..."}
            {...rest}/>
        </div>
    );
}

export default FormInput;