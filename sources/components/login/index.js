'use strict';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'powderblue',
  },

  buttonStyle: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
    flex: 1,
  },

  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex:  1,
  },

  header: {
    flex: 1,
  },

});

class Login extends Component {
  render() {
    const {
      buttonStyle,
      container,
      input,
      header,
    } = styles;

    return (
      <View
        style={ container } >
        <Text style={ header }>Do a login</Text>
        <TextInput
          placeholder='user'
          style={ input } />
        <TextInput
          secureTextEntry = { true }
          placeholder = 'password'
          style={ input } />
        <TouchableHighlight
          style={ buttonStyle }>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
