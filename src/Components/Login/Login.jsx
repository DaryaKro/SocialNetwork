import obj from "./Login.module.css";

const Login = () => {
    return (
        <>
            <div className={obj.login}>Go to site and login there</div>
            <a href="https://social-network.samuraijs.com" className={obj.siteForLogin}>https://social-network.samuraijs.com/</a>
        </>
    );
};

export default Login;