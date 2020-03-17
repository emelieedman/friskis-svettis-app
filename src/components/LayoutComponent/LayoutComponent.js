import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import styles from "./LayoutComponent.module.css";
import SelectedGymsCity from "../pages/SelectedGymsCity/SelectedGymsCity"
import PickGymComponent from "../pages/PickGymComponent/PickGymComponent"
import SelectedGymsClear from "../pages/SelectedGymsClear/SelectedGymsClear";

export default function LayoutComponent() {
    return (
        <div className={styles.wrapper}>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={PickGymComponent} />
                    <Route exact path="/city" component={SelectedGymsCity} />
                    <Route exact path="/selected-gyms" component={SelectedGymsClear} />
                </Switch>
            </Router>
        </div>
    )
}


