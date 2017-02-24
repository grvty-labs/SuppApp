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
});

class SearchableList extends Component {
  constructor (props) {
    console.log(props);
    super(props);
    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    console.log(this.props);
    let products = this.props.products.map(
      (element, index) =>  (<Text>{ element.name }</Text>));

    return <ScrollView>{ products }</ScrollView>;
  }

  render() {
    const {
      container,
    } = styles;

    return (
      <View
        style={ container } >
        <TextInput placeholder='Buscar'></TextInput>
        { this.renderList() }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchableList);
