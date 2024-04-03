import { transformator, ManType, greetingMessage } from './05_01';

let people: Array<ManType> = [];

beforeEach(() => {
	people = [
		{ name: 'Tumen Dambaev', age: 27 },
		{ name: 'Aldar Shirapoff', age: 33 },
		{ name: 'Serena Samuu', age: 8 },
	];
});

test('get developers', () => {
	let result = people.map((man) => transformator(man));

	expect(result.length).toBe(3);
	expect(result[0].firstName).toBe('Tumen');
});

test('should get array of greeting messages', () => {
  let result = people.map((man) => greetingMessage(man));

  expect(result.length).toBe(3);
  expect(result[0]).toBe('Hello Tumen! How are you?')
  expect(result[1]).toBe('Hello Aldar! How are you?')
  expect(result[2]).toBe('Hello Serena! How are you?')
});
