# Getting Started with ENTNT Fitness Training App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Body Fitness - Home Page

The Home Page component for the Body Fitness web app.

## Overview

The `HomePage` component is the landing page for the Body Fitness web app. It provides a visually appealing layout with a title strip and a client pane displaying relevant information.

## Components Used

- **ClientView:** A component responsible for rendering client-related information.

# Body Fitness - ClientView Component

The `ClientView` component is responsible for rendering a list of clients, allowing users to view, update, and delete client information. It also provides a floating button to add new clients and a button to navigate to the event calendar.

## Components Used

- **Client:** A component for rendering individual client details.
- **FloatingAddButton:** A floating button component for adding new clients.
- **EventCalendar:** A component for displaying an event calendar.

## State and Functionality

The component manages a state that stores client data, and it includes the following functionalities:

- `addData`: Adds a new client to the list.
- `updateData`: Updates client information based on the provided ID.
- `deleteData`: Deletes a client based on the provided ID.
- `back`: Navigates back from the event calendar to the client list.

# Body Fitness - Client Component

The `Client` component is responsible for rendering an individual client's details, allowing users to update and delete client information. It utilizes editable div elements for first name, last name, location, and appointments, along with a DateTimePicker for scheduling appointments.

## Components Used

- **EditableDiv:** A component providing editable div elements for dynamic content.
- **DateTimePicker:** A component for selecting and updating date and time.

## Props

- **id:** The unique identifier for the client.
- **fname:** The first name of the client.
- **lname:** The last name of the client.
- **location:** The location of the client.
- **appointments:** The scheduled appointments of the client.
- **update:** A function to update client information.
- **delete:** A function to delete the client.

## State and Functionality

The component manages local state for each client's information and includes the following functionalities:

- `updateFname`: Updates the first name of the client.
- `updateLname`: Updates the last name of the client.
- `updateLocation`: Updates the location of the client.
- `updateAppointments`: Updates the scheduled appointments of the client.
- `render`: Renders the client details, including editable div elements and a DateTimePicker.


# Body Fitness - EditableDiv Component

The `EditableDiv` component provides an editable div element for dynamic content. It is designed to be used for various purposes where users can input and edit text content.

## Props

- **handler:** A function that handles the input changes and receives the updated content.

## State and Functionality

The component manages a local state for the input handler and includes the following functionalities:

- `componentDidMount`: Sets up the initial selection and focus on the editable div.
- `handleInput`: Handles the input changes in the editable div and invokes the provided handler function.

# Body Fitness - DateTimePicker Component

The `DateTimePicker` component provides a date and time picker using the `react-datepicker` library. It allows users to select a specific date and time for scheduling appointments.

## Props

- **handler:** A function that handles the date and time changes and receives the formatted date and time string.

## State and Functionality

The component manages local state for the selected date and includes the following functionalities:

- `handleDateChange`: Updates the selected date in the state.
- `handleUpdateAppointment`: Invokes the provided handler function with the formatted date and time when the "Update Appointment" button is clicked.
- `formatDateTime`: Formats the selected date into a readable date and time string.

## Usage

To use this component in your project, follow these steps:

1. Install the `react-datepicker` library:

   ```bash
   npm install react-datepicker



