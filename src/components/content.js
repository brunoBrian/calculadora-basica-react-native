import React from 'react';
import {StyleSheet, View} from 'react-native';

import Numbers from './numbers';
import Select from './select';
import Button from './button';

const Content = props => (
  <View style={styles.content}>
    <View style={styles.numbers}>
      <Numbers num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
      <Numbers num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
    </View>
    <View>
      <Select operation={props.operation} atualizaOperacao={props.atualizaOperacao} />
    </View>
    <View style={styles.button}>
      <Button title='Calcular' acao={props.acao} />
      <Button title='Limpar' acao={props.limpar} />
    </View>
  </View>
);

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 2,
  },
  numbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  button: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
});