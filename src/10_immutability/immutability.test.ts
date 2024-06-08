import {
    changeLaptop, getCopyObject,
    getHairCut,
    increaseAge,
    moveUser, ObjectType, removeBook, updateBook, updateCompany, updateSkills, UserCompaniesType,
    UserType2,
    UserWithBookType,
    UserWithLaptopType, UserWithSkillsType
} from './immutability';


test('reference type test', () => {
    let user: UserType2 = {
        name: 'Tumen',
        age: 27,
        hair: 32,
        address: {
            city: 'Belgrade',
            house: '56',
        }
    }

    const result = increaseAge(user);
    expect(user.age).toBe(27);
    expect(result.age).toBe(28);

    expect(user.hair).toBe(32);
    const awesomeUser = getHairCut(user, 2);
    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(user).not.toBe(awesomeUser);
    expect(user.address).toBe(awesomeUser.address);
})

test('change address', () => {
    let user: UserType2 = {
        name: 'Tumen',
        age: 27,
        hair: 32,
        address: {
            city: 'Belgrade',
            house: '56'
        }
    }

    const result = moveUser(user, 'Kiev');

    expect(user).not.toBe(result);
    expect(user.address).not.toBe(result.address);
    expect(user.address.city).toBe('Belgrade');
    expect(result.address.city).toBe('Kiev');
})

test('change laptop', () => {
    let user: UserWithLaptopType = {
        name: 'Tumen',
        age: 27,
        hair: 32,
        address: {
            city: 'Belgrade',
            house: '56'
        },
        laptop: {
            model: 'Macbook',
        }
    }

    const result = changeLaptop(user, 'MSI');

    expect(user).not.toBe(result);
    expect(user.address).toBe(result.address);
    expect(user.address.city).toBe(result.address.city);
    expect(user.laptop).not.toBe(result.laptop);
    expect(result.laptop.model).toBe('MSI');
})


test('change js to ts', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Tumen',
        age: 27,
        hair: 32,
        address: {
            city: 'Belgrade',
            house: '56'
        },
        laptop: {
            model: 'Macbook',
        },
        books: ['html', 'css', 'js', 'react'],
    }

    const result = updateBook(user, 'js', 'TypeScript');

    expect(user).not.toBe(result);
    expect(user.address).toBe(result.address);
    expect(user.laptop).toBe(result.laptop);
    expect(user.books).not.toBe(result.books);
    expect(result.books).toContain('TypeScript');
    expect(user.books).toContain('js');
})

test('remove react book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Tumen',
        age: 27,
        hair: 32,
        address: {
            city: 'Belgrade',
            house: '56'
        },
        laptop: {
            model: 'Macbook',
        },
        books: ['html', 'css', 'js', 'react'],
    }

    const result = removeBook(user, 'react');

    expect(user).not.toBe(result);
    expect(user.address).toBe(result.address);
    expect(user.laptop).toBe(result.laptop);
    expect(user.books).not.toBe(result.books);
    expect(result.books).not.toContain('react');
    expect(result.books.length).toBe(3);
    expect(user.books.length).toBe(4);
})

test('update skills', () => {
    let user: UserWithSkillsType & UserWithLaptopType & UserWithBookType = {
        name: 'Tumen',
        age: 27,
        hair: 32,
        address: {
            city: 'Belgrade',
            house: '56'
        },
        laptop: {
            model: 'Macbook',
        },
        books: ['html', 'css', 'js', 'react'],
        skills: [
            {
                skill: 'JavaScript',
                level: 50,
            },
            {
                skill: 'TypeScript',
                level: 20,
            },
            {
                skill: 'React',
                level: 50,
            },
        ]
    }

    const result = updateSkills(user, 'React', 51);

    expect(user).not.toBe(result);
    expect(user.address).toBe(result.address);
    expect(user.laptop).toBe(result.laptop);
    expect(user.books).toBe(result.books);
    expect(user.skills).not.toBe(result.skills);
    expect(result.skills[2].level).toBe(51);
    expect(user.skills[2].level).toBe(50);
})

test('update company', () => {
    let companies: UserCompaniesType = {
        'Aldar': [
            {
                id: 1,
                title: 'MGU'
            },
            {
                id: 2,
                title: 'HdRezka',
            }
        ],
        'Aleksandra': [
            {
                id: 1,
                title: 'Nalogovaya',
            },
            {
                id: 2,
                title: 'Masmi',
            }
        ]
    };

    const ALDAR = 'Aldar';
    const result = updateCompany(companies, ALDAR, 2, 'PFR');

    expect(result[ALDAR]).not.toBe(companies[ALDAR]);
    expect(result[ALDAR][1].title).toBe('PFR');
})

// practice:
test('', () => {
    let a: ObjectType = {
        name: 'it-kamasutra.com',
        protocol: 'https',
        maxStudentsCount: 10,
        isOnline: true,
        students: ['Ivan', 'Andrey', 'Farid'],
        classroom: {
            teacher: {
                name: 'Veronica',
                age: 27,
            }
        }
    }

    const result = getCopyObject(a);

    expect(result).not.toBe(a);
    expect(result.students).not.toBe(a.students);
    expect(result.classroom).not.toBe(a.classroom);
})