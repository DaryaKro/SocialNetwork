import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <div className="wrapperContent">
                <Routes>
                    <Route path="/profile" element={ <Profile/>}/>
                    <Route path="/dialogs" element={ <DialogsContainer/> }/>
                    <Route path="/news" element={ <News/> }/>
                    <Route path="/music" element={ <Music/> }/>
                    <Route path="/settings" element={ <Settings/> }/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
