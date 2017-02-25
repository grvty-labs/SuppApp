/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './ReactotronConfig';
import React, { Component } from 'react';
import App from './sources/components';
import configureStore from './sources/store';
import { Provider } from 'react-redux';
import {
  AppRegistry
} from 'react-native';

const store = configureStore();

export default class suppapp extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('suppapp', () => suppapp);
