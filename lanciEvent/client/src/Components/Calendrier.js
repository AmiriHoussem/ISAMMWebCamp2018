
import React from 'react';
import ReactDOM from 'react-dom';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css' 
// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
const axios = require('axios');


 
export default class Calendrier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events:[
                {
                    title: 'All Day Event',
                    start: '2017-05-01'
                },
                {
                    title: 'Long Event',
                    start: '2017-05-07',
                    end: '2017-05-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2017-05-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2017-05-11',
                    end: '2017-05-13'
                },
                {
                    title: 'Meeting',
                    start: '2017-05-12T10:30:00',
                    end: '2017-05-12T12:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2017-05-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2017-05-28'
                }
            ],		
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:5000/event/')
    .then(function (response) {
      console.log({events:response.data});
      self.setState({
        events:response.data,
        });
      

    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
 
  render() {
      
      console.log(this.state);
    return (
      <div id="example-component">
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
         defaultDate={'2017-09-12'}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {this.state.events}	
    />
      </div>
    );
  }
}