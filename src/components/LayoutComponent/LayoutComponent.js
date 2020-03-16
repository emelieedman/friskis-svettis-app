import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import styles from "./LayoutComponent.module.css";
import SelectedGymsCity from "../pages/SelectedGymsCity/SelectedGymsCity"
import PickGymComponent from "../pages/PickGymComponent/PickGymComponent"

export default function LayoutComponent() {
    return (
        <div className={styles.wrapper}>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={PickGymComponent} />
                    <Route exact path="/city" component={SelectedGymsCity} />
                </Switch>
            </Router>
        </div>
    )
}


