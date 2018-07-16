import React, { Component } from "react";
import * as actions from '../../actions';
import Action from "../action";
import Arrow from "../arrow";
import { connect } from "net";

{ this.props.title }
class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        <Arrow className="library-course__arrow" /> 
        <Action onClick={()=>this.props.toggleEnrolled(this.props.id)} className="library-course_action"/>
        <div className="library-course__description">
          <label>Course Description</label>
          <p>
          { this.props.description }
          </p>
        </div>
      </div>
    );
  }
}
<Action onClick={this.props.toggleEnrolled} className="library-course__action"/>
export default connect(null, [toggledEnrolled])(LibraryCourse);
