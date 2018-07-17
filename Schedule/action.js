import React, { Component } from "react";
import Icon from "./icon";

class Action extends Component {
  render() {
    return (
      <div className={"${this.props.className} action"}>
        {Icon("fas fa-plus-circle")}
        {/* fas fa-times-circle */}
      </div>
    );
  }
}
toggleArrow = function() {
  this.props.callback(this.state.status);
  if (this.state.status) {
    document.getElementById(this.id).classList.remove("arrow-closed");
  } else {
    document.getElementById(this.id).classList.add("arrow-closed");
  }

  this.setState({ status: !this.state.status });
}.bind(this);

export default Arrow;
<button
  onClick={() => this.props.onClick()}
  className={`${this.props.className} action`}
/>;
