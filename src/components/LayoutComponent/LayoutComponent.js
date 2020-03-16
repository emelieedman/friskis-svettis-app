import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../InputFieldComponent/InputFieldComponent";
import LinkSmallComponent from "../LinkSmallComponent/LinkSmallComponent";
import styles from "./LayoutComponent.module.css";
import RoundButtonComponent from "../RoundButtonComponent/RoundButtonComponent";

function LayoutComponent() {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="PICK A GYM"/>
            <InputFieldComponent />
            <LinkSmallComponent gym="City" />
            <LinkSmallComponent gym="Farsta" />
            <LinkSmallComponent gym="Gärdet" />
            <LinkSmallComponent id={styles.link} gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <LinkSmallComponent gym="Hagastan" />
            <div className={styles.fadeout}></div>
            <RoundButtonComponent className={styles.up} />
        </div>
    )
}


export default LayoutComponent;