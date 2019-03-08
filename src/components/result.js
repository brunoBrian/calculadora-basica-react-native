import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Result = props => (
  <View style={styles.mainHeader}>
    <TextInput style={styles.input} placeholder='Resultado' value={props.resultado} editable={false}/>
  </View>
);

export default Result;

const styles = StyleSheet.create({
  mainHeader: {
    backgroundColor: '#ccc'
  },
  input: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontSize: 30,
    height: 100
  }
});