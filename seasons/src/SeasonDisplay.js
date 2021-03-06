import './SeasonDisplay.css';
import React from 'react';

let SUMMER = 'summer';
let WINTER = 'winter';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it it chilly!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        return lat > 0 ? SUMMER : WINTER;
    }

    return lat > 0 ? WINTER : SUMMER;
};

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
};

export default SeasonDisplay;