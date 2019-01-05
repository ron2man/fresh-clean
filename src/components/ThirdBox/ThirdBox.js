import React from 'react';
import './ThirdBox.css'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

class ThirdBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 };

        this.prevQuote = this.prevQuote.bind(this);
        this.nextQuote = this.nextQuote.bind(this);
    }

    prevQuote() {
        let idx = this.state.index;
        if (idx - 1 > 0) this.setState({ index: idx - 1 })
        else this.setState({ index: this.props.quotes.length - 1 })
    }

    nextQuote() {
        let idx = this.state.index;
        if (idx + 1 < this.props.quotes.length) this.setState({ index: idx + 1 })
        else this.setState({ index: 0 })
    }

    render() {
        return <div className="box third-box flex space-between align-items-center">

            <div className="arrow" onClick={this.prevQuote}><FontAwesomeIcon icon={faChevronCircleLeft} /></div>
            <div className="content">
                <p className="quote">{this.props.quotes[this.state.index].quote}</p>
                <p className="by">{this.props.quotes[this.state.index].by}</p>
            </div>
            <div className="arrow" onClick={this.nextQuote} ><FontAwesomeIcon icon={faChevronCircleRight} /></div>
        </div>;
    }
}

export default ThirdBox;

ThirdBox.propTypes = {
    quotes: PropTypes.array,
};
