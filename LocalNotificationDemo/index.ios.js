/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';

var LocalNotificationManager = NativeModules.LocalNotificationManager;


export default class LocalNotificationDemo extends Component {
  
  _firelocalnotification(){
      LocalNotificationManager.fireNotification('Demo Notification');
  }



  render() {
    return (
      <View style={styles.container}>
      <View>
      <Text style={styles.welcome}>
        Welcome{"\n"}
        Local Notification Demo
        </Text>
      </View>
        <TouchableOpacity style={styles.sendNotification} onPress={this._firelocalnotification}>
        <Text style = {styles.sendNotificationText}>Send Notification</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    textAlign:'center',
    color:'#293B4A',
    opacity:0.7,
    paddingBottom:50,
    fontSize:20.0,
 },
  sendNotification: {
    marginRight:20,
    marginLeft:20,
    marginTop:10,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    backgroundColor:'#293B4A',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  sendNotificationText: {
    color:'#fff',
    textAlign:'center',
  },
});

AppRegistry.registerComponent('LocalNotificationDemo', () => LocalNotificationDemo);
