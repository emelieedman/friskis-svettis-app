import React from "react"
import styles from "./SelectedGymsFarsta.module.css"
import ButtonLargeComponent from "../../../ButtonLargeComponent/ButtonLargeComponent"
import HeaderComponent from "../../../HeaderComponent/HeaderComponent"
import GymCardComponent from "../../../GymCardComponent/GymCardComponent"

function SelectedGymsFarsta() {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent imageName="background" title="SELECTED GYM'S"/>
            <div className={styles.gym}>
                <GymCardComponent gym="Farsta" />
            </div>
            <div className={styles.button}>
                <ButtonLargeComponent path="/" text="ADD ANOTHER GYM" />
            </div>
            <div className={styles.button}>
                <ButtonLargeComponent path="/selected-gyms" text="CLEAR" />
            </div>
            <div className={styles.button}>
                <ButtonLargeComponent path="/calendar" text="CONTINUE" />
            </div>
        </div>
    )
}

export default SelectedGymsFarsta;
