import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from '../components/Main';
import * as ColorfulSquaresActions from '../actions/index';

class App extends Component {
  render() {
    const {colorfulSquares, actions} = this.props;
    return (
      <div>
        <Main
          actions={actions}
          items={colorfulSquares.items}
          />
        {this.props.children && React.cloneElement(this.props.children, {
          selectedItem: this.props.colorfulSquares.selectedItem,
          setCommentForItem: this.props.actions.setCommentForItem,
          setRoute: this.props.actions.setRoute
        })}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  colorfulSquares: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    colorfulSquares: state.colorfulSquares
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ColorfulSquaresActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
