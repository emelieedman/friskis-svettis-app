import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../InputFieldComponent/InputFieldComponent";
import LinkSmallComponent from "../LinkSmallComponent/LinkSmallComponent";
import styles from "./LayoutComponent.module.css";

function LayoutComponent() {
    return (
        <div className={styles.w}>
            <HeaderComponent className={styles.gridItem} />
            <InputFieldComponent className={styles.gridItem} />
            <LinkSmallComponent className={styles.gridItem} gym="City" />
            <LinkSmallComponent className={styles.gridItem} gym="Farsta" />
            <LinkSmallComponent className={styles.gridItem} gym="Gärdet" />
            <LinkSmallComponent className={styles.gridItem} gym="Hagastan" />
        </div>
    )
}


export default LayoutComponent;