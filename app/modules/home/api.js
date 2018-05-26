
import { auth, database, provider } from "../../config/firebase";


export async function addTrainee(userId, student, callback) {
	console.log('Adding user id ', userId);
	console.log('With student ', student);
	let currentUser = auth.currentUser;
	let userData = database.ref('users').child(currentUser.uid);

	// Check if user exists
	let snapshot= await database.ref('users').once('value');
	if (!snapshot.hasChild(student)) {
		// User doesn't exist
		console.log('User doesn\'t exist');
		alert('El usuario ingresado no existe');
		return;
	}
	snapshot = await userData.once('value');
	let students = snapshot.val().students;
	console.log('sutdents of trainer: ', students);
	if (students) {
		if (students.includes(student)) {
			alert('El usuario ya existe en su lista de estudiantes');
			return;
		}
		students.push(student);
		userData.update({
			students: students
		}).then(function() {
			alert('El usuario ha sido agregado con éxito');
			console.log('Added student');
		}).catch(function(err){
			console.log(err);
		});

	} else {
		// Doesnt have students
		let studentsList = [];
		studentsList.push(student);
		userData.update({
			students: studentsList
		}).then(function() {
			alert('El usuario ha sido agregado con éxito');
			console.log('Added student');
		}).catch(function(err){
			console.log(err);
		});
		
	}
	// let students = database.ref('users').child(currentUser.uid);
	// console.log(students, 'students');
}

