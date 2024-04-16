import { StudentType } from '../02_objects/02';
import { addSkill, makeStudentActive } from './03';

let student: StudentType;
beforeEach(() => {
	student = {
		id: 1,
		name: 'Tumen',
		age: 27,
		isActive: false,
		address: {
			streetTitle: 'Fomichevoy',
			city: {
				title: 'Moscow',
				countryTitle: 'Russia',
			},
		},
		technologies: [
			{
				id: 1,
				title: 'HTML',
			},
			{
				id: 2,
				title: 'CSS',
			},
			{
				id: 3,
				title: 'React',
			},
		],
	};
});

test('new tech skill should be added to student', () => {
	expect(student.technologies.length).toBe(3);
	addSkill(student, 'JS');
	expect(student.technologies.length).toBe(4);
	expect(student.technologies[3].title).toBe('JS');
	expect(student.technologies[3].id).toBeDefined();
});

test('student should be made active', () => {
	expect(student.isActive).toBeFalsy();
	makeStudentActive(student);
	expect(student.isActive).toBeTruthy();
});
