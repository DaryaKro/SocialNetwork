import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="wrapperContent">
                <Routes>
                    <Route path="/profile" element={ <ProfileContainer/>}>
                        <Route path=":userId" element={ <ProfileContainer/>}/>
                    </Route>
                    {/*<Route path="/profile/:id" element={ <ProfileContainer/>}/>*/}
                    <Route path="/dialogs" element={ <DialogsContainer/>}>
                        <Route path=":id" element={ <DialogsContainer/>}/>
                    </Route>
                    {/*<Route path="/dialogs/:id" element={ <DialogsContainer/> }/>*/}
                    <Route path="/news" element={ <News/> }/>
                    <Route path="/music" element={ <Music/> }/>
                    <Route path="/users" element={ <UsersContainer/> }/>
                    <Route path="/settings" element={ <Settings/> }/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
