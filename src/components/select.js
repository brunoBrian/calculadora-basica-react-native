import React from 'react';
import {StyleSheet, Picker} from 'react-native';

const Select = props => (
  <Picker style={styles.operation} selectedValue={props.operation} onValueChange={op => props.atualizaOperacao(op)}>
    <Picker.Item label='Soma' value='soma' />
    <Picker.Item label='Subtração' value='subtracao' />
    <Picker.Item label='Multiplicação' value='multiplicacao' />
    <Picker.Item label='Divisão' value='divisao' />
  </Picker>
);

export default Select;

const styles = StyleSheet.create({
  operation: {
    marginVertical: 15,
  },
});