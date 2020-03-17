import React from "react";
import styles from "./PowerHourComponent.module.css"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"
import LinkLargeComponent from "../../LinkLargeComponent/LinkLargeComponent"
import InfoComponent from "../../InfoComponent/InfoComponent";
import ButtonSmallComponent from "../../ButtonSmallComponent/ButtonSmallComponent";

const PowerHourComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <div className={styles.wrapper}>
                <LinkLargeComponent clock="17:30" activity="Power-Hour" time="55 min" num="10" gym="City" />
                <InfoComponent />
                <div className={styles.fadeout}></div>
                <div className={styles.button}>
                    <ButtonSmallComponent text="BOOK" />
                </div>
                
            </div>
        </div>
    )
}

export default PowerHourComponent;