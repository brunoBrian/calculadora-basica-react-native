import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './src/components/header';
import Result from './src/components/result';
import Content from './src/components/content';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: '', 
      resultado: '',
      operation: 'soma'
    }

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  calcular() {
    let resultado = 0;
    const { num1, num2, operation } = this.state;

    if(num1 === '' || num2 === '' || isNaN(+num1) || isNaN(+num2))
      return;

    switch(operation) {
      case 'soma': 
        resultado = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtracao': 
        resultado = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiplicacao': 
        resultado = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divisao': 
        resultado = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        resultado = 0;
    }

    this.setState({resultado: resultado.toString(), num1: '', num2: ''});
  }

  atualizaOperacao(operation) {
    this.setState({operation})
  }

  limpar() {
    this.setState({resultado: ''})
  }

  atualizaValor(nome, num) {
    const obj = {};
    obj[nome] = num;

    this.setState(obj);
  }

  render() {
    const { num1, num2, resultado, operation } = this.state;
    
    return (
      <View style={styles.container}>
        <Header />
        <Result resultado={resultado} />
        <Content num1={num1} num2={num2} operation={operation} acao={this.calcular} atualizaValor={this.atualizaValor} atualizaOperacao={this.atualizaOperacao} limpar={this.limpar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});