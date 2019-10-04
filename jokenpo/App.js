import React, { Component } from 'react';
import Topo from './src/components/topo';
import Icone from './src/components/icone';
import { styles } from './src/styles';
import {View, Text, Button} from 'react-native';

export default class Jokenpo extends Component {

  constructor(props) {
    super(props);
    this.state = { choiceUser: '', choiceComputer: '', result: '' };
    this.choices = ['pedra', 'papel', 'tesoura'];
  }

  playJokenpo(numberUser) {
    var numberComputer = Math.floor(Math.random() * 3);

    if (numberUser == numberComputer) {
      this.setState({
        choiceUser: this.choices[numberUser],
        choiceComputer: this.choices[numberComputer],
        result: 'Empate'
      });
    }
    if (numberUser > numberComputer) {
      if ((numberUser - numberComputer) > 1) {
        this.setState({
          choiceUser: this.choices[numberUser],
          choiceComputer: this.choices[numberComputer],
          result: 'Você Perdeu'
        });
      } else {
        this.setState({
          choiceUser: this.choices[numberUser],
          choiceComputer: this.choices[numberComputer],
          result: 'Você Ganhou'
        });
      }
    }
    if (numberUser < numberComputer) {
      if ((numberComputer - numberUser) > 1) {
        this.setState({
          choiceUser: this.choices[numberUser],
          choiceComputer: this.choices[numberComputer],
          result: 'Você Ganhou'
        });
      } else {
        this.setState({
          choiceUser: this.choices[numberUser],
          choiceComputer: this.choices[numberComputer],
          result: 'Você Perdeu'
        });
      }
    }
  }

  render() {    
    return (
      <View>
        <Topo></Topo>
        <View style={styles.painelAction}>
          <View style={styles.button}>
            <Button title="pedra" onPress={() => { this.playJokenpo(0) }}></Button>
          </View>
          <View style={styles.button}>
            <Button title="papel" onPress={() => { this.playJokenpo(1) }}></Button>
          </View>
          <View style={styles.button}>
            <Button title="tesoura" onPress={() => { this.playJokenpo(2) }}></Button>
          </View>
        </View>
        <View style={styles.painelResults}>
          <Text style={styles.textResult}>{this.state.result}</Text>
          <Icone choice={this.state.choiceComputer} player='Computer'></Icone>
          <Icone choice={this.state.choiceUser} player='Usuário'></Icone>
        </View>
        <View></View>
      </View>
    );
  }
}

