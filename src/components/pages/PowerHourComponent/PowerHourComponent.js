import React from "react";
import styles from "./PowerHourComponent.module.css"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"
import ActivityCardComponent from "../../ActivityCardComponent/ActivityCardComponent"
import InfoComponent from "../../InfoComponent/InfoComponent";
import ButtonSmallComponent from "../../ButtonSmallComponent/ButtonSmallComponent";

const PowerHourComponent = () => {
    return (
        <div>
            <HeaderComponent imageName="powerhour" />
            <div className={styles.wrapper}>
                <ActivityCardComponent clock="17:30" activity="Power-Hour" time="55 min" num="10" gym="City" />
                <InfoComponent />
                <div className={styles.fadeout}></div>
                <div className={styles.button}>
                    <ButtonSmallComponent path="confirmation-page" text="BOOK" />
                </div>
                
            </div>
        </div>
    )
}

export default PowerHourComponent;