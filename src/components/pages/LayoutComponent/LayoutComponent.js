import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import styles from "./LayoutComponent.module.css";
import SelectedGymsCity from "../SelectedGymsCity/SelectedGymsCity"
import PickGymComponent from "../PickGymComponent/PickGymComponent"
import SelectedGymsClear from "../SelectedGymsClear/SelectedGymsClear";
import Calendar from "../Calendar/Calendar"

export default function LayoutComponent() {
    return (
        <div className={styles.wrapper}>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={PickGymComponent} />
                    <Route exact path="/city" component={SelectedGymsCity} />
                    <Route exact path="/selected-gyms" component={SelectedGymsClear} />
                    <Route exact path="/calendar" component={Calendar} />
                </Switch>
            </Router>
        </div>
    )
}


