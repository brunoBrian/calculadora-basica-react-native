import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Calculadora 1.0</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    paddingVertical: 20
  },
  headerText: {
    fontSize: 18,
    color: '#FFF'
  }
});