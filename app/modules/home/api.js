/*jshint esversion: 6 */

import { auth, database, provider } from "../../config/firebase";


export function addTrainee(userId, student, callback) {
	console.log('Adding user id ', userId);
	console.log('With student ', student);
	let currentUser = auth.currentUser;
	let userData = database.ref('users').child(currentUser.uid);
	if (userData.students) {
		console.log(userData.students, 'Studeeents');

	}else {
		let students = [];
		students.push(student);
		userData.update({
			students: student
		}).then(function() {
			console.log('Added student');
		}).catch(function(err){
			console.log(err);
		});
		// Doesnt have students
	}
	// let students = database.ref('users').child(currentUser.uid);
	// console.log(students, 'students');
}

