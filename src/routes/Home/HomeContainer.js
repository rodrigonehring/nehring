import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Choicer from '../../components/Choicer';


class HomeContainer extends Component {
  render() {
    // const { actions } = this.props;

    return (
      <div>
        HomeContainer
        <Choicer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
