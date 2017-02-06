import React, { PropTypes, Component } from 'react';
import CardTextInput from './CardTextInput';

export default class Card extends Component {
  render() {
    return (
      <div className="fade">
        <div className="overlay">
          <div className="card">
            <div className="card-container">
              <h4>{this.props.selectedItem.title}</h4>
              <img src={this.props.selectedItem.url} />
              <CardTextInput 
                setCommentForItem={this.props.setCommentForItem} 
                selectedItem={this.props.selectedItem} />
              <div className="button-gutter">
                <button className="btn btn-default" onClick={() => this.props.setRoute("/")}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  selectedItem: { "url": "http://lorempixel.com/10/10", "title": "title", "text": "text" }
};

Card.propTypes = {
  selectedItem: PropTypes.object,
  setCommentForItem: PropTypes.func,
  setRoute: PropTypes.func
};
