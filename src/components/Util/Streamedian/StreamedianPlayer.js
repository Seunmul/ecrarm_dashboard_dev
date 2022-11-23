import React from "react";


export default class StreamedianPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bufferDuration: 30,
      socket: "ws://localhost:8080/ws/",            
      redirectNativeMediaErrors: true,


    };

  }

  render() {
    return (
      <div>
        <video id={this.props.id} controls autoPlay>
          {this.props.children}
        </video>
      </div>
    );
  }
}
