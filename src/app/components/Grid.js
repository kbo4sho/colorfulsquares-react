import React, { PropTypes, Component } from 'react';
import Thumbnail from './Thumbnail';

export default class Grid extends Component {
  render() {
    return (
      <div className="container">
        <div className="thumbnail-container">
          {this.props.items.map(item =>
            <Thumbnail
              key={item.id}
              item={item}
              setSelectedItem={this.props.setSelectedItem}
              setRoute={this.props.setRoute}
            />
          )}
        </div>
      </div>
    );
  }
}

Grid.defaultProps = {
  items: [{ "url": "http://lorempixel.com/40/40/", "id": 0 }, { "url": "http://lorempixel.com/40/40/", "id": 1 }]
};

Grid.propTypes = {
  items: PropTypes.array.isRequired,
  setSelectedItem: PropTypes.func,
  setRoute: PropTypes.func
};
