import React from 'react';
import './ThirdBox.css'

class ThirdBox extends React.Component {
    render() {
        return  <div className="box third-box flex space-between align-items-center">
                
        {/* <div className="arrow"><i className="fas fa-chevron-circle-left"></i></div> */}
        <div className="content">
            <p className="quote">with self-discipline most anything is possible.</p>
            <p className="by">- thedore roosevelt -</p>
            {/* <!-- <p>we don't have to be smarter than the rest; we have to be more disciplined than the rest. warren buffett</p> -->
            <!-- <p>discipline is the bridge between goals and accomplishments</p> -->
            <!-- <p>suffer the pain of discipline<br> or<br> suffer the pain of regret</p> --> */}
        </div>
        {/* <div className="arrow"><i className="fas fa-chevron-circle-right"></i></div> */}
    </div>;
    }
}

export default ThirdBox;