import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles'

export default class Topo extends Component {
    render() {        
        return (
            <View>
                <Text style={styles.title}> Jokenpo </Text>
            </View>
        );
    }
}
