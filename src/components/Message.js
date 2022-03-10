import React, { Component } from "react";
import MessageChild from "./MessageChild";

export class Message extends Component {
	render() {
		return (
			<>
				<h1 style={styles.messageH}>Hello from Message</h1>
				<p style={{ fontFamily: "Gill Sans" }}>The name is {this.props.name}</p>
				<p style={styles.messageP}>
					{this.props.name} {this.props.message}
				</p>
				<MessageChild num={this.props.num} />
			</>
		);
	}
}
const styles = {
	messageH: {
		fontFamily: "Gill Sans",
		fontSize: "2em",
		weight: "bolder",
	},
	messageP: {
		fontFamily: "Gill Sans",
		fontSize: "14px",
		color: "blue",
	},
};

//change the way line 10 p tag looks and change message child
export default Message;