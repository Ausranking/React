import { Component } from "react";

class ClassEvent extends Component {
  HandleClick() {
    alert("Button was Clicked");
  }
  render() {
    return (
      <div>
        Class Event handler
        <button onClick={this.HandleClick}>Click</button>
      </div>
    );
  }
}
export default ClassEvent;
