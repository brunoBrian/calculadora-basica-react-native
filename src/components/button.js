import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const ButtonElement = props => (
  <TouchableOpacity style={styles.button} onPress={props.acao}>
    <Text style={styles.buttonText}>{props.title}</Text> 
  </TouchableOpacity>
);

export default ButtonElement;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    height: 50,
    backgroundColor: '#2296f3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16,
    color: '#fff'
  }
});