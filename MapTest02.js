import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyAwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Press RR to reload,{'\n'}
        </Text>
      </View>
    );
  }
}
<style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }
      #right-panel {
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }

      #right-panel select, #right-panel input {
        font-size: 15px;
      }

      #right-panel select {
        width: 0%;
      }

      #right-panel i {
        font-size: 12px;
      }
      #right-panel {
        height: 0%;
        float: right;
        width: 0px;
        overflow: auto;
      }
      #map {
        //margin-right: 400px;
     font-size: 18px;
        font-family: Arial;
      }
      #floating-panel {
        background: #fff;
        padding: 5px;
        font-size: 18px;
        font-family: Arial;
        border: 1px solid #ccc;
        box-shadow: 0 2px 2px rgba(33, 33, 33, 0.4);
        display: none;
      }
      @media print {
        #map {
          height: 0px;
          margin: 0;
        }
        #right-panel {
          float: none;
          width:0px;
        }
      }
    </style>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyAwesomeProject', () => MyAwesomeProject);
