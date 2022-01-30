import obj from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";
import {useEffect} from "react";

const Input = Element("input");

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) return <Navigate to={"/profile"}/>

    return (
        <div className={obj.wrapper}>
            <h3 className={obj.headingOfLoginPage}>Login</h3>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                <Field type="checkbox" component={Input} name={"rememberMe"}/>
                <label>remember me</label>
            </div>
            <div>
                { error && <div className={style.summaryError}>⚠ {error}</div> }
            </div>
            <div>
                {captchaUrl && <img src={captchaUrl} alt="captchaUrl"/>}
                {captchaUrl && <Field placeholder="Symbols from image" component={Input} name="captcha"/>}
            </div>
            <div className={obj.loginButton}>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const mapStateToProps = (state) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {login})(Login);