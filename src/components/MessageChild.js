import React, { Component } from 'react'

export class MessageChild extends Component {
  render() {
	return (
		<>
			Favorite number is{" "}
			<span style={{ color: "red" }}> {this.props.num}</span>
		</>
	)
  }
}

export default MessageChild