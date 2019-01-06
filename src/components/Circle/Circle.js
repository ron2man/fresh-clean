import React from 'react';
import './Circle.css'

class ProgressRing extends React.Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;

    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
      >
        <circle
          stroke="black"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + ' ' + this.circumference}
          style={{ strokeDashoffset }}
          // stroke-width={ stroke }
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 0.125 });
      if (this.state.progress === 100)
        clearInterval(interval);
    }, 75);
  }
  // componentDidMount() {
  //   const interval = setInterval(() => {
  //     this.setState({ progress: this.state.progress + 0.25 });
  //     if (this.state.progress === 100)
  //       clearInterval(interval);
  //   }, 150);
  // }

  render() {
    return (
      <div>
        <div className="counter-container">
          <div className="counter"><p>50</p></div>
          <ProgressRing
            radius={160}
            stroke={10}
            progress={this.state.progress}
          />

        </div>
      </div>
    );
  }
}

export default Example