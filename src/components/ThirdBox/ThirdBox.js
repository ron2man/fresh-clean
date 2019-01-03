import React from 'react';
import './ThirdBox.css'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// TODO: build function - that return the next cell of array every call

const quotes = [
    { quote: 'with self-discipline most anything is possible.', by: 'thedore roosevelt' },
    { quote: `we don't have to be smarter than the rest; we have to be more disciplined than the rest.`, by: 'warren buffett' },
    { quote: `discipline is the bridge between goals and accomplishments`, by: '' },
    { quote: `suffer the pain of discipline or suffer the pain of regret`, by: '' }
];



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
        else this.setState({ index: quotes.length - 1 })
    }

    nextQuote() {
        let idx = this.state.index;
        if (idx + 1 < quotes.length) this.setState({ index: idx + 1 })
        else this.setState({ index: 0 })
    }

    render() {
        return <div className="box third-box flex space-between align-items-center">

            <div className="arrow" onClick={this.prevQuote}><FontAwesomeIcon icon={faChevronCircleLeft} /></div>
            <div className="content">
                <p className="quote">{quotes[this.state.index].quote}</p>
                <p className="by">{quotes[this.state.index].by}</p>
            </div>
            <div className="arrow" onClick={this.nextQuote} ><FontAwesomeIcon icon={faChevronCircleRight} /></div>
        </div>;
    }
}

export default ThirdBox;