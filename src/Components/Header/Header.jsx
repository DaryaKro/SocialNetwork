import obj from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logoutImg from "../../assets/images/logoutSVG.svg";

const Header = (props) => {
    return (
        <header className={obj.header}>
            <svg className={obj.second} width="317" height="78" viewBox="0 0 317 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M126.024 51.92C126.024 55.152 124.84 57.696 122.472 59.552C120.104 61.376 117.08 62.288 113.4 62.288C110.488 62.288 107.672 61.488 104.952 59.888C103.608 59.056 102.504 57.888 101.64 56.384C100.776 54.848 100.344 53.104 100.344 51.152L106.392 50.864C106.392 52.592 107.128 53.936 108.6 54.896C110.072 55.856 111.704 56.336 113.496 56.336C117.496 56.336 119.496 54.928 119.496 52.112C119.496 49.808 118.136 48.448 115.416 48.032L109.848 47.456C107.064 47.04 104.856 46.048 103.224 44.48C101.592 42.912 100.776 40.656 100.776 37.712C100.776 34.768 101.944 32.336 104.28 30.416C106.616 28.496 109.56 27.536 113.112 27.536C116.696 27.536 119.576 28.448 121.752 30.272C123.928 32.064 125.016 34.384 125.016 37.232L119.064 37.52C118.52 34.736 116.648 33.344 113.448 33.344C111.496 33.344 109.96 33.76 108.84 34.592C107.752 35.424 107.208 36.416 107.208 37.568C107.208 38.688 107.608 39.584 108.408 40.256C109.208 40.896 110.2 41.296 111.384 41.456L116.856 42.032C122.968 42.864 126.024 46.16 126.024 51.92ZM154.431 62H146.943L139.743 52.304L137.007 56.192V62H130.767V25.904H137.007V48.704L145.743 35.696H152.799L143.823 47.984L154.431 62ZM177.692 34.592L167.276 65.072C166.796 66.448 166.172 67.52 165.404 68.288C164.124 69.568 162.332 70.208 160.028 70.208H157.1V64.592H159.02C159.916 64.592 160.572 64.432 160.988 64.112C161.436 63.824 161.82 63.232 162.14 62.336L162.62 60.992L154.364 34.592H160.94L165.836 53.648L171.116 34.592H177.692ZM207.123 41.6L200.979 54.56C200.083 56.288 198.963 57.152 197.619 57.152C196.307 57.152 195.203 56.24 194.307 54.416L188.067 41.6V62H181.395V27.824H187.971L197.619 47.552L207.219 27.824H213.795V62H207.123V41.6ZM239.165 62H234.989L233.069 58.688L226.397 62.288C222.685 62.288 220.189 60.944 218.909 58.256C218.269 56.944 217.821 55.536 217.565 54.032C217.341 52.496 217.229 50.912 217.229 49.28C217.229 47.616 217.245 46.4 217.277 45.632C217.309 44.832 217.389 43.92 217.517 42.896C217.645 41.84 217.821 40.96 218.045 40.256C218.301 39.552 218.653 38.832 219.101 38.096C219.549 37.328 220.093 36.72 220.733 36.272C222.173 35.28 224.045 34.784 226.349 34.784H232.925L239.165 34.4V62ZM232.925 53.264V40.4H228.173C226.413 40.4 225.181 41.072 224.477 42.416C223.805 43.76 223.469 45.776 223.469 48.464C223.469 51.12 223.789 52.992 224.429 54.08C225.101 55.168 226.349 55.712 228.173 55.712L232.925 53.264ZM257.654 62H253.766C251.398 62 249.59 61.296 248.342 59.888C247.126 58.48 246.518 56.8 246.518 54.848V40.448H243.878V35.696H246.518V30.32H252.758V35.696H257.174V40.448H252.758V54.464C252.758 55.968 253.478 56.72 254.918 56.72H257.654V62ZM283.361 49.76H267.377C267.377 52.256 267.761 54.08 268.529 55.232C269.329 56.384 270.913 56.96 273.281 56.96C274.817 56.96 275.953 56.48 276.689 55.52C277.425 54.528 277.793 53.584 277.793 52.688H283.409C283.409 56.112 282.481 58.624 280.625 60.224C278.801 61.824 276.369 62.624 273.329 62.624C270.321 62.624 267.985 62.192 266.321 61.328C262.897 59.568 261.185 54.896 261.185 47.312C261.185 42.8 262.161 39.504 264.113 37.424C266.065 35.312 269.041 34.256 273.041 34.256C279.985 34.256 283.457 38.112 283.457 45.824C283.457 46.656 283.425 47.968 283.361 49.76ZM267.521 45.488H277.793C277.793 43.376 277.393 41.84 276.593 40.88C275.793 39.92 274.561 39.44 272.897 39.44C271.265 39.44 269.953 39.936 268.961 40.928C268.001 41.888 267.521 43.408 267.521 45.488ZM307.929 54.416V55.136C307.737 57.536 306.713 59.344 304.857 60.56C303.033 61.776 300.745 62.384 297.993 62.384C293.929 62.384 291.081 61.648 289.449 60.176C287.945 58.832 287.193 56.848 287.193 54.224V53.648H292.857C292.857 55.12 293.241 56.128 294.009 56.672C294.777 57.216 296.105 57.488 297.993 57.488C300.553 57.488 301.833 56.56 301.833 54.704C301.833 53.168 301.385 52.144 300.489 51.632C300.073 51.376 299.545 51.184 298.905 51.056L294.057 50.24C289.833 49.568 287.721 46.928 287.721 42.32C287.721 39.76 288.649 37.776 290.505 36.368C292.393 34.928 294.777 34.208 297.657 34.208C304.217 34.208 307.497 37.04 307.497 42.704V43.328H302.073C302.009 41.824 301.609 40.8 300.873 40.256C300.137 39.712 299.097 39.44 297.753 39.44C296.441 39.44 295.449 39.712 294.777 40.256C294.105 40.768 293.769 41.344 293.769 41.984C293.769 43.808 294.505 44.848 295.977 45.104L301.785 46.16C305.881 46.928 307.929 49.68 307.929 54.416Z" fill="white"/>
                <path d="M53.2931 0L45.53 31.2792L78 43.5533L45.53 47.9086L53.2931 78L34.9794 57.4112L11.2577 78L23.7216 43.5533L0 22.5685L29.7526 28.5076L53.2931 0Z" fill="#8500BA"/>
            </svg>
            <div className={obj.loginBlock}>
                {props.isAuth
                    ? <div className={obj.loginInfo}>
                        {props.login}
                        <img src={logoutImg} alt="logoutImg" onClick={props.logout}/>
                        {/*{props.userId}*/}
                    </div>
                    : <NavLink to={"/login"} className={obj.pathToLoginPage}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;