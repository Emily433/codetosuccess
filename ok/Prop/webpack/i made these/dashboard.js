import React, { Component } from "react";
component: <NewsletterGrid/>

import TabNav from './tabnav';
import NewsletterGrid from "./newsletterGrid"

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <NewsletterGrid history ={this.props.history}/>
                    
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Hey There - Requests</h4>
                },
            ]
        }
        handleTabChange =(title)=> {
            const tabs = this.state.tabs;
            tabs.map(tab =>{
                if (tab.title == title){
                    tab.active = false
                }
            })
        }
        this.setState ({tabs});
        
    }

  render() {
    return (
        <div className='dashboard'>
            <TabNav handleClick ={(title)=> this.handleTabChange (title)} tabs={this.state.tabs}/>
        </div>
    )
  }

}

export default Dashboard;