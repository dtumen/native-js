export type UserType2 = {
    name: string
    age: number
    hair: number
    address: {
        city: string
        house: string
    }
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

export function increaseAge(u: UserType2) {
    const copyUser = {
        ...u,
        age: u.age + 1,
    }

    return copyUser;
}

export function getHairCut(u: UserType2, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }

    return copy;
}

export function moveUser(u: UserType2, cityName: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            city: cityName,
        }
    }

    return copy;
}

export function changeLaptop(u: UserWithLaptopType, laptopModel: string) {
    const copy = {
        ...u,
        laptop: {
            ...u.laptop,
            model: laptopModel,
        }
    }

    return copy;
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

export type CompanyType = {
    id: number
    title: string
}

export type UserCompaniesType = {
    [key: string]: CompanyType[]
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