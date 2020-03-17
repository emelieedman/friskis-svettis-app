import React from "react";
import styles from "./Calendar.module.css"
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../../InputFieldComponent/InputFieldComponent";
import LinkRoundComponent from "../../LinkRoundComponent/LinkRoundComponent"

const Calendar = () => {
    return (
        <div className={styles.wrapper}>
            <HeaderComponent title="CALENDAR"/>
            <InputFieldComponent label="SEARCH FOR A DATE"/>
            <div className={styles.calendar}>
                <p className={styles.gridItem}>M</p> 
                <p className={styles.gridItem}>T</p> 
                <p className={styles.gridItem}>O</p> 
                <p className={styles.gridItem}>T</p> 
                <p className={styles.gridItem}>F</p> 
                <p className={styles.gridItem}>S</p> 
                <p className={styles.gridItem}>S</p> 
               {/*fix ignore screenreader */}
               <h2>MARCH</h2>
                <div className={styles.gridItem}>
                    <LinkRoundComponent date="1" />
                </div>
                <div className={styles.gridItem}>
                    <LinkRoundComponent date="2" />
                </div>
                <div className={styles.gridItem}>
                    <LinkRoundComponent date="3" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="4" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="5" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="6" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="1" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="7" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="8" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="9" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="10" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="11" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="12" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="13" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="14" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="15" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="16" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="17" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="18" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="19" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="20" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="21" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="22" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="23" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="24" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="25" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="26" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="27" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="28" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="29" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="30" />
                </div>
                <div className={styles.gridItem}>
                <LinkRoundComponent date="31" />
                </div>
            </div>
        </div>
    )
}

export default Calendar;