import { UserSType, UserType, transformArray, updateUser } from './08_01'

test('should return accociate array', () => {
  let users: UserType[] = [
    { id: 101, name: 'Tumen' },
    { id: 3232332, name: 'Aldar' },
    { id: 123123, name: 'Starik' },
    { id: 1, name: 'Motya' },
  ];

  let result: UserSType = {
    '101': { id: 101, name: 'Tumen' },
    '3232332': { id: 3232332, name: 'Aldar' },
    '123123': { id: 123123, name: 'Starik' },
    '1': { id: 1, name: 'Motya' },
  };

  expect(transformArray(users)).toEqual(result);
  expect(transformArray(users)['101'].name).toBe('Tumen');
})

let users: UserSType;

beforeEach(() => {
  users = {
    '101': { id: 101, name: 'Tumen' },
    '3232332': { id: 3232332, name: 'Aldar' },
    '123123': { id: 123123, name: 'Starik' },
    '1': { id: 1, name: 'Motya' },
  };
});

test('should be update corresponding user', () => {
  let user = users['1'];

  expect(updateUser(user, 'Sasha')).toBe('Sasha')
  expect(user.name).toBe('Sasha');
})

test('should be delete user', () => {
  delete users['1'];

  expect(users['1']).toBeUndefined();
})