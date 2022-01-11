import obj from "./FormsControls.module.css";

export const Element = Element => ({input, meta, label, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? obj.textareaError : ""}>
            <Element {...props} {...input}/>
            {hasError && <div className={obj.errorMessage}>⚠ {meta.error}</div>}
        </div>
    )
}
