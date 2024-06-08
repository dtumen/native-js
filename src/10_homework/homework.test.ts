import {
    getCopyManWithMother,
    getCopyNumbers,
    getCopyOfMan,
    getCopyOfManWithFriends,
    getCopyPeople,
    getCopyUser,
    getCopyUserWithParents,
    getCopyUserWithParentsNew, getFullCopy,
    getFullCopyUser,
    ManOfType, ManWithFriendType,
    PeopleType
} from './homework';

describe('deep_copy practice', () => {
    // 1:
    test('copy man', () => {
        let man: ManOfType = {
            name: 'John',
            age: 28
        };

        const copy = getCopyOfMan(man);

        expect(copy).not.toBe(man);
        expect(copy.name).toBe(man.name);
    })
    // 2:
    test('to copy array of primitives', () => {
        let numbers = [1, 2, 3];

        const numbersFullCopy = getCopyNumbers(numbers);

        expect(numbersFullCopy).not.toBe(numbers);
        expect(numbersFullCopy[1]).toBe(numbers[1]);
    })

    // 3:
    test('to copy Object inside an object', () => {
        let man1: ManOfType = {
            name: 'John',
            age: 28,
            mother: {
                name: 'Kate',
                age: 50
            }
        };

        const man1FullCopy = getCopyManWithMother(man1);

        expect(man1FullCopy).not.toBe(man1);
        expect(man1FullCopy.mother).not.toBe(man1.mother);
    })

    // 4:
    test('to copy array of primitives inside an object', () => {
        let man2: ManWithFriendType = {
            name: 'John',
            age: 28,
            friends: ["Peter", "Steven", "William"]
        };

        const copyMan = getCopyOfManWithFriends(man2);

        expect(copyMan).not.toBe(man2);
        expect(copyMan.friends).not.toBe(man2.friends);
    })

    // 5:
    test('to copy Array of objects', () => {
        let people: PeopleType[] = [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ];

        const copyPeople = getCopyPeople(people);

        expect(copyPeople).not.toBe(people);
        expect(copyPeople.length).toBe(3);
        expect(people.length).toBe(3);
    })

    // 6:
    test('to copy Array of objects inside object', () => {
        let man3: ManOfType = {
            name: 'John',
            age: 28,
            friends: [
                {name: "Peter", age: 30},
                {name: "Steven", age: 32},
                {name: "William", age: 28}
            ]
        };

        const copyUser = getCopyUser(man3);

        expect(copyUser).not.toBe(man3);
        expect(copyUser.friends).not.toBe(man3.friends);
        expect(copyUser.friends?.length).toBe(3);
        expect(man3.friends?.length).toBe(3);
    })

    // 7:
    test('Object inside an object, inside an object', () => {
        let man4: ManOfType = {
            name: 'John',
            age: 28,
            mother: {
                name: "Kate",
                age: 50,
                work: {
                    position: "doctor",
                    experience: 15
                }
            }
        };

        const fullCopyOfUser = getFullCopyUser(man4);

        expect(fullCopyOfUser).not.toBe(man4);
        expect(fullCopyOfUser.mother).not.toBe(man4.mother);
        expect(fullCopyOfUser.mother.work).not.toBe(man4.mother?.work);
    })

    // 8:
    test('Array of objects inside object -> object', () => {
        let man5: ManOfType = {
            name: 'John',
            age: 28,
            mother: {
                name: "Kate",
                age: 50,
                work: {
                    position: "doctor",
                    experience: 15
                },
                parents: [
                    {name: "Kevin", age: 80},
                    {name: "Jennifer", age: 78},
                ]
            }
        };

        const fullCopyOfUser = getCopyUserWithParents(man5);

        expect(fullCopyOfUser).not.toBe(man5);
        expect(fullCopyOfUser.mother).not.toBe(man5.mother);
        expect(fullCopyOfUser.mother.work).not.toBe(man5.mother?.work);
        expect(fullCopyOfUser.mother.parents).not.toBe(man5.mother?.parents);
    })

    // 9:
    test('Object inside an object -> array -> object ->  object', () => {
        let man6: ManOfType = {
            name: 'John',
            age: 28,
            mother: {
                name: "Kate",
                age: 50,
                work: {
                    position: "doctor",
                    experience: 15
                },
                parents: [
                    {
                        name: "Kevin",
                        age: 80,
                        favoriteDish: {
                            title: "borscht"
                        }
                    },
                    {
                        name: "Jennifer",
                        age: 78,
                        favoriteDish: {
                            title: "sushi"
                        }
                    },
                ]
            }
        };

        const fullCopyOfUser = getCopyUserWithParentsNew(man6);

        expect(fullCopyOfUser).not.toBe(man6);
        expect(fullCopyOfUser.mother).not.toBe(man6.mother);
        expect(fullCopyOfUser.mother.work).not.toBe(man6.mother?.work);
        expect(fullCopyOfUser.mother.parents).not.toBe(man6.mother?.parents);
    })

    // 10:
    test('Array of objects inside an object -> object -> array -> object ->  object', () => {
        let man7: ManOfType = {
            name: 'John',
            age: 28,
            mother: {
                name: "Kate",
                age: 50,
                work: {
                    position: "doctor",
                    experience: 15
                },
                parents: [
                    {
                        name: "Kevin",
                        age: 80,
                        favoriteDish: {
                            title: "borscht",
                            ingredients: [
                                {title: "beet", amount: 3},
                                {title: "potatoes", amount: 5},
                                {title: "carrot", amount: 1},
                            ]
                        }
                    },
                    {
                        name: "Jennifer",
                        age: 78,
                        favoriteDish: {
                            title: "sushi",
                            ingredients: [
                                {title: "fish", amount: 1},
                                {title: "rise", amount: 0.5}
                            ]
                        }
                    },
                ]
            }
        };

        const fullCopyOfUser = getFullCopy(man7);

        expect(fullCopyOfUser).not.toBe(man7);
        expect(fullCopyOfUser.mother).not.toBe(man7.mother);
        expect(fullCopyOfUser.mother.work).not.toBe(man7.mother?.work);
        expect(fullCopyOfUser.mother.parents).not.toBe(man7.mother?.parents);
    })
})
