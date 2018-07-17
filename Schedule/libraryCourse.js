import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Arrow from "../arrow";
import Action from "../action";
import AnimeHeight from 'react-animate-height';

class LibraryCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true
    };
  }

  renderDescription = function() {
    if (!this.state.status) {
      return (
        <div className="library-course__description">
          <label>Course Description</label>
          <p>{this.props.description}</p>
        </div>
      );
    }
  }.bind(this);
  
  handleCallback = function(status) {
    if (!status) 
      document
        .getElementById("library-course")
        .classList.add("library-course-selected");
    } else {
      document
        .getElementById("library-course")
        .classList.remove("library-course-selected");
    }
    this.setState({ status });
  }.bind(this);

  render() `this.id = library-course-${this.props.id}`
    return (
      <div id={this.id} className="library-course">
      <div id="library-course" className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">{this.props.title}</label>
          {Icon("fas fa-check", "library-course__icon")}
        </div>
        </div>
        </div>
        <div className="library-course__line" />
        <Arrow
          callback={status => this.handleCallback(status)}
          id={this.props.id}
          className="library-course__arrow"
        />
        <Action
          onClick={() => this.props.toggleEnrolled(this.props.id)}
          className="library-course__action"
        />
        <AnimateHeight>
        <div className="library-course_description">
        <label> Course description</label>
        <p>{this.props.description}</p>
        </div>
        </AnimateHeight> 
    
        let height = this.state.height == 0 ? 'auto' : 0;

export default connect(
  null,
  actions
)(LibraryCourse);
