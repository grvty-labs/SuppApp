'use strict';
import { connect } from 'react-redux';
import { loginSend } from '../../actions/loginActions';
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
    flexGrow: 1,
    backgroundColor: 'powderblue',
  },

  buttonStyle: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff',
    flexGrow: 1,
  },

  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flexGrow:  1,
  },

  header: {
    flexGrow: 1,
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
          onPress={ () => (this.props.loginSend('daniel.ortiz', 'grvty_admin')) }
          style={ buttonStyle }>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.loginReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginSend: (username, password) => dispatch(loginSend(username, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
