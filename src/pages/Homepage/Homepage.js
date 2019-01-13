import React from 'react';
import FirstBox from '../../components/FirstBox/FirstBox.js'
import ShowTimeLeft from '../../components/ShowTimeLeft/ShowTimeLeft.js'

import SelectDate from '../../components/SelectDate/SelectDate.js'
import ThirdBox from '../../components/ThirdBox/ThirdBox.js'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            startDate: null,
            // startDate: 1545894000000,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        // this.setState({startDate: e.target.value});
        console.log('hey')
      }

    render() {
        return <div className="boxes">
            <FirstBox />
            {this.state.startDate && <ShowTimeLeft date={this.state.startDate} />}
            {!this.state.startDate && <SelectDate onChange={this.handleChange} />}
            {/* 27/12/2018  */}
            {/* <SelectDate /> */}
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