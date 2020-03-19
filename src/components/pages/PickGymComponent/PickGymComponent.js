import React from "react";
import styles from "./PickGymComponent.module.css"
import GymCardLinkComponent from "../../GymCardComponent/GymCardLinkComponent";
import HeaderComponent from "../../HeaderComponent/HeaderComponent";
import InputFieldComponent from "../../InputFieldComponent/InputFieldComponent"
import RoundButtonComponent from "../../RoundButtonComponent/RoundButtonComponent"

const gyms = [
    "city",
    "farsta",
    "gärdet",
    "hagastan"
]


const PickGymComponent = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }
    React.useEffect(() => {
        const results = gyms.filter(gym => gym.includes(searchTerm)
        ); setSearchResults(results);
    }, [searchTerm]);

    
    return (
        <div className={styles.wrapper}>
            <HeaderComponent imageName="background" title="PICK A GYM"/>
            <InputFieldComponent value={searchTerm} onChange={handleChange} label="SEARCH" />
            {searchResults.map(item => (
                <GymCardLinkComponent gym={item} /> 
            ))}
            <div className={styles.fadeout}></div>
            <RoundButtonComponent />
        </div>

    )
}

export default PickGymComponent;