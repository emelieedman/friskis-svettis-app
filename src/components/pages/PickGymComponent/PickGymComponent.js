import React from "react";
import styles from "./PickGymComponent.module.css"
import LinkSmallComponent from "../../LinkSmallComponent/LinkSmallComponent";
import { Link } from "react-router-dom";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../../InputFieldComponent/InputFieldComponent"
import RoundButtonComponent from "../../RoundButtonComponent/RoundButtonComponent"


const PickGymComponent = () => {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="PICK A GYM"/>
            <InputFieldComponent />
            <Link className={styles.link} to="/selected-gyms/city">
                <LinkSmallComponent gym="City" /> 
            </Link>
            <Link className={styles.link} to="selected-gyms/farsta">
                <LinkSmallComponent gym="Farsta" />
            </Link>
            <Link className={styles.link} to="selected-gyms/gärdet">
                <LinkSmallComponent gym="Gärdet" />
            </Link>
            <Link className={styles.link} to="selected-gyms/hagastan">
                <LinkSmallComponent gym="Hagastan" />
            </Link>
            <Link className={styles.link}>
                <LinkSmallComponent gym="Hagastan" />
            </Link>
            <Link className={styles.link}>
                <LinkSmallComponent gym="Hagastan" />
            </Link>
            <div className={styles.fadeout}></div>
            <RoundButtonComponent />
        </div>

    )
}

export default PickGymComponent;