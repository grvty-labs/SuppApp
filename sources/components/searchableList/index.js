'use strict';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'powderblue',
  },
  search: {
    height: 25,
    borderBottomColor: '#0000',
    borderBottomWidth: 1,
    backgroundColor: '#ffff',
    color: '#2A2A2A',
  },
});

class SearchableList extends Component {
  constructor (props) {
    super(props);
    console.log('props:', props);
    this.renderList = this.renderList.bind(this);
    this.renderProductInfo = this.renderProductInfo.bind(this);
  }

  renderProductInfo(product, index) {
    //pk,name,parsed_price,parsed_condition,part_number,photographs,paused,parsed_delivery
    return (
    <View key={ index }>
      <Text>{ product.name }</Text>
      <Text>{ product.parsed_price }</Text>
      <Text>{ product.parded_condition }</Text>
    </View>);
  };

  renderList() {
    let products = this.props.products.map(this.renderProductInfo);

    return <ScrollView>{ products }</ScrollView>;
  }

  render() {
    const {
      container,
      search,
    } = styles;

    return (
      <View
        style={ container } >
        <TextInput placeholder='Buscar' style={ search }></TextInput>
        { this.renderList() }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer.products,
    token: state.loginReducer.token,
  };
}

function mapDispatchToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchableList);
