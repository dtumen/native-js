import {addUser, changeAge} from './09_01';

export type UserType = {
	name: string;
	age: number;
};

test('reference type test', () => {
	let user: UserType = {
		name: 'Tumen',
		age: 27,
	};

	expect(user.age).toBe(27);
	changeAge(user);
	expect(user.age).toBe(28);
});

test('add new user in array', () => {
	let users: UserType[] = [
		{
			name: 'Tumen',
			age: 27,
		},
    {
			name: 'Serena',
			age: 29,
		},
	];

  let admins = users;

  addUser(admins, { name: 'Aldar', age: 30 });

  expect(users.length).toBe(3);
  expect(users[2]).toEqual({ name: 'Aldar', age: 30 })
});
