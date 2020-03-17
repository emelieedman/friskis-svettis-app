import React from "react";
import styles from "./CirkelFysComponent.module.css"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"
import LinkLargeComponent from "../../LinkLargeComponent/LinkLargeComponent"

const CirkelFysComponent = () => {
    return (
        <div>
            <HeaderComponent />
            <div className={styles.wrapper}>
                <LinkLargeComponent clock="17:30" time="55 min" activity="Cirkelfys" num="10" gym="City" />
            </div>
        </div>
    )
}

export default CirkelFysComponent;