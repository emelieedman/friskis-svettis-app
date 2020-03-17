import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
import styles from "./LayoutComponent.module.css";
import SelectedGymsCity from "../SelectedGyms/SelectedGymsCity/SelectedGymsCity";
import PickGymComponent from "../PickGymComponent/PickGymComponent";
import SelectedGymsClear from "../SelectedGyms/SelectedGymsClear/SelectedGymsClear";
import Calendar from "../Calendar/Calendar";
import SelectedGymsFarsta from "../SelectedGyms/SelectedGymsFarsta/SelectedGymsFarsta";
import SelectedGymsGardet from "../SelectedGyms/SelectedGymsGardet/SelectedGymsGardet";
import SelectedGymsHagastan from "../SelectedGyms/SelectedGymsHagastan/SelectedGymsHagastan";
import ActivitiesComponent from "../ActivitiesComponent/ActivitiesComponent";
import CirkelFysComponent from "../CirkelFysComponent/CirkelFysComponent"

export default function LayoutComponent() {
    return (
        <div className={styles.wrapper}>
            
            <Router>
                <Switch>
                    <Route exact path="/" component={PickGymComponent} />
                    <Route exact path="/city" component={SelectedGymsCity} />
                    <Route exact path="/farsta" component={SelectedGymsFarsta} />
                    <Route exact path="/gärdet" component={SelectedGymsGardet} />
                    <Route exact path="/hagastan" component={SelectedGymsHagastan} />
                    <Route exact path="/selected-gyms" component={SelectedGymsClear} />
                    <Route exact path="/calendar" component={Calendar} />
                    <Route exact path="/1" component={ActivitiesComponent} />
                    <Route exact path="/cirkelfys" component={CirkelFysComponent} />
                </Switch>
            </Router>
        </div>
    )
}


