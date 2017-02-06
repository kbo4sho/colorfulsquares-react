import React, {PropTypes, Component} from 'react';

export default class Thumbnail extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setSelectedItem(this.props.item.id);
    this.props.setRoute('/detail');
  }

  render() {
    return (
      <div className="fade">
        <a onClick={this.handleClick}>
          <img src={this.props.item.thumbnailUrl}/>
        </a>
      </div>
    );
  }
}

Thumbnail.defaultProps = {
  item: {"thumbnailUrl":"http://lorempixel.com/40/40","id":"0"}
};

Thumbnail.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func,
  setRoute: PropTypes.func
};
