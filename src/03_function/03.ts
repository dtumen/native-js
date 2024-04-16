import { student } from '../02_objects/02';
import { StudentType } from '../02_objects/02';

const sum = (a: number, b: number) => {
	return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
	student.technologies.push({
		id: new Date().getTime(),
		title: skill,
	});
};

export function makeStudentActive(student: StudentType) {
	student.isActive = true;
}
