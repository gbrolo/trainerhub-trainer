/*jshint esversion: 6 */

import { AsyncStorage } from 'react-native';

import * as t from './actionTypes';

let initialState = { user: null, studentList: []};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.ADD_STUDENT:
            let newState = Object.assign({}, state);
            newState.studentList.push(action.student);
            return newState;
        default:
            return state;
    }
};

export default homeReducer;