import React from "react";
import styles from "./CirkelFysComponent.module.css"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"
import LinkLargeComponent from "../../LinkLargeComponent/LinkLargeComponent"
import InfoComponent from "../../InfoComponent/InfoComponent";
import ButtonSmallComponent from "../../ButtonSmallComponent/ButtonSmallComponent";

const CirkelFysComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <div className={styles.wrapper}>
                <LinkLargeComponent clock="17:30" time="55 min" activity="Cirkelfys" num="10" gym="City" />
                <InfoComponent />
                <div className={styles.fadeout}></div>
                <div className={styles.button}>
                    <ButtonSmallComponent path="confirmation-page" text="BOOK" />
                </div>
                
            </div>
        </div>
    )
}

export default CirkelFysComponent;