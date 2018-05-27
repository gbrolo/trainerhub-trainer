import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import {Button, ButtonGroup, List, ListItem, Icon, Divider, CheckBox, FormLabel, FormInput} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from './styles';
import { database, provider } from '../../../../config/firebase';

class AddTraining extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tname: '',
            tdailyDuration: 0,
            tcomments: '',
            treps: 0,
            tsets: 0
        };

        this.goHome = this.goHome.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    async goHome() {
        // send data here to firebase
        var userUid = this.props.uid;
        var newTraining = {
            tname: this.state.tname,
            tdailyDuration: this.state.tdailyDuration,
            tcomments: this.state.tcomments,
            treps: this.state.treps,
            tsets: this.state.tsets
        };

        let userData = database.ref('users').child(userUid);
        let snapshot = await userData.once('value');
        let trainings = snapshot.val().trainings;
        if (trainings) {
            trainings.push(newTraining);
        } else {
            trainings = [];
            trainings.push(newTraining);
        }
        userData.update({
            trainings: trainings
        }).then(() => {
            alert('Entrenamiento agregado con exito');
        }).catch((err) => {
            console.log(err);
        });

        Actions.Home();
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Nombre del entrenamiento</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ tname: value })}/>

                <FormLabel>Repeticiones</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ treps: value })}/>

                <FormLabel>Sets</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ tsets: value })}/>

                <FormLabel>Duración diaria (en minutos)</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ tdailyDuration: value })}/>

                <FormLabel>Comentarios</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ tcomments: value })}/>

                <Button
                    raised
                    borderRadius={4}
                    title={'AGREGAR ENTRENAMIENTO'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.goHome}/>
            </View>
        );
    }
}

export default connect(null)(AddTraining);
