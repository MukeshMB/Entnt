import React, { Component } from "react";
import EditableDiv from "./EditableDiv";
import DateTimePicker from "./DateTimePicker";

class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      fname: props.fname,
      lname: props.lname,
      location: props.location,
      appointments: props.appointments,
      update: props.update,
      delete: props.delete,
    };
  }

  updateFname = (val) => {
    const obj = {
      id: this.state.id,
      fname: val,
      lname: this.state.lname,
      location: this.state.location,
      appointments: this.state.appointments,
    };
    this.state.update(this.state.id, obj);
  };

  updateLname = (val) => {
    const obj = {
      id: this.state.id,
      fname: this.state.fname,
      lname: val,
      location: this.state.location,
      appointments: this.state.appointments,
    };
    this.state.update(this.state.id, obj);
  };

  updateLocation = (val) => {
    const obj = {
      id: this.state.id,
      fname: this.state.fname,
      lname: this.state.lname,
      location: val,
      appointments: this.state.appointments,
    };
    this.state.update(this.state.id, obj);
  };

  updateAppointments = (val) => {
    const obj = {
      id: this.state.id,
      fname: this.state.fname,
      lname: this.state.lname,
      location: this.state.location,
      appointments: val,
    };
    this.state.update(this.state.id, obj);
    this.setState({
      appointments: val,
    })
  };

  render() {
    return (
      <div className="client">
        <EditableDiv
          val={this.state.fname}
          key={this.state.id}
          id="fname"
          handler={(val) => this.updateFname(val)}
        />
        <EditableDiv
          val={this.state.lname}
          key={this.state.id}
          id="lname"
          handler={(val) => this.updateLname(val)}
        />
        <EditableDiv
          val={this.state.location}
          key={this.state.id}
          id="locations"
          handler={(val) => this.updateLocation(val)}
        />
        <EditableDiv
          val={this.state.appointments}
          key={this.state.id}
          id="appointments"
          handler={(val) => this.updateAppointments(val)}
        />
        <DateTimePicker handler={(val) => this.updateAppointments(val)} />

        <button
          className="btn"
          onClick={() => this.state.delete(this.state.id)}
        >
          X
        </button>
      </div>
    );
  }
}

export default Client;
