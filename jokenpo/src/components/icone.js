import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../styles'

export default class Icone extends Component {
    render() {        
        if (this.props.choice == 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textPlayer}>{this.props.player}</Text>
                    <Image source={require('../../imgs/pedra.png')}></Image>
                </View>
            )
        } else if (this.props.choice == 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textPlayer}>{this.props.player}</Text>
                    <Image source={require('../../imgs/papel.png')}></Image>
                </View>
            )
        } else if (this.props.choice == 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.textPlayer}>{this.props.player}</Text>
                    <Image source={require('../../imgs/tesoura.png')}></Image>
                </View>
            )
        } else {
            return false;
        }
    }
}