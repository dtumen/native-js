
// 1. Types:
type AdressType = {
    city: string
    house: string
}

export type UserType2 = {
    name: string
    age: number
    hair: number
    address: AdressType
}

export type LaptopType = {
    model: string
}

export type UserWithLaptopType = UserType2 & {
    laptop: LaptopType
}

export type UserWithBookType = UserType2 & {
    books: string[]
}

export type SkillsType = {
    skill: string
    level: number
}

export type UserWithSkillsType = UserType2 & {
    skills: SkillsType[]
}

export type CompanyType = {
    id: number
    title: string
}

export type UserCompaniesType = {
    [key: string]: CompanyType[]
}

// 2. Functions:
export function increaseAge(u: UserType2) {
    return {
        ...u,
        age: u.age + 1,
    }
}

export function getHairCut(u: UserType2, power: number) {
    return {
        ...u,
        hair: u.hair / power,
    }
}

export function moveUser(u: UserType2, cityName: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: cityName,
        }
    }
}

export function changeLaptop(u: UserWithLaptopType, laptopModel: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            model: laptopModel,
        }
    }
}

export function updateBook(u: UserWithBookType & UserWithLaptopType, book: string, newBook: string) {
    return {
        ...u,
        books: u.books.map((b: string) => b === book ? newBook : b)
    }
}

export function removeBook(u: UserWithBookType & UserWithLaptopType, removeBook: string) {
    return {
        ...u,
        books: u.books.filter((b: string) => b !== removeBook),
    }
}

export function updateSkills(u: UserWithSkillsType & UserWithBookType & UserWithLaptopType, skill: string, newLevel: number) {
    return {
        ...u,
        skills: u.skills.map((s: SkillsType) => s.skill === skill
            ? {...s, level: newLevel}
            : s)
    }
}
export const updateCompany = (users: UserCompaniesType,
                              userName: string,
                              idCompany: number,
                              titleValue: string) => {

    let usersCopies: UserCompaniesType = {...users};

    usersCopies[userName] = usersCopies[userName].map((c: CompanyType) =>
        c.id === idCompany
        ? {...c, title: titleValue}
        : c)

    return usersCopies;
}

// 3. Practice:

type TeacherType = {
    teacher: {
        name: string
        age: number
    }
}

export type ObjectType = {
    name: string
    protocol: string
    maxStudentsCount: number
    isOnline: boolean
    students: string[]
    classroom: TeacherType
}
export const getCopyObject = (obj: ObjectType) => {
    return {
        ...obj,
        students: [...obj.students],
        classroom: {
            ...obj.classroom,
            teacher: {
                ...obj.classroom.teacher
            }
        }
    }
}

