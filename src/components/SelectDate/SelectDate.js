import React from 'react';
import './SelectDate.css'

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class SelectDate extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            startDate: new Date(),
            isSelectOpen: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);


    }

    handleChange(date) {
        console.log(this.state.startDate.getTime())
        this.props.onChange(date.getTime())
        console.log(this.state.startDate)
        this.setState({ startDate: date, isSelectOpen: !this.state.isSelectOpen })

        this.toggleCalendar()
    }

    toggleCalendar(e) {
        e && e.preventDefault()
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleClick(e) {
        e.stopPropagation();
        console.log(this.state.isSelectOpen)
        this.setState({ isSelectOpen: !this.state.isSelectOpen })
    }

    handleClickOutside(e) {
        this.setState({ isSelectOpen: !this.state.isSelectOpen })
    }

    render() {
        return <div className="box second-box flex space-evenly align-items-center" >
            <div onClick={this.handleClick} >
            <FontAwesomeIcon icon={faPlusCircle} />Select Date</div>
            {
                this.state.isSelectOpen &&
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    onClickOutside={this.handleClickOutside}
                    withPortal
                    startOpen
                />
            }


        </div>;
    }
}

export default SelectDate;


