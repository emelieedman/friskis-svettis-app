import React from "react"
import styles from "./SelectedGymsClear.module.css"
import ButtonLargeComponent from "../../ButtonLargeComponent/ButtonLargeComponent"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"


function SelectedGymsClear() {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="SELECTED GYM'S"/>
            <div className={styles.button} id={styles.gridItem1}>
                <ButtonLargeComponent path="/" text="ADD ANOTHER GYM" />
            </div>
            <div className={styles.button} id={styles.gridItem2}>
                <ButtonLargeComponent text="CLEAR" />
            </div>
            <div className={styles.button} id={styles.gridItem3}>
                <ButtonLargeComponent text="CONTINUE" />
            </div>
        </div>
    )
}

export default SelectedGymsClear;
