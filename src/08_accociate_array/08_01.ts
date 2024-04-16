// types:

export type UserType = {
  id: number
  name: string
}

export type UserSType = {
  [key: string]: UserType
}


// test 1:
export const transformArray = (users: UserType[]) => {
  let usersObj: UserSType = {};

  for (let user of users) {
    usersObj[user.id] = user;
  }

  return usersObj;
}

// test 2: should be update corresponding user
export const updateUser = (user: UserType, name: string) => {
  user.name = name;
  return user.name;
}
