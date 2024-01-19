import React, { Component } from "react";
import Client from "./Client";
import FloatingAddButton from "./FloatingAddButton";
import cal from "../images/DateTime.png";
import EventCalendar from "./EventCalander";

class ClientView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 4,
      flag: true,
      person: [
        {
          id: 1,
          fname: 'Mukesh',
          lname: 'Bharti',
          location: 'Daltonganj, Jharkhand',
          appointments: '',
        },
        {
          id: 2,
          fname: 'Ankit',
          lname: 'Pratap',
          location: 'Patna, Bihar',
          appointments: '',
        },
        {
          id: 3,
          fname: 'Anand',
          lname: 'Raj',
          location: 'Patna, Bihar',
          appointments: '',
        },
        {
          id: 4,
          fname: 'Meet',
          lname: 'Virani',
          location: 'Surat, Gujrat',
          appointments: '',
        }
      ],
    };
  }

  addData = () => {
    const newObject = {
      id: this.state.count + 1,
      fname: "",
      lname: "",
      location: "",
      appointments: "",
    };

    this.setState({
      person: [...this.state.person, newObject],
      count: this.state.count + 1,
    });
  };

  updateData = (id, newObj) => {
    const updatedList = this.state.person.map((obj) =>
      obj.id === id ? newObj : obj
    );
    this.setState(
      {
        person: updatedList,
      },
      () => {
        console.log(this.state.person);
      }
    );
  };

  deleteData = (id) => {
    const newArray = this.state.person.filter((obj) => obj.id !== id);
    this.setState({
      person: newArray,
    });
  };

  back = () => {
    this.setState({
      flag: true,
    })
  }

  render() {
    return (
      <>
        {this.state.flag ? (
          <div>
            {this.state.person.map((x) => (
              <Client
                key={x.id}
                id={x.id}
                fname={x.fname}
                lname={x.lname}
                location={x.location}
                appointments={x.appointments}
                update={this.updateData}
                delete={this.deleteData}
              />
            ))}
            <FloatingAddButton addData={this.addData} />
            <div className="calander-button" onClick={() => this.setState({flag: false})}>
              <img src={cal} className="img" alt="" />
            </div>
          </div>
        ) : (
          <EventCalendar person={this.state.person} back={this.back} />
        )}
      </>
    );
  }
}

export default ClientView;
