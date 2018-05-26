import React from 'react';
var { View, StyleSheet, Alert } = require('react-native');

import {Button, ButtonGroup, List, ListItem} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
import { database, provider } from "../../../../config/firebase";
const { signOut } = auth;

const { color } = theme;

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            traineeList: [
                {
                    uid: 'jmYobAHo9TfKq8LzkJFkoS3X1eQ2',
                    username: 'Trainee 1',
                    age: 21,
                    height: 175,
                    weight: 140.5,
                    trainings: [
                        {
                          tname: 'Abdominales',
                          tdailyDuration: 5,
                          tcomments: '',
                          treps: 20,
                          tsets: 2
                        }
                    ],
                    plans: [
                        {
                          pname: 'Proteina',
                          pdescription: ''
                        }
                    ]
                },
                {
                    uid: 'g9nvGTN3DKdwEQZqVOQ56f3zCaD3',
                    username: 'Trainee 40',
                    age: 35,
                    height: 187,
                    weight: 198,
                    trainings: []
                }
            ]
        }
        this.onSignOut = this.onSignOut.bind(this);
        this.showTraineeSummary = this.showTraineeSummary.bind(this);
    }

    async componentDidMount() {
        console.log('mounted');
        let value = await AsyncStorage.getItem('user');
        let currentUser = JSON.parse(value);
        let userData = database.ref('users').child(currentUser.uid);
        let snapshot = await userData.once('value');
        let students = snapshot.val().students;
        let traineeList = [];
        for (i = students.length - 1; i >= 0; --i) {
            let studentData = database.ref('users').child(students[i]);
            let studentVal = await studentData.once('value');
            let student = studentVal.val();
            traineeList.push(student);
        }
        this.setState({
            traineeList: traineeList
        });
    }

    componentDidUpdate() {
        console.log('updating');
    }

    onSignOut() {
        this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
        Actions.reset("Auth")
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

    showTraineeSummary(traineeInfo) {
        console.log('traineeInfo from Home', traineeInfo);
        Actions.TraineeSummary({ traineeInfo: traineeInfo });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabbar}>
                    <ButtonGroup
                        buttons={['MIS ATLETAS', 'AGREGAR ATLETA']}
                        containerStyle={styles.buttonTabBar}
                        selectedIndex={0}
                        onPress={this.onChangeScreen}
                        textStyle={styles.buttonTextTabBar}
                        containerBorderRadius={0}
                        innerBorderStyle={{borderStyle: "hidden"}}
                        selectedButtonStyle={{backgroundColor: "#2c3847"}}
                        selectedTextStyle={{color: "#f4d942"}}/>
                </View>

                <List containerStyle={styles.traineeList}>
                    {
                        this.state.traineeList.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.username}
                                titleStyle={styles.traineeListTitle}
                                style={styles.traineeListOverrideBorder}
                                onPress={() => this.showTraineeSummary(l)}
                            />
                        ))
                    }
                </List>

                <Button
                    raised
                    borderRadius={4}
                    title={'CERRAR SESIÓN'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut}/>
            </View>
        );
    }
}

export default connect(null, { signOut })(Home);
