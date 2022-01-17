import obj from "./FormsControls.module.css";

export const Element = Element => ({input, meta: {touched, error}, label, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={hasError ? obj.textareaError : ""}>
            <Element {...props} {...input}/>
            {hasError && <div className={obj.errorMessage}>⚠ {error}</div>}
        </div>
    )
}
