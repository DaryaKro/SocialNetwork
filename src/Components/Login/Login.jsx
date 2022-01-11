import obj from "./Login.module.css";
import {Field, reduxForm, reset} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";

const Input = Element("input");

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={obj.wrapper}>
            <h3 className={obj.headingOfLoginPage}>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit(props.reset)}>
            <div>
                <Field type="text" placeholder={"Login"} component={Input}
                       validate={[requiredField]} name={"login"}
                       className={obj.loginInput}/>
            </div>
            <div>
                <Field type="text" placeholder={"Password"} component={Input}
                       validate={[requiredField]} name={"password"}
                       autocomplete={"off"} className={obj.loginInput}/>
            </div>
            <div className={obj.loginCheckbox}>
                <label>
                    <Field type="checkbox" component={Input} name={"rememberMe"} id={"check"}/> remember me
                </label>
            </div>
            <div className={obj.loginButton}>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export default Login;