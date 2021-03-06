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
    }
     else 
    {
      document.getElementById("library-course")
    .classList.remove("library-course-selected")}
      
      
    this.setState({ status });
     $bind(this);
  render() 
  {
    this.id = `library-course-${this.props.id}`;
    return (
      <div id={this.id} className="library-course">
        <div className="library-course__title-check">
          <div className="library-course__title">{this.props.title}</div>
          { this.props.enrolled ? Icon("fas fa-check", "library-course__icon") : ''}
        </div>
        <Arrow
          callback={status => this.handleCallback(status)}
          id={this.props.id}
          className="library-course__arrow"
        />
        <Action
          id={this.props.id}
          onClick={() => this.props.toggleEnrolled(this.props.id)}
          className={`library-course__action ${this.props.enrolled ? 'action-remove' : ''}`}
        />
        </div>

  
        
        <AnimateHeight>
        <div className="library-course_description">
        <label> Course description</label>
        <p>{this.props.description}</p>
        </div>
        </AnimateHeight> 
    }
    
