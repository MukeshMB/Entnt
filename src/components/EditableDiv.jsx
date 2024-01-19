import React, { Component } from "react";

class EditableDiv extends Component {
  constructor(props) {
    super(props);

    this.state = {
      handler: props.handler,
    };

    this.divRef = React.createRef();
  }

  componentDidMount() {
    if (this.divRef.current) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(this.divRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  handleInput = (e) => {
    this.state.handler(e.target.innerHTML);
  };

  render() {
    return (
      <div
        id="editableDiv"
        ref={this.divRef}
        contentEditable={true}
        onInput={this.handleInput}
      >
        {this.props.val}
      </div>
    );
  }
}

export default EditableDiv;
