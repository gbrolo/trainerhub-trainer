import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import {Button, ButtonGroup, FormLabel, FormInput, FormValidationMessage, Icon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as home, theme } from "../../../home/index"
const { signOut } = home;

const { color } = theme;

class AddTrainee extends React.Component {
    constructor(){
        super();
        this.state = {
            traineeId: 'pupusa'
        }

        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.sendTraineeId = this.sendTraineeId.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    onChangeScreen(selectedIndex) {
        if (selectedIndex === 0) {
            Actions.Home()
        } else if (selectedIndex === 1) {
            Actions.AddTrainee()
        }
    }

    sendTraineeId() {
        console.log('entering addTrainee');
        console.log('state', this.state);
        console.log('traineeId', this.state.traineeId);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabbar}>
                    <ButtonGroup
                        buttons={['MIS ATLETAS', 'AGREGAR ATLETA']}
                        containerStyle={styles.buttonTabBar}
                        selectedIndex={1}
                        onPress={this.onChangeScreen}
                        textStyle={styles.buttonTextTabBar}
                        containerBorderRadius={0}
                        innerBorderStyle={{borderStyle: "hidden"}}
                        selectedButtonStyle={{backgroundColor: "#2c3847"}}
                        selectedTextStyle={{color: "#f4d942"}}/>
                </View>

                <View style={styles.infoText}>
                    <Icon name='info-with-circle' color='#fff' type="entypo" size={30}/>
                    <Text style={styles.txt}>Ingrese el código que su atleta le proporcionó, este lo puede encontrar él en la aplicación de
                    atletas en la sección de "opciones"</Text>
                </View>

                <FormLabel>Código del Atleta</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ traineeId: value })}/>
                <Button
                    raised
                    borderRadius={4}
                    title={'AGREGAR ATLETA'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.sendTraineeId}/>
            </View>
        );
    }
}

export default connect(null)(AddTrainee);
