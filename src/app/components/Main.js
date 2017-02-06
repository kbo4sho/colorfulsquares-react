import React, { PropTypes, Component } from 'react';
import Grid from '../components/Grid';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <h4>Colorful Squares</h4>
          </div>
        </div>
        <Grid 
          items={this.props.items} 
          setSelectedItem={this.props.actions.setSelectedItem}
          setRoute={this.props.actions.setRoute}
        />
        <div className="footer">
          <div className="container">
            <p>Created by Kevin Bolander <span className="glyphicon glyphicon-thumbs-up"></span></p>
          </div>
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  items: [{ "url": "http://lorempixel.com/40/40/", "id": "0" }, { "url": "http://lorempixel.com/40/40/", "id": "1" }]
};

Main.propTypes = {
  items: PropTypes.array,
  actions: PropTypes.object
};