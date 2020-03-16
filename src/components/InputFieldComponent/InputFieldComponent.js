import React from "react";
import styles from "./InputFieldComponent.module.css"

const InputFieldComponent = () => {
    return (
        <form className={styles.wrapper}>
            <label className={styles.label} htmlFor="search">SEARCH</label>
            <input className={styles.input} type="text" label="search" />
        </form>
    )
}

export default InputFieldComponent;