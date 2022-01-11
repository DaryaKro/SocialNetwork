import {reset} from "redux-form";

export const requiredField = (value) => {
    if (value) return undefined;
    return "field is required";
}

const maxLength = (max) => (value) => {
    return (value && value.length > max ? `Must be ${max} characters or less` : undefined);
}

export const maxLength15 = maxLength(15);
export const maxLength30 = maxLength(30);
