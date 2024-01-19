import React, { Component } from "react";
import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";

class EventCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      appointments: this.props.person,
      back: this.props.back,
    };
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { selectedDate, appointments } = this.state;

    const filteredAppointments = appointments.filter(
      (appointment) =>
        new Date(appointment.appointments).toDateString() ===
        selectedDate.toDateString()
    );

    return (
      <div className="event-cal">
        <div>
          <Calendar
            onChange={this.handleDateChange}
            value={selectedDate}
            tileContent={({ date, view }) => {
              if (view === "month") {
                const hasAppointment = filteredAppointments.some(
                  (appointment) =>
                    new Date(appointment.appointments).toDateString() ===
                    date.toDateString()
                );
                return hasAppointment ? (
                  <div className="event-indicator"></div>
                ) : null;
              }
              return null;
            }}
          />
        </div>

        <div>
          <h3>Appointments</h3>
          <ul>
            {filteredAppointments.map((appointment, index) => (
              <li key={index}>{`${appointment.fname} ${appointment.lname} ${appointment.location} - ${new Date(
                appointment.appointments
              ).toLocaleString()}`}</li>
            ))}
          </ul>
        </div>
        <button
          className="floating-add-button"
          onClick={() => this.state.back()}
        >
          BACK
        </button>
      </div>
    );
  }
}

export default EventCalendar;
