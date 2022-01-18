import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./Components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

const News = React.lazy(() => import("./Components/News/News"));
const Music = React.lazy(() => import("./Components/Music/Music"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="wrapperContent">
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/dialogs" element={withSuspense(DialogsContainer)}>
                            <Route path=":id" element={<DialogsContainer/>}/>
                        </Route>
                        <Route path="/news" element={withSuspense(News)}/>
                        <Route path="/music" element={withSuspense(Music)}/>
                        <Route path="/users" element={withSuspense(UsersContainer)}/>
                        <Route path="/settings" element={withSuspense(Settings)}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

