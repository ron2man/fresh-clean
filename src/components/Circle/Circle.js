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
        />`
          {this.props.progress < 100 &&
          <text x="50%" y="50%" textAnchor="middle" fontSize="36">
            {Math.floor(this.props.progress / 1.667)}
          </text>
        }
        {this.props.progress === 100 &&
          <text x="50%" y="50%" textAnchor="middle" fontSize="36">
            Done
          </text>
        }
      </svg>

    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 0.125 });
      if (this.state.progress === 100)
        clearInterval(this.interval);
    }, 75);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick() {
    this.setState({ progress: 0 })
    console.log(this.interval)
  }
  // componentDidMount() {
  //   const interval = setInterval(() => {
  //     this.setState({ progress: this.state.progress + 0.125 });
  //     if (this.state.progress === 100)
  //       clearInterval(interval);
  //   }, 75);
  // }


  render() {
    return (
      <div>
        <ProgressRing
          radius={160}
          stroke={10}
          progress={this.state.progress}
        />
        <button onClick={this.handleClick}>Start</button>

      </div>
    );
  }
}

export default Example