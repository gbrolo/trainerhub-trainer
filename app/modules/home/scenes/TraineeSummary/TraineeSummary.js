import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import {Button, ButtonGroup, List, ListItem, Icon, Divider} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
const { signOut } = auth;

const { color } = theme;

class TraineeSummary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }

        this.addTraining = this.addTraining.bind(this);
        this.addPlan = this.addPlan.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    addTraining() {
        Actions.AddTraining({ uid: this.props.traineeInfo.uid, trainings: this.props.traineeInfo.trainings });
    }

    addPlan() {
        Actions.AddPlan({ uid: this.props.traineeInfo.uid, plans: this.props.traineeInfo.plans })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoText}>
                    <Icon name='user-circle' color='#fff' type="font-awesome" size={80} />
                    <Text style={styles.titleTxt}>{ this.props.traineeInfo.username }</Text>
                    <Divider style={{ backgroundColor: 'white', marginVertical: 10 }} />
                    <Text style={styles.txt}>Edad: { this.props.traineeInfo.age }</Text>
                    <Text style={styles.txt}>Altura: { this.props.traineeInfo.height }</Text>
                    <Text style={styles.txt}>Peso: { this.props.traineeInfo.weight }</Text>
                </View>

                <Button
                    raised
                    borderRadius={4}
                    title={'AGREGAR ENTRENAMIENTO'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.addTraining}/>

                <Button
                    raised
                    borderRadius={4}
                    title={'AGREGAR PLAN ALIMENTICIO'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.addPlan}/>
            </View>
        );
    }
}

export default connect(null)(TraineeSummary);
