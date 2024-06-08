export type IngredientTypes = {
    title: string
    amount: number
}

export type FavoriteDishType = {
    title: string
    ingredients?: IngredientTypes[]
}

export type ParentType = {
    name: string
    age: number
    favoriteDish?: FavoriteDishType
}

export type WorkType = {
    position: string
    experience: number
}

export type MotherOfType = {
    name: string
    age: number
    work?: WorkType
    parents?: ParentType[]
}

export type PeopleType = {
    name: string
    age: number
}

export type ManOfType = {
    name: string
    age: 28
    mother?: MotherOfType
    friends?: PeopleType[]
}

export type ManWithFriendType = {
    name: string
    age: number
    friends: string[]
}

// 1:
export const getCopyOfMan = (manObj: ManOfType) => {
    return {
        ...manObj
    }
}

// 2:
export const getCopyNumbers = (numbers: number[]) => {
    return [...numbers];
}

// 3:
export const getCopyManWithMother = (manObj: ManOfType) => {
    return {
        ...manObj,
        mother: { ...manObj.mother }
    }
}

// 4:
export const getCopyOfManWithFriends = (manObj:ManWithFriendType) => {
    return {
        ...manObj,
        friends: [...manObj.friends]
    }
}

// 5:
export const getCopyPeople = (people: PeopleType[]) => {
    return people.map((man: PeopleType) => ({...man}));
}

// 6:
export const getCopyUser = (user: ManOfType) => {
    return {
        ...user,
        friends: user.friends?.map((f: PeopleType) => ({...f}))
    }
}

// 7:
export const getFullCopyUser = (man: ManOfType) => {
    return {
        ...man,
        mother: {
            ...man.mother,
            work: {
                ...man.mother?.work
            }
        }
    }
}

// 8:
export const getCopyUserWithParents = (man: ManOfType) => {
    return {
        ...man,
        mother: {
            ...man.mother,
            work: {
                ...man.mother?.work
            },
            parents: man.mother?.parents?.map(p => ({...p}))
        }
    }
}

// 9:
export const getCopyUserWithParentsNew = (man: ManOfType) => {
    return {
        ...man,
        mother: {
            ...man.mother,
            work: {
                ...man.mother?.work
            },
            parents: man.mother?.parents?.map((p: ParentType) => ({...p, favoriteDish: {...p.favoriteDish}}))
        }
    }
}

// 10:
export const getFullCopy = (man: ManOfType) => {
    return {
        ...man,
        mother: {
            ...man.mother,
            work: { ...man.mother?.work },
            parents: man.mother?.parents?.map((p: ParentType) => ({
                ...p,
                favoriteDish: {
                    ...p.favoriteDish,
                    ingredients: p.favoriteDish?.ingredients?.map((d: IngredientTypes) => ({...d}))
                }
            }))
        }
    }
}