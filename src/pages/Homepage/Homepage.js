import React from 'react';
import FirstBox from '../../components/FirstBox/FirstBox.js'
import SecondBox from '../../components/SecondBox/SecondBox.js'
import ThirdBox from '../../components/ThirdBox/ThirdBox.js'

class Homepage extends React.Component {
    render() {
        return <div className="boxes">
            <FirstBox  />
            <SecondBox date="1545894000000"/>
             {/* 27/12/2018  */}
            <ThirdBox />
        </div>;
    }
}

export default Homepage;