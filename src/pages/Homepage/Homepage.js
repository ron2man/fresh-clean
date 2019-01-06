import React from 'react';
import FirstBox from '../../components/FirstBox/FirstBox.js'
import ShowTimeLeft from '../../components/ShowTimeLeft/ShowTimeLeft.js'

import SelectDate from '../../components/SelectDate/SelectDate.js'
import ThirdBox from '../../components/ThirdBox/ThirdBox.js'

// import Example from '../../components/Circle/Circle.js'

class Homepage extends React.Component {
    render() {
        return <div className="boxes">
            <FirstBox />
            <ShowTimeLeft date="1545894000000" />
            {/* 27/12/2018  */}
            <SelectDate />
            {/* <Example /> */}
            <ThirdBox quotes={quotes} />
        </div>;
    }
}

export default Homepage;



const quotes = [
    { quote: 'with self-discipline most anything is possible.', by: 'thedore roosevelt' },
    { quote: `we don't have to be smarter than the rest; we have to be more disciplined than the rest.`, by: 'warren buffett' },
    { quote: `discipline is the bridge between goals and accomplishments`, by: '' },
    { quote: `suffer the pain of discipline or suffer the pain of regret`, by: '' }
];