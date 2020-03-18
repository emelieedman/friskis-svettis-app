import React from "react"
import styles from "./SelectedGymsGardet.module.css"
import ButtonLargeComponent from "../../../ButtonLargeComponent/ButtonLargeComponent"
import HeaderComponent from "../../../HeaderComponent/HeaderComponent"
import GymCardComponent from "../../../GymCardComponent/GymCardComponent"

function SelectedGymsGardet() {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="SELECTED GYM'S"/>
            <div className={styles.gym}>
                <GymCardComponent gym="Gärdet" />
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

export default SelectedGymsGardet;
