import preloader from "../../../assets/images/preloader.gif";

const Preloader = (props) => {
    return (
        <div style={ {textAlign: "center"} }>
            <img src={preloader} alt="preloader" style={ {width: "25px"} }/>
        </div>
    )
}

export default Preloader;