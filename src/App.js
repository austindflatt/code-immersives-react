import React, { Component } from 'react'
import './App.css';
import Message from './components/Message';

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Message name={'Austin'} message={'is hungry'} />
//       </div>
//     )
//   }
// }

// export default App

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			toggle: false,
		};
	}
	add = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};
	minus = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};
	reset = () => {
		this.setState({
			count: 0,
		});
	};

	render() {
		return (
			<div className="App">
				<h1> Help Us Count</h1>
				<h1>{this.state.count}</h1>
				<button onClick={this.add}>+</button>
				<button onClick={this.minus}>-</button>
				<button onClick={this.reset}>Reset</button>
				<br></br>
				<div
					style={{
						height: "100px",
						backgroundColor: this.state.toggle ? "blue" : "red",
					}}
				>
					<button>Toggle</button>
				</div>
			</div>
		);
	}
}

export default App;