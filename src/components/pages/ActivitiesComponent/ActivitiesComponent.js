import React from "react";
import styles from "./ActivitiesComponent.module.css"
import HeaderComponent from "../../HeaderComponent/HeaderComponent"
import LinkLargeComponent from "../../LinkLargeComponent/LinkLargeComponent"

const ActivitiesComponent = () => {
    return (
        <div>
            <HeaderComponent title="ACTIVITIES" />
            <h2 className={styles.h2}>SATURDAY 1/3:</h2>
            <div className={styles.wrapper}>
                <LinkLargeComponent clock="17:30" time="55 min" activity="Cirkelfys" num="10" gym="City" />
                <LinkLargeComponent clock="18:30" time="45 min" activity="Yoga-Energy" num="2" gym="City" />
                <LinkLargeComponent clock="19:45" time="60 min" activity="Power Hour" num="20" gym="City" /> 
            </div>
        </div>
    )
}

export default ActivitiesComponent;