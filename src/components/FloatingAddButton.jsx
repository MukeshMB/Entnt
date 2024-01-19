import React, { Component } from 'react'

export class FloatingAddButton extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         addData: this.props.addData
      }
    }

  render() {
    return (
      <div className="floating-add-button" onClick={this.state.addData}>
      +
    </div>
    )
  }
}

export default FloatingAddButton
