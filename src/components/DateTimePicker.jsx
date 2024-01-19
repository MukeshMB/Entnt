import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateTimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      handler: props.handler
    };
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  handleUpdateAppointment = () => {
    const { selectedDate } = this.state;
    const formattedDateTime = this.formatDateTime(selectedDate);
    this.state.handler(formattedDateTime);
  };

  formatDateTime = (date) => {
    if (date) {
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `${formattedDate} ${formattedTime}`;
    }
    return null;
  };

  render() {
    const { selectedDate } = this.state;

    return (
      <div>
        <div className="date-time">
          <DatePicker
            selected={selectedDate}
            onChange={this.handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select Date and Time"
          />
          <button onClick={this.handleUpdateAppointment} className="addBtn">
            Update Appointment
          </button>
        </div>
      </div>
    );
  }
}

export default DateTimePicker;
