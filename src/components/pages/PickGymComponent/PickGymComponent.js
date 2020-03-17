import React from "react";
import styles from "./PickGymComponent.module.css"
import LinkSmallComponent from "../../LinkSmallComponent/LinkSmallComponent";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../../InputFieldComponent/InputFieldComponent"
import RoundButtonComponent from "../../RoundButtonComponent/RoundButtonComponent"


const PickGymComponent = () => {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="PICK A GYM"/>
            <InputFieldComponent label="SEARCH" />
            <LinkSmallComponent gym="City" /> 
            <LinkSmallComponent gym="Farsta" />
            <LinkSmallComponent gym="Gärdet" />
            <LinkSmallComponent gym="Hagastan" />
            <div className={styles.fadeout}></div>
            <RoundButtonComponent />
        </div>

    )
}

export default PickGymComponent;