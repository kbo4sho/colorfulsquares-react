import React, { PropTypes, Component } from 'react';

export default class CardTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.selectedItem.text || ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    this.props.setCommentForItem(this.props.selectedItem.id, e.target.value);
  }

  render() {
    return (
        <textarea
          type="text"
          className="form-control"
          placeholder="Your description will be saved as you type..."
          value={this.state.text}
          onChange={this.handleChange}
        />
    );
  }
}

CardTextInput.defaultProps = {
  selectedItem: {text:"textarea"}
};

CardTextInput.propTypes = {
  selectedItem: PropTypes.object,
  setCommentForItem: PropTypes.func
};
