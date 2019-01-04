/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/albumList';



// type Props = {};
export default class App extends Component {

  
  render() {
    
    return (
      <View>
        <Header text={'Albums'}></Header>
        <AlbumList />
      </View>

    );
  }
}

const styles = StyleSheet.create({

});
