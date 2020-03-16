import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
// import HeaderComponent from "../HeaderComponent/HeaderComponent";
// import InputFieldComponent from "../InputFieldComponent/InputFieldComponent";
// import LinkSmallComponent from "../LinkSmallComponent/LinkSmallComponent";
import styles from "./LayoutComponent.module.css";
// import RoundButtonComponent from "../RoundButtonComponent/RoundButtonComponent";
import ButtonLargeComponent from "../ButtonLargeComponent/ButtonLargeComponent";

function LayoutComponent() {
    return (
        <div className={styles.wrapper}>
            {/* <HeaderComponent title="PICK A GYM"/>
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
            <RoundButtonComponent className={styles.up} /> */}
            <div className={styles.page2}>
                <ButtonLargeComponent text="ADD ANOTHER GYM" />
                <ButtonLargeComponent text="CLEAR" />
                <ButtonLargeComponent text="CONTINUE" />
            </div>
            
        </div>
    )
}


export default LayoutComponent;