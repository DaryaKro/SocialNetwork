import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
    userId: state.authReducer.userId,
});

export default connect(mapStateToProps, {logout})(HeaderContainer);