import React from "react"
import styles from "./SelectedGymsCity.module.css"
import ButtonLargeComponent from "../../ButtonLargeComponent/ButtonLargeComponent"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"
import LinkSmallComponent from "../../LinkSmallComponent/LinkSmallComponent"

function SelectedGymsCity() {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="PICK A GYM"/>
            <div className={styles.gym}>
                <LinkSmallComponent gym="City" />
            </div>
            <div className={styles.button}>
                <ButtonLargeComponent  text="ADD ANOTHER GYM" />
            </div>
            <div className={styles.button}>
                <ButtonLargeComponent text="CLEAR" />
            </div>
            <div className={styles.button}>
                <ButtonLargeComponent text="CONTINUE" />
            </div>
        </div>
    )
}

export default SelectedGymsCity;
