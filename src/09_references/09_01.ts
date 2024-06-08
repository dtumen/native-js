
// мутабельная функция объекта:
import {UserType} from './09_01.test';

export function changeAge(u: UserType) {
  u.age++;
}

export function addUser(u: UserType[], newUser: UserType) {
  u.push(newUser);
}