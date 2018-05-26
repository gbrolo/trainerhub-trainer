/*jshint esversion: 6 */

import * as t from './actionTypes';
import * as api from './api';
import { auth, database} from "../../config/firebase";

import { AsyncStorage } from 'react-native';




export function addTrainee(userId, student, successCB, errorCB) {
    return (dispatch) => {
    	api.addTrainee(userId, student, (success, data, error) => {
    		console.log('pase');
    	});
    };
}
