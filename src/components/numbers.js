import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Content = props => (
  <TextInput placeholder='Número' style={styles.inputNumber} value={props.num} onChangeText={value => props.atualizaValor(props.nome, value)} />
);

export default Content;

const styles = StyleSheet.create({
  inputNumber: {
    width: 140,
    fontSize: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20
  }
});