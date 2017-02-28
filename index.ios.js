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
import { Navigation } from 'react-native-navigation';
import {
  AppRegistry
} from 'react-native';
import { registerScreens } from './sources/components';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'suppapp.Login', // this is a registered name for a screen
      icon: require('./sources//img/tab.png'),
      selectedIcon: require('./sources/img/tab.png'), // iOS only
      title: 'login'
    },
    {
      label: 'Two',
      screen: 'suppapp.Search',
      icon: require('./sources//img/tab.png'),
      selectedIcon: require('./sources/img/tab.png'), // iOS only
      title: 'Search'
    }
  ]
});

export default class suppapp extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={ store }>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('suppapp', () => suppapp);
