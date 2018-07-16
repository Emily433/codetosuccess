import React,{Commponent} from 'react';

import Gradient from '../src/components/gradient';
class Schedule extends Commponent {
    render() {
        return (
            <div className="schedule">
                
            <h1 className="schedule__title">My Schedule</h1>
            <Gradient/>
            </div>
        )
    }
}

export default Schedule;