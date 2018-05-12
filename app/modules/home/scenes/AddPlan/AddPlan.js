import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import {Button, ButtonGroup, List, ListItem, Icon, Divider, CheckBox, FormLabel, FormInput} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
const { signOut } = auth;

const { color } = theme;

class AddPlan extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pname: '',
            pdescription: ''
        }

        this.goHome = this.goHome.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    goHome() {
        console.log('plans before', this.props.plans);
        // send data here to firebase
        var currentPlans = this.props.plans;
        var newPlan = {
            pname: this.state.pname,
            pdescription: this.state.pdescription
        }
        currentPlans.push(newPlan)
        console.log('plans', currentPlans);
        Actions.Home();
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Nombre del plan</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ pname: value })}/>

                <FormLabel>Descripción</FormLabel>
                <FormInput onChangeText={(value) => this.setState({ pdescription: value })}/>

                <Button
                    raised
                    borderRadius={4}
                    title={'AGREGAR PLAN'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.goHome}/>
            </View>
        );
    }
}

export default connect(null)(AddPlan);
