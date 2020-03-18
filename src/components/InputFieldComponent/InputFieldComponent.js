import React from "react";
import styles from "./InputFieldComponent.module.css"

const InputFieldComponent = (props) => {
    return (
        <form className={styles.wrapper}>
            <label className={styles.label} htmlFor="search">{props.label}</label>
            <input className={styles.input} type="text" value={props.value} onChange={props.onChange} label="search" />
        </form>
    )
}

export default InputFieldComponent;