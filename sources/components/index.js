'use strict';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
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

export function registerScreens(store, Provider) {
  Navigation.registerComponent('suppapp.Login', () => Login, store, Provider);
  Navigation.registerComponent('suppapp.Search', () => SearchableList, store, Provider);
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
