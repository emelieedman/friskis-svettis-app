import React from "react";
import styles from "./HeaderComponent.module.css";
import logo from "../../assets/logo.svg";

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <h1>PICK A GYM</h1>
            <img src={logo} alt=""/>
        </div>
    )

}

export default HeaderComponent;