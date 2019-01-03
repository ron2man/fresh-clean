import React from 'react';
import './SecondBox.css'



class SecondBox extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { timeLeft: { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 } };
    }
    componentDidMount() {
        setInterval(() => {
            var time = timeLeft(+this.props.date)
            this.setState({ timeLeft: time })
        }, 1000)
    }
    render() {
        return <div className="box second-box flex space-evenly align-items-center">
            {this.state.timeLeft.years > 0 &&
                <div className="time">
                    <p className="digit">{this.state.timeLeft.years}</p>
                    <p>years</p>
                </div>
            }
            {
                this.state.timeLeft.months > 0 &&
                <div className="time">
                    <p className="digit">{this.state.timeLeft.months}</p>
                    <p>months</p>
                </div>
            }
            <div className="time">
                <p className="digit">{this.state.timeLeft.days}</p>
                <p>days</p>
            </div>
            <div className="time">
                <p className="digit">{this.state.timeLeft.hours}</p>
                <p>hours</p>
            </div>
            <div className="time">
                <p className="digit">{this.state.timeLeft.minutes}</p>
                <p>minutes</p>
            </div>
            <div className="time">
                <p className="digit">{this.state.timeLeft.seconds}</p>
                <p>seconds</p>
            </div>
        </div>;
    }
}

export default SecondBox;


function timeLeft(dateTimestamp) {
    var currentDate = Date.now();
    var timeLeft = {};
    const msecSec = 1000;
    const msecMinute = msecSec * 60;
    const msecHour = msecMinute * 60;
    const msecDay = msecHour * 24;
    const msecMonth = msecDay * 30;
    const msecYear = msecDay * 365;
    var diff = currentDate - dateTimestamp;

    timeLeft['years'] = Math.floor((diff) / msecYear);
    timeLeft['months'] = Math.floor((diff - (timeLeft.years * msecYear)) / msecMonth);
    timeLeft['days'] = Math.floor((diff - (timeLeft.years * msecYear) - (timeLeft.months * msecMonth)) / msecDay)
    timeLeft['hours'] = Math.floor((diff - (timeLeft.years * msecYear) - (timeLeft.months * msecMonth) - (timeLeft.days * msecDay)) / msecHour)
    timeLeft['minutes'] = Math.floor((diff - (timeLeft.years * msecYear) - (timeLeft.months * msecMonth) - (timeLeft.days * msecDay) - (timeLeft.hours * msecHour)) / msecMinute)
    timeLeft['seconds'] = Math.floor((diff - (timeLeft.years * msecYear) - (timeLeft.months * msecMonth) - (timeLeft.days * msecDay) - (timeLeft.hours * msecHour) - (timeLeft.minutes * msecMinute)) / msecSec)

    return timeLeft;
}
