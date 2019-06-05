import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Image} from 'react-native';

import ButtonComponent from'./component/ButtonComponent';
const frases =[
  'Não coloque limite em seu sonhos,coloque fé.',
  'Tudo posso aquele que me fortalece.'
];
const botaoPressionado = () => {
  let frase = frases[Math.floor(Math.random() * frases.length)];
  Alert.alert('Frase do Dia!', frase);
}

const imagem = require('./img/logo.png');
export default class App extends Component {
  render() {
    return (
      <View style={estilo.container}>
        <Image source={imagem} />
        <View style={estilo.botaoContainer} />
        <ButtonComponent style={estilo.botao} texto="Mensagem" cor="#000" Func={botaoPressionado}/>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoContainer: {
    marginTop: 20,
  },
  botao: {
    borderRadius: 50
  }
})