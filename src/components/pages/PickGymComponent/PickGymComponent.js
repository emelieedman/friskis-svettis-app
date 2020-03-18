import React from "react";
import styles from "./PickGymComponent.module.css"
import GymCardLinkComponent from "../../GymCardComponent/GymCardLinkComponent";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../../InputFieldComponent/InputFieldComponent"
import RoundButtonComponent from "../../RoundButtonComponent/RoundButtonComponent"


const PickGymComponent = () => {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="PICK A GYM"/>
            <InputFieldComponent label="SEARCH" />
            <GymCardLinkComponent gym="City" /> 
            <GymCardLinkComponent gym="Farsta" />
            <GymCardLinkComponent gym="Gärdet" />
            <GymCardLinkComponent gym="Hagastan" />
            <div className={styles.fadeout}></div>
            <RoundButtonComponent />
        </div>

    )
}

export default PickGymComponent;