import React from "react";
import styles from "./HeaderComponent.module.css";
import logo from "../../assets/logo.svg";

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>PICK A GYM</h1>
            <img className={styles.logo} src={logo} alt=""/>
        </div>
    )

}

export default HeaderComponent;