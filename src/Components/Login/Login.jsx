import obj from "./Login.module.css";
import {Field, reduxForm, reset} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";

const Input = Element("input");

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) return <Navigate to={"/profile"}/>

    return (
        <div className={obj.wrapper}>
            <h3 className={obj.headingOfLoginPage}>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={"Email"} component={Input}
                       validate={[requiredField]} name={"email"}
                       className={obj.loginInput}/>
            </div>
            <div>
                <Field type="password" placeholder={"Password"} component={Input}
                       validate={[requiredField]} name={"password"}
                       className={obj.loginInput}/>
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

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {login})(Login);