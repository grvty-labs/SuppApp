'use strict';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './login';
import SearchableList from './searchableList';

class App extends Component {
  render() {
    return (
      <View style={ { flex: 1 } }>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
